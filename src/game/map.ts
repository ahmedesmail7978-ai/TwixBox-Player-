import * as THREE from 'three'

export interface AABB { minX: number; maxX: number; minZ: number; maxZ: number; top: number }

export interface MapData {
  solids: THREE.Mesh[]
  colliders: AABB[]
  bounds: AABB
  botSpawns: { x: number; z: number }[]
  playerSpawn: { x: number; z: number }
}

export const STEP_HEIGHT = 0.45   // автоподъём (поребрики, ступени, мешки)
export const SNAP_DOWN = 0.6      // «прилипание» к опоре при падении

const IS_TOUCH = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)

function canvasTex(size: number, draw: (g: CanvasRenderingContext2D, s: number) => void, rx = 1, ry = 1) {
  const cv = document.createElement('canvas')
  cv.width = cv.height = size
  const g = cv.getContext('2d')!
  draw(g, size)
  const t = new THREE.CanvasTexture(cv)
  t.wrapS = t.wrapT = THREE.RepeatWrapping
  t.repeat.set(rx, ry)
  t.colorSpace = THREE.SRGBColorSpace
  t.anisotropy = 8
  return t
}

function speckle(g: CanvasRenderingContext2D, s: number, n: number, colors: string[], alpha: number) {
  for (let i = 0; i < n; i++) {
    g.fillStyle = colors[(Math.random() * colors.length) | 0]
    g.globalAlpha = alpha * (0.4 + Math.random() * 0.6)
    const r = 1 + Math.random() * 2.4
    g.fillRect(Math.random() * s, Math.random() * s, r, r)
  }
  g.globalAlpha = 1
}

/* ======================= ТЕКСТУРЫ ======================= */

function drawGround(g: CanvasRenderingContext2D, s: number) {
  g.fillStyle = '#c2a878'
  g.fillRect(0, 0, s, s)
  // уплотнённые пятна грунта
  g.globalAlpha = 0.16
  for (let i = 0; i < 22; i++) {
    g.fillStyle = i % 2 ? '#8f7448' : '#dcc596'
    g.beginPath()
    g.ellipse(Math.random() * s, Math.random() * s, 16 + Math.random() * 46, 10 + Math.random() * 30, Math.random() * 3, 0, 7)
    g.fill()
  }
  g.globalAlpha = 1
  speckle(g, s, 3400, ['#b09463', '#d4bc8c', '#a8895a', '#cbb283', '#9b7f50'], 0.5)
  // трещины
  g.globalAlpha = 0.22
  g.strokeStyle = '#7d6238'
  g.lineWidth = 1.2
  for (let i = 0; i < 10; i++) {
    let x = Math.random() * s
    let y = Math.random() * s
    g.beginPath()
    g.moveTo(x, y)
    for (let k = 0; k < 6; k++) {
      x += (Math.random() - 0.5) * 46
      y += (Math.random() - 0.5) * 46
      g.lineTo(x, y)
    }
    g.stroke()
  }
  // камешки
  g.globalAlpha = 0.5
  for (let i = 0; i < 46; i++) {
    g.fillStyle = ['#8d7a52', '#a3906a', '#6f5c3a'][(Math.random() * 3) | 0]
    g.beginPath()
    g.ellipse(Math.random() * s, Math.random() * s, 1.6 + Math.random() * 2.6, 1.2 + Math.random() * 2, Math.random() * 3, 0, 7)
    g.fill()
  }
  // редкая сухая трава
  g.globalAlpha = 0.5
  g.strokeStyle = '#7a7440'
  g.lineWidth = 1
  for (let i = 0; i < 40; i++) {
    const x = Math.random() * s
    const y = Math.random() * s
    for (let b = 0; b < 3; b++) {
      g.beginPath()
      g.moveTo(x + b * 2 - 2, y)
      g.lineTo(x + b * 2 - 2 + (Math.random() - 0.5) * 5, y - 4 - Math.random() * 4)
      g.stroke()
    }
  }
  // следы колёс
  g.globalAlpha = 0.1
  g.strokeStyle = '#6e5a38'
  g.lineWidth = 9
  for (const off of [0, 26]) {
    g.beginPath()
    g.moveTo(off, 0)
    g.bezierCurveTo(off + 40, s * 0.3, off - 30, s * 0.7, off + 20, s)
    g.stroke()
  }
  g.globalAlpha = 1
}

function drawBricks(g: CanvasRenderingContext2D, s: number, stained: boolean) {
  g.fillStyle = '#c9b183'
  g.fillRect(0, 0, s, s)
  const bh = 32
  const bw = 64
  for (let row = 0; row < s / bh; row++) {
    const shift = row % 2 ? bw / 2 : 0
    for (let col = -1; col < s / bw + 1; col++) {
      const x = col * bw + shift
      const y = row * bh
      const tone = 0.9 + Math.random() * 0.2
      g.fillStyle = `rgb(${(201 * tone) | 0},${(177 * tone) | 0},${(131 * tone) | 0})`
      g.fillRect(x + 2, y + 2, bw - 4, bh - 4)
      speckle(g, s, 24, ['#b39a6c', '#d8c39a', '#a58c5e'], 0.32)
      g.globalAlpha = 0.25
      g.fillStyle = '#8f7a52'
      g.fillRect(x + 2, y + bh - 5, bw - 4, 3)
      g.globalAlpha = 1
    }
    g.fillStyle = '#a08a5f'
    g.fillRect(0, row * bh, s, 2)
  }
  // сколы и выбоины
  g.globalAlpha = 0.3
  for (let i = 0; i < (stained ? 16 : 8); i++) {
    g.fillStyle = '#6e5b3d'
    g.beginPath()
    const x = Math.random() * s
    const y = Math.random() * s
    g.moveTo(x, y)
    for (let k = 0; k < 5; k++) g.lineTo(x + (Math.random() - 0.5) * 26, y + (Math.random() - 0.5) * 22)
    g.closePath()
    g.fill()
  }
  // потёки
  g.globalAlpha = 0.14
  for (let i = 0; i < 10; i++) {
    const x = Math.random() * s
    g.fillStyle = '#6e5b3d'
    g.fillRect(x, 0, 4 + Math.random() * 9, 30 + Math.random() * 90)
  }
  g.globalAlpha = 1
}

