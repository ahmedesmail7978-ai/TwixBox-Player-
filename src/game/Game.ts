import * as THREE from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js'
import { buildMap, collideMove, groundSupport, type MapData } from './map'
import { BOT_NAMES, getLang, t } from './i18n'
import { gameplayStart, gameplayStop } from './yandex'
import { Bot, type BotHooks } from './bots'
import { SFX } from './audio'

export interface HudData {
  hp: number; armor: number; mag: number; res: number; nades: number
  timer: number; spreadPx: number; enemies: number; reloading: boolean
  weapon: string; melee: boolean
}
export interface FeedEntry { id: number; killer: string; victim: string; head: boolean; byPlayer: boolean }
export interface BannerData { title: string; sub?: string; tone: 'win' | 'lose' | 'info' }
export interface OverData { result: 'victory' | 'defeat'; kills: number; deaths: number; won: number; lost: number }
export interface RadarData { px: number; pz: number; yaw: number; dots: { x: number; z: number }[] }
export interface WheelItem { id: WeaponId; name: string; short: string; cat: string }
export interface WheelState { items: WheelItem[]; active: number }

export interface GameHooks {
  wheel(w: WheelState | null): void
  hud(h: HudData): void
  score(a: number, b: number): void
  kills(k: number): void
  hitmark(kind: 'hit' | 'head' | 'kill'): void
  damage(amount: number, relAngle: number): void
  feed(e: Omit<FeedEntry, 'id'>): void
  banner(b: BannerData): void
  radar(d: RadarData): void
  over(o: OverData): void
  lockedChange(locked: boolean): void
  scoped(s: boolean): void
}

type State = 'attract' | 'playing' | 'roundEnd' | 'dying' | 'paused'

/* имена ботов — из локали */
const NAMES = () => BOT_NAMES[getLang()]
const ROUND_TIME = 115
const WINS_NEEDED = 3

export const IS_TOUCH =
  typeof window !== 'undefined' &&
  (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window)

/* детект старых/слабых GPU (Intel HD Graphics 2000–6000, софтверные растеризаторы) */
function detectWeakGPU(): boolean {
  try {
    const cv = document.createElement('canvas')
    const gl = (cv.getContext('webgl') || cv.getContext('experimental-webgl')) as WebGLRenderingContext | null
    if (!gl) return true
    const ext = gl.getExtension('WEBGL_debug_renderer_info')
    if (!ext) return false
    const r = String(gl.getParameter(ext.UNMASKED_RENDERER_WEBGL)).toLowerCase()
    const v = String(gl.getParameter(ext.UNMASKED_VENDOR_WEBGL)).toLowerCase()
    const s = r + ' ' + v
    if (/swiftshader|llvmpipe|mesa/.test(s)) return true
    return /intel/.test(s) && /hd graphics/.test(s) && !/uhd|iris/.test(s)
  } catch {
    return false
  }
}
export const LOW_GPU = detectWeakGPU()
export const PERF_LOW = IS_TOUCH || LOW_GPU

export type WeaponId = 'ak' | 'awp' | 'deagle' | 'p90' | 'uzi' | 'knife'

export type SoundKind = 'pistol' | 'smg' | 'rifle' | 'sniper' | 'knife'

export interface GunSpec {
  body: [number, number, number]       // приёмник: ширина, высота, длина
  bodyMat: 'metal' | 'poly' | 'wood'
  bodyColor: number
  barrelLen: number; barrelR: number; barrelY?: number
  handguard?: [number, number, number]; handguardMat?: 'wood' | 'poly'
  stock?: { l: number; drop: number; mat: 'wood' | 'poly'; color: number }
  scope?: { len: number; r: number; zoom: number }
  mag?: { w: number; h: number; d: number; tilt: number; x?: number; y?: number; z?: number }
  grip?: boolean
  gasTube?: boolean
  boltHandle?: boolean
  bipod?: boolean
  serrations?: boolean
  topMag?: boolean
  bullpup?: boolean
  muzzle?: { len: number; r: number }
  pistol?: boolean
  slideColor?: number
  melee?: boolean
  blade?: { len: number; w: number }
}

interface WeaponDef {
  name: string; short: string; cat: string
  dmg: number; cd: number; mag: number; res: number
  auto: boolean; reload: number; recoil: number; recoilYaw: number
  kick: number; base: number; grow: number; movePen: number; recover: number
  speed: number; reward: number; sound: SoundKind; melee?: boolean; gun: GunSpec
}

const WEAPONS: Record<WeaponId, WeaponDef> = {
  ak: {
    name: 'AK-47', short: 'AK-47', cat: 'Винтовка', dmg: 27, cd: 0.096, mag: 30, res: 90,
    auto: true, reload: 2.5, recoil: 0.013, recoilYaw: 0.008, kick: 0.16, base: 0.0035, grow: 0.02,
    movePen: 0.006, recover: 4.2, speed: 1.0, reward: 300, sound: 'rifle',
    gun: {
      body: [0.072, 0.092, 0.5], bodyMat: 'metal', bodyColor: 0x3a3d42,
      barrelLen: 0.3, barrelR: 0.016, barrelY: 0.022,
      handguard: [0.066, 0.07, 0.24], handguardMat: 'wood',
      stock: { l: 0.24, drop: 0.02, mat: 'wood', color: 0x8a5a2c },
      mag: { w: 0.056, h: 0.2, d: 0.1, tilt: 0.24, z: 0.04 },
      grip: true, gasTube: true, muzzle: { len: 0.07, r: 0.02 },
    },
  },
  awp: {
    name: 'AWP', short: 'AWP', cat: 'Снайперка', dmg: 115, cd: 1.35, mag: 5, res: 30,
    auto: false, reload: 3.7, recoil: 0.09, recoilYaw: 0.004, kick: 0.05, base: 0.0012, grow: 0.03,
    movePen: 0, recover: 1.1, speed: 0.88, reward: 100, sound: 'sniper',
    gun: {
      body: [0.06, 0.088, 0.6], bodyMat: 'poly', bodyColor: 0x4a563f,
      barrelLen: 0.5, barrelR: 0.014, barrelY: 0.015,
      stock: { l: 0.26, drop: 0.035, mat: 'poly', color: 0x4a563f },
      scope: { len: 0.26, r: 0.03, zoom: 4 },
      mag: { w: 0.05, h: 0.11, d: 0.08, tilt: 0.08, z: 0.02 },
      grip: true, bipod: true, boltHandle: true, muzzle: { len: 0.1, r: 0.024 },
    },
  },
  deagle: {
    name: 'Desert Eagle', short: 'DEAGLE', cat: 'Пистолет', dmg: 53, cd: 0.24, mag: 7, res: 35,
    auto: false, reload: 2.2, recoil: 0.038, recoilYaw: 0.006, kick: 0.1, base: 0.004, grow: 0.05,
    movePen: 0.035, recover: 2.4, speed: 1.02, reward: 300, sound: 'pistol',
    gun: {
      body: [0.046, 0.05, 0.26], bodyMat: 'metal', bodyColor: 0x9ba1a8,
      barrelLen: 0.05, barrelR: 0.013, barrelY: 0.02,
      pistol: true, slideColor: 0xc9ced4, serrations: true,
      mag: { w: 0.04, h: 0.02, d: 0.06, tilt: -0.22, z: 0.1 },
    },
  },
  uzi: {
    name: 'UZI', short: 'UZI', cat: 'ПП', dmg: 13, cd: 0.072, mag: 32, res: 128,
    auto: true, reload: 2.6, recoil: 0.01, recoilYaw: 0.009, kick: 0.075, base: 0.0055, grow: 0.02,
    movePen: 0.015, recover: 3.6, speed: 1.05, reward: 600, sound: 'smg',
    gun: {
      body: [0.06, 0.082, 0.36], bodyMat: 'metal', bodyColor: 0x33363b,
      barrelLen: 0.13, barrelR: 0.011, barrelY: 0.024,
      mag: { w: 0.046, h: 0.17, d: 0.07, tilt: 0, z: 0.02 },
      stock: { l: 0.2, drop: -0.028, mat: 'poly', color: 0x23262b },
      boltHandle: true, muzzle: { len: 0.06, r: 0.017 },
    },
  },
  p90: {
    name: 'P90', short: 'P90', cat: 'ПП', dmg: 14, cd: 0.066, mag: 50, res: 100,
    auto: true, reload: 3.3, recoil: 0.008, recoilYaw: 0.007, kick: 0.07, base: 0.005, grow: 0.016,
    movePen: 0.013, recover: 3.8, speed: 1.04, reward: 600, sound: 'smg',
    gun: {
      body: [0.068, 0.11, 0.5], bodyMat: 'poly', bodyColor: 0x5d6844,
      barrelLen: 0.14, barrelR: 0.012, barrelY: 0.005,
      bullpup: true, topMag: true, muzzle: { len: 0.05, r: 0.02 },
    },
  },
  knife: {
    name: 'M48 Tomahawk', short: 'НОЖ', cat: 'Ближний бой', dmg: 60, cd: 0.45, mag: 0, res: 0,
    auto: true, reload: 0, recoil: 0, recoilYaw: 0, kick: 0.05, base: 0, grow: 0,
    movePen: 0, recover: 5, speed: 1.06, reward: 1500, sound: 'knife', melee: true,
    gun: {
      body: [0.026, 0.03, 0.13], bodyMat: 'poly', bodyColor: 0x33383e,
      barrelLen: 0, barrelR: 0, blade: { len: 0.17, w: 0.036 },
    },
  },
}

export const WEAPON_ORDER: WeaponId[] = ['ak', 'uzi', 'p90', 'awp', 'deagle', 'knife']


interface Particle { m: THREE.Mesh; v: THREE.Vector3; g: number; life: number; max: number }
interface Tracer { m: THREE.Mesh; life: number }
interface Nade { m: THREE.Mesh; v: THREE.Vector3; fuse: number }

export class Game {
  state: State = 'attract'

  private container: HTMLElement
  private hooks: GameHooks
  private renderer: THREE.WebGLRenderer
  private scene = new THREE.Scene()
  private camera: THREE.PerspectiveCamera
  private clock = new THREE.Clock()
  private raf = 0
  private time = 0
  private attractT = 0
  private sfx = new SFX()
  private map: MapData

  // player
  private pos = new THREE.Vector3()
  private vel = new THREE.Vector3()
  private yaw = 0
  private pitch = 0
  private recoilPitch = 0
  private recoilYaw = 0
  private kick = 0
  private spread = 0
  private shake = 0
  private bobT = 0
  private stepAcc = 0
  private onGround = true
  private locked = false
  private hp = 100
  private armor = 0
  private nades = 1
  private reloading = false
  private reloadT = 0
  private reloadTotal = 1.9
  private cooldown = 0
  private firing = false

