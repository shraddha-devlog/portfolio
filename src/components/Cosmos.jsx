import { useEffect, useRef } from 'react'

function Cosmos() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let stars = []
    let shooting = []
    let raf

    function starRgb() {
      return getComputedStyle(document.documentElement).getPropertyValue('--star-rgb').trim() || '255,255,255'
    }

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = window.innerWidth + 'px'
      canvas.style.height = window.innerHeight + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.floor((window.innerWidth * window.innerHeight) / 7000)
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 1.3 + 0.3,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.6 + 0.2,
      }))
    }

    function frame(t) {
      const w = window.innerWidth
      const h = window.innerHeight
      ctx.clearRect(0, 0, w, h)
      const rgb = starRgb()

      for (const s of stars) {
        const twinkle = reduceMotion ? 0.7 : 0.4 + 0.6 * Math.sin(t * 0.0012 * s.speed + s.phase)
        ctx.beginPath()
        ctx.fillStyle = `rgba(${rgb}, ${0.18 + twinkle * 0.72})`
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fill()
      }

      if (!reduceMotion) {
        if (Math.random() < 0.006 && shooting.length < 2) {
          const angle = Math.PI / 6 + Math.random() * 0.3
          shooting.push({
            x: Math.random() * w * 0.7,
            y: Math.random() * h * 0.35,
            angle,
            speed: 10 + Math.random() * 6,
            len: 110 + Math.random() * 90,
            life: 1,
          })
        }

        for (const s of shooting) {
          const dx = Math.cos(s.angle) * s.speed
          const dy = Math.sin(s.angle) * s.speed
          s.x += dx
          s.y += dy
          s.life -= 0.018
          const tailX = s.x - Math.cos(s.angle) * s.len
          const tailY = s.y - Math.sin(s.angle) * s.len
          const grad = ctx.createLinearGradient(s.x, s.y, tailX, tailY)
          grad.addColorStop(0, `rgba(${rgb}, ${Math.max(s.life, 0)})`)
          grad.addColorStop(1, `rgba(${rgb}, 0)`)
          ctx.strokeStyle = grad
          ctx.lineWidth = 1.5
          ctx.beginPath()
          ctx.moveTo(s.x, s.y)
          ctx.lineTo(tailX, tailY)
          ctx.stroke()
        }

        shooting = shooting.filter((s) => s.life > 0)
        raf = requestAnimationFrame(frame)
      }
    }

    resize()
    window.addEventListener('resize', resize)

    if (reduceMotion) {
      frame(0)
    } else {
      raf = requestAnimationFrame(frame)
    }

    return () => {
      window.removeEventListener('resize', resize)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="cosmos-bg" aria-hidden="true">
      <span className="nebula nebula-1" />
      <span className="nebula nebula-2" />
      <span className="nebula nebula-3" />
      <canvas ref={canvasRef} className="starfield-canvas" />
    </div>
  )
}

export default Cosmos