function drawStucco(g: CanvasRenderingContext2D, s: number) {
  g.fillStyle = '#c4ad82'
  g.fillRect(0, 0, s, s)
  speckle(g, s, 1900, ['#b09a70', '#d3bd92', '#a28b60'], 0.4)
  // цокольная полоса
  g.fillStyle = '#a68d60'
  g.fillRect(0, s - 46, s, 46)
  g.fillStyle = '#8f7850'
  g.fillRect(0, s - 46, s, 4)
  // трещины
  g.globalAlpha = 0.28
  g.strokeStyle = '#77623e'
  g.lineWidth = 1.4
  for (let i = 0; i < 7; i++) {
    let x = Math.random() * s
    let y = Math.random() * s * 0.7
    g.beginPath()
    g.moveTo(x, y)
    for (let k = 0; k < 7; k++) {
      x += (Math.random() - 0.5) * 30
      y += Math.random() * 22
      g.lineTo(x, y)
    }
    g.stroke()
  }
  // следы пуль
  g.globalAlpha = 0.5
  for (let i = 0; i < 14; i++) {
    const x = Math.random() * s
    const y = Math.random() * s
    g.fillStyle = '#5f4c30'
    g.beginPath()
    g.arc(x, y, 2, 0, 7)
    g.fill()
    g.fillStyle = '#3f3120'
    g.beginPath()
    g.arc(x, y, 1, 0, 7)
    g.fill()
  }
  g.globalAlpha = 1
}

function drawCrate(g: CanvasRenderingContext2D, s: number) {
  g.fillStyle = '#8a5c2e'
  g.fillRect(0, 0, s, s)
  for (let y = 0; y < s; y += 42) {
    const tone = 0.92 + Math.random() * 0.16
    g.fillStyle = `rgb(${(138 * tone) | 0},${(92 * tone) | 0},${(46 * tone) | 0})`
    g.fillRect(0, y, s, 40)
    g.globalAlpha = 0.3
    g.strokeStyle = '#5f3d1c'
    for (let k = 0; k < 7; k++) {
      const yy = y + 4 + Math.random() * 34
      g.beginPath()
      g.moveTo(0, yy)
      g.bezierCurveTo(s * 0.3, yy + 3, s * 0.6, yy - 3, s, yy + 1)
      g.stroke()
    }
    g.globalAlpha = 1
    g.fillStyle = '#4e3115'
    g.fillRect(0, y + 39, s, 3)
  }
  speckle(g, s, 900, ['#7a4e24', '#9c6c3a', '#6b441f'], 0.4)
  g.strokeStyle = '#3f2810'
  g.lineWidth = 14
  g.strokeRect(4, 4, s - 8, s - 8)
  g.lineWidth = 10
  g.beginPath()
  g.moveTo(0, 0); g.lineTo(s, s)
  g.moveTo(s, 0); g.lineTo(0, s)
  g.stroke()
  g.save()
  g.translate(s / 2, s / 2)
  g.rotate(-0.06)
  g.font = '900 46px Rubik, sans-serif'
  g.textAlign = 'center'
  g.textBaseline = 'middle'
  g.fillStyle = 'rgba(232,222,192,0.85)'
  g.fillText('AMMO', 0, -10)
  g.font = '700 22px Rubik, sans-serif'
  g.fillStyle = 'rgba(122,40,28,0.85)'
  g.fillText('7.62×39', 0, 30)
  g.restore()
  g.fillStyle = '#2c1c0a'
  for (const [x, y] of [[14, 14], [s - 14, 14], [14, s - 14], [s - 14, s - 14], [s / 2, s / 2]]) {
    g.beginPath()
    g.arc(x, y, 4, 0, 7)
    g.fill()
  }
}

function drawContainer(g: CanvasRenderingContext2D, s: number, base: string, logo: string) {
  g.fillStyle = base
  g.fillRect(0, 0, s, s)
  for (let x = 0; x < s; x += 16) {
    g.fillStyle = 'rgba(0,0,0,0.32)'
    g.fillRect(x, 0, 6, s)
    g.fillStyle = 'rgba(255,255,255,0.12)'
    g.fillRect(x + 8, 0, 3, s)
  }
  speckle(g, s, 1400, ['rgba(0,0,0,.4)', 'rgba(255,255,255,.12)'], 0.35)
  g.globalAlpha = 0.24
  for (let i = 0; i < 14; i++) {
    const x = Math.random() * s
    g.fillStyle = '#6e3418'
    g.fillRect(x, Math.random() * s * 0.4, 3 + Math.random() * 7, 30 + Math.random() * 90)
  }
  g.globalAlpha = 1
  g.font = '900 44px Rubik, sans-serif'
  g.textAlign = 'center'
  g.fillStyle = 'rgba(240,235,220,0.92)'
  g.fillText(logo, s / 2, s / 2 + 12)
  g.strokeStyle = 'rgba(240,235,220,0.5)'
  g.lineWidth = 3
  g.strokeRect(26, s / 2 - 38, s - 52, 82)
  g.strokeStyle = 'rgba(0,0,0,0.55)'
  g.lineWidth = 12
  g.strokeRect(2, 2, s - 4, s - 4)
}

