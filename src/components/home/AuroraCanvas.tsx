import { useEffect, useRef } from 'react'

const AURORA: [number, number, number][] = [
  [110, 231, 183], // mint
  [45, 212, 191],  // teal
  [34, 211, 238],  // cyan
  [56, 189, 248],  // sky
  [59, 130, 246],  // blue
]

interface Curtain {
  yStart: number
  height: number
  colors: [number, number]
  opacity: number
  folds: number
  waveAmp: number
  speed: number
  phase: number
}

const CURTAINS: Curtain[] = [
  { yStart: 0.06, height: 0.72, colors: [3, 4], opacity: 0.10, folds: 2.5, waveAmp: 45, speed: 0.12, phase: 0 },
  { yStart: 0.04, height: 0.68, colors: [0, 1], opacity: 0.16, folds: 3.2, waveAmp: 55, speed: 0.18, phase: 1.8 },
  { yStart: 0.08, height: 0.62, colors: [2, 3], opacity: 0.13, folds: 4.0, waveAmp: 38, speed: 0.15, phase: 3.5 },
  { yStart: 0.10, height: 0.58, colors: [1, 2], opacity: 0.09, folds: 3.5, waveAmp: 30, speed: 0.22, phase: 5.2 },
]

interface Star { x: number; y: number; r: number; b: number; sp: number; ph: number }

function createStars(w: number, h: number): Star[] {
  const n = Math.min(100, Math.floor((w * h) / 10000))
  return Array.from({ length: n }, () => ({
    x: Math.random() * w,
    y: Math.random() * h * 0.6,
    r: 0.3 + Math.random() * 1.0,
    b: 0.12 + Math.random() * 0.4,
    sp: 0.4 + Math.random() * 1.2,
    ph: Math.random() * Math.PI * 2,
  }))
}

function draw(
  ctx: CanvasRenderingContext2D,
  w: number, h: number,
  time: number,
  mx: number,
  stars: Star[],
) {
  // Bail if the canvas has no usable size — otherwise t = x / w divides by zero,
  // producing NaN gradient coordinates that throw in createLinearGradient and
  // crash the whole page (no error boundary wraps the canvas).
  if (!(w > 0) || !(h > 0)) return

  ctx.clearRect(0, 0, w, h)

  // Star field
  ctx.globalCompositeOperation = 'lighter'
  for (const s of stars) {
    const a = s.b * (0.5 + 0.5 * Math.sin(time * s.sp + s.ph))
    ctx.fillStyle = `rgba(210,225,255,${a})`
    ctx.beginPath()
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
    ctx.fill()
  }

  // Aurora curtain layers
  const STRIP = 5
  const strips = Math.ceil(w / STRIP) + 1

  for (const c of CURTAINS) {
    ctx.globalCompositeOperation = 'lighter'
    const [r1, g1, b1] = AURORA[c.colors[0]]
    const [r2, g2, b2] = AURORA[c.colors[1]]

    for (let i = 0; i < strips; i++) {
      const x = i * STRIP
      const t = x / w

      // Multi-sine wave deformation
      const wave =
        Math.sin(t * Math.PI * c.folds * 2 + time * c.speed + c.phase) * c.waveAmp +
        Math.sin(t * Math.PI * c.folds * 4.6 + time * c.speed * 0.65 + c.phase * 1.3) * c.waveAmp * 0.3 +
        Math.sin(t * Math.PI * c.folds * 1.1 + time * c.speed * 1.4) * c.waveAmp * 0.12

      // Gentle mouse ripple
      const mDist = Math.abs(x - mx)
      const mRipple = Math.max(0, 1 - mDist / (w * 0.25)) * 6

      const top = h * c.yStart + wave + mRipple
      const curtH = h * c.height + Math.sin(t * Math.PI * 3.3 + time * c.speed * 0.4) * h * 0.06
      const bot = top + curtH

      // Horizontal color blend
      const cb = 0.5 + 0.5 * Math.sin(t * Math.PI * 2.2 + time * c.speed * 0.25)
      const r = Math.round(r1 + (r2 - r1) * cb)
      const g = Math.round(g1 + (g2 - g1) * cb)
      const b = Math.round(b1 + (b2 - b1) * cb)

      // Fold brightness — brighter at fold peaks
      const fold = 0.5 + 0.5 * Math.abs(Math.sin(t * Math.PI * c.folds * 2 + time * c.speed + c.phase))
      const op = c.opacity * fold

      // Vertical gradient: fades in from top, brightest near bottom hem, then fades out
      const grad = ctx.createLinearGradient(x, top, x, bot)
      grad.addColorStop(0, `rgba(${r},${g},${b},0)`)
      grad.addColorStop(0.12, `rgba(${r},${g},${b},${op * 0.15})`)
      grad.addColorStop(0.35, `rgba(${r},${g},${b},${op * 0.5})`)
      grad.addColorStop(0.6, `rgba(${r},${g},${b},${op * 0.8})`)
      grad.addColorStop(0.82, `rgba(${r},${g},${b},${op})`)
      grad.addColorStop(0.94, `rgba(${r},${g},${b},${op * 0.3})`)
      grad.addColorStop(1, `rgba(${r},${g},${b},0)`)

      ctx.fillStyle = grad
      ctx.fillRect(x, top, STRIP + 1, bot - top)
    }
  }

  ctx.globalCompositeOperation = 'source-over'
}

export default function AuroraCanvas({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const starsRef = useRef<Star[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let animId: number
    const t0 = performance.now()

    function resize() {
      const rect = canvas!.getBoundingClientRect()
      canvas!.width = rect.width * dpr
      canvas!.height = rect.height * dpr
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
      starsRef.current = createStars(rect.width, rect.height)
    }

    resize()
    window.addEventListener('resize', resize)

    const onMouse = (e: MouseEvent) => {
      const rect = canvas!.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    window.addEventListener('mousemove', onMouse, { passive: true })

    let hidden = false
    const onVis = () => { hidden = document.hidden }
    document.addEventListener('visibilitychange', onVis)

    function loop() {
      if (hidden) { animId = requestAnimationFrame(loop); return }
      const rect = canvas!.getBoundingClientRect()
      const time = (performance.now() - t0) * 0.001
      draw(ctx!, rect.width, rect.height, time, mouseRef.current.x, starsRef.current)
      animId = requestAnimationFrame(loop)
    }

    loop()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouse)
      document.removeEventListener('visibilitychange', onVis)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
    />
  )
}
