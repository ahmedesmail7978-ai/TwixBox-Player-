/* Обёртка Yandex Games SDK.
 * Работает и без SDK (локально/вне платформы): все методы — безопасные no-op,
 * облачные сохранения фолбечятся в localStorage. */

type YSDK = {
  features?: {
    LoadingAPI?: { ready(): void }
    GameplayAPI?: { start(): void; stop(): void }
  }
  adv?: {
    showFullscreenAdv(opts: { callbacks?: Record<string, (...a: unknown[]) => void> }): void
  }
  environment?: { i18n?: { lang?: string; tld?: string } }
  getPlayer(opts?: { scopes?: boolean }): Promise<{
    getUniqueID(): string
    getName(): string
    setData(data: Record<string, unknown>, flush?: boolean): Promise<void>
    getData<T = Record<string, unknown>>(keys?: string[]): Promise<T>
  }>
  on?(event: string, cb: () => void): void
  off?(event: string, cb: () => void): void
}

type YaGamesCtor = { init(opts?: Record<string, unknown>): Promise<YSDK> }

declare global {
  interface Window {
    YaGames?: YaGamesCtor
    __ysdk?: YSDK | null
  }
}

let ysdk: YSDK | null = null
let initDone = false
let initPromise: Promise<YSDK | null> | null = null

const waitYaGames = (): Promise<YaGamesCtor | null> =>
  new Promise((resolve) => {
    if (window.YaGames) return resolve(window.YaGames)
    const started = Date.now()
    const timer = window.setInterval(() => {
      if (window.YaGames) {
        window.clearInterval(timer)
        resolve(window.YaGames)
      } else if (Date.now() - started > 2500) {
        window.clearInterval(timer)
        resolve(null)
      }
    }, 120)
  })

const loadScript = (src: string) =>
  new Promise<boolean>((resolve) => {
    const s = document.createElement('script')
    s.src = src
    s.onload = () => resolve(true)
    s.onerror = () => { s.remove(); resolve(false) }
    document.head.appendChild(s)
  })

/** Инициализация SDK: пробуем относительный путь (сервер Яндекса), затем абсолютный. */
export function initYandex(): Promise<YSDK | null> {
  if (initPromise) return initPromise
  initPromise = (async () => {
    try {
      let Ya = await waitYaGames()
      if (!Ya) {
        const ok = await loadScript('/sdk.js')
        if (ok) Ya = await waitYaGames()
      }
      if (!Ya) {
        const ok = await loadScript('https://sdk.games.s3.yandex.net/sdk.js')
        if (ok) Ya = await waitYaGames()
      }
      if (!Ya) return null
      ysdk = await Ya.init()
      window.__ysdk = ysdk
      initDone = true
      // игра готова к запуску
      try { ysdk.features?.LoadingAPI?.ready() } catch { /* noop */ }
    } catch {
      ysdk = null
    }
    return ysdk
  })()
  return initPromise
}

export const isYandex = () => initDone && ysdk !== null

/* ---------- геймплей ---------- */
export const gameplayStart = () => { try { ysdk?.features?.GameplayAPI?.start() } catch { /* noop */ } }
export const gameplayStop = () => { try { ysdk?.features?.GameplayAPI?.stop() } catch { /* noop */ } }

/* ---------- полноэкранная реклама (только в логических паузах) ---------- */
export function showFullscreenAdv(onClose?: () => void) {
  if (!ysdk?.adv) { onClose?.(); return }
  try {
    ysdk.adv.showFullscreenAdv({
      callbacks: {
        onClose: () => onClose?.(),
        onError: () => onClose?.(),
      },
    })
  } catch { onClose?.() }
}

/* ---------- язык окружения ---------- */
export function yandexLang(): string {
  const l = ysdk?.environment?.i18n?.lang
  return (l || '').toLowerCase().startsWith('ru') ? 'ru' : 'en'
}

/* ---------- пауза/фокус платформы (пункт 1.19.4) ---------- */
export function onPlatformPause(cb: () => void): () => void {
  const p = () => cb()
  const r = () => cb()
  try {
    ysdk?.on?.('game_api_pause', p)
    ysdk?.on?.('game_api_resume', r)
  } catch { /* noop */ }
  return () => {
    try { ysdk?.off?.('game_api_pause', p); ysdk?.off?.('game_api_resume', r) } catch { /* noop */ }
  }
}

/* ---------- облачные сохранения (фолбэк — localStorage) ---------- */
const LS_KEY = 'cs3d_cloud_v1'

export async function saveCloud(data: object) {
  localStorage.setItem(LS_KEY, JSON.stringify(data))
  if (!ysdk) return
  try {
    const player = await ysdk.getPlayer({ scopes: false })
    await player.setData(data as Record<string, unknown>, true)
  } catch { /* гость без профиля — данные уже в localStorage */ }
}

export async function loadCloud<T extends object>(): Promise<T | null> {
  if (ysdk) {
    try {
      const player = await ysdk.getPlayer({ scopes: false })
      const d = await player.getData<T>()
      if (d && Object.keys(d).length) return d
    } catch { /* fallback ниже */ }
  }
  try {
    const raw = localStorage.getItem(LS_KEY)
    if (raw) return JSON.parse(raw) as T
  } catch { /* noop */ }
  return null
}