function drawBarrel(g: CanvasRenderingContext2D, s: number) {
  g.fillStyle = '#7a3a2a'
  g.fillRect(0, 0, s, s)
  speckle(g, s, 700, ['rgba(0,0,0,.4)', 'rgba(255,255,255,.1)'], 0.4)
  g.fillStyle = 'rgba(0,0,0,0.5)'
  g.fillRect(0, 10, s, 7)
  g.fillRect(0, s - 17, s, 7)
  g.save()
  g.fillStyle = '#d8b23a'
  g.fillRect(0, s / 2 - 16, s, 32)
  g.beginPath()
  g.rect(0, s / 2 - 16, s, 32)
  g.clip()
  g.fillStyle = '#171310'
  for (let x = -32; x < s + 32; x += 32) {
    g.beginPath()
    g.moveTo(x, s / 2 + 16)
    g.lineTo(x + 16, s / 2 - 16)
    g.lineTo(x + 32, s / 2 - 16)
    g.lineTo(x + 16, s / 2 + 16)
    g.fill()
  }
  g.restore()
  g.font = '900 20px Rubik, sans-serif'
  g.textAlign = 'center'
  g.fillStyle = 'rgba(240,230,210,0.85)'
  g.fillText('FUEL', s / 2, s / 2 - 26)
}

function drawPlanks(g: CanvasRenderingContext2D, s: number, base: string) {
  g.fillStyle = base
  g.fillRect(0, 0, s, s)
  for (let y = 0; y < s; y += 36) {
    const tone = 0.9 + Math.random() * 0.18
    g.fillStyle = `rgba(0,0,0,${0.16 - tone * 0.06})`
    g.fillRect(0, y, s, 34)
    g.globalAlpha = 0.35
    g.strokeStyle = 'rgba(40,24,8,0.7)'
    for (let k = 0; k < 5; k++) {
      const yy = y + 3 + Math.random() * 28
      g.beginPath()
      g.moveTo(0, yy)
      g.bezierCurveTo(s * 0.3, yy + 2, s * 0.7, yy - 2, s, yy + 1)
      g.stroke()
    }
    g.globalAlpha = 1
    g.fillStyle = 'rgba(30,18,6,0.75)'
    g.fillRect(0, y + 33, s, 3)
    g.fillStyle = '#241505'
    g.beginPath(); g.arc(8, y + 17, 3, 0, 7); g.fill()
    g.beginPath(); g.arc(s - 8, y + 17, 3, 0, 7); g.fill()
  }
  speckle(g, s, 500, ['rgba(40,24,8,.5)', 'rgba(255,220,170,.12)'], 0.4)
}

function drawAwning(g: CanvasRenderingContext2D, s: number) {
  const cols = ['#a8432e', '#d8c9a4']
  for (let x = 0; x < s; x += 32) {
    g.fillStyle = cols[(x / 32) % 2]
    g.fillRect(x, 0, 32, s)
  }
  g.globalAlpha = 0.16
  for (let y = 0; y < s; y += 4) {
    g.fillStyle = y % 8 ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)'
    g.fillRect(0, y, s, 2)
  }
  g.globalAlpha = 0.25
  speckle(g, s, 700, ['rgba(60,20,10,.6)', 'rgba(255,240,210,.3)'], 0.3)
  g.globalAlpha = 1
  g.fillStyle = 'rgba(60,25,12,0.85)'
  g.fillRect(0, s - 10, s, 10)
}

function drawTire(g: CanvasRenderingContext2D, s: number) {
  g.fillStyle = '#1d1e20'
  g.fillRect(0, 0, s, s)
  for (let x = 0; x < s; x += 14) {
    g.fillStyle = 'rgba(255,255,255,0.05)'
    g.fillRect(x, 0, 6, s)
    g.fillStyle = 'rgba(0,0,0,0.55)'
    g.fillRect(x + 7, 0, 5, s)
  }
  g.fillStyle = 'rgba(255,255,255,0.14)'
  g.fillRect(0, s / 2 - 8, s, 3)
  g.fillRect(0, s / 2 + 6, s, 2)
}

function drawTrunk(g: CanvasRenderingContext2D, s: number) {
  g.fillStyle = '#8a7350'
  g.fillRect(0, 0, s, s)
  for (let y = 0; y < s; y += 22) {
    g.fillStyle = y % 44 ? '#6f5a3c' : '#9c855e'
    g.fillRect(0, y, s, 20)
    g.fillStyle = 'rgba(40,28,14,0.6)'
    g.beginPath()
    for (let x = 0; x <= s; x += 12) {
      const yy = y + 18 + Math.sin(x * 0.5) * 3
      if (x === 0) g.moveTo(x, yy)
      else g.lineTo(x, yy)
    }
    g.lineTo(s, y + 22); g.lineTo(0, y + 22)
    g.fill()
  }
  speckle(g, s, 500, ['rgba(50,36,18,.4)', 'rgba(210,185,140,.2)'], 0.4)
}

function drawFrond(g: CanvasRenderingContext2D, s: number) {
  g.clearRect(0, 0, s, s)
  const cx = s / 2
  // центральный стебель
  g.strokeStyle = '#3f5a28'
  g.lineWidth = 5
  g.beginPath()
  g.moveTo(cx, 8)
  g.quadraticCurveTo(cx, s * 0.6, cx, s - 10)
  g.stroke()
  // перья
  for (let y = 20; y < s - 16; y += 12) {
    const t = y / s
    const len = Math.sin(t * Math.PI) * (s * 0.46) + 12
    for (const dir of [-1, 1]) {
      g.fillStyle = `rgba(${62 + ((t * 40) | 0)},${104 - ((t * 30) | 0)},40,0.95)`
      g.beginPath()
      g.moveTo(cx, y)
      g.quadraticCurveTo(cx + dir * len * 0.55, y - 8, cx + dir * len, y + 14)
      g.quadraticCurveTo(cx + dir * len * 0.5, y + 10, cx, y + 6)
      g.closePath()
      g.fill()
    }
  }
}

