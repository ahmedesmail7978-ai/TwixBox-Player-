/* Синтезированный звук (WebAudio) — без внешних ассетов */

export class SFX {
  private ctx: AudioContext | null = null
  private master: GainNode | null = null
  private noise: AudioBuffer | null = null
  private volume = 0.8
  private muted = false

  /** громкость 0..1 (настройки) */
  setVolume(v: number) {
    this.volume = Math.max(0, Math.min(1, v))
    this.applyGain()
  }

  /** полный мьют (потеря фокуса / настройки) */
  setMuted(m: boolean) {
    this.muted = m
    this.applyGain()
    if (m && this.ctx && this.ctx.state === 'running') this.ctx.suspend()
    if (!m && this.ctx && this.ctx.state === 'suspended') this.ctx.resume()
  }

  private applyGain() {
    if (this.master) this.master.gain.value = this.muted ? 0 : this.volume * 0.5
  }

  ensure() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended' && !this.muted) this.ctx.resume()
      return
    }
    const Ctor: typeof AudioContext =
      window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
    this.ctx = new Ctor()
    const comp = this.ctx.createDynamicsCompressor()
    comp.threshold.value = -16
    comp.ratio.value = 9
    comp.connect(this.ctx.destination)
    this.master = this.ctx.createGain()
    this.master.gain.value = this.muted ? 0 : this.volume * 0.5
    this.master.connect(comp)
    const len = this.ctx.sampleRate
    this.noise = this.ctx.createBuffer(1, len, this.ctx.sampleRate)
    const d = this.noise.getChannelData(0)
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1
  }

  private burst(opts: { dur: number; vol: number; from: number; to: number; type?: BiquadFilterType; delay?: number }) {
    if (!this.ctx || !this.master || !this.noise) return
    const c = this.ctx
    const t = c.currentTime + (opts.delay || 0)
    const src = c.createBufferSource()
    src.buffer = this.noise
    src.loop = true
    const f = c.createBiquadFilter()
    f.type = opts.type || 'lowpass'
    f.Q.value = 0.7
    f.frequency.setValueAtTime(opts.from, t)
    f.frequency.exponentialRampToValueAtTime(Math.max(40, opts.to), t + opts.dur)
    const g = c.createGain()
    g.gain.setValueAtTime(opts.vol, t)
    g.gain.exponentialRampToValueAtTime(0.0001, t + opts.dur)
    src.connect(f); f.connect(g); g.connect(this.master)
    src.start(t); src.stop(t + opts.dur + 0.05)
  }

  private tone(freq: number, dur: number, vol: number, type: OscillatorType = 'sine', slideTo?: number, delay = 0) {
    if (!this.ctx || !this.master) return
    const c = this.ctx
    const t = c.currentTime + delay
    const o = c.createOscillator()
    o.type = type
    o.frequency.setValueAtTime(freq, t)
    if (slideTo) o.frequency.exponentialRampToValueAtTime(Math.max(20, slideTo), t + dur)
    const g = c.createGain()
    g.gain.setValueAtTime(vol, t)
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur)
    o.connect(g); g.connect(this.master)
    o.start(t); o.stop(t + dur + 0.05)
  }

  shoot() {
    this.burst({ dur: 0.14, vol: 0.5, from: 1700, to: 170 })
    this.burst({ dur: 0.05, vol: 0.22, from: 3800, to: 900, type: 'highpass' })
    this.tone(150, 0.13, 0.5, 'triangle', 42)
  }
  smg() {
    this.burst({ dur: 0.08, vol: 0.34, from: 2100, to: 320 })
    this.burst({ dur: 0.03, vol: 0.14, from: 4200, to: 1100, type: 'highpass' })
    this.tone(190, 0.07, 0.3, 'triangle', 60)
  }
  shotgun() {
    this.burst({ dur: 0.22, vol: 0.7, from: 900, to: 90 })
    this.burst({ dur: 0.08, vol: 0.3, from: 2600, to: 500, type: 'highpass' })
    this.tone(95, 0.2, 0.6, 'triangle', 34)
    this.burst({ dur: 0.06, vol: 0.25, from: 1400, to: 300, delay: 0.42 }) // pump
  }
  lmg() {
    this.burst({ dur: 0.1, vol: 0.42, from: 1500, to: 200 })
    this.burst({ dur: 0.04, vol: 0.18, from: 3400, to: 800, type: 'highpass' })
    this.tone(130, 0.1, 0.4, 'triangle', 46)
  }
  zeus() {
    this.tone(2400, 0.25, 0.3, 'sawtooth', 120)
    this.burst({ dur: 0.3, vol: 0.35, from: 5000, to: 300, type: 'highpass' })
    this.tone(90, 0.3, 0.4, 'sine', 30)
  }
  knife() {
    this.burst({ dur: 0.12, vol: 0.2, from: 3000, to: 700, type: 'bandpass' })
    this.tone(320, 0.08, 0.15, 'triangle', 700)
  }
  pistol() {
    this.burst({ dur: 0.1, vol: 0.42, from: 2600, to: 320 })
    this.burst({ dur: 0.04, vol: 0.18, from: 4200, to: 1400, type: 'highpass' })
    this.tone(220, 0.09, 0.34, 'triangle', 70)
  }
  sniper() {
    this.burst({ dur: 0.42, vol: 0.8, from: 1300, to: 55 })
    this.burst({ dur: 0.12, vol: 0.3, from: 4200, to: 700, type: 'highpass' })
    this.tone(88, 0.42, 0.62, 'sine', 26)
  }
  zoom(on: boolean) { this.tone(on ? 620 : 1050, 0.05, 0.13, 'square', on ? 1150 : 520) }
  buy() {
    this.tone(1320, 0.06, 0.17, 'square')
    this.tone(1760, 0.09, 0.15, 'square', undefined, 0.055)
  }
  deny() { this.tone(230, 0.13, 0.2, 'square', 150) }
  switchW() { this.burst({ dur: 0.05, vol: 0.12, from: 1500, to: 500 }); this.tone(500, 0.04, 0.1, 'square', 800, 0.03) }
  enemyShoot(dist: number) {
    const v = Math.max(0.06, Math.min(0.3, 2.4 / Math.max(4, dist)))
    this.burst({ dur: 0.12, vol: v, from: 1100, to: 150 })
    this.tone(120, 0.1, v * 0.8, 'triangle', 40)
  }
  dry() { this.tone(1900, 0.045, 0.14, 'square', 1200) }
  hit(head: boolean) { this.tone(head ? 2500 : 1650, 0.06, 0.2, 'square', head ? 1900 : 1250) }
  kill() {
    this.tone(880, 0.09, 0.22, 'square')
    this.tone(1318, 0.14, 0.22, 'square', undefined, 0.075)
  }
  hurt() {
    this.burst({ dur: 0.16, vol: 0.35, from: 520, to: 90 })
    this.tone(95, 0.22, 0.4, 'sine', 42)
  }
  step() { this.burst({ dur: 0.05, vol: 0.06, from: 640, to: 180 }) }
  jump() { this.burst({ dur: 0.09, vol: 0.08, from: 400, to: 900, type: 'bandpass' }) }
  reload() {
    this.tone(950, 0.05, 0.18, 'square', 600)
    this.tone(700, 0.06, 0.2, 'square', 420, 0.42)
    this.burst({ dur: 0.07, vol: 0.16, from: 2200, to: 500, delay: 1.05 })
    this.tone(1150, 0.05, 0.2, 'square', 800, 1.05)
  }
  pin() { this.tone(2300, 0.05, 0.18, 'square', 1600) }
  boom() {
    this.burst({ dur: 0.65, vol: 0.85, from: 900, to: 55 })
    this.burst({ dur: 0.22, vol: 0.35, from: 3200, to: 400, type: 'highpass' })
    this.tone(72, 0.55, 0.7, 'sine', 30)
  }
  beep(freq = 880, dur = 0.1, vol = 0.2) { this.tone(freq, dur, vol, 'square') }
  win() { [523, 659, 784, 1046].forEach((f, i) => this.tone(f, 0.16, 0.22, 'square', undefined, i * 0.11)) }
  lose() { [392, 330, 262, 196].forEach((f, i) => this.tone(f, 0.22, 0.22, 'triangle', undefined, i * 0.15)) }
}