  // сенсорный ввод (мобильные)
  private joyX = 0
  private joyY = 0
  private lookDX = 0
  private lookDY = 0
  private touchJump = false

  // weapons
  private equipped: WeaponId = 'deagle'
  private ammo: Record<WeaponId, { mag: number; res: number }> = {} as Record<WeaponId, { mag: number; res: number }>
  private scoped = false
  private switchAnim = 1
  private lastCX = 0
  private lastCY = 0
  private mouseInit = false
  private keys: Record<string, boolean> = {}
  private deathT = 0

  // настройки (применяются извне)
  private sens = 1
  private qualitySetting: 'auto' | 'high' | 'low' = 'auto'

  // match
  private round = 0
  private scoreA = 0
  private scoreB = 0
  private kills = 0
  private deaths = 0
  private roundT = ROUND_TIME

  // entities
  private bots: Bot[] = []
  private nadesFly: Nade[] = []
  private particles: Particle[] = []
  private tracers: Tracer[] = []
  private shells: { m: THREE.Mesh; v: THREE.Vector3; rv: THREE.Vector3; life: number }[] = []
  private decals: { m: THREE.Mesh; life: number }[] = []
  private composer: EffectComposer
  private bloomPass: UnrealBloomPass | null = null
  // адаптивное качество: если FPS низкий — дополнительно упрощаем рендер
  private perfFrames = 0
  private perfAcc = 0
  private degraded = false

  // fx objects
  private weapon = new THREE.Group()
  private weaponModels: Record<WeaponId, THREE.Group> = {} as Record<WeaponId, THREE.Group>
  private weaponMuzzles: Record<WeaponId, THREE.Object3D> = {} as Record<WeaponId, THREE.Object3D>
  private wheelOpen = false
  private wheelIndex = 0
  private flash: THREE.Mesh
  private flashT = 0
  private gunLight: THREE.PointLight
  private boomLight: THREE.PointLight
  private boomFlash: THREE.Sprite
  private boomT = 0

  private ray = new THREE.Raycaster()
  private tmpV = new THREE.Vector3()
  private tmpD = new THREE.Vector3()
  private roundTimeout = 0

