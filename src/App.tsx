import { useEffect, useRef, useState, type RefObject } from 'react'
import { Game, IS_TOUCH, PERF_LOW, LOW_GPU } from './game/Game'
import type { BannerData, FeedEntry, HudData, OverData, RadarData, WheelState } from './game/Game'
import { detectLang, getLang, setLang, t, type Lang } from './game/i18n'
import {
  initYandex, isYandex, showFullscreenAdv, saveCloud, loadCloud,
  onPlatformPause, yandexLang, gameplayStop,
} from './game/yandex'

const WEAPON_LABELS = ['AK-47', 'UZI', 'P90', 'AWP', 'DEAGLE', 'НОЖ']

/* ---------- настройки и прогресс (пункты 1.9, 2.6, 6.2) ---------- */
export interface Settings { volume: number; sens: number; quality: 'auto' | 'high' | 'low'; lang: Lang }
const DEF_SETTINGS: Settings = { volume: 0.8, sens: 1, quality: 'auto', lang: 'ru' }
export interface Progress { wins: number; losses: number; kills: number; deaths: number; matches: number; bestKills: number }
const DEF_PROGRESS: Progress = { wins: 0, losses: 0, kills: 0, deaths: 0, matches: 0, bestKills: 0 }
const SETTINGS_KEY = 'cs3d_settings_v2'
const PROGRESS_KEY = 'cs3d_progress_v2'

function loadSettings(): Settings {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY)
    if (raw) return { ...DEF_SETTINGS, ...JSON.parse(raw) }
  } catch { /* noop */ }
  return { ...DEF_SETTINGS }
}
function persistSettings(s: Settings) { try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(s)) } catch { /* noop */ } }
function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(PROGRESS_KEY)
    if (raw) return { ...DEF_PROGRESS, ...JSON.parse(raw) }
  } catch { /* noop */ }
  return { ...DEF_PROGRESS }
}
function persistProgress(p: Progress) { try { localStorage.setItem(PROGRESS_KEY, JSON.stringify(p)) } catch { /* noop */ } }

type Screen = 'menu' | 'play' | 'paused' | 'over'

const setTxt = (el: HTMLElement | null, v: string) => {
  if (el && el.dataset.v !== v) {
    el.dataset.v = v
    el.textContent = v
  }
}

const retrigger = (el: HTMLElement | null, cls: string) => {
  if (!el) return
  el.classList.remove(cls)
  void el.offsetWidth
  el.classList.add(cls)
}

/* ---------- tiny inline icons ---------- */
const SkullIcon = () => (
  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 fill-current"><path d="M8 1a6 6 0 0 0-6 6c0 2.2 1.2 4 3 5v3h2v-2h2v2h2v-3c1.8-1 3-2.8 3-5a6 6 0 0 0-6-6zM5.5 9A1.5 1.5 0 1 1 7 7.5 1.5 1.5 0 0 1 5.5 9zm5 0A1.5 1.5 0 1 1 12 7.5 1.5 1.5 0 0 1 10.5 9z" /></svg>
)
const ShieldIcon = () => (
  <svg viewBox="0 0 16 16" className="h-4 w-4 fill-current"><path d="M8 1 2 3.5v4C2 11.6 4.6 14.6 8 15.5c3.4-.9 6-3.9 6-8v-4L8 1z" /></svg>
)
const NadeIcon = ({ dim }: { dim?: boolean }) => (
  <svg viewBox="0 0 16 16" className={`h-4 w-4 ${dim ? 'opacity-25' : ''}`}><path className="fill-current" d="M9 2h3v1.5h-2l-1 1.6A5 5 0 1 1 6.2 4L9 2z" /><circle cx="8" cy="9.5" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.4" /></svg>
)
const GunTag = () => (
  <span className="mx-1.5 rounded-sm border border-[#3a4a5c] bg-[#141c25] px-1.5 py-px text-[10px] font-semibold tracking-wider text-[#9fb2c6]">AK-47</span>
)

/* ---------- сенсорная кнопка ---------- */
function TBtn({ children, className, onDown, onUp, title }: {
  children: React.ReactNode; className?: string; onDown?: () => void; onUp?: () => void; title?: string
}) {
  return (
    <button
      aria-label={title}
      className={`pointer-events-auto flex touch-none select-none items-center justify-center rounded-full border font-display transition-transform duration-75 active:scale-90 ${className ?? ''}`}
      onPointerDown={(e) => { e.stopPropagation(); e.currentTarget.setPointerCapture(e.pointerId); onDown?.() }}
      onPointerUp={(e) => { e.stopPropagation(); onUp?.() }}
      onPointerCancel={(e) => { e.stopPropagation(); onUp?.() }}
      onContextMenu={(e) => e.preventDefault()}
    >
      {children}
    </button>
  )
}