function drawCloud(g: CanvasRenderingContext2D, s: number) {
  g.clearRect(0, 0, s, s)
  for (let i = 0; i < 12; i++) {
    const x = s * 0.2 + Math.random() * s * 0.6
    const y = s * 0.35 + Math.random() * s * 0.35
    const r = s * (0.1 + Math.random() * 0.14)
    const grad = g.createRadialGradient(x, y, 1, x, y, r)
    grad.addColorStop(0, 'rgba(255,252,244,0.85)')
    grad.addColorStop(1, 'rgba(255,252,244,0)')
    g.fillStyle = grad
    g.beginPath()
    g.arc(x, y, r, 0, 7)
    g.fill()
  }
}

function radialGlow(color: string) {
  const cv = document.createElement('canvas')
  cv.width = cv.height = 128
  const g = cv.getContext('2d')!
  const grad = g.createRadialGradient(64, 64, 4, 64, 64, 64)
  grad.addColorStop(0, color)
  grad.addColorStop(1, 'rgba(0,0,0,0)')
  g.fillStyle = grad
  g.fillRect(0, 0, 128, 128)
  return new THREE.CanvasTexture(cv)
}

/* ======================= ДВИЖЕНИЕ ======================= */

export function collideMove(pos: THREE.Vector3, dx: number, dz: number, r: number, cols: AABB[], bounds?: AABB) {
  const step = STEP_HEIGHT
  let nx = pos.x + dx
  for (const c of cols) {
    if (c.top <= pos.y + step) continue
    if (nx + r > c.minX && nx - r < c.maxX && pos.z + r > c.minZ && pos.z - r < c.maxZ) {
      if (dx > 0) nx = Math.min(nx, c.minX - r)
      else if (dx < 0) nx = Math.max(nx, c.maxX + r)
    }
  }
  pos.x = nx
  let nz = pos.z + dz
  for (const c of cols) {
    if (c.top <= pos.y + step) continue
    if (pos.x + r > c.minX && pos.x - r < c.maxX && nz + r > c.minZ && nz - r < c.maxZ) {
      if (dz > 0) nz = Math.min(nz, c.minZ - r)
      else if (dz < 0) nz = Math.max(nz, c.maxZ + r)
    }
  }
  pos.z = nz
  if (bounds) {
    pos.x = Math.max(bounds.minX + r, Math.min(bounds.maxX - r, pos.x))
    pos.z = Math.max(bounds.minZ + r, Math.min(bounds.maxZ - r, pos.z))
  }
}

export function groundSupport(x: number, z: number, feetY: number, r: number, cols: AABB[]): number {
  let sup = 0
  for (const c of cols) {
    if (c.top <= feetY + SNAP_DOWN && c.top > sup &&
      x + r > c.minX && x - r < c.maxX && z + r > c.minZ && z - r < c.maxZ) {
      sup = c.top
    }
  }
  return sup
}

/* ======================= КАРТА ======================= */

