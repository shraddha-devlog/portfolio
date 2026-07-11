import { useEffect, useRef } from 'react'

function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return

    const dot = dotRef.current
    const ring = ringRef.current
    let mx = 0
    let my = 0
    let rx = 0
    let ry = 0
    let started = false
    let raf

    function onMove(e) {
      mx = e.clientX
      my = e.clientY
      if (!started) {
        started = true
        rx = mx
        ry = my
        dot.style.opacity = '1'
        ring.style.opacity = '1'
      }
    }

    function tick() {
      dot.style.left = mx + 'px'
      dot.style.top = my + 'px'
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      ring.style.left = rx + 'px'
      ring.style.top = ry + 'px'
      raf = requestAnimationFrame(tick)
    }

    document.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(tick)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <span ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <span ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  )
}

export default Cursor