/* ---------- мобильное управление: джойстик + обзор + кнопки ---------- */
function TouchControls({ game, activeWeapon, onSelectWeapon, onPause }: {
  game: () => Game | null
  activeWeapon: number
  onSelectWeapon: (i: number) => void
  onPause: () => void
}) {
  const layerRef = useRef<HTMLDivElement>(null)
  const baseRef = useRef<HTMLDivElement>(null)
  const knobRef = useRef<HTMLDivElement>(null)
  const R = 54
  const pts = useRef<Record<number, { role: 'move' | 'look'; ox: number; oy: number; lx: number; ly: number }>>({})

  const hideJoy = () => {
    game()?.setMoveInput(0, 0)
    if (baseRef.current) baseRef.current.style.opacity = '0'
    if (knobRef.current) knobRef.current.style.transform = 'translate(0px,0px)'
  }

  const onDown = (e: React.PointerEvent) => {
    if (e.pointerType === 'mouse') return
    const rect = layerRef.current!.getBoundingClientRect()
    const role: 'move' | 'look' = e.clientX < rect.width * 0.42 ? 'move' : 'look'
    if (role === 'move' && Object.values(pts.current).some((p) => p.role === 'move')) return
    ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
    pts.current[e.pointerId] = { role, ox: e.clientX, oy: e.clientY, lx: e.clientX, ly: e.clientY }
    if (role === 'move' && baseRef.current) {
      baseRef.current.style.opacity = '1'
      baseRef.current.style.left = `${e.clientX}px`
      baseRef.current.style.top = `${e.clientY}px`
    }
  }
  const onMove = (e: React.PointerEvent) => {
    const p = pts.current[e.pointerId]
    if (!p) return
    if (p.role === 'move') {
      let dx = e.clientX - p.ox
      let dy = e.clientY - p.oy
      const len = Math.hypot(dx, dy)
      if (len > R) { dx = (dx / len) * R; dy = (dy / len) * R }
      if (knobRef.current) knobRef.current.style.transform = `translate(${dx}px,${dy}px)`
      game()?.setMoveInput(dx / R, -dy / R)
    } else {
      game()?.addLook(e.clientX - p.lx, e.clientY - p.ly)
      p.lx = e.clientX
      p.ly = e.clientY
    }
  }
  const onUp = (e: React.PointerEvent) => {
    const p = pts.current[e.pointerId]
    if (!p) return
    if (p.role === 'move') hideJoy()
    delete pts.current[e.pointerId]
  }

  const g = game
  return (
    <>
      {/* зоны джойстика (слева) и обзора (справа) */}
      <div
        ref={layerRef}
        className="absolute inset-0 z-30 touch-none"
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={onUp}
      />
      {/* джойстик */}
      <div ref={baseRef} className="pointer-events-none fixed z-30 -ml-[62px] -mt-[62px] h-[124px] w-[124px] rounded-full border-2 border-[#f2a33c]/40 bg-[#f2a33c]/5" style={{ opacity: 0 }}>
        <div ref={knobRef} className="absolute left-1/2 top-1/2 -ml-[26px] -mt-[26px] h-[52px] w-[52px] rounded-full border-2 border-[#f2a33c]/70 bg-[#f2a33c]/25" />
      </div>

      {/* оружие (слоты сверху) */}
      <div className="pointer-events-auto absolute left-1/2 top-16 z-40 flex -translate-x-1/2 gap-1">
        {WEAPON_LABELS.map((w, i) => (
          <TBtn
            key={w}
            title={w}
            onDown={() => onSelectWeapon(i)}
            className={`h-9 rounded-md px-2.5 text-[11px] tracking-wider ${
              activeWeapon === i
                ? 'border-[#f2a33c] bg-[#3a2a12]/90 text-[#f2a33c]'
                : 'border-[#2b3844] bg-[#12181f]/80 text-[#8b98a7]'
            }`}
          >
            <span className="skew-x-0">{i + 1}·{w}</span>
          </TBtn>
        ))}
      </div>

      {/* пауза (справа сверху) */}
      <TBtn title="Пауза" onDown={onPause} className="absolute right-3 top-3 z-40 h-10 w-10 border-[#2b3844] bg-[#12181f]/85 text-[#c8d2dd]">
        <svg viewBox="0 0 16 16" className="h-4 w-4 fill-current"><path d="M4 2h3v12H4zM9 2h3v12H9z" /></svg>
      </TBtn>

      {/* правый кластер действий */}
      <div className="absolute bottom-5 right-4 z-40 flex flex-col items-end gap-3">
        <div className="flex gap-3">
          <TBtn title="Прицел" onDown={() => g()?.doScope()} className="h-12 w-12 border-[#2b3844] bg-[#12181f]/85 text-[10px] text-[#c8d2dd]">ОПТ</TBtn>
          <TBtn title="Перезарядка" onDown={() => g()?.doReload()} className="h-12 w-12 border-[#2b3844] bg-[#12181f]/85 text-[10px] text-[#c8d2dd]">R</TBtn>
          <TBtn title="Граната" onDown={() => g()?.doGrenade()} className="h-12 w-12 border-[#2b3844] bg-[#12181f]/85 text-[#c9d68a]">
            <NadeIcon />
          </TBtn>
        </div>
        <div className="flex items-end gap-4">
          <TBtn title="Прыжок" onDown={() => g()?.doJump()} className="h-14 w-14 border-[#2b3844] bg-[#12181f]/85 text-[#c8d2dd]">
            <svg viewBox="0 0 16 16" className="h-5 w-5 fill-current"><path d="M8 2 2 9h4v5h4V9h4z" /></svg>
          </TBtn>
          <TBtn
            title="Огонь"
            onDown={() => g()?.setFiring(true)}
            onUp={() => g()?.setFiring(false)}
            className="h-20 w-20 border-2 border-[#e0453a] bg-[#e0453a]/25 text-[#ff8a80]"
          >
            <svg viewBox="0 0 16 16" className="h-8 w-8 fill-current"><circle cx="8" cy="8" r="3" /><path d="M8 1v3M8 12v3M1 8h3M12 8h3" stroke="currentColor" strokeWidth="1.6" /></svg>
          </TBtn>
        </div>
      </div>
    </>
  )
}