  constructor(container: HTMLElement, hooks: GameHooks) {
    this.container = container
    this.hooks = hooks

    this.renderer = new THREE.WebGLRenderer({ antialias: !PERF_LOW, powerPreference: 'high-performance' })
    // на слабых GPU (Intel HD 4000 и т.п.) и телефонах снижаем плотность пикселей
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, PERF_LOW ? 1 : 1.75))
    this.renderer.setSize(container.clientWidth, container.clientHeight)
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = PERF_LOW ? THREE.PCFShadowMap : THREE.PCFSoftShadowMap
    container.appendChild(this.renderer.domElement)
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping
    this.renderer.toneMappingExposure = 1.06

    // градиентное небо: тёплый горизонт Dust II -> холодный зенит
    this.scene.background = this.makeSkyTexture()
    this.scene.fog = new THREE.Fog(0xc8bfa8, PERF_LOW ? 34 : 48, PERF_LOW ? 105 : 155)

    this.camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.05, 320)
    this.camera.rotation.order = 'YXZ'
    this.scene.add(this.camera)

    const hemi = new THREE.HemisphereLight(0xcfe2f5, 0x9b8a63, 1.1)
    this.scene.add(hemi)
    const sun = new THREE.DirectionalLight(0xffeccc, 2.6)
    sun.position.set(-39, 57, -27)
    sun.castShadow = true
    sun.shadow.mapSize.set(PERF_LOW ? 1024 : 2048, PERF_LOW ? 1024 : 2048)
    sun.shadow.camera.left = -52
    sun.shadow.camera.right = 52
    sun.shadow.camera.top = 52
    sun.shadow.camera.bottom = -52
    sun.shadow.camera.far = 200
    sun.shadow.bias = -0.0006
    this.scene.add(sun)
    this.scene.add(new THREE.AmbientLight(0x8899aa, 0.4))
    // тёплый свет, отражённый от песка (заполняет тени) — отключаем на слабых GPU
    if (!PERF_LOW) {
      const sandBounce = new THREE.DirectionalLight(0xd9b98a, 0.5)
      sandBounce.position.set(30, 9, 36)
      this.scene.add(sandBounce)
    }

    this.map = buildMap(this.scene, !PERF_LOW)

    // weapon lights
    this.gunLight = new THREE.PointLight(0xffc36b, 0, 9, 2)
    this.gunLight.position.set(0.3, -0.15, -0.7)
    this.camera.add(this.gunLight)
    this.boomLight = new THREE.PointLight(0xff9040, 0, 22, 2)
    this.scene.add(this.boomLight)
    // яркая вспышка взрыва
    this.boomFlash = new THREE.Sprite(new THREE.SpriteMaterial({
      map: this.makeGlowTex(), color: 0xffc890, transparent: true, opacity: 0,
      blending: THREE.AdditiveBlending, depthWrite: false,
    }))
    this.boomFlash.scale.set(9, 9, 1)
    this.scene.add(this.boomFlash)

    this.buildWeapons()
    this.flash = this.buildFlash(0.55)
    this.weaponMuzzles[this.equipped].add(this.flash)

    // pools (на телефонах — меньше объектов)
    for (let i = 0; i < (PERF_LOW ? 10 : 24); i++) {
      const m = new THREE.Mesh(
        new THREE.BoxGeometry(1, 1, 1),
        new THREE.MeshBasicMaterial({ color: 0xffd27a, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false })
      )
      m.visible = false
      this.scene.add(m)
      this.tracers.push({ m, life: 0 })
    }

    // гильзы
    const shellGeo = new THREE.BoxGeometry(0.016, 0.05, 0.016)
    const shellMat = new THREE.MeshStandardMaterial({ color: 0xd9a441, metalness: 0.85, roughness: 0.35 })
    for (let i = 0; i < (PERF_LOW ? 8 : 22); i++) {
      const m = new THREE.Mesh(shellGeo, shellMat)
      m.visible = false
      this.scene.add(m)
      this.shells.push({ m, v: new THREE.Vector3(), rv: new THREE.Vector3(), life: 0 })
    }
    // декали попаданий
    const decalGeo = new THREE.PlaneGeometry(0.1, 0.1)
    for (let i = 0; i < (PERF_LOW ? 14 : 40); i++) {
      const m = new THREE.Mesh(decalGeo, new THREE.MeshBasicMaterial({ color: 0x14100a, transparent: true, opacity: 0, depthWrite: false }))
      m.visible = false
      this.scene.add(m)
      this.decals.push({ m, life: 0 })
    }

    // постобработка: bloom + тонмаппинг
    this.composer = new EffectComposer(this.renderer)
    this.composer.addPass(new RenderPass(this.scene, this.camera))
    // bloom — дорогая операция, на слабых GPU и телефонах отключён по умолчанию
    this.bloomPass = new UnrealBloomPass(new THREE.Vector2(container.clientWidth, container.clientHeight), 0.5, 0.5, 0.82)
    this.bloomPass.enabled = !PERF_LOW
    this.composer.addPass(this.bloomPass)
    this.composer.addPass(new OutputPass())

    this.pos.set(this.map.playerSpawn.x, 0, this.map.playerSpawn.z)
    this.bindEvents()
    this.loop()
  }

  /* ================= weapon ================= */

  /* ---------- процедурные текстуры оружия ---------- */

  private makeSkyTexture(): THREE.CanvasTexture {
    const cv = document.createElement('canvas')
    cv.width = 16
    cv.height = 512
    const g = cv.getContext('2d')!
    const grad = g.createLinearGradient(0, 0, 0, 512)
    grad.addColorStop(0, '#4f7db5')     // зенит
    grad.addColorStop(0.42, '#7fa8cc')
    grad.addColorStop(0.66, '#b9c4c4')
    grad.addColorStop(0.82, '#d8c9a8')  // тёплая дымка у горизонта
    grad.addColorStop(1, '#e5d3ae')
    g.fillStyle = grad
    g.fillRect(0, 0, 16, 512)
    const t = new THREE.CanvasTexture(cv)
    t.colorSpace = THREE.SRGBColorSpace
    t.magFilter = THREE.LinearFilter
    return t
  }

  private texCanvas(size: number, draw: (g: CanvasRenderingContext2D, s: number) => void): THREE.CanvasTexture {
    const cv = document.createElement('canvas')
    cv.width = cv.height = size
    const g = cv.getContext('2d')!
    draw(g, size)
    const t = new THREE.CanvasTexture(cv)
    t.wrapS = t.wrapT = THREE.RepeatWrapping
    t.colorSpace = THREE.SRGBColorSpace
    t.anisotropy = 4
    return t
  }

  private texMetal(base: string) {
    return this.texCanvas(128, (g, s) => {
      g.fillStyle = base
      g.fillRect(0, 0, s, s)
      for (let i = 0; i < 300; i++) {
        g.fillStyle = Math.random() > 0.5 ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.10)'
        g.fillRect(Math.random() * s, Math.random() * s, 1 + Math.random() * 2.2, 1)
      }
      g.globalAlpha = 0.09
      g.strokeStyle = '#ffffff'
      for (let i = 0; i < 24; i++) {
        const y = Math.random() * s
        g.beginPath(); g.moveTo(0, y); g.lineTo(s, y + (Math.random() - 0.5) * 5); g.stroke()
      }
      g.globalAlpha = 1
    })
  }

  private texWood() {
    return this.texCanvas(128, (g, s) => {
      g.fillStyle = '#8a5a2c'
      g.fillRect(0, 0, s, s)
      for (let i = 0; i < 26; i++) {
        g.strokeStyle = `rgba(58,32,10,${0.14 + Math.random() * 0.26})`
        g.lineWidth = 1 + Math.random() * 2.2
        const x = Math.random() * s
        g.beginPath()
        g.moveTo(x, 0)
        g.bezierCurveTo(x + 9, s * 0.3, x - 9, s * 0.62, x + (Math.random() - 0.5) * 12, s)
        g.stroke()
      }
      for (let i = 0; i < 220; i++) {
        g.fillStyle = 'rgba(38,20,6,0.14)'
        g.fillRect(Math.random() * s, Math.random() * s, 1.6, 1.6)
      }
      g.globalAlpha = 0.07
      g.fillStyle = '#eec27f'
      for (let i = 0; i < 6; i++) {
        g.beginPath()
        g.ellipse(Math.random() * s, Math.random() * s, 16 + Math.random() * 22, 5 + Math.random() * 4, 0, 0, 7)
        g.fill()
      }
      g.globalAlpha = 1
    })
  }

  private texPolymer(base: string) {
    return this.texCanvas(128, (g, s) => {
      g.fillStyle = base
      g.fillRect(0, 0, s, s)
      for (let i = 0; i < 460; i++) {
        g.fillStyle = Math.random() > 0.5 ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.12)'
        g.fillRect(Math.random() * s, Math.random() * s, 1.7, 1.7)
      }
      g.globalAlpha = 0.08
      g.strokeStyle = '#000000'
      for (let i = 0; i < 11; i++) {
        const x = Math.random() * s
        const y = Math.random() * s
        g.beginPath(); g.moveTo(x, y)
        g.lineTo(x + (Math.random() - 0.5) * 34, y + (Math.random() - 0.5) * 34)
        g.stroke()
      }
      g.globalAlpha = 1
    })
  }

  /* ---------- детальная сборка моделей оружия ---------- */

  private buildGunModel(spec: GunSpec): { group: THREE.Group; muzzle: THREE.Object3D } {
    const g = new THREE.Group()
    const muzzle = new THREE.Object3D()
    const css = (c: number) => `#${c.toString(16).padStart(6, '0')}`

    // материалы с текстурами + bump-рельефом
    const metalTex = this.texMetal(css(spec.bodyMat === 'metal' ? spec.bodyColor : 0x2b2e33))
    const woodTex = this.texWood()
    const polyTex = this.texPolymer(css(spec.bodyColor))
    const matMetal = new THREE.MeshStandardMaterial({ map: metalTex, bumpMap: metalTex, bumpScale: 0.25, roughness: 0.46, metalness: 0.72 })
    const matDark = new THREE.MeshStandardMaterial({ map: this.texMetal('#17191c'), bumpMap: this.texMetal('#17191c'), bumpScale: 0.2, roughness: 0.4, metalness: 0.8 })
    const matWood = new THREE.MeshStandardMaterial({ map: woodTex, bumpMap: woodTex, bumpScale: 0.45, roughness: 0.66, metalness: 0.06 })
    const matPoly = new THREE.MeshStandardMaterial({ map: polyTex, bumpMap: polyTex, bumpScale: 0.3, roughness: 0.85, metalness: 0.1 })
    const gloveTex = this.texPolymer('#6e6848')
    const matGlove = new THREE.MeshStandardMaterial({ map: gloveTex, bumpMap: gloveTex, bumpScale: 0.5, roughness: 0.92, metalness: 0.04 })
    const matBody = spec.bodyMat === 'wood' ? matWood : spec.bodyMat === 'poly' ? matPoly : matMetal
    const matBlade = new THREE.MeshStandardMaterial({ color: 0xd9dee3, roughness: 0.22, metalness: 0.95 })

    const box = (w: number, h: number, d: number, m: THREE.Material, x: number, y: number, z: number, rx = 0, ry = 0, rz = 0) => {
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m)
      mesh.position.set(x, y, z)
      mesh.rotation.set(rx, ry, rz)
      g.add(mesh)
      return mesh
    }
    const cyl = (r1: number, r2: number, len: number, m: THREE.Material, x: number, y: number, z: number, seg = 14) => {
      const mesh = new THREE.Mesh(new THREE.CylinderGeometry(r1, r2, len, seg), m)
      mesh.rotation.x = Math.PI / 2
      mesh.position.set(x, y, z)
      g.add(mesh)
      return mesh
    }

    const [bw, bh, bd] = spec.body
    const barrelY = spec.barrelY ?? 0.015

    // Руки в перчатках: кулак (ладонь + пальцы + большой палец) + предплечье к краю экрана
    const fist = (x: number, y: number, z: number, rx = 0, fingersUp = false) => {
      const hand = new THREE.Group()
      const palm = new THREE.Mesh(new THREE.BoxGeometry(0.082, 0.075, 0.085), matGlove)
      hand.add(palm)
      const fingers = new THREE.Mesh(new THREE.BoxGeometry(0.084, fingersUp ? 0.05 : 0.045, 0.06), matGlove)
      fingers.position.set(0, fingersUp ? 0.055 : -0.012, -0.06)
      fingers.rotation.x = fingersUp ? 0.5 : -0.4
      hand.add(fingers)
      const knuckles = new THREE.Mesh(new THREE.BoxGeometry(0.084, 0.03, 0.05), matGlove)
      knuckles.position.set(0, 0.035, -0.02)
      hand.add(knuckles)
      const thumb = new THREE.Mesh(new THREE.BoxGeometry(0.026, 0.028, 0.06), matGlove)
      thumb.position.set(0.048, 0.008, -0.03)
      hand.add(thumb)
      const wrist = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.06, 0.1), matGlove)
      wrist.position.set(0.01, -0.005, 0.09)
      hand.add(wrist)
      const forearm = new THREE.Mesh(new THREE.BoxGeometry(0.075, 0.062, 0.26), matGlove)
      forearm.position.set(0.05, -0.02, 0.26)
      forearm.rotation.set(0.18, -0.15, 0)
      hand.add(forearm)
      hand.position.set(x, y, z)
      hand.rotation.x = rx
      g.add(hand)
      return hand
    }

    /* ---- нож ---- */
    if (spec.melee && spec.blade) {
      const bl = spec.blade
      box(0.03, 0.034, 0.13, matPoly, 0, 0.005, 0.075)                          // рукоять
      box(0.032, 0.012, 0.03, matDark, 0, -0.014, 0.05)                          // подпальцевая выемка
      box(0.032, 0.012, 0.03, matDark, 0, -0.014, 0.085)
      box(0.034, 0.016, 0.018, matDark, 0, 0.005, 0.148)                         // тыльник
      box(0.052, 0.014, 0.02, matMetal, 0, 0.012, 0.0)                           // гарда
      box(bl.w, 0.008, bl.len, matBlade, 0, 0.02, -bl.len / 2 - 0.01)            // клинок
      box(bl.w * 0.92, 0.003, bl.len, new THREE.MeshStandardMaterial({ color: 0xf4f7fa, roughness: 0.12, metalness: 1 }), 0, 0.0155, -bl.len / 2 - 0.01) // кромка
      box(bl.w * 0.3, 0.004, bl.len * 0.9, matDark, 0, 0.026, -bl.len / 2 - 0.015) // обух
      const tip = box(bl.w * 0.62, 0.007, bl.w * 0.62, matBlade, 0, 0.02, -bl.len - 0.01 - bl.w * 0.2, 0, Math.PI / 4)
      tip.scale.z = 0.55
      fist(0, 0.0, 0.07, -1.15)   // кисть обхватывает рукоять
      muzzle.position.set(0, 0.02, -bl.len - 0.05)
      g.add(muzzle)
      return { group: g, muzzle }
    }

    /* ---- пистолет ---- */
    if (spec.pistol) {
      const slideMat = new THREE.MeshStandardMaterial({ map: this.texMetal(css(spec.slideColor ?? 0xc9ced4)), roughness: 0.3, metalness: 0.85 })
      box(bw, bh * 0.9, bd, matMetal, 0, -0.006, 0)                              // рамка
      box(bw * 1.04, bh * 0.62, bd * 1.02, slideMat, 0, bh * 0.5, 0)             // затвор
      if (spec.serrations) {                                                     // насечки затвора
        for (let i = 0; i < 6; i++) {
          box(0.002, bh * 0.5, 0.008, matDark, bw * 0.53, bh * 0.5, bd * 0.28 + i * 0.012)
          box(0.002, bh * 0.5, 0.008, matDark, -bw * 0.53, bh * 0.5, bd * 0.28 + i * 0.012)
        }
      }
      cyl(spec.barrelR * 0.9, spec.barrelR * 0.9, 0.06, matDark, 0, bh * 0.5, -bd / 2 - 0.02) // выступающий ствол
      box(0.012, 0.03, 0.012, slideMat, 0, bh * 0.86, -bd * 0.4)                 // мушка
      box(bw * 0.8, 0.02, 0.016, slideMat, 0, bh * 0.84, bd * 0.34)              // целик
      box(bw * 0.9, 0.05, 0.05, matDark, 0, bh * 0.16, bd * 0.44)                // хвост затвора
      box(bw * 0.94, bh * 1.5, 0.075, matMetal, 0, -bh * 1.05, bd * 0.26, -0.2)  // рукоять
      box(bw * 0.8, 0.05, 0.02, matDark, 0, -bh * 1.62, bd * 0.2)                // пятка магазина
      box(0.018, 0.04, 0.05, matDark, 0, -bh * 0.55, bd * 0.05)                  // спусковая скоба
      box(0.008, 0.03, 0.014, matDark, 0, -bh * 0.36, 0.02)                      // спусковой крючок
      box(bw * 0.5, 0.028, 0.014, matDark, 0, bh * 0.62, bd * 0.52, -0.5)        // молоток
      fist(0, -bh * 1.0, bd * 0.26, -0.2)                                        // правая кисть
      fist(0, -bh * 1.22, bd * 0.24, -0.1)                                       // левая (поддержка)
      muzzle.position.set(0, bh * 0.5, -bd / 2 - 0.055)
      g.add(muzzle)
      return { group: g, muzzle }
    }

    /* ---- общее: винтовки / ПП ---- */
    box(bw, bh, bd, matBody, 0, 0, 0)                                            // ствольная коробка

    // зубья планки пикатини сверху
    const teeth = Math.floor(bd / 0.045)
    for (let i = 0; i < teeth; i++) box(bw * 0.5, 0.011, 0.016, matDark, 0, bh / 2 + 0.005, -bd / 2 + 0.03 + i * 0.045)

    // ствол + дульное устройство
    let zEnd = -bd / 2
    if (spec.barrelLen > 0) {
      cyl(spec.barrelR, spec.barrelR, spec.barrelLen, matDark, 0, barrelY, zEnd - spec.barrelLen / 2)
      zEnd -= spec.barrelLen
    }
    if (spec.muzzle) {
      cyl(spec.muzzle.r, spec.muzzle.r, spec.muzzle.len, matMetal, 0, barrelY, zEnd - spec.muzzle.len / 2)
      cyl(spec.muzzle.r * 0.55, spec.muzzle.r * 0.55, spec.muzzle.len * 0.5, matDark, 0, barrelY, zEnd - spec.muzzle.len * 0.55) // внутренний канал
      zEnd -= spec.muzzle.len
    }

    // газовая трубка + прицельные (АК)
    if (spec.gasTube) {
      cyl(0.011, 0.011, (spec.handguard?.[2] ?? 0.2) * 0.95, matMetal, 0, barrelY + bh * 0.42, -bd / 2 - (spec.handguard?.[2] ?? 0.2) * 0.47)
      box(bw * 0.7, bh * 0.5, 0.03, matMetal, 0, barrelY + bh * 0.28, -bd / 2 - (spec.handguard?.[2] ?? 0.2) - 0.015) // колодка мушки
      box(0.008, 0.05, 0.008, matDark, 0, barrelY + bh * 0.62, -bd / 2 - (spec.handguard?.[2] ?? 0.2) - 0.015)
      box(0.044, 0.02, 0.014, matDark, 0, bh / 2 + 0.02, bd * 0.3)               // целик
      box(0.012, 0.03, 0.05, matDark, bw * 0.42, 0.02, bd * 0.05)                // рукоятка взведения
    }

    // цевьё с вентиляционными окнами
    if (spec.handguard) {
      const [hw, hh, hd] = spec.handguard
      const hm = spec.handguardMat === 'wood' ? matWood : matPoly
      box(hw, hh, hd, hm, 0, barrelY - hh * 0.12, -bd / 2 - hd / 2 + 0.012)
      box(hw * 0.86, hh * 0.4, hd * 0.96, matDark, 0, barrelY + hh * 0.42, -bd / 2 - hd / 2 + 0.012) // верхняя накладка
      for (let i = 0; i < 3; i++) {
        box(0.004, hh * 0.5, 0.045, matDark, hw * 0.505, barrelY - hh * 0.12, -bd / 2 - 0.05 - i * 0.07)
        box(0.004, hh * 0.5, 0.045, matDark, -hw * 0.505, barrelY - hh * 0.12, -bd / 2 - 0.05 - i * 0.07)
      }
    }

    // магазин
    if (spec.mag) {
      const m = spec.mag
      box(m.w, m.h, m.d, matDark, m.x ?? 0, -bh / 2 - m.h / 2 + 0.025, (m.z ?? 0) + 0.02, m.tilt)
      box(m.w * 0.9, 0.02, m.d * 0.9, matMetal, m.x ?? 0, -bh / 2 - m.h + 0.03, (m.z ?? 0) + 0.02 + Math.sin(m.tilt) * m.h * 0.45, m.tilt)
    }

    // верхний магазин P90 (полупрозрачный)
    if (spec.topMag) {
      const tm = new THREE.MeshStandardMaterial({ color: 0x9aa862, roughness: 0.4, metalness: 0.1, transparent: true, opacity: 0.55 })
      box(bw * 0.92, 0.024, bd * 0.86, tm, 0, bh / 2 + 0.012, -0.01)
      for (let i = 0; i < 8; i++) box(0.008, 0.02, 0.014, new THREE.MeshStandardMaterial({ color: 0xd8b45a, metalness: 0.8, roughness: 0.35 }), 0, bh / 2 + 0.012, -bd * 0.3 + i * 0.045)
    }

    // буллпап: задняя часть и упор
    if (spec.bullpup) {
      box(bw * 0.9, bh * 1.12, 0.09, matBody, 0, -0.004, bd / 2 + 0.035)
      box(bw * 0.94, bh * 0.9, 0.02, matDark, 0, -0.004, bd / 2 + 0.085)         // затыльник
      box(bw * 0.8, 0.03, 0.1, matDark, 0, bh / 2 + 0.012, bd * 0.28)            // щека
      box(bw * 0.7, 0.05, 0.12, matBody, 0, -bh / 2 - 0.02, -bd * 0.3, -0.55)    // наклонная передняя кромка
      box(0.016, 0.05, 0.05, matDark, bw * 0.4, 0.01, -bd * 0.34)                // боковая планка
      box(0.016, 0.05, 0.05, matDark, -bw * 0.4, 0.01, -bd * 0.34)
    }

    // приклад
    if (spec.stock) {
      const st = spec.stock
      const sm = st.mat === 'wood' ? matWood : new THREE.MeshStandardMaterial({ map: this.texPolymer(css(st.color)), roughness: 0.8, metalness: 0.12 })
      box(bw * 0.88, bh * 1.05, st.l * 0.5, sm, 0, -st.drop * 0.35, bd / 2 + st.l * 0.25)
      box(bw * 0.92, bh * 1.4, st.l * 0.5, sm, 0, -st.drop, bd / 2 + st.l * 0.75)
      box(bw * 0.96, bh * 1.45, 0.018, matDark, 0, -st.drop, bd / 2 + st.l + 0.002) // затыльник
    }

    // рукоять + спусковая скоба
    if (spec.grip) {
      box(bw * 0.85, 0.115, 0.06, matBody, 0, -bh / 2 - 0.055, bd * 0.3, -0.22)
      box(bw * 0.7, 0.03, 0.02, matDark, 0, -bh / 2 - 0.1, bd * 0.16)
    }

    // оптика с линзой
    if (spec.scope) {
      const sc = spec.scope
      const y = bh / 2 + sc.r + 0.024
      cyl(sc.r, sc.r, sc.len, matDark, 0, y, -0.02)
      cyl(sc.r * 1.45, sc.r, 0.055, matDark, 0, y, -0.02 - sc.len / 2)          // объектив
      cyl(sc.r * 1.2, sc.r, 0.05, matDark, 0, y, -0.02 + sc.len / 2)            // окуляр
      const lens = new THREE.Mesh(new THREE.CircleGeometry(sc.r * 1.3, 20), new THREE.MeshBasicMaterial({ color: 0x9fd4ff }))
      lens.position.set(0, y, -0.02 + sc.len / 2 + 0.027)
      lens.rotation.y = Math.PI
      g.add(lens)
      box(0.014, 0.05, 0.03, matDark, 0, bh / 2 + 0.01, -0.06)                   // кронштейн 1
      box(0.014, 0.05, 0.03, matDark, 0, bh / 2 + 0.01, 0.04)                    // кронштейн 2
      box(0.004, 0.02, 0.004, matDark, 0, y + sc.r + 0.012, -0.1)                // маховик поправок
    }

    // сошки
    if (spec.bipod) {
      box(0.012, 0.2, 0.012, matDark, 0.02, -bh / 2 - 0.08, -bd * 0.36, 0.45, 0, 0.28)
      box(0.012, 0.2, 0.012, matDark, -0.02, -bh / 2 - 0.08, -bd * 0.36, 0.45, 0, -0.28)
      box(0.05, 0.02, 0.05, matDark, 0, -bh / 2 - 0.012, -bd * 0.36)
    }

    // рукоять затвора
    if (spec.boltHandle) {
      box(0.012, 0.012, 0.07, matMetal, bw * 0.55, -0.005, bd * 0.1, 0, 0, 0.7)
      cyl(0.011, 0.011, 0.024, matMetal, bw * 0.58, -0.035, bd * 0.07)
    }

    /* ---- руки ---- */
    const hg = spec.handguard
    const gripZ = spec.bullpup ? -bd * 0.3 : bd * 0.3
    const gripRx = spec.bullpup ? -0.55 : -0.22
    fist(0, -bh / 2 - 0.075, gripZ, gripRx)                                   // правая — на рукояти
    if (hg) {
      fist(0, barrelY - hg[1] * 0.5 - 0.05, -bd / 2 - hg[2] * 0.55, 0.2, true) // левая — под цевьём
    } else if (spec.bullpup) {
      fist(0, -bh * 0.75, -bd * 0.05, 0.3, true)                               // левая — под корпусом
    } else {
      fist(0, -bh * 0.5, -bd * 0.42, 0.3, true)                                // левая — под цевьём/стволом
    }

    muzzle.position.set(0, barrelY, zEnd - 0.02)
    g.add(muzzle)
    return { group: g, muzzle }
  }

  private buildWeapons() {
    const root = this.weapon
    for (const id of WEAPON_ORDER) {
      const { group, muzzle } = this.buildGunModel(WEAPONS[id].gun)
      this.weaponModels[id] = group
      this.weaponMuzzles[id] = muzzle
      root.add(group)
      group.visible = false
    }
    root.position.set(0.24, -0.22, -0.45)
    this.camera.add(root)
  }

  private makeGlowTex(): THREE.CanvasTexture {
    const cv = document.createElement('canvas')
    cv.width = cv.height = 128
    const g = cv.getContext('2d')!
    const grad = g.createRadialGradient(64, 64, 2, 64, 64, 64)
    grad.addColorStop(0, 'rgba(255,240,200,1)')
    grad.addColorStop(0.35, 'rgba(255,180,90,0.8)')
    grad.addColorStop(1, 'rgba(255,120,40,0)')
    g.fillStyle = grad
    g.fillRect(0, 0, 128, 128)
    return new THREE.CanvasTexture(cv)
  }

  private buildFlash(size: number): THREE.Mesh {
    const mat = new THREE.MeshBasicMaterial({
      color: 0xffc97a, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide,
    })
    const g = new THREE.Group()
    const p1 = new THREE.Mesh(new THREE.PlaneGeometry(size, size), mat)
    const p2 = new THREE.Mesh(new THREE.PlaneGeometry(size, size * 0.36), mat)
    p2.rotation.z = Math.PI / 2
    g.add(p1, p2)
    // мягкое свечение вокруг вспышки
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({
      map: this.makeGlowTex(), color: 0xffb46a, transparent: true, opacity: 0,
      blending: THREE.AdditiveBlending, depthWrite: false,
    }))
    glow.scale.set(size * 2.6, size * 2.6, 1)
    g.add(glow)
    const holder = new THREE.Mesh(new THREE.PlaneGeometry(0.01, 0.01), mat)
    holder.add(g)
    return holder
  }

  /* ================= events ================= */

  private onKeyDown = (e: KeyboardEvent) => {
    if (e.code === 'Space') e.preventDefault()
    this.keys[e.code] = true
    if (this.state !== 'playing') return
    if (e.code === 'Escape' && !this.locked) { this.pause(); return }
    if (e.code === 'Tab') { e.preventDefault(); this.openWheel(); return }
    if (this.wheelOpen) return // в колесе выбора работают только Tab/цифры
    if (e.code === 'KeyR') this.startReload()
    if (e.code === 'KeyG') this.throwNade()
    const num = ['Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9'].indexOf(e.code)
    if (num >= 0 && num < WEAPON_ORDER.length) this.switchTo(WEAPON_ORDER[num])
  }
  private onKeyUp = (e: KeyboardEvent) => {
    this.keys[e.code] = false
    if (e.code === 'Tab') { e.preventDefault(); this.closeWheel(true) }
  }
  private onWheel = (e: WheelEvent) => {
    if (this.state !== 'playing' || this.wheelOpen) return
    this.cycleWeapon(e.deltaY > 0 ? 1 : -1)
  }

  private onMouseMove = (e: MouseEvent) => {
    if (this.wheelOpen) { this.wheelPick(e.clientX, e.clientY); return }
    if (this.state !== 'playing') return
    if (this.locked) {
      // захват мыши: движение 1:1
      const s = 0.0032 * this.sens
      this.yaw -= e.movementX * s
      this.pitch = Math.max(-1.45, Math.min(1.45, this.pitch - e.movementY * s))
    } else {
      // без захвата: камера следует за движением мыши (по дельте)
      if (!this.mouseInit) {
        this.lastCX = e.clientX
        this.lastCY = e.clientY
        this.mouseInit = true
        return
      }
      const dx = e.movementX ?? e.clientX - this.lastCX
      const dy = e.movementY ?? e.clientY - this.lastCY
      this.lastCX = e.clientX
      this.lastCY = e.clientY
      const s = 0.0045 * this.sens
      this.yaw -= dx * s
      this.pitch = Math.max(-1.45, Math.min(1.45, this.pitch - dy * s))
    }
  }
  private onMouseDown = (e: MouseEvent) => {
    this.sfx.ensure()
    if (this.state !== 'playing') return
    // ЛКМ — всегда огонь
    if (e.button === 0) {
      this.firing = true
      this.tryShoot()
      if (!this.locked) this.requestLock()
    } else if (e.button === 2) {
      // ПКМ: прицел AWP, иначе огонь
      if (this.equipped === 'awp') this.toggleScope()
      else {
        this.firing = true
        this.tryShoot()
      }
    }
  }
  private onMouseUp = (e: MouseEvent) => {
    if (e.button === 0 || e.button === 2) this.firing = false
  }

  private onLockChange = () => {
    const locked = document.pointerLockElement === this.renderer.domElement
    // при открытом колесе выбора захват освобождается намеренно — не паузим
    if (this.locked && !locked && this.state === 'playing' && !this.wheelOpen) this.pause()
    this.mouseInit = false
    this.locked = locked
    if (!this.wheelOpen) this.hooks.lockedChange(locked)
  }
  private onResize = () => {
    const w = this.container.clientWidth
    const h = this.container.clientHeight
    this.camera.aspect = w / h
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(w, h)
    this.composer.setSize(w, h)
  }
  private onVisibility = () => {
    if (document.hidden) {
      this.sfx.setMuted(true) // пункт 1.3: звук останавливается при потере фокуса
      if (this.state === 'playing') this.pause()
    } else {
      this.sfx.setMuted(false)
    }
  }
  private onContext = (e: Event) => e.preventDefault()

  private bindEvents() {
    window.addEventListener('keydown', this.onKeyDown)
    window.addEventListener('keyup', this.onKeyUp)
    window.addEventListener('wheel', this.onWheel, { passive: true })
    window.addEventListener('resize', this.onResize)
    document.addEventListener('mousemove', this.onMouseMove)
    document.addEventListener('mousedown', this.onMouseDown)
    document.addEventListener('mouseup', this.onMouseUp)
    document.addEventListener('pointerlockchange', this.onLockChange)
    document.addEventListener('visibilitychange', this.onVisibility)
    this.renderer.domElement.addEventListener('contextmenu', this.onContext)
  }

  private requestLock() {
    try {
      const p = this.renderer.domElement.requestPointerLock() as unknown as Promise<void> | undefined
      if (p && typeof p.catch === 'function') p.catch(() => {})
    } catch { /* ignore */ }
  }

  /* ================= public control ================= */

  startMatch() {
    this.sfx.ensure()
    gameplayStart()
    this.scoreA = 0
    this.scoreB = 0
    this.round = 0
    this.kills = 0
    this.deaths = 0
    this.equipped = 'deagle'
    this.applyWeaponVisibility()
    this.hooks.score(0, 0)
    this.hooks.kills(0)
    this.startRound()
  }

  resume() {
    if (this.state !== 'paused') return
    this.state = 'playing'
    this.sfx.setMuted(false)
    gameplayStart()
    this.requestLock()
  }

  pause() {
    if (this.state !== 'playing') return
    this.state = 'paused'
    this.firing = false
    this.mouseInit = false
    gameplayStop()
    if (this.scoped) this.toggleScope(false)
    if (document.pointerLockElement) document.exitPointerLock()
    else this.hooks.lockedChange(false)
  }

  toMenu() {
    window.clearTimeout(this.roundTimeout)
    this.clearEntities()
    this.state = 'attract'
    gameplayStop()
    if (this.scoped) this.toggleScope(false)
    if (document.pointerLockElement) document.exitPointerLock()
  }

  /* ================= сенсорный ввод (мобильные) ================= */

  /** Виртуальный джойстик: x — стрейф (-1..1, вправо положит.), y — вперёд (-1..1, вверх положит.) */
  setMoveInput(x: number, y: number) {
    this.joyX = Math.max(-1, Math.min(1, x))
    this.joyY = Math.max(-1, Math.min(1, y))
  }

  /** Зона обзора: накопить дельту движения пальца */
  addLook(dx: number, dy: number) {
    this.lookDX += dx
    this.lookDY += dy
  }

  setFiring(on: boolean) {
    if (this.state !== 'playing') { this.firing = false; return }
    this.firing = on
    if (on) this.tryShoot()
  }

  doJump() { if (this.state === 'playing') this.touchJump = true }
  doReload() { if (this.state === 'playing') this.startReload() }
  doGrenade() { if (this.state === 'playing') this.throwNade() }
  doScope() { if (this.state === 'playing' && this.equipped === 'awp') this.toggleScope() }

  switchWeaponByIndex(i: number) {
    if (i >= 0 && i < WEAPON_ORDER.length) this.switchTo(WEAPON_ORDER[i])
  }
  cycleWeaponPub(dir: number) { this.cycleWeapon(dir) }

  /* ---------- настройки ---------- */
  setSettings(s: { volume?: number; sens?: number; quality?: 'auto' | 'high' | 'low' }) {
    if (s.volume !== undefined) this.sfx.setVolume(s.volume)
    if (s.sens !== undefined) this.sens = Math.max(0.3, Math.min(2.5, s.sens))
    if (s.quality !== undefined) {
      this.qualitySetting = s.quality
      this.applyQuality()
    }
  }

  private applyQuality() {
    const q = this.qualitySetting
    let pr: number
    let bloom: boolean
    if (q === 'low') { pr = 1; bloom = false }
    else if (q === 'high') { pr = Math.min(window.devicePixelRatio || 1, 1.75); bloom = true }
    else { pr = Math.min(window.devicePixelRatio || 1, PERF_LOW ? 1 : 1.75); bloom = !PERF_LOW }
    this.renderer.setPixelRatio(pr)
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight)
    this.composer.setSize(this.container.clientWidth, this.container.clientHeight)
    if (this.bloomPass) this.bloomPass.enabled = bloom
    this.degraded = q === 'low' // в ручном режиме автодеградацию не дёргаем
  }

  /** Пауза/фокус платформы: остановить звук (пункт 1.3 требований) */
  setAudioPaused(m: boolean) { this.sfx.setMuted(m) }

  dispose() {
    cancelAnimationFrame(this.raf)
    window.removeEventListener('keydown', this.onKeyDown)
    window.removeEventListener('keyup', this.onKeyUp)
    window.removeEventListener('wheel', this.onWheel)
    window.removeEventListener('resize', this.onResize)
    document.removeEventListener('mousemove', this.onMouseMove)
    document.removeEventListener('mousedown', this.onMouseDown)
    document.removeEventListener('mouseup', this.onMouseUp)
    document.removeEventListener('pointerlockchange', this.onLockChange)
    document.removeEventListener('visibilitychange', this.onVisibility)
    this.renderer.domElement.removeEventListener('contextmenu', this.onContext)
    this.renderer.dispose()
    if (this.renderer.domElement.parentElement === this.container) this.container.removeChild(this.renderer.domElement)
  }

  /* ================= rounds ================= */

  private clearEntities() {
    for (const b of this.bots) b.dispose(this.scene)
    this.bots = []
    for (const n of this.nadesFly) this.scene.remove(n.m)
    this.nadesFly = []
    for (const p of this.particles) { p.life = 0; p.m.visible = false }
  }

  private startRound() {
    this.round++
    this.clearEntities()
    const sp = this.map.playerSpawn
    this.pos.set(sp.x, 0, sp.z)
    this.vel.set(0, 0, 0)
    this.yaw = 0
    this.pitch = 0
    this.recoilPitch = 0
    this.recoilYaw = 0
    this.spread = 0
    this.shake = 0
    this.kick = 0
    this.hp = 100
    this.armor = 100
    // каждый раунд — полный боезапас всех стволов
    for (const id of WEAPON_ORDER) {
      this.ammo[id] = { mag: WEAPONS[id].mag, res: WEAPONS[id].res }
    }
    this.nades = Math.min(3, this.round)
    this.reloading = false
    this.firing = false
    this.scoped = false
    this.hooks.scoped(false)
    this.roundT = ROUND_TIME

    const count = Math.min(10, 3 + this.round)
    const spawns = [...this.map.botSpawns].sort(() => Math.random() - 0.5)
    const botHooks: BotHooks = {
      colliders: this.map.colliders,
      bounds: this.map.bounds,
      solids: this.map.solids,
      playerEye: () => this.tmpV.set(this.pos.x, this.pos.y + 1.55, this.pos.z),
      playerSpeedXZ: () => Math.hypot(this.vel.x, this.vel.z),
      tracer: (a, b, c) => this.spawnTracer(a, b, c),
      damagePlayer: (d, from) => this.damagePlayer(d, from),
      sfx: this.sfx,
    }
    for (let i = 0; i < count; i++) {
      const s = spawns[i % spawns.length]
      const names = NAMES()
      const bot = new Bot(names[i % names.length], s.x + (Math.random() - 0.5), s.z + (Math.random() - 0.5), (3 + this.round * 0.22 + Math.random() * 0.3) * 1.35, botHooks)
      bot.group.rotation.y = Math.random() * Math.PI * 2
      this.scene.add(bot.group)
      bot.group.updateMatrixWorld(true)
      this.bots.push(bot)
    }

    this.state = 'playing'
    const need = WINS_NEEDED - this.scoreA
    this.hooks.banner({
      title: `${t('round')} ${this.round}`,
      sub: `${t('roundSub')}: ${count}`,
      tone: 'info',
    })
    this.sfx.beep(760, 0.12, 0.22)
    this.requestLock()
  }

  private endRound(won: boolean) {
    if (this.state !== 'playing' && this.state !== 'dying') return
    this.state = 'roundEnd'
    this.firing = false
    if (this.scoped) this.toggleScope(false)
    this.camera.fov = 75
    this.camera.updateProjectionMatrix()
    if (won) this.scoreA++
    else this.scoreB++
    this.hooks.score(this.scoreA, this.scoreB)
    if (document.pointerLockElement) document.exitPointerLock()
    const done = this.scoreA >= WINS_NEEDED || this.scoreB >= WINS_NEEDED
    this.hooks.banner({
      title: won ? t('roundWon') : t('roundLost'),
      sub: `${t('score')} ${this.scoreA} : ${this.scoreB}`,
      tone: won ? 'win' : 'lose',
    })
    if (won) this.sfx.win()
    else this.sfx.lose()
    this.roundTimeout = window.setTimeout(() => {
      if (done) this.finish(this.scoreA > this.scoreB)
      else this.startRound()
    }, 3100)
  }

  private finish(victory: boolean) {
    if (this.scoped) this.toggleScope(false)
    this.camera.fov = 75
    this.camera.updateProjectionMatrix()
    this.hooks.over({
      result: victory ? 'victory' : 'defeat',
      kills: this.kills,
      deaths: this.deaths,
      won: this.scoreA,
      lost: this.scoreB,
    })
    this.clearEntities()
    this.state = 'attract'
  }

  /* ================= combat ================= */

  private startReload() {
    const cfg = WEAPONS[this.equipped]
    if (cfg.melee || cfg.reload <= 0) return // нож и Zeus не перезаряжаются
    const a = this.ammo[this.equipped]
    if (this.reloading || a.mag >= cfg.mag || this.state !== 'playing') return
    if (a.res <= 0) {
      this.sfx.dry() // как в CS:GO — щелчок, патронов нет
      return
    }
    if (this.scoped) this.toggleScope(false)
    this.reloading = true
    this.reloadTotal = cfg.reload
    this.reloadT = cfg.reload
    this.sfx.reload()
  }

  private tryShoot() {
    if (this.state !== 'playing' || this.cooldown > 0 || this.reloading || this.switchAnim < 1 || this.wheelOpen) return
    const cfg = WEAPONS[this.equipped]
    if (cfg.melee) { this.meleeAttack(cfg); return }
    const a = this.ammo[this.equipped]
    if (a.mag <= 0) {
      this.sfx.dry()
      this.firing = false
      if (cfg.reload > 0) this.startReload()
      return
    }
    a.mag--
    this.cooldown = cfg.cd
    if (cfg.sound === 'sniper') this.sfx.sniper()
    else if (cfg.sound === 'pistol') this.sfx.pistol()
    else if (cfg.sound === 'smg') this.sfx.smg()
    else this.sfx.shoot()

    // fx
    const big = cfg.sound === 'sniper'
    this.flashT = big ? 0.07 : 0.04
    this.flash.rotation.z = Math.random() * Math.PI
    const fs = (big ? 1.2 : cfg.sound === 'pistol' ? 0.55 : 0.75) + Math.random() * 0.5
    this.flash.scale.set(fs, fs, fs)
    this.gunLight.intensity = big ? 40 : 26
    this.kick = Math.min(1.6, this.kick + 1)
    this.recoilPitch += cfg.recoil + Math.random() * cfg.recoil * 0.5
    this.recoilYaw += (Math.random() - 0.5) * cfg.recoilYaw * 2
    this.spread = Math.min(1, this.spread + (this.onGround ? cfg.kick : cfg.kick * 1.6))
    this.spawnShell()

    // hitscan
    this.camera.getWorldDirection(this.tmpD)
    const hSpeed = Math.hypot(this.vel.x, this.vel.z)
    let spreadRad: number
    if (cfg.sound === 'sniper') {
      spreadRad = this.scoped ? 0.0012 + this.spread * 0.004 : 0.075 + this.spread * 0.03 + (hSpeed > 1.2 ? 0.05 : 0)
    } else {
      spreadRad = cfg.base + this.spread * cfg.grow + (hSpeed > 1.2 ? cfg.movePen : 0) + (this.onGround ? 0 : 0.012)
    }
    this.tmpD.x += (Math.random() - 0.5) * 2 * spreadRad
    this.tmpD.y += (Math.random() - 0.5) * 2 * spreadRad
    this.tmpD.z += (Math.random() - 0.5) * 2 * spreadRad
    this.tmpD.normalize()
    this.camera.getWorldPosition(this.tmpV)
    this.ray.set(this.tmpV, this.tmpD)
    this.ray.far = 140

    const targets: THREE.Object3D[] = [...this.map.solids]
    for (const b of this.bots) if (b.alive) targets.push(...b.hitboxes)
    const hits = this.ray.intersectObjects(targets, false)

    const muzzlePos = new THREE.Vector3()
    this.weaponMuzzles[this.equipped].getWorldPosition(muzzlePos)
    const end = hits.length ? hits[0].point : this.tmpV.clone().addScaledVector(this.tmpD, 120)
    this.spawnTracer(muzzlePos, end, cfg.sound === 'sniper' ? 0xffe9a0 : 0xffd27a)
    this.burst(muzzlePos, 0x9c9a90, 2, 0.6, 0.6, -2.2) // пороховой дым

    if (hits.length) {
      const ud = hits[0].object.userData as { bot?: Bot; part?: string }
      if (ud.bot && ud.bot.alive) {
        const head = ud.part === 'head'
        const killed = ud.bot.hit(ud.part || 'body', head ? cfg.dmg * 4 : cfg.dmg)
        this.burst(hits[0].point, 0x9e1b1b, head ? 16 : 10, 3.4, 0.5)
        if (killed) {
          this.onBotKilled(ud.bot, head)
        } else {
          this.hooks.hitmark(head ? 'head' : 'hit')
          this.sfx.hit(head)
        }
      } else {
        this.burst(hits[0].point, 0xd8c08a, 7, 2.6, 0.35)
        this.burst(hits[0].point, 0xfff0b8, 4, 3.4, 0.25)
        if (hits[0].face) {
          const nrm = new THREE.Vector3().copy(hits[0].face.normal).transformDirection(hits[0].object.matrixWorld)
          this.addDecal(hits[0].point, nrm)
        }
      }
    }
  }

  private meleeAttack(cfg: WeaponDef) {
    this.cooldown = cfg.cd
    this.kick = Math.min(1.6, this.kick + 1)
    this.sfx.knife()
    this.camera.getWorldDirection(this.tmpD)
    this.camera.getWorldPosition(this.tmpV)
    this.ray.set(this.tmpV, this.tmpD)
    this.ray.far = 2.4
    const targets: THREE.Object3D[] = []
    for (const b of this.bots) if (b.alive) targets.push(...b.hitboxes)
    const hits = this.ray.intersectObjects(targets, false)
    if (hits.length) {
      const ud = hits[0].object.userData as { bot?: Bot; part?: string }
      if (ud.bot && ud.bot.alive) {
        const head = ud.part === 'head'
        const killed = ud.bot.hit(ud.part || 'body', head ? cfg.dmg * 2 : cfg.dmg)
        this.burst(hits[0].point, 0x9e1b1b, 14, 3.6, 0.5)
        if (killed) this.onBotKilled(ud.bot, head)
        else { this.hooks.hitmark(head ? 'head' : 'hit'); this.sfx.hit(head) }
      }
    }
  }

  private onBotKilled(bot: Bot, head: boolean) {
    this.kills++
    this.hooks.kills(this.kills)
    this.hooks.hitmark('kill')
    this.hooks.feed({ killer: 'ВЫ', victim: bot.name, head, byPlayer: true })
    this.sfx.kill()
    const p = bot.group.position
    this.burst(new THREE.Vector3(p.x, p.y + 1, p.z), 0x9e1b1b, 18, 4.2, 0.7)
  }

  private damagePlayer(dmg: number, from: THREE.Vector3) {
    if (this.state !== 'playing') return
    let d = dmg
    if (this.armor > 0) {
      const absorbed = Math.min(this.armor, d * 0.5)
      this.armor -= absorbed
      d -= absorbed
    }
    this.hp -= d
    this.shake = Math.min(1.2, this.shake + d / 22)
    const dx = from.x - this.pos.x
    const dz = from.z - this.pos.z
    const rel = this.normAngle(this.yaw + Math.PI - Math.atan2(dx, dz))
    this.hooks.damage(d, rel)
    this.sfx.hurt()
    if (this.hp <= 0) {
      this.hp = 0
      this.deaths++
      const kb = this.bots.find((b) => b.group.position === from)
      this.hooks.feed({ killer: kb ? kb.name : 'Взрыв', victim: 'ВЫ', head: false, byPlayer: false })
      this.state = 'dying'
      this.deathT = 0
      this.firing = false
      this.hooks.banner({ title: t('youKilled'), sub: t('roundLostSub'), tone: 'lose' })
      this.sfx.lose()
    }
  }

  private normAngle(a: number) {
    while (a > Math.PI) a -= Math.PI * 2
    while (a < -Math.PI) a += Math.PI * 2
    return a
  }

  /* ================= weapons & shop ================= */

  private switchTo(w: WeaponId) {
    if (this.equipped === w || this.state !== 'playing') return
    this.equipped = w
    this.reloading = false
    this.firing = false
    if (this.scoped) this.toggleScope(false)
    this.switchAnim = 0
    this.applyWeaponVisibility()
    this.sfx.switchW()
  }

  private applyWeaponVisibility() {
    for (const id of WEAPON_ORDER) this.weaponModels[id].visible = id === this.equipped
    this.weaponMuzzles[this.equipped].add(this.flash)
  }

  private cycleWeapon(dir: number) {
    if (this.state !== 'playing') return
    const i = WEAPON_ORDER.indexOf(this.equipped)
    const n = WEAPON_ORDER.length
    this.switchTo(WEAPON_ORDER[(i + dir + n) % n])
  }

  private openWheel() {
    if (this.state !== 'playing' || this.wheelOpen) return
    this.wheelOpen = true
    this.firing = false
    this.wheelIndex = WEAPON_ORDER.indexOf(this.equipped)
    if (document.pointerLockElement) document.exitPointerLock()
    this.emitWheel()
  }

  private closeWheel(commit: boolean) {
    if (!this.wheelOpen) return
    this.wheelOpen = false
    if (commit) this.switchTo(WEAPON_ORDER[this.wheelIndex])
    this.hooks.wheel(null)
    this.requestLock()
  }

  private emitWheel() {
    this.hooks.wheel({
      items: WEAPON_ORDER.map((id) => ({ id, name: WEAPONS[id].name, short: WEAPONS[id].short, cat: WEAPONS[id].cat })),
      active: this.wheelIndex,
    })
  }

  private wheelPick(clientX: number, clientY: number) {
    if (!this.wheelOpen) return
    const cx = window.innerWidth / 2
    const cy = window.innerHeight / 2
    const dx = clientX - cx
    const dy = clientY - cy
    if (Math.hypot(dx, dy) < 40) return // мёртвая зона в центре
    let ang = Math.atan2(dy, dx) + Math.PI / 2 // 0 = вверх
    if (ang < 0) ang += Math.PI * 2
    const n = WEAPON_ORDER.length
    this.wheelIndex = Math.round((ang / (Math.PI * 2)) * n) % n
    this.emitWheel()
  }

  private toggleScope(on?: boolean) {
    const sc = WEAPONS[this.equipped].gun.scope
    if (!sc && on !== false) return
    const next = on !== undefined ? on : !this.scoped
    if (next === this.scoped) return
    this.scoped = next
    this.spread = Math.min(this.spread, 0.15)
    this.sfx.zoom(next)
    this.hooks.scoped(next)
  }

  private spawnShell() {
    const s = this.shells.find((q) => q.life <= 0)
    if (!s) return
    s.m.visible = true
    this.camera.getWorldPosition(this.tmpV)
    const right = new THREE.Vector3(1, 0, 0).applyQuaternion(this.camera.quaternion)
    const up = new THREE.Vector3(0, 1, 0).applyQuaternion(this.camera.quaternion)
    const fwd = new THREE.Vector3(0, 0, -1).applyQuaternion(this.camera.quaternion)
    s.m.position.copy(this.tmpV).addScaledVector(right, 0.22).addScaledVector(up, -0.1).addScaledVector(fwd, 0.2)
    s.v.copy(right).multiplyScalar(1.6 + Math.random() * 1.2).addScaledVector(up, 1.6 + Math.random() * 1.4).addScaledVector(fwd, 0.5)
    s.rv.set((Math.random() - 0.5) * 25, (Math.random() - 0.5) * 25, (Math.random() - 0.5) * 25)
    s.life = 1.1
  }

  private addDecal(point: THREE.Vector3, normal: THREE.Vector3) {
    const d = this.decals.find((q) => q.life <= 0)
    if (!d) return
    d.m.position.copy(point).addScaledVector(normal, 0.015)
    d.m.lookAt(this.tmpV.copy(point).add(normal))
    d.m.rotation.z = Math.random() * Math.PI
    const sc = 0.7 + Math.random() * 0.9
    d.m.scale.set(sc, sc, sc)
    d.m.visible = true
    d.life = 10 // следы от пуль исчезают через 10 секунд
  }

  /* ================= grenade ================= */

  private throwNade() {
    if (this.nades <= 0 || this.state !== 'playing') return
    this.nades--
    this.sfx.pin()
    const m = new THREE.Mesh(
      new THREE.SphereGeometry(0.09, 10, 8),
      new THREE.MeshStandardMaterial({ color: 0x3d4a2c, roughness: 0.6 })
    )
    m.castShadow = true
    this.camera.getWorldPosition(this.tmpV)
    this.camera.getWorldDirection(this.tmpD)
    m.position.copy(this.tmpV).addScaledVector(this.tmpD, 0.5)
    const v = this.tmpD.clone().multiplyScalar(13.5)
    v.y += 3.4
    v.x += this.vel.x * 0.35
    v.z += this.vel.z * 0.35
    this.scene.add(m)
    this.nadesFly.push({ m, v, fuse: 1.45 })
  }

  private updateNades(dt: number) {
    for (let i = this.nadesFly.length - 1; i >= 0; i--) {
      const n = this.nadesFly[i]
      n.v.y -= 21 * dt
      n.m.position.addScaledVector(n.v, dt)
      const p = n.m.position
      // опора: земля или крыша блока
      const sup = groundSupport(p.x, p.z, p.y, 0.09, this.map.colliders)
      if (n.v.y <= 0 && p.y <= sup + 0.09) {
        p.y = sup + 0.09
        n.v.y = Math.abs(n.v.y) * 0.42
        n.v.x *= 0.72
        n.v.z *= 0.72
      }
      // simple AABB bounce (только о стенки ниже верха гранаты)
      for (const c of this.map.colliders) {
        if (p.x > c.minX - 0.09 && p.x < c.maxX + 0.09 && p.z > c.minZ - 0.09 && p.z < c.maxZ + 0.09 && p.y < c.top) {
          const dxL = p.x - (c.minX - 0.09)
          const dxR = (c.maxX + 0.09) - p.x
          const dzN = p.z - (c.minZ - 0.09)
          const dzF = (c.maxZ + 0.09) - p.z
          const m = Math.min(dxL, dxR, dzN, dzF)
          if (m === dxL) { p.x = c.minX - 0.09; n.v.x = -Math.abs(n.v.x) * 0.5 }
          else if (m === dxR) { p.x = c.maxX + 0.09; n.v.x = Math.abs(n.v.x) * 0.5 }
          else if (m === dzN) { p.z = c.minZ - 0.09; n.v.z = -Math.abs(n.v.z) * 0.5 }
          else { p.z = c.maxZ + 0.09; n.v.z = Math.abs(n.v.z) * 0.5 }
        }
      }
      n.fuse -= dt
      const s = n.fuse < 0.5 ? 1 + Math.sin(this.time * 30) * 0.15 : 1
      n.m.scale.set(s, s, s)
      if (n.fuse <= 0) {
        this.explode(p.clone())
        this.scene.remove(n.m)
        this.nadesFly.splice(i, 1)
      }
    }
  }

  private explode(at: THREE.Vector3) {
    this.sfx.boom()
    this.boomLight.position.copy(at)
    this.boomLight.intensity = 260
    this.boomFlash.position.copy(at)
    this.boomT = 0.3
    this.shake = Math.min(1.4, this.shake + 0.9)
    this.burst(at, 0xff9040, 26, 9, 0.7, 5)
    this.burst(at, 0xffe0a0, 18, 12, 0.4, 6)
    this.burst(at, 0x55504a, 20, 5, 1.1, 2)
    for (const b of this.bots) {
      if (!b.alive) continue
      const d = b.group.position.distanceTo(at)
      if (d < 6.5) {
        const killed = b.hit('body', 130 * (1 - d / 6.5))
        if (killed) this.onBotKilled(b, false)
      }
    }
    const pd = Math.hypot(this.pos.x - at.x, this.pos.z - at.z)
    if (pd < 5.5) this.damagePlayer(50 * (1 - pd / 5.5), at)
  }

  /* ================= particles / tracers ================= */

  private burst(at: THREE.Vector3, color: number, count: number, speed: number, life: number, gravity = 9) {
    for (let i = 0; i < count; i++) {
      let p = this.particles.find((q) => q.life <= 0)
      if (!p) {
        if (this.particles.length > (PERF_LOW ? 90 : 280)) return
        const m = new THREE.Mesh(
          new THREE.BoxGeometry(0.06, 0.06, 0.06),
          new THREE.MeshBasicMaterial({ color, transparent: true })
        )
        this.scene.add(m)
        p = { m, v: new THREE.Vector3(), g: gravity, life: 0, max: 1 }
        this.particles.push(p)
      }
      ;(p.m.material as THREE.MeshBasicMaterial).color.set(color)
      p.m.visible = true
      p.m.position.copy(at)
      p.v.set((Math.random() - 0.5) * 2, Math.random() * 1.4, (Math.random() - 0.5) * 2).normalize().multiplyScalar(speed * (0.4 + Math.random() * 0.8))
      p.g = gravity
      p.max = life * (0.6 + Math.random() * 0.7)
      p.life = p.max
      const sc = 0.6 + Math.random()
      p.m.scale.set(sc, sc, sc)
    }
  }

  private spawnTracer(from: THREE.Vector3, to: THREE.Vector3, color: number) {
    const t = this.tracers.find((q) => q.life <= 0)
    if (!t) return
    const mid = from.clone().add(to).multiplyScalar(0.5)
    const len = from.distanceTo(to)
    t.m.position.copy(mid)
    t.m.scale.set(0.022, 0.022, Math.max(0.1, len))
    t.m.lookAt(to)
    const mat = t.m.material as THREE.MeshBasicMaterial
    mat.color.set(color)
    mat.opacity = 0.85
    t.m.visible = true
    t.life = 0.07
  }

  private updateFx(dt: number) {
    // particles
    for (const p of this.particles) {
      if (p.life <= 0) continue
      p.life -= dt
      if (p.life <= 0) { p.m.visible = false; continue }
      p.v.y -= p.g * dt
      p.m.position.addScaledVector(p.v, dt)
      if (p.m.position.y < 0.02) { p.m.position.y = 0.02; p.v.y = Math.abs(p.v.y) * 0.3; p.v.x *= 0.7; p.v.z *= 0.7 }
      ;(p.m.material as THREE.MeshBasicMaterial).opacity = Math.min(1, p.life / p.max * 1.4)
    }
    // гильзы
    for (const s of this.shells) {
      if (s.life <= 0) continue
      s.life -= dt
      if (s.life <= 0) { s.m.visible = false; continue }
      s.v.y -= 13 * dt
      s.m.position.addScaledVector(s.v, dt)
      if (s.m.position.y < 0.02) {
        s.m.position.y = 0.02
        s.v.y = Math.abs(s.v.y) * 0.35
        s.v.x *= 0.6
        s.v.z *= 0.6
        s.rv.multiplyScalar(0.5)
      }
      s.m.rotation.x += s.rv.x * dt
      s.m.rotation.y += s.rv.y * dt
      s.m.rotation.z += s.rv.z * dt
    }
    // декали попаданий
    for (const d of this.decals) {
      if (d.life <= 0) continue
      d.life -= dt
      if (d.life <= 0) { d.m.visible = false; continue }
      ;(d.m.material as THREE.MeshBasicMaterial).opacity = Math.min(0.7, d.life * 0.5)
    }
    // tracers
    for (const t of this.tracers) {
      if (t.life <= 0) continue
      t.life -= dt
      if (t.life <= 0) { t.m.visible = false; continue }
      ;(t.m.material as THREE.MeshBasicMaterial).opacity = (t.life / 0.07) * 0.85
    }
    // muzzle flash + lights
    if (this.flashT > 0) {
      this.flashT -= dt
      this.setFlashOpacity(Math.max(0, this.flashT / 0.04))
    } else {
      this.setFlashOpacity(0)
    }
    this.gunLight.intensity = Math.max(0, this.gunLight.intensity - dt * 260)
    if (this.boomT > 0) {
      this.boomT -= dt
      const k = Math.max(0, this.boomT / 0.3)
      this.boomLight.intensity = k * 260
      this.boomFlash.material.opacity = k * 0.95
      const sc = 6 + (1 - k) * 9
      this.boomFlash.scale.set(sc, sc, 1)
    } else if (this.boomFlash.material.opacity > 0) {
      this.boomFlash.material.opacity = 0
    }
    // recoil / shake decay
    this.recoilPitch *= Math.exp(-9 * dt)
    this.recoilYaw *= Math.exp(-9 * dt)
    this.kick = Math.max(0, this.kick - dt * 9)
    this.shake = Math.max(0, this.shake - dt * 2.6)
  }

  private setFlashOpacity(o: number) {
    this.flash.traverse((c) => {
      const mesh = c as THREE.Mesh
      if (mesh.material) (mesh.material as THREE.MeshBasicMaterial).opacity = o
    })
  }

  /* ================= main loop ================= */

  private loop = () => {
    this.raf = requestAnimationFrame(this.loop)
    const dt = Math.min(0.05, this.clock.getDelta())
    this.time += dt

    // замеры первые ~3 секунды боя: если FPS < 25 — дополнительно упрощаем
    if (!this.degraded && this.state !== 'attract' && this.perfFrames < 180) {
      this.perfAcc += dt
      this.perfFrames++
      if (this.perfFrames === 180 && this.perfAcc / 180 > 0.04) {
        this.degraded = true
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, PERF_LOW ? 0.66 : 1.1))
        this.composer.setSize(this.container.clientWidth, this.container.clientHeight)
        if (this.bloomPass) this.bloomPass.enabled = false
      }
    }

    const dust = this.scene.getObjectByName('dust')
    if (dust) dust.rotation.y += dt * 0.012
    const clouds = this.scene.getObjectByName('clouds')
    if (clouds) clouds.rotation.y += dt * 0.007

    if (this.state === 'attract') {
      this.attractT += dt * 0.09
      const r = 17
      this.camera.position.set(Math.sin(this.attractT) * r, 7.5 + Math.sin(this.attractT * 0.6) * 2, Math.cos(this.attractT) * r)
      this.camera.lookAt(0, 1.2, 0)
      this.weapon.visible = false
    } else {
      this.weapon.visible = true
      if (this.state === 'playing') this.updatePlaying(dt)
      else if (this.state === 'dying') this.updateDying(dt)
      this.updateFx(dt)
      if (this.state !== 'playing') this.updateNades(dt)
    }

    // скрываем системный курсор на время боя
    const el = this.renderer.domElement
    const wantCursor = this.state === 'playing' || this.state === 'dying' ? 'none' : ''
    if (el.dataset.cur !== wantCursor) {
      el.dataset.cur = wantCursor
      el.style.cursor = wantCursor
    }

    this.composer.render()
  }

  private updateDying(dt: number) {
    this.deathT += dt
    this.camera.position.set(this.pos.x, Math.max(0.45, this.pos.y + 1.55 - this.deathT * 1.4), this.pos.z)
    this.camera.rotation.set(this.pitch * 0.4 - this.deathT * 0.25, this.yaw, Math.min(1.15, this.deathT * 1.6))
    if (this.deathT > 1.9) this.endRound(false)
  }

  private updatePlaying(dt: number) {
    // ---- обзор с сенсорной зоны (накопленные дельты) ----
    if (this.lookDX !== 0 || this.lookDY !== 0) {
      const sens = 0.0042 * this.sens
      this.yaw -= this.lookDX * sens
      this.pitch = Math.max(-1.45, Math.min(1.45, this.pitch - this.lookDY * sens))
      this.lookDX = 0
      this.lookDY = 0
    }

    // ---- movement (клавиатура + виртуальный джойстик) ----
    const clamp = (v: number) => Math.max(-1, Math.min(1, v))
    const f = clamp(((this.keys['KeyW'] ? 1 : 0) - (this.keys['KeyS'] ? 1 : 0)) + this.joyY)
    const s = clamp(((this.keys['KeyD'] ? 1 : 0) - (this.keys['KeyA'] ? 1 : 0)) + this.joyX)
    const walk = !!this.keys['ShiftLeft'] || !!this.keys['ShiftRight']
    const wcfg = WEAPONS[this.equipped]
    const speed = (walk ? 2.6 : 5.7) * wcfg.speed * (this.scoped ? 0.42 : 1)
    const sin = Math.sin(this.yaw)
    const cos = Math.cos(this.yaw)
    let wx = -sin * f + cos * s
    let wz = -cos * f - sin * s
    const wl = Math.hypot(wx, wz)
    if (wl > 0.01) { wx = (wx / wl) * speed; wz = (wz / wl) * speed }
    else { wx = 0; wz = 0 }
    const k = this.onGround ? 1 - Math.exp(-13 * dt) : 1 - Math.exp(-3.2 * dt)
    this.vel.x += (wx - this.vel.x) * k
    this.vel.z += (wz - this.vel.z) * k

    if ((this.keys['Space'] || this.touchJump) && this.onGround) {
      this.vel.y = 9.0
      this.onGround = false
      this.sfx.jump()
    }
    this.touchJump = false
    this.vel.y = Math.max(-18, this.vel.y - 24 * dt)
    this.pos.y += this.vel.y * dt

    // горизонтальное движение (низкие препятствия перешагиваются, collideMove учитывает высоту)
    collideMove(this.pos, this.vel.x * dt, this.vel.z * dt, 0.42, this.map.colliders, this.map.bounds)

    // опора под игроком: земля или верх блока; прилипаем при падении
    const sup = groundSupport(this.pos.x, this.pos.z, this.pos.y, 0.42, this.map.colliders)
    if (this.vel.y <= 0 && this.pos.y <= sup) {
      this.pos.y = sup
      this.vel.y = 0
      this.onGround = true
    } else {
      this.onGround = this.pos.y <= sup + 0.03
    }

    const hSpeed = Math.hypot(this.vel.x, this.vel.z)
    if (this.onGround && hSpeed > 0.6) {
      this.bobT += hSpeed * dt * 1.5
      this.stepAcc += hSpeed * dt
      const stride = walk ? 2.4 : 1.9
      if (this.stepAcc > stride) { this.stepAcc = 0; this.sfx.step() }
    }
    const bob = this.onGround && hSpeed > 0.6 ? Math.sin(this.bobT * 2) * 0.032 * Math.min(1, hSpeed / 5) : 0

    // camera
    const shX = (Math.random() - 0.5) * this.shake * 0.05
    const shY = (Math.random() - 0.5) * this.shake * 0.05
    const shR = (Math.random() - 0.5) * this.shake * 0.03
    this.camera.position.set(this.pos.x + shX, this.pos.y + 1.55 + bob + shY, this.pos.z)
    this.camera.rotation.set(this.pitch + this.recoilPitch + shY * 0.4, this.yaw + this.recoilYaw, shR)

    // scope fov
    const targetFov = this.scoped ? 18 : 75
    if (Math.abs(this.camera.fov - targetFov) > 0.05) {
      this.camera.fov += (targetFov - this.camera.fov) * Math.min(1, 16 * dt)
      this.camera.updateProjectionMatrix()
    }

    // weapon anim
    const w = this.weapon
    w.visible = !this.scoped
    const dip = Math.sin(Math.min(1, this.switchAnim) * Math.PI) * (this.switchAnim >= 1 ? 0 : 0.16)
    const targetX = 0.24 + Math.sin(this.bobT) * 0.006 * Math.min(1, hSpeed / 5) - this.vel.x * 0.004 * cos - this.vel.z * 0.004 * -sin
    w.position.x += (targetX - w.position.x) * Math.min(1, 12 * dt)
    w.position.y = -0.22 + Math.abs(Math.cos(this.bobT)) * 0.008 * Math.min(1, hSpeed / 5) - dip
    w.position.z = -0.45 + this.kick * 0.055
    let rotX = this.kick * 0.1
    if (this.reloading) rotX -= Math.sin(Math.min(1, 1 - this.reloadT / this.reloadTotal) * Math.PI) * 0.85
    if (this.switchAnim < 1) rotX -= Math.sin(this.switchAnim * Math.PI) * 0.5
    w.rotation.x = rotX
    w.rotation.z = this.kick * 0.02

    // spread
    const moving = hSpeed > 1.2
    this.spread = Math.max(0, this.spread - dt * wcfg.recover * (moving ? 0.45 : 1) - (this.onGround && !moving ? dt * 1.2 : 0))

    // timers
    const cfg = WEAPONS[this.equipped]
    this.cooldown = Math.max(0, this.cooldown - dt)
    this.switchAnim = Math.min(1, this.switchAnim + dt / 0.28)
    if (this.reloading) {
      this.reloadT -= dt
      if (this.reloadT <= 0) {
        this.reloading = false
        const a = this.ammo[this.equipped]
        const take = Math.min(cfg.mag - a.mag, a.res)
        a.mag += take
        a.res -= take
      }
    }
    if (this.firing && cfg.auto) this.tryShoot()

    // ---- bots ----
    const eye = this.tmpV.set(this.pos.x, this.pos.y + 1.55, this.pos.z)
    let alive = 0
    for (let i = this.bots.length - 1; i >= 0; i--) {
      const b = this.bots[i]
      const keep = b.update(dt, eye)
      if (b.alive) alive++
      if (!keep) {
        b.dispose(this.scene)
        this.bots.splice(i, 1)
      }
    }
    // separation
    for (let i = 0; i < this.bots.length; i++) {
      for (let j = i + 1; j < this.bots.length; j++) {
        const a = this.bots[i].group.position
        const c = this.bots[j].group.position
        const dx = c.x - a.x
        const dz = c.z - a.z
        const d = Math.hypot(dx, dz)
        if (d < 0.9 && d > 0.001) {
          const push = ((0.9 - d) / 2)
          a.x -= (dx / d) * push
          a.z -= (dz / d) * push
          c.x += (dx / d) * push
          c.z += (dz / d) * push
        }
      }
    }

    this.updateNades(dt)

    // ---- round timer / end ----
    this.roundT -= dt
    if (alive === 0 && this.bots.every((b) => !b.alive)) {
      // wait a beat so death anim starts
      this.roundT = Math.max(this.roundT, 0.9)
      this.endRound(true)
    } else if (this.roundT <= 0) {
      this.roundT = 0
      this.endRound(false)
    }

    // ---- hud ----
    const ammoNow = this.ammo[this.equipped]
    this.hooks.hud({
      hp: Math.max(0, Math.ceil(this.hp)),
      armor: Math.max(0, Math.ceil(this.armor)),
      mag: ammoNow.mag,
      res: ammoNow.res,
      nades: this.nades,
      timer: Math.max(0, Math.ceil(this.roundT)),
      spreadPx: Math.round(this.scoped ? 2 : 5 + this.spread * 30 + (moving ? 4 : 0)),
      enemies: alive,
      reloading: this.reloading,
      weapon: `${WEAPON_ORDER.indexOf(this.equipped) + 1}·${WEAPONS[this.equipped].short}`,
      melee: !!WEAPONS[this.equipped].melee,
    })
    this.hooks.radar({
      px: this.pos.x,
      pz: this.pos.z,
      yaw: this.yaw,
      dots: this.bots.filter((b) => b.alive).map((b) => ({ x: b.group.position.x, z: b.group.position.z })),
    })
  }
}