export function buildMap(sceneArg: THREE.Scene, detailed = true): MapData {
  // вся карта живёт в группе — так её можно масштабировать целиком
  const scene = new THREE.Group()
  const solids: THREE.Mesh[] = []
  const colliders: AABB[] = []
  const S = 1.5 // масштаб мира: арена 60×60 м

  const groundTex = canvasTex(256, drawGround, 10, 10)
  const matGround = new THREE.MeshStandardMaterial({ map: groundTex, roughness: 1 })

  const wallTexBig = canvasTex(256, (g, s) => drawBricks(g, s, true), 17, 2)
  const wallTexSmall = canvasTex(256, (g, s) => drawBricks(g, s, false), 6, 2)
  const stuccoTex = canvasTex(256, drawStucco, 5, 2)
  const matWall = new THREE.MeshStandardMaterial({ map: wallTexBig, roughness: 0.95 })
  const matWallSmall = new THREE.MeshStandardMaterial({ map: wallTexSmall, roughness: 0.95 })
  const matStucco = new THREE.MeshStandardMaterial({ map: stuccoTex, roughness: 0.92 })

  const crateTex = canvasTex(256, drawCrate)
  const contRustTex = canvasTex(256, (g, s) => drawContainer(g, s, '#9c4f28', 'MIRAGE'), 2, 1)
  const contOliveTex = canvasTex(256, (g, s) => drawContainer(g, s, '#57613c', 'DUST'), 2, 1)
  const barrelTex = canvasTex(128, drawBarrel, 2, 1)
  const matCrate = new THREE.MeshStandardMaterial({ map: crateTex, roughness: 0.9 })
  const matRust = new THREE.MeshStandardMaterial({ map: contRustTex, roughness: 0.7, metalness: 0.3 })
  const matOlive = new THREE.MeshStandardMaterial({ map: contOliveTex, roughness: 0.7, metalness: 0.3 })
  const matBarrel = new THREE.MeshStandardMaterial({ map: barrelTex, roughness: 0.65, metalness: 0.35 })
  const matSandbag = new THREE.MeshStandardMaterial({ color: 0xb3a06f, roughness: 1 })

  const deckTex = canvasTex(128, (g, s) => drawPlanks(g, s, '#8d6b3e'), 2, 2)
  const matDeck = new THREE.MeshStandardMaterial({ map: deckTex, roughness: 0.92 })
  const fenceTex = canvasTex(128, (g, s) => drawPlanks(g, s, '#7c5d34'), 3, 1)
  const matFence = new THREE.MeshStandardMaterial({ map: fenceTex, roughness: 0.95, side: THREE.DoubleSide })
  const awningTex = canvasTex(128, drawAwning, 4, 1)
  const matAwning = new THREE.MeshStandardMaterial({ map: awningTex, roughness: 0.85, side: THREE.DoubleSide })
  const matTire = new THREE.MeshStandardMaterial({ map: canvasTex(64, drawTire, 3, 1), roughness: 0.9 })
  const trunkTex = canvasTex(64, drawTrunk, 2, 3)
  const matTrunk = new THREE.MeshStandardMaterial({ map: trunkTex, roughness: 0.95 })
  const frondTex = canvasTex(128, drawFrond)
  const matFrond = new THREE.MeshStandardMaterial({ map: frondTex, transparent: true, alphaTest: 0.45, side: THREE.DoubleSide, roughness: 0.9 })
  const matMetalDark = new THREE.MeshStandardMaterial({ color: 0x23262b, roughness: 0.6, metalness: 0.5 })
  const matPole = new THREE.MeshStandardMaterial({ color: 0x4a4f55, roughness: 0.7, metalness: 0.4 })

  const addBox = (w: number, h: number, d: number, x: number, y: number, z: number, mat: THREE.Material, collide = true, ry = 0) => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat)
    m.position.set(x, y, z)
    m.rotation.y = ry
    m.castShadow = true
    m.receiveShadow = true
    scene.add(m)
    solids.push(m)
    if (collide) colliders.push({ minX: x - w / 2, maxX: x + w / 2, minZ: z - d / 2, maxZ: z + d / 2, top: y + h / 2 })
    return m
  }

  const addCyl = (r: number, h: number, x: number, y: number, z: number, mat: THREE.Material, collide = true) => {
    const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r * 1.06, h, 16), mat)
    m.position.set(x, y, z)
    m.castShadow = true
    m.receiveShadow = true
    scene.add(m)
    solids.push(m)
    if (collide) colliders.push({ minX: x - r, maxX: x + r, minZ: z - r, maxZ: z + r, top: y + h / 2 })
    return m
  }

  const decal = (tex: THREE.Texture, w: number, x: number, z: number, ry = 0, opacity = 1) => {
    const m = new THREE.Mesh(
      new THREE.PlaneGeometry(w, w),
      new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity, depthWrite: false })
    )
    m.rotation.x = -Math.PI / 2
    m.rotation.z = ry
    m.position.set(x, 0.02, z)
    m.renderOrder = 1
    scene.add(m)
  }

  /* ---------- земля ---------- */
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(64, 64), matGround)
  ground.rotation.x = -Math.PI / 2
  ground.receiveShadow = true
  scene.add(ground)
  solids.push(ground)

  /* ---------- периметр ---------- */
  addBox(42, 5, 1, 0, 2.5, -20.5, matWall)
  addBox(42, 5, 1, 0, 2.5, 20.5, matWall)
  addBox(1, 5, 42, -20.5, 2.5, 0, matWall)
  addBox(1, 5, 42, 20.5, 2.5, 0, matWall)

  // окна-ниши на стенах (декор)
  const winFrame = new THREE.MeshStandardMaterial({ color: 0x5c4c33, roughness: 0.9 })
  const winGlass = new THREE.MeshStandardMaterial({ color: 0x1c2733, roughness: 0.25, metalness: 0.6 })
  const windowAt = (x: number, z: number, ry: number) => {
    const grp = new THREE.Group()
    const frame = new THREE.Mesh(new THREE.BoxGeometry(1.3, 1.6, 0.12), winFrame)
    const glass = new THREE.Mesh(new THREE.BoxGeometry(1.0, 1.3, 0.14), winGlass)
    const sill = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.1, 0.3), winFrame)
    sill.position.y = -0.85
    grp.add(frame, glass, sill)
    frame.castShadow = true
    grp.position.set(x, 2.6, z)
    grp.rotation.y = ry
    scene.add(grp)
  }
  windowAt(-8, -19.95, 0)
  windowAt(5, -19.95, 0)
  windowAt(19.95, -6, Math.PI / 2)
  windowAt(-19.95, 9, Math.PI / 2)

  // кондиционер на стене
  const ac = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.62, 0.42), new THREE.MeshStandardMaterial({ color: 0xb8b2a2, roughness: 0.8 }))
  ac.position.set(-2.5, 3.1, -19.75)
  ac.castShadow = true
  scene.add(ac)
  solids.push(ac)

  /* ---------- средние постройки ---------- */
  addBox(10, 3, 0.9, -6, 1.5, -2, matStucco)
  addBox(0.9, 3, 9, 7, 1.5, 4, matStucco)
  addBox(7, 3, 0.9, 12, 1.5, -8, matWallSmall)
  addBox(0.9, 3, 7, -13, 1.5, 7, matWallSmall)

  // граффити-стрелки на постройках (декали на стенах)
  const arrowTex = (() => {
    const cv = document.createElement('canvas')
    cv.width = 128; cv.height = 64
    const g = cv.getContext('2d')!
    g.clearRect(0, 0, 128, 64)
    g.fillStyle = 'rgba(225,80,40,0.8)'
    g.beginPath()
    g.moveTo(8, 20); g.lineTo(78, 20); g.lineTo(78, 8); g.lineTo(120, 32); g.lineTo(78, 56); g.lineTo(78, 44); g.lineTo(8, 44)
    g.closePath()
    g.fill()
    const t = new THREE.CanvasTexture(cv)
    t.colorSpace = THREE.SRGBColorSpace
    return t
  })()
  const wallDecal = (x: number, y: number, z: number, ry: number) => {
    const m = new THREE.Mesh(
      new THREE.PlaneGeometry(2.2, 1.1),
      new THREE.MeshBasicMaterial({ map: arrowTex, transparent: true, depthWrite: false })
    )
    m.position.set(x, y, z)
    m.rotation.y = ry
    scene.add(m)
  }
  wallDecal(-6, 1.7, -1.53, Math.PI)
  wallDecal(12, 1.7, -7.53, Math.PI)

  /* ---------- контейнеры ---------- */
  addBox(6.4, 2.9, 2.7, -12, 1.45, -9, matRust)
  addBox(6.4, 2.9, 2.7, 12, 1.45, 10, matOlive)

  /* ---------- ящики ---------- */
  const crate = (x: number, z: number, stack = 1) => {
    addBox(1.4, 1.4, 1.4, x, 0.7, z, matCrate)
    if (stack > 1) addBox(1.4, 1.4, 1.4, x, 2.1, z, matCrate)
  }
  crate(-3, 13, 2)
  crate(4.2, 9)
  crate(-14, -4)
  crate(14, -13, 2)
  crate(0.5, -6)
  crate(9.5, 2)
  crate(-8.5, 2.5)
  crate(16.5, 5)
  crate(-16.5, 13)
  crate(6, -15)
  crate(-5, -13)
  crate(10.8, 8.6)

  /* ---------- бочки ---------- */
  const barrel = (x: number, z: number) => addCyl(0.45, 1.15, x, 0.575, z, matBarrel)
  barrel(-1.6, -11); barrel(-0.6, -11.4); barrel(10.5, 15); barrel(-10.5, 15.5); barrel(2.5, 1.5)

  /* ---------- мешки с песком (перешагиваются) ---------- */
  addBox(2.6, 0.85, 0.8, -7, 0.42, 9, matSandbag)
  addBox(2.6, 0.85, 0.8, 9, 0.42, -2.5, matSandbag)
  addBox(0.8, 0.85, 2.6, -2, 0.42, 5.5, matSandbag)

  /* ---------- СТОРОЖЕВАЯ ВЫШКА С ЛЕСТНИЦЕЙ ---------- */
  const tx = 16.3
  const tz = 15.2
  const platTop = 2.3
  // опоры
  for (const [ox, oz] of [[-1.5, -1.5], [1.5, -1.5], [-1.5, 1.5], [1.5, 1.5]]) {
    addBox(0.24, platTop, 0.24, tx + ox, platTop / 2, tz + oz, matPole)
  }
  // площадка
  addBox(3.6, 0.3, 3.6, tx, platTop - 0.15, tz, matDeck)
  // лестница (6 ступеней по 0.38 — заходим пешком с запада)
  for (let i = 0; i < 6; i++) {
    const h = 0.38 * (6 - i)
    addBox(0.5, h, 1.3, tx - 2.05 - i * 0.5, h / 2, tz, matDeck)
  }
  // перила (не коллизии) с проходом у лестницы
  addBox(0.06, 0.95, 1.3, tx - 1.78, platTop + 0.47, tz - 1.12, matPole, false)
  addBox(0.06, 0.95, 1.3, tx - 1.78, platTop + 0.47, tz + 1.12, matPole, false)
  addBox(3.6, 0.95, 0.06, tx, platTop + 0.47, tz - 1.78, matPole, false)
  addBox(3.6, 0.95, 0.06, tx, platTop + 0.47, tz + 1.78, matPole, false)
  // крыша
  addBox(0.14, 1.7, 0.14, tx - 1.6, platTop + 0.85, tz - 1.6, matPole, false)
  addBox(0.14, 1.7, 0.14, tx + 1.6, platTop + 0.85, tz - 1.6, matPole, false)
  addBox(0.14, 1.7, 0.14, tx - 1.6, platTop + 0.85, tz + 1.6, matPole, false)
  addBox(0.14, 1.7, 0.14, tx + 1.6, platTop + 0.85, tz + 1.6, matPole, false)
  const roof = addBox(4.1, 0.12, 4.1, tx, platTop + 1.78, tz, matAwning, false)
  roof.rotation.z = 0.06
  // мешки на вышке — укрытие
  addBox(1.5, 0.55, 0.55, tx - 1.45, platTop + 0.27, tz - 0.6, matSandbag)
  addBox(1.5, 0.55, 0.55, tx - 1.45, platTop + 0.27, tz + 0.6, matSandbag)

  /* ---------- ТОРГОВЫЙ НАВЕС ---------- */
  const sx = -13.2
  const sz = 13.4
  addBox(2.6, 0.95, 0.9, sx, 0.475, sz, matDeck)                       // прилавок (перепрыгивается)
  addBox(0.09, 2.3, 0.09, sx - 1.5, 1.15, sz - 0.55, matPole)
  addBox(0.09, 2.3, 0.09, sx + 1.5, 1.15, sz - 0.55, matPole)
  const canopy = addBox(3.6, 0.07, 2.1, sx, 2.25, sz + 0.25, matAwning, false)
  canopy.rotation.x = 0.22
  addBox(0.5, 0.5, 0.5, sx - 0.7, 1.2, sz, matCrate)                    // товары на прилавке
  addBox(0.42, 0.42, 0.42, sx + 0.55, 1.16, sz + 0.1, matCrate)

  /* ---------- ФОНАРИ ---------- */
  const lampAt = (x: number, z: number) => {
    addCyl(0.07, 3.4, x, 1.7, z, matPole)
    addBox(0.7, 0.07, 0.07, x + 0.32, 3.36, z, matPole, false)
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.12, 0.2), new THREE.MeshStandardMaterial({ color: 0x2a2d31, roughness: 0.6 }))
    head.position.set(x + 0.66, 3.3, z)
    head.castShadow = true
    scene.add(head)
    solids.push(head)
    const bulb = new THREE.Mesh(new THREE.CircleGeometry(0.07, 12), new THREE.MeshBasicMaterial({ color: 0xfff2c8 }))
    bulb.rotation.x = Math.PI / 2
    bulb.position.set(x + 0.66, 3.235, z)
    scene.add(bulb)
    if (!IS_TOUCH) {
      const pl = new THREE.PointLight(0xffdf9e, 7, 9, 2)
      pl.position.set(x + 0.66, 3.1, z)
      scene.add(pl)
    }
  }
  lampAt(-4.5, 8.5)
  lampAt(8.5, -4.5)

  /* ---------- ЗАБОР ---------- */
  for (let i = 0; i < 3; i++) {
    addBox(3, 1.5, 0.09, -6 + i * 3.05, 0.75, -18.6, matFence)
    addBox(0.12, 1.7, 0.12, -7.5 + i * 3.05, 0.85, -18.6, matPole)
  }
  addBox(0.12, 1.7, 0.12, 1.6, 0.85, -18.6, matPole)

  /* ---------- ПАЛЛЕТЫ С ГРУЗОМ ---------- */
  addBox(1.7, 0.16, 1.25, 2, 0.08, 12.5, matDeck)
  addBox(1.7, 0.16, 1.25, 2, 0.24, 12.5, matDeck)
  addBox(0.95, 0.95, 0.95, 2.05, 0.8, 12.5, matCrate)

  /* ---------- ШИНЫ ---------- */
  const tire = (x: number, y: number, z: number) => {
    const t = new THREE.Mesh(new THREE.CylinderGeometry(0.52, 0.52, 0.34, 18), matTire)
    t.position.set(x, y, z)
    t.castShadow = true
    t.receiveShadow = true
    scene.add(t)
    solids.push(t)
  }
  tire(-8.2, 0.17, -8.2)
  tire(-8.2, 0.51, -8.2)
  tire(-8.2, 0.85, -8.2)
  colliders.push({ minX: -8.7, maxX: -7.7, minZ: -8.7, maxZ: -7.7, top: 1.02 })
  tire(-9.3, 0.17, -7.6)

  /* ---------- ПАЛЬМЫ ---------- */
  const palm = (x: number, z: number, h: number) => {
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.22, h, 10), matTrunk)
    trunk.position.set(x, h / 2, z)
    trunk.rotation.z = 0.06
    trunk.castShadow = true
    scene.add(trunk)
    solids.push(trunk)
    colliders.push({ minX: x - 0.24, maxX: x + 0.24, minZ: z - 0.24, maxZ: z + 0.24, top: 0.3 })
    for (let i = 0; i < 7; i++) {
      const fr = new THREE.Mesh(new THREE.PlaneGeometry(2.7, 0.85), matFrond)
      fr.position.set(x, h - 0.05, z)
      fr.rotation.y = (i / 7) * Math.PI * 2
      fr.rotateX(-0.55 - Math.random() * 0.25)
      fr.translateZ(1.2)
      fr.castShadow = true
      scene.add(fr)
      solids.push(fr)
    }
  }
  palm(-18.2, 18.2, 4.6)
  palm(18.4, -17.8, 5.2)
  palm(-17.8, -16.5, 4.2)

  /* ---------- ДЕКАЛИ НА ЗЕМЛЕ ---------- */
  const siteTex = (letter: string, color: string) => {
    const cv = document.createElement('canvas')
    cv.width = cv.height = 256
    const g = cv.getContext('2d')!
    g.clearRect(0, 0, 256, 256)
    g.strokeStyle = color
    g.globalAlpha = 0.75
    g.lineWidth = 14
    g.beginPath()
    g.arc(128, 128, 96, 0, 7)
    g.stroke()
    g.font = '900 150px Rubik, sans-serif'
    g.textAlign = 'center'
    g.textBaseline = 'middle'
    g.fillStyle = color
    g.fillText(letter, 128, 138)
    const t = new THREE.CanvasTexture(cv)
    t.colorSpace = THREE.SRGBColorSpace
    return t
  }
  decal(siteTex('A', 'rgba(220,190,120,0.9)'), 3.4, 13.5, -13.5, 0.3, 0.55)
  decal(siteTex('B', 'rgba(220,190,120,0.9)'), 3.4, -13.5, 13.8, -0.2, 0.55)

  // следы шин
  const skidTex = (() => {
    const cv = document.createElement('canvas')
    cv.width = 64; cv.height = 256
    const g = cv.getContext('2d')!
    g.clearRect(0, 0, 64, 256)
    g.fillStyle = 'rgba(60,48,30,0.5)'
    for (const x of [10, 40]) {
      g.fillRect(x, 0, 9, 256)
      g.fillStyle = 'rgba(130,110,75,0.5)'
      for (let y = 0; y < 256; y += 14) g.fillRect(x + 2, y, 5, 5)
      g.fillStyle = 'rgba(60,48,30,0.5)'
    }
    const t = new THREE.CanvasTexture(cv)
    t.wrapS = t.wrapT = THREE.RepeatWrapping
    t.colorSpace = THREE.SRGBColorSpace
    return t
  })()
  const skid = (x: number, z: number, w: number, l: number, ry: number) => {
    const m = new THREE.Mesh(
      new THREE.PlaneGeometry(w, l),
      new THREE.MeshBasicMaterial({ map: skidTex, transparent: true, opacity: 0.4, depthWrite: false })
    )
    m.rotation.x = -Math.PI / 2
    m.rotation.z = ry
    m.position.set(x, 0.015, z)
    m.renderOrder = 1
    scene.add(m)
  }
  skid(-1.2, -8, 1.1, 16, 0.06)
  skid(4.5, 6, 1.1, 10, -0.4)

  // тёмные пятна грунта
  const dirtTex = (() => {
    const cv = document.createElement('canvas')
    cv.width = cv.height = 128
    const g = cv.getContext('2d')!
    g.clearRect(0, 0, 128, 128)
    const grad = g.createRadialGradient(64, 64, 6, 64, 64, 62)
    grad.addColorStop(0, 'rgba(80,62,38,0.5)')
    grad.addColorStop(1, 'rgba(80,62,38,0)')
    g.fillStyle = grad
    g.fillRect(0, 0, 128, 128)
    const t = new THREE.CanvasTexture(cv)
    return t
  })()
  for (const [x, z, sc] of [[-12, -9, 9], [12, 10, 9], [0.5, -6, 3.5], [-13.2, 13.4, 5], [16.3, 15.2, 6.5]] as const) {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(sc, sc), new THREE.MeshBasicMaterial({ map: dirtTex, transparent: true, depthWrite: false }))
    m.rotation.x = -Math.PI / 2
    m.position.set(x, 0.012, z)
    m.renderOrder = 1
    scene.add(m)
  }

  /* ---------- камни ---------- */
  const pebGeo = new THREE.BoxGeometry(0.09, 0.05, 0.09)
  const pebMat = new THREE.MeshStandardMaterial({ color: 0x9b8a63, roughness: 1 })
  for (let i = 0; i < (detailed ? 170 : 70); i++) {
    const p = new THREE.Mesh(pebGeo, pebMat)
    p.position.set((Math.random() - 0.5) * 56, 0.02, (Math.random() - 0.5) * 56)
    p.rotation.y = Math.random() * Math.PI
    const s = 0.5 + Math.random() * 1.6
    p.scale.set(s, 0.4 + Math.random(), s)
    p.receiveShadow = true
    scene.add(p)
  }

  /* ---------- солнце + облака ---------- */
  const sun = new THREE.Mesh(new THREE.CircleGeometry(6, 24), new THREE.MeshBasicMaterial({ color: 0xfff3d0, fog: false }))
  sun.position.set(-38, 34, -52)
  sun.lookAt(0, 0, 0)
  scene.add(sun)
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({
    map: radialGlow('rgba(255,235,190,0.95)'), color: 0xffe6b8, transparent: true, opacity: 0.85,
    blending: THREE.AdditiveBlending, depthWrite: false, fog: false,
  }))
  glow.position.set(-38, 34, -51)
  glow.scale.set(32, 32, 1)
  scene.add(glow)

  const clouds = new THREE.Group()
  clouds.name = 'clouds'
  const cloudTex = canvasTex(256, drawCloud)
  const cloudN = detailed ? 8 : 4
  for (let i = 0; i < cloudN; i++) {
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({
      map: cloudTex, transparent: true, opacity: 0.75, depthWrite: false, fog: false,
    }))
    const a = (i / cloudN) * Math.PI * 2
    const r = 42 + Math.random() * 26
    sp.position.set(Math.cos(a) * r, 21 + Math.random() * 10, Math.sin(a) * r)
    const sc = 16 + Math.random() * 14
    sp.scale.set(sc, sc * 0.55, 1)
    clouds.add(sp)
  }
  scene.add(clouds)

  // пылинки
  const dustN = detailed ? 240 : 110
  const dustGeo = new THREE.BufferGeometry()
  const dustPos = new Float32Array(dustN * 3)
  for (let i = 0; i < dustN; i++) {
    dustPos[i * 3] = (Math.random() - 0.5) * 56
    dustPos[i * 3 + 1] = Math.random() * 6
    dustPos[i * 3 + 2] = (Math.random() - 0.5) * 56
  }
  dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3))
  const dust = new THREE.Points(dustGeo, new THREE.PointsMaterial({ color: 0xfff0c8, size: 0.05, transparent: true, opacity: 0.5 }))
  dust.name = 'dust'
  scene.add(dust)

  /* ---------- масштабирование мира ---------- */
  scene.scale.setScalar(S)
  sceneArg.add(scene)
  // повторы мировых текстур, чтобы кирпич/доски остались человеческого размера
  const worldTex = [groundTex, wallTexBig, wallTexSmall, stuccoTex, crateTex, contRustTex, contOliveTex, barrelTex, deckTex]
  for (const t of worldTex) {
    t.repeat.multiplyScalar(S)
    if (!detailed) t.anisotropy = 2
  }

  const bounds: AABB = { minX: -19.4 * S, maxX: 19.4 * S, minZ: -19.4 * S, maxZ: 19.4 * S, top: 5 * S }
  for (const c of colliders) {
    c.minX *= S; c.maxX *= S; c.minZ *= S; c.maxZ *= S; c.top *= S
  }

  return {
    solids,
    colliders,
    bounds,
    botSpawns: [
      { x: -15, z: -15 }, { x: -6, z: -17 }, { x: 6, z: -17 }, { x: 15, z: -15 },
      { x: -17, z: -3 }, { x: 17, z: -3 }, { x: -10, z: -9 }, { x: 10, z: -9 },
      { x: -17, z: 12 }, { x: 17, z: -13 },
    ].map((p) => ({ x: p.x * S, z: p.z * S })),
    playerSpawn: { x: 0, z: 16 * S },
  }
}