export default function App() {
  const mountRef = useRef<HTMLDivElement>(null)
  const gameRef = useRef<Game | null>(null)
  const radarRef = useRef<HTMLCanvasElement>(null)

  const [screen, setScreen] = useState<Screen>('menu')
  const [locked, setLocked] = useState(false)
  const [feed, setFeed] = useState<FeedEntry[]>([])
  const [banner, setBanner] = useState<(BannerData & { id: number }) | null>(null)
  const [over, setOver] = useState<OverData | null>(null)
  const [lowHp, setLowHp] = useState(false)
  const [nades, setNades] = useState(1)
  const [hint, setHint] = useState(false)
  const [scoped, setScoped] = useState(false)
  const [wheel, setWheel] = useState<WheelState | null>(null)
  const [melee, setMelee] = useState(false)
  const [isMobile] = useState(() => IS_TOUCH)
  const [activeWeapon, setActiveWeapon] = useState(2)
  const [settings, setSettings] = useState<Settings>(() => loadSettings())
  const [progress, setProgress] = useState<Progress>(() => loadProgress())
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [howtoOpen, setHowtoOpen] = useState(false)
  const [lang, setLangState] = useState<Lang>(() => getLang())
  const [portrait, setPortrait] = useState(false)

  // imperative HUD refs
  const hpRef = useRef<HTMLSpanElement>(null)
  const hpBarRef = useRef<HTMLDivElement>(null)
  const armorRef = useRef<HTMLSpanElement>(null)
  const armorBarRef = useRef<HTMLDivElement>(null)
  const magRef = useRef<HTMLSpanElement>(null)
  const resRef = useRef<HTMLSpanElement>(null)
  const timerRef = useRef<HTMLSpanElement>(null)
  const enemiesRef = useRef<HTMLSpanElement>(null)
  const scoreARef = useRef<HTMLSpanElement>(null)
  const scoreBRef = useRef<HTMLSpanElement>(null)
  const killsRef = useRef<HTMLSpanElement>(null)
  const xhRef = useRef<HTMLDivElement>(null)
  const hitRef = useRef<HTMLDivElement>(null)
  const vignetteRef = useRef<HTMLDivElement>(null)
  const arrowRotRef = useRef<HTMLDivElement>(null)
  const arrowFxRef = useRef<HTMLDivElement>(null)
  const reloadRef = useRef<HTMLDivElement>(null)
  const vignetteTimer = useRef(0)
  const bannerTimer = useRef(0)
  const weaponRef = useRef<HTMLSpanElement>(null)
  const meleeRef = useRef(false)
  const idc = useRef(0)
  const lowHpRef = useRef(false)
  const nadesRef = useRef(1)

  useEffect(() => {
    if (!mountRef.current) return

    const drawRadar = (d: RadarData) => {
      const cv = radarRef.current
      if (!cv) return
      const g = cv.getContext('2d')
      if (!g) return
      const S = 150
      const C = S / 2
      g.clearRect(0, 0, S, S)
      g.save()
      g.translate(C, C)
      g.beginPath(); g.arc(0, 0, C - 2, 0, 7)
      g.fillStyle = 'rgba(11,17,23,0.85)'
      g.fill()
      g.strokeStyle = 'rgba(242,163,60,0.55)'
      g.lineWidth = 1.5
      g.stroke()
      g.beginPath(); g.arc(0, 0, (C - 2) * 0.55, 0, 7)
      g.strokeStyle = 'rgba(139,152,167,0.22)'
      g.lineWidth = 1
      g.stroke()
      const k = (C - 8) / 32
      const cy = Math.cos(d.yaw)
      const sy = Math.sin(d.yaw)
      const rot = (dx: number, dz: number): [number, number] => [dx * cy - dz * sy, dx * sy + dz * cy]
      // map border
      g.strokeStyle = 'rgba(139,152,167,0.3)'
      g.beginPath()
      const corners: [number, number][] = [[-30, -30], [30, -30], [30, 30], [-30, 30]]
      corners.forEach(([x, z], i) => {
        const [rx, ry] = rot(x - d.px, z - d.pz)
        if (i === 0) g.moveTo(rx * k, ry * k)
        else g.lineTo(rx * k, ry * k)
      })
      g.closePath()
      g.stroke()
      // north tick
      const [nx, ny] = rot(0, -1)
      g.fillStyle = '#f2a33c'
      g.beginPath()
      g.arc(nx * (C - 9), ny * (C - 9), 2.4, 0, 7)
      g.fill()
      // enemy dots
      for (const dot of d.dots) {
        const [rx, ry] = rot(dot.x - d.px, dot.z - d.pz)
        const len = Math.hypot(rx, ry) * k
        if (len > C - 8) continue
        g.fillStyle = '#e0453a'
        g.fillRect(rx * k - 2.5, ry * k - 2.5, 5, 5)
      }
      // player arrow
      g.fillStyle = '#eae6dc'
      g.beginPath()
      g.moveTo(0, -6)
      g.lineTo(4.4, 5)
      g.lineTo(-4.4, 5)
      g.closePath()
      g.fill()
      g.restore()
    }

    const onHud = (h: HudData) => {
      setTxt(hpRef.current, String(h.hp))
      setTxt(armorRef.current, String(h.armor))
      if (hpBarRef.current) {
        hpBarRef.current.style.width = `${h.hp}%`
        hpBarRef.current.style.background = h.hp > 55 ? '#7fb069' : h.hp > 25 ? '#f2a33c' : '#e0453a'
      }
      if (armorBarRef.current) armorBarRef.current.style.width = `${h.armor}%`
      const magEl = magRef.current
      setTxt(magEl, String(h.mag))
      if (magEl) magEl.style.color = h.mag === 0 ? '#e0453a' : h.mag <= 5 ? '#f2a33c' : '#eae6dc'
      setTxt(resRef.current, `/ ${h.res}`)
      const mm = Math.floor(h.timer / 60)
      const ss = String(h.timer % 60).padStart(2, '0')
      setTxt(timerRef.current, `${mm}:${ss}`)
      if (timerRef.current) timerRef.current.classList.toggle('blink-fast', h.timer <= 10)
      setTxt(enemiesRef.current, `${t('enemies')}: ${h.enemies}`)
      if (xhRef.current) xhRef.current.style.setProperty('--g', `${h.spreadPx}px`)
      if (reloadRef.current) reloadRef.current.style.display = h.reloading ? 'block' : 'none'
      const isLow = h.hp > 0 && h.hp < 35
      if (isLow !== lowHpRef.current) {
        lowHpRef.current = isLow
        setLowHp(isLow)
      }
      if (h.nades !== nadesRef.current) {
        nadesRef.current = h.nades
        setNades(h.nades)
      }
      setTxt(weaponRef.current, h.weapon)
      const wi = parseInt(h.weapon, 10) - 1
      if (!Number.isNaN(wi)) setActiveWeapon((prev) => (prev === wi ? prev : wi))
      if (h.melee) {
        setTxt(magRef.current, '—')
        setTxt(resRef.current, '')
      }
      if (h.melee !== meleeRef.current) {
        meleeRef.current = h.melee
        setMelee(h.melee)
      }
    }

    const game = new Game(mountRef.current, {
      hud: onHud,
      score: (a, b) => { setTxt(scoreARef.current, String(a)); setTxt(scoreBRef.current, String(b)) },
      kills: (k) => setTxt(killsRef.current, String(k)),
      hitmark: (kind) => {
        const el = hitRef.current
        if (!el) return
        el.classList.toggle('kill', kind === 'kill')
        el.style.color = kind === 'kill' ? '#e0453a' : kind === 'head' ? '#f2a33c' : '#ffffff'
        retrigger(el, 'go')
      },
      damage: (amount, rel) => {
        const v = vignetteRef.current
        if (v) {
          v.style.transition = 'none'
          v.style.opacity = String(Math.min(0.9, 0.3 + amount / 40))
          window.clearTimeout(vignetteTimer.current)
          vignetteTimer.current = window.setTimeout(() => {
            if (v) {
              v.style.transition = 'opacity .5s ease'
              v.style.opacity = '0'
            }
          }, 90)
        }
        if (arrowRotRef.current) arrowRotRef.current.style.transform = `rotate(${rel}rad)`
        retrigger(arrowFxRef.current, 'show')
      },
      feed: (e) => {
        const id = ++idc.current
        setFeed((prev) => [{ ...e, id }, ...prev].slice(0, 5))
        window.setTimeout(() => setFeed((prev) => prev.filter((x) => x.id !== id)), 4200)
      },
      banner: (b) => {
        window.clearTimeout(bannerTimer.current)
        setBanner({ ...b, id: ++idc.current })
        bannerTimer.current = window.setTimeout(() => setBanner(null), 2700)
      },
      radar: drawRadar,
      over: (o) => { setOver(o); setScreen('over') },
      scoped: (s) => setScoped(s),
      wheel: (w) => setWheel(w),
      lockedChange: (l) => {
        setLocked(l)
        const g = gameRef.current
        if (!l && g && g.state === 'paused') setScreen('paused')
      },
    })
    gameRef.current = game
    // применяем сохранённые настройки при старте
    const s0 = loadSettings()
    game.setSettings({ volume: s0.volume, sens: s0.sens, quality: s0.quality })
    return () => {
      game.dispose()
      gameRef.current = null
    }
  }, [])

  /* ---------- Yandex SDK, язык, прогресс, ориентация, платформенная пауза ---------- */
  useEffect(() => {
    let offPause: (() => void) | null = null
    initYandex().then(() => {
      // автоопределение языка (пункт 2.14): SDK -> браузер
      const detected = isYandex() ? yandexLang() : detectLang()
      const saved = loadSettings()
      const useLang = saved.lang || detected
      setLang(useLang)
      setLangState(useLang)
      // облачный прогресс (пункт 1.9)
      loadCloud<Progress>().then((p) => { if (p) setProgress({ ...DEF_PROGRESS, ...p }) })
      offPause = onPlatformPause(() => {
        const g = gameRef.current
        if (g && g.state === 'playing') { g.pause(); setScreen('paused') }
      })
    })
    const onOrient = () => setPortrait(IS_TOUCH && window.innerHeight > window.innerWidth)
    onOrient()
    window.addEventListener('orientationchange', onOrient)
    window.addEventListener('resize', onOrient)
    return () => {
      window.removeEventListener('orientationchange', onOrient)
      window.removeEventListener('resize', onOrient)
      offPause?.()
    }
  }, [])

  /* ---------- сохранение настроек + применение к игре ---------- */
  const updateSettings = (patch: Partial<Settings>) => {
    const next = { ...settings, ...patch }
    setSettings(next)
    persistSettings(next)
    if (patch.lang) { setLang(patch.lang); setLangState(patch.lang) }
    gameRef.current?.setSettings({ volume: next.volume, sens: next.sens, quality: next.quality })
  }

  /* ---------- сохранение прогресса после матча (пункты 1.9, 2.6) ---------- */
  const saveMatchProgress = (o: OverData) => {
    const next: Progress = {
      wins: progress.wins + (o.result === 'victory' ? 1 : 0),
      losses: progress.losses + (o.result === 'defeat' ? 1 : 0),
      kills: progress.kills + o.kills,
      deaths: progress.deaths + o.deaths,
      matches: progress.matches + 1,
      bestKills: Math.max(progress.bestKills, o.kills),
    }
    setProgress(next)
    persistProgress(next)
    saveCloud(next)
  }

  const startGame = () => {
    setFeed([])
    setOver(null)
    setHint(true)
    window.setTimeout(() => setHint(false), 9000)
    setScreen('play')
    // пункт 1.6.1.1: полноэкранный режим на мобильных
    if (IS_TOUCH) {
      try {
        const el = document.documentElement
        if (el.requestFullscreen && !document.fullscreenElement) el.requestFullscreen().catch(() => {})
      } catch { /* noop */ }
    }
    gameRef.current?.startMatch()
  }

  // сохранение прогресса один раз за матч
  const savedFor = useRef<OverData | null>(null)
  useEffect(() => {
    if (over && savedFor.current !== over) {
      savedFor.current = over
      saveMatchProgress(over)
    }
  }, [over]) // eslint-disable-line react-hooks/exhaustive-deps

  // rewarded video: бонус к следующему матчу (пункт 4.5)
  const [adBonus, setAdBonus] = useState(false)
  const watchAdForBonus = () => {
    if (!isYandex()) return
    gameplayStop()
    gameRef.current?.setAudioPaused(true)
    showFullscreenAdv(() => {
      gameRef.current?.setAudioPaused(false)
      setAdBonus(true)
    })
  }

  /* ============================== render ============================== */

  return (
    <div className="font-body relative h-full w-full touch-none select-none overflow-hidden overscroll-none bg-[#0d1218] text-[#eae6dc]">
      <div ref={mountRef} className="absolute inset-0 touch-none" />

      {/* ============ HUD ============ */}
      {(screen === 'play' || screen === 'paused') && (
        <div className="pointer-events-none absolute inset-0 z-20">
          {/* weapon wheel */}
          {wheel && (
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="absolute inset-0 bg-[#0a0e13]/70" />
              <div className="relative h-[420px] w-[420px]">
                <div className="absolute left-1/2 top-1/2 h-[110px] w-[110px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#2b3844] bg-[#12181f]/90" />
                <div className="font-display absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                  <div className="text-[13px] tracking-widest text-[#f2a33c]">{wheel.items[wheel.active]?.short}</div>
                  <div className="mt-0.5 text-[9px] tracking-[0.2em] text-[#8b98a7]">{wheel.items[wheel.active]?.cat}</div>
                </div>
                {wheel.items.map((it, i) => {
                  const n = wheel.items.length
                  const ang = (i / n) * Math.PI * 2 - Math.PI / 2
                  const r = 165
                  const x = Math.cos(ang) * r
                  const y = Math.sin(ang) * r
                  const on = i === wheel.active
                  return (
                    <div
                      key={it.id}
                      className={`absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center border px-2.5 py-1.5 text-center transition-colors duration-75 ${
                        on ? 'border-[#f2a33c] bg-[#221409]/95' : 'border-[#2b3844] bg-[#12181f]/85'
                      }`}
                      style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
                    >
                      <span className={`font-display text-[12px] leading-tight ${on ? 'text-[#f2a33c]' : 'text-[#c8d2dd]'}`}>{it.short}</span>
                      <span className="text-[8px] tracking-[0.15em] text-[#8b98a7]">{it.cat}</span>
                    </div>
                  )
                })}
              </div>
              <div className="absolute bottom-14 left-1/2 -translate-x-1/2 text-[11px] font-semibold tracking-[0.25em] text-[#8b98a7]">
                ВЕДИТЕ МЫШЬ — ВЫБОР · ОТПУСТИТЕ TAB
              </div>
            </div>
          )}
          {/* ambient vignette */}
          <div className="pointer-events-none absolute inset-0 z-10" style={{ background: 'radial-gradient(ellipse at center, transparent 58%, rgba(4,7,11,0.45) 100%)' }} />
          {/* top center: score + timer */}
          <div className="absolute left-1/2 top-3 flex -translate-x-1/2 items-stretch">
            <div className="flex items-center gap-2 border border-[#2b4a63] bg-[#101b26]/90 px-4 py-1.5">
              <span className="text-[10px] font-bold tracking-widest text-[#6fb7e8]">ВЫ</span>
              <span ref={scoreARef} className="font-display text-xl leading-none text-[#6fb7e8]">0</span>
            </div>
            <div className="flex flex-col items-center justify-center border-y border-[#3a4a5c] bg-[#12181f]/95 px-5 py-1">
              <span ref={timerRef} className="font-display text-2xl leading-none tracking-wider">1:55</span>
              <span ref={enemiesRef} className="mt-0.5 text-[10px] font-semibold tracking-[0.2em] text-[#8b98a7]">ОСТАЛОСЬ: 0</span>
            </div>
            <div className="flex items-center gap-2 border border-[#5c3a24] bg-[#221409]/90 px-4 py-1.5">
              <span ref={scoreBRef} className="font-display text-xl leading-none text-[#f2a33c]">0</span>
              <span className="text-[10px] font-bold tracking-widest text-[#f2a33c]">БОТЫ</span>
            </div>
          </div>

          {/* radar + kills */}
          <div className="absolute left-4 top-4">
            <div className="relative">
              <canvas ref={radarRef} width={150} height={150} className="h-[150px] w-[150px]" />
              <div className="radar-sweep absolute inset-0 rounded-full border border-[#f2a33c]/30" />
            </div>
            <div className="mt-1.5 border border-[#2b3844] bg-[#12181f]/90 px-3 py-1 text-[11px] font-bold tracking-widest text-[#8b98a7]">
              УСТРАНЕНО: <span ref={killsRef} className="font-display text-sm text-[#f2a33c]">0</span>
            </div>

          </div>

          {/* kill feed */}
          <div className="absolute right-4 top-4 flex flex-col items-end gap-1">
            {feed.map((f) => (
              <div key={f.id} className="feed-in flex items-center border border-[#2b3844] bg-[#12181f]/90 px-2.5 py-1 text-[12px] font-semibold">
                <span className={f.byPlayer && f.killer === 'ВЫ' ? 'text-[#6fb7e8]' : 'text-[#f2a33c]'}>{f.killer}</span>
                {f.head ? <span className="mx-1.5 text-[#e0453a]"><SkullIcon /></span> : (f.killer === 'Снабжение' || f.killer === 'МАГАЗИН') ? <span className="mx-1.5 text-[#7fd08a]">»</span> : <GunTag />}
                <span className={f.victim === 'ВЫ' ? 'text-[#e0453a]' : 'text-[#c8d2dd]'}>{f.victim}</span>
              </div>
            ))}
          </div>

          {/* crosshair */}
          <div ref={xhRef} className="xh absolute left-1/2 top-1/2 z-10 h-0 w-0" style={{ display: scoped ? 'none' : undefined }}>
            <span className="xh-t" /><span className="xh-b" /><span className="xh-l" /><span className="xh-r" /><span className="xh-dot" />
          </div>
          {/* AWP scope */}
          {scoped && (
            <div className="pointer-events-none absolute inset-0 z-10">
              <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at center, transparent 27.5%, rgba(4,7,9,0.985) 29%)' }} />
              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-black/85" />
              <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-black/85" />
              <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/70" />
              <div className="absolute bottom-[16%] left-1/2 -translate-x-1/2 text-[10px] font-bold tracking-[0.3em] text-[#8b98a7]/70">
                AWP · 4× ОПТИКА
              </div>
            </div>
          )}
          {/* hitmarker */}
          <div ref={hitRef} className="hitmark absolute left-1/2 top-1/2 z-10 -ml-[11px] -mt-[11px]">
            <svg viewBox="0 0 22 22" className="h-[22px] w-[22px] stroke-current" strokeWidth="2.4" fill="none">
              <path d="M3 3 8 8M19 3l-5 5M3 19l5-5M19 19l-5-5" />
            </svg>
          </div>
          {/* damage direction arrow */}
          <div className="absolute left-1/2 top-1/2 z-10">
            <div ref={arrowFxRef} className="dmg-arrow">
              <div ref={arrowRotRef}>
                <svg viewBox="0 0 24 24" className="absolute -translate-x-1/2 fill-[#e0453a]" style={{ top: -116, left: 0, width: 26, height: 26, filter: 'drop-shadow(0 0 6px rgba(224,69,58,.8))' }}>
                  <path d="M12 2 22 18h-7v4h-6v-4H2z" />
                </svg>
              </div>
            </div>
          </div>

          {/* reload */}
          <div ref={reloadRef} className="blink-fast absolute left-1/2 top-[57%] -translate-x-1/2 text-[13px] font-bold tracking-[0.3em] text-[#f2a33c]" style={{ display: 'none' }}>
            ПЕРЕЗАРЯДКА
          </div>

          {/* banner */}
          {banner && (
            <div key={banner.id} className="absolute left-1/2 top-[30%] -translate-x-1/2 text-center">
              <div
                className="banner-in font-display text-5xl md:text-6xl"
                style={{
                  color: banner.tone === 'win' ? '#f2a33c' : banner.tone === 'lose' ? '#e0453a' : '#eae6dc',
                  textShadow: '0 4px 0 rgba(0,0,0,.55), 0 0 44px rgba(0,0,0,.6)',
                }}
              >
                {banner.title}
              </div>
              {banner.sub && (
                <div className="banner-sub-in mt-2 text-sm font-semibold tracking-[0.35em] text-[#c8d2dd] uppercase" style={{ textShadow: '0 2px 6px rgba(0,0,0,.8)' }}>
                  {banner.sub}
                </div>
              )}
            </div>
          )}

          {/* weapon hint (только десктоп) */}
          <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-1.5 border border-[#2b3844] bg-[#12181f]/85 px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-[#8b98a7] md:flex">
            <span className="key">TAB</span> АРСЕНАЛ · <span className="key">1–9</span> / КОЛЕСО — СМЕНА
          </div>

          {/* bottom left: health / armor */}
          <div className="absolute bottom-4 left-3 w-40 md:bottom-5 md:left-5 md:w-[240px]">
            <div className="flex items-end gap-3 border border-[#2b3844] bg-[#12181f]/90 px-4 py-2.5">
              <svg viewBox="0 0 24 24" className="mb-1 h-6 w-6 fill-[#e0453a]"><path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z" /></svg>
              <div className="flex-1">
                <div className="flex items-baseline justify-between">
                  <span ref={hpRef} className="font-display text-3xl leading-none">100</span>
                  <span className="text-[10px] font-bold tracking-widest text-[#8b98a7]">HP</span>
                </div>
                <div className="mt-1.5 h-[7px] w-full bg-[#232d38]">
                  <div ref={hpBarRef} className="h-full w-full transition-[width] duration-200" />
                </div>
              </div>
            </div>
            <div className="mt-1.5 flex items-center gap-3 border border-[#2b3844] bg-[#12181f]/90 px-4 py-2">
              <span className="text-[#6fb7e8]"><ShieldIcon /></span>
              <div className="flex-1">
                <div className="h-[5px] w-full bg-[#232d38]">
                  <div ref={armorBarRef} className="h-full w-full bg-[#6fb7e8] transition-[width] duration-200" />
                </div>
              </div>
              <span ref={armorRef} className="font-display text-base leading-none text-[#6fb7e8]">100</span>
            </div>
          </div>

          {/* bottom right: ammo / grenades */}
          <div className="absolute bottom-5 right-5 text-right">
            <div className="border border-[#2b3844] bg-[#12181f]/90 px-5 py-2.5">
              <div className="flex items-baseline justify-end gap-2">
                {melee && <span className="font-display text-sm tracking-widest text-[#f2a33c]">БЛИЖНИЙ БОЙ</span>}
                <span ref={magRef} className={`font-display text-5xl leading-none ${melee ? 'hidden' : ''}`}>30</span>
                <span ref={resRef} className={`font-display text-lg leading-none text-[#8b98a7] ${melee ? 'hidden' : ''}`}>/ 90</span>
              </div>
              <div className="mt-1 text-[10px] font-bold tracking-[0.3em] text-[#8b98a7]">
                <span ref={weaponRef}>3·DEAGLE</span>
                <span className="ml-2 text-[#5f6d7d]">TAB — АРСЕНАЛ</span>
              </div>
            </div>
            <div className="mt-1.5 flex items-center justify-end gap-1.5 border border-[#2b3844] bg-[#12181f]/90 px-4 py-1.5 text-[#c9d68a]">
              <span className="mr-1 text-[10px] font-bold tracking-widest text-[#8b98a7]">ГРАНАТЫ</span>
              {[0, 1, 2].map((i) => <NadeIcon key={i} dim={i >= nades} />)}
            </div>
          </div>

          {/* controls hint */}
          {hint && !isMobile && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 border border-[#2b3844] bg-[#12181f]/85 px-4 py-1.5 text-[11px] font-semibold tracking-wider text-[#8b98a7]">
              WASD — движение · ЛКМ — огонь · TAB — арсенал · 1–6 / колесо — смена · ПКМ — оптика · R — перезарядка · G — граната
            </div>
          )}
          {hint && isMobile && (
            <div className="absolute bottom-32 left-4 z-40 max-w-[46vw] border border-[#2b3844] bg-[#12181f]/85 px-3 py-1.5 text-[10px] font-semibold leading-relaxed tracking-wider text-[#8b98a7]">
              СЛЕВА — ДЖОЙСТИК · СПРАВА — ОБЗОР<br />КРАСНАЯ КНОПКА — ОГОНЬ
            </div>
          )}
          {/* look-around hint (только десктоп) */}
          {!isMobile && !locked && screen === 'play' && (
            <div className="absolute left-1/2 top-[62%] -translate-x-1/2 border border-[#f2a33c]/60 bg-[#221409]/90 px-5 py-2 text-center text-sm font-bold tracking-[0.14em] text-[#f2a33c]">
              ДВИГАЙТЕ МЫШЬ — ОБЗОР · ЛКМ — ОГОНЬ
              <div className="mt-0.5 text-[10px] font-semibold tracking-[0.2em] text-[#8b98a7]">
                R — ПЕРЕЗАРЯДКА · G — ГРАНАТА · КРАЙ ЭКРАНА: ВЕРНИТЕ МЫШЬ В ЦЕНТР
              </div>
            </div>
          )}

          {/* damage vignette + low hp */}
          <div ref={vignetteRef} className="vignette absolute inset-0 z-30" />
          {lowHp && <div className="lowhp-pulse pointer-events-none absolute inset-0 z-30" />}
        </div>
      )}

      {/* ============ МОБИЛЬНОЕ УПРАВЛЕНИЕ ============ */}
      {isMobile && screen === 'play' && (
        <TouchControls
          game={() => gameRef.current}
          activeWeapon={activeWeapon}
          onSelectWeapon={(i) => gameRef.current?.switchWeaponByIndex(i)}
          onPause={() => gameRef.current?.pause()}
        />
      )}

      {/* ============ MENU ============ */}
      {screen === 'menu' && (
        <div className="absolute inset-0 z-40">
          <div className="menu-scan absolute inset-0" style={{ background: 'linear-gradient(100deg, rgba(10,14,19,.96) 0%, rgba(10,14,19,.92) 44%, rgba(10,14,19,.55) 72%, rgba(10,14,19,.25) 100%)' }} />
          <div className="smoke absolute inset-0" />
          <div className="hazard hazard-anim absolute top-0 left-0 h-2 w-full opacity-80" />
          <div className="hazard hazard-anim absolute bottom-0 left-0 h-2 w-full opacity-80" />

          <div className="relative flex h-full flex-col justify-start gap-8 overflow-y-auto px-6 py-10 md:flex-row md:items-center md:justify-between md:overflow-visible md:px-16 md:py-0 lg:px-24">
            {/* left: title */}
            <div className="max-w-xl">
              <div className="mb-4 flex items-center gap-3">
                <span className="inline-block h-[3px] w-10 bg-[#f2a33c]" />
                <span className="text-[11px] font-bold tracking-[0.4em] text-[#8b98a7]">БРАУЗЕРНЫЙ ШУТЕР · THREE.JS</span>
              </div>
              <div className="mb-3 inline-flex items-center gap-2 border border-[#2b3844] bg-[#12181f]/80 px-2.5 py-1 text-[10px] font-bold tracking-[0.2em]">
                <span className={`inline-block h-1.5 w-1.5 rounded-full ${PERF_LOW ? 'bg-[#f2a33c]' : 'bg-[#7fd08a]'}`} />
                <span className={PERF_LOW ? 'text-[#f2a33c]' : 'text-[#7fd08a]'}>
                  {PERF_LOW ? (LOW_GPU ? 'ЭКОНОМ-ГРАФИКА (слабый GPU)' : 'ЭКОНОМ-ГРАФИКА (сенсор)') : 'ПОЛНАЯ ГРАФИКА'}
                </span>
                <span className="text-[#5f6d7d]">· авто-детект + адаптация под FPS</span>
              </div>
              <h1 className="title-glow font-display text-[64px] leading-[0.9] md:text-[120px]">
                CS<span className="text-[#f2a33c]">&nbsp;3D</span>
              </h1>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[#aab6c4]">
                Зачистите точку. AK-47, гранаты и живые боты, которые стрейфят и дают очередь в ответ.
                Возьмите <span className="font-bold text-[#eae6dc]">3 раунда</span> быстрее, чем вас застрелят.
              </p>
              <button
                onClick={startGame}
                className="btn-blade mt-8 inline-block bg-[#f2a33c] px-12 py-4 text-xl text-[#14100a] hover:bg-[#ffc069]"
              >
                <span className="inline-block skew-x-[8deg]">В БОЙ</span>
              </button>
              <div className="mt-4 text-[11px] font-semibold tracking-[0.25em] text-[#5f6d7d]">
                {isMobile ? 'СЕНСОРНОЕ УПРАВЛЕНИЕ · ДЖОЙСТИК + ЗОНА ОБЗОРА' : 'КЛИК — ЗАХВАТ МЫШИ · ESC — ПАУЗА'}
              </div>
            </div>

            {/* right: panels */}
            <div className="flex w-full max-w-sm flex-col gap-4">
              <div className="border border-[#2b3844] bg-[#12181f]/95">
                <div className="border-b border-[#2b3844] bg-[#182029] px-4 py-2 text-[11px] font-bold tracking-[0.3em] text-[#f2a33c]">
                  УПРАВЛЕНИЕ {isMobile && <span className="ml-1 text-[#6fb7e8]">· СЕНСОР</span>}
                </div>
                {!isMobile ? (
                  <div className="grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-2 px-4 py-3 text-[12px] text-[#aab6c4]">
                    <span><span className="key">W</span> <span className="key">A</span> <span className="key">S</span> <span className="key">D</span></span><span>передвижение</span>
                    <span><span className="key">МЫШЬ</span></span><span>обзор — движение мыши, курсор в бою скрыт</span>
                    <span><span className="key">ЛКМ</span></span><span>огонь из AK-47</span>
                    <span><span className="key">R</span></span><span>перезарядка</span>
                    <span><span className="key">G</span></span><span>граната</span>
                    <span><span className="key">SHIFT</span></span><span>тихий шаг — точность выше</span>
                    <span><span className="key">SPACE</span></span><span>прыжок — можно запрыгивать на ящики и контейнеры</span>
                    <span><span className="key">TAB</span></span><span>арсенал: AK-47, UZI, P90, AWP, Deagle и нож</span>
                    <span><span className="key">1</span>–<span className="key">9</span> / колесо</span><span>быстрая смена оружия</span>
                    <span><span className="key">ПКМ</span></span><span>оптика AWP ×4</span>
                    <span><span className="key">ESC</span></span><span>пауза</span>
                  </div>
                ) : (
                  <div className="grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-2 px-4 py-3 text-[12px] text-[#aab6c4]">
                    <span className="key">◐</span><span>левая зона — джойстик движения</span>
                    <span className="key">◑</span><span>правая зона — обзор (веди пальцем)</span>
                    <span className="key">●</span><span>красная кнопка — огонь (удерживай)</span>
                    <span className="key">R</span><span>кнопка перезарядки</span>
                    <span className="key">G</span><span>кнопка гранаты</span>
                    <span className="key">⌖</span><span>кнопка прыжка — запрыгивай на ящики и контейнеры</span>
                    <span className="key">1–6</span><span>слоты оружия сверху — тап для выбора</span>
                    <span className="key">ОПТ</span><span>оптика AWP ×4</span>
                    <span className="key">▮▮</span><span>пауза (справа сверху)</span>
                  </div>
                )}
              </div>
              <div className="border border-[#2b3844] bg-[#12181f]/95">
                <div className="border-b border-[#2b3844] bg-[#182029] px-4 py-2 text-[11px] font-bold tracking-[0.3em] text-[#f2a33c]">БРИФИНГ</div>
                <ul className="space-y-1.5 px-4 py-3 text-[12px] leading-relaxed text-[#aab6c4]">
                  <li>Карта — <span className="font-bold text-[#f2a33c]">Dust II</span>: лонг A, мид, вышка с лестницей — заберитесь на неё или на контейнеры.</li>
                  <li>Арсенал — <span className="key">TAB</span>: AK-47, UZI, P90, AWP, Deagle и нож. Колесо мыши листает стволы.</li>
                  <li><span className="font-bold text-[#eae6dc]">Хедшот</span> — урон ×4. AWP убивает с тела, <span className="key">ПКМ</span> — оптика ×4.</li>
                  <li><span className="key">SPACE</span> — прыжок: запрыгивайте на ящики, бочки и контейнеры для обзора сверху.</li>
                  <li>Матч до <span className="font-bold text-[#f2a33c]">3 побед</span>, раунд — 1:55. Боты злеют с каждым раундом.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============ PAUSE ============ */}
      {screen === 'paused' && (
        <div className="absolute inset-0 z-40 flex items-center justify-center bg-[#0a0e13]/85">
          <div className="w-[380px] border border-[#2b3844] bg-[#12181f]">
            <div className="hazard h-1.5 w-full opacity-70" />
            <div className="px-8 py-7">
              <div className="font-display text-4xl tracking-wider">ПАУЗА</div>
              <div className="mt-1 text-[11px] font-semibold tracking-[0.3em] text-[#8b98a7]">ОПЕРАЦИЯ ПРИОСТАНОВЛЕНА</div>
              <div className="mt-6 flex flex-col gap-2.5">
                <button onClick={() => { gameRef.current?.resume(); setScreen('play') }} className="btn-blade bg-[#f2a33c] px-6 py-3 text-base text-[#14100a] hover:bg-[#ffc069]">
                  <span className="inline-block skew-x-[8deg]">ПРОДОЛЖИТЬ</span>
                </button>
                <button onClick={() => { gameRef.current?.toMenu(); setScreen('menu') }} className="btn-blade border border-[#3a4a5c] bg-[#182029] px-6 py-3 text-base text-[#c8d2dd] hover:border-[#f2a33c]">
                  <span className="inline-block skew-x-[8deg]">В МЕНЮ</span>
                </button>
              </div>
              <div className="mt-6 border-t border-[#2b3844] pt-4 text-[11px] leading-relaxed text-[#5f6d7d]">
                <span className="key">W</span><span className="key">A</span><span className="key">S</span><span className="key">D</span> движение · <span className="key">ЛКМ</span> огонь · <span className="key">R</span> перезарядка · <span className="key">G</span> граната
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============ GAME OVER ============ */}
      {screen === 'over' && over && (
        <div className="absolute inset-0 z-40 flex items-center justify-center bg-[#0a0e13]/80">
          <div className="w-[440px] border border-[#2b3844] bg-[#12181f]">
            <div className="hazard h-1.5 w-full opacity-70" />
            <div className="px-10 py-8 text-center">
              <div className="text-[11px] font-bold tracking-[0.4em] text-[#8b98a7]">МАТЧ ЗАВЕРШЁН</div>
              <div
                className="title-glow font-display mt-2 text-6xl"
                style={{ color: over.result === 'victory' ? '#f2a33c' : '#e0453a' }}
              >
                {over.result === 'victory' ? 'ПОБЕДА' : 'ПОРАЖЕНИЕ'}
              </div>
              <div className="font-display mt-3 text-3xl text-[#eae6dc]">
                <span className="text-[#6fb7e8]">{over.won}</span>
                <span className="mx-2 text-[#5f6d7d]">:</span>
                <span className="text-[#f2a33c]">{over.lost}</span>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-2.5">
                <div className="border border-[#2b3844] bg-[#182029] px-4 py-3">
                  <div className="font-display text-3xl text-[#f2a33c]">{over.kills}</div>
                  <div className="mt-0.5 text-[10px] font-bold tracking-[0.25em] text-[#8b98a7]">УСТРАНЕНО</div>
                </div>
                <div className="border border-[#2b3844] bg-[#182029] px-4 py-3">
                  <div className="font-display text-3xl text-[#e0453a]">{over.deaths}</div>
                  <div className="mt-0.5 text-[10px] font-bold tracking-[0.25em] text-[#8b98a7]">СМЕРТЕЙ</div>
                </div>
              </div>
              <div className="mt-7 flex flex-col gap-2.5">
                <button onClick={startGame} className="btn-blade bg-[#f2a33c] px-6 py-3 text-base text-[#14100a] hover:bg-[#ffc069]">
                  <span className="inline-block skew-x-[8deg]">ЕЩЁ РАЗ</span>
                </button>
                <button onClick={() => { gameRef.current?.toMenu(); setScreen('menu') }} className="btn-blade border border-[#3a4a5c] bg-[#182029] px-6 py-3 text-base text-[#c8d2dd] hover:border-[#f2a33c]">
                  <span className="inline-block skew-x-[8deg]">В МЕНЮ</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
