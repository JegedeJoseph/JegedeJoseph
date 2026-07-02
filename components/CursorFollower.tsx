import { useEffect, useRef, useState } from 'react'

export default function CursorFollower() {
  const dotRef   = useRef<HTMLDivElement>(null)
  const ringRef  = useRef<HTMLDivElement>(null)

  // Ring position (lerped)
  const ringPos  = useRef({ x: -100, y: -100 })
  // Actual cursor position
  const cursor   = useRef({ x: -100, y: -100 })
  const rafId    = useRef<number | null>(null)
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    // Hide on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    const onMove = (e: MouseEvent) => {
      cursor.current = { x: e.clientX, y: e.clientY }
      if (!visible) setVisible(true)

      // Instantly snap the dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      }

      // Detect hover over interactive elements
      const target = e.target as HTMLElement
      const isHovered = !!(target.closest('a, button, [role="button"], input, textarea, select, label'))
      setHovered(isHovered)
    }

    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)

    document.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)

    // Spring-lerp the ring on every animation frame
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t
    const SPEED = 0.12

    const tick = () => {
      ringPos.current.x = lerp(ringPos.current.x, cursor.current.x, SPEED)
      ringPos.current.y = lerp(ringPos.current.y, cursor.current.y, SPEED)

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px)`
      }

      rafId.current = requestAnimationFrame(tick)
    }

    rafId.current = requestAnimationFrame(tick)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {/* ── Outer ring (lagging) ── */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width:  hovered ? '44px' : '32px',
          height: hovered ? '44px' : '32px',
          marginLeft: hovered ? '-22px' : '-16px',
          marginTop:  hovered ? '-22px' : '-16px',
          borderRadius: '50%',
          border: '2px solid rgba(79, 70, 229, 0.5)',
          background: hovered ? 'rgba(79, 70, 229, 0.08)' : 'transparent',
          boxShadow: hovered ? '0 0 16px rgba(79, 70, 229, 0.25)' : 'none',
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: visible ? 1 : 0,
          transition:
            'width 0.2s ease, height 0.2s ease, margin 0.2s ease, ' +
            'background 0.2s ease, box-shadow 0.2s ease, opacity 0.3s ease',
          willChange: 'transform',
        }}
      />

      {/* ── Inner dot (exact cursor) ── */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width:  hovered ? '6px' : '8px',
          height: hovered ? '6px' : '8px',
          marginLeft: hovered ? '-3px' : '-4px',
          marginTop:  hovered ? '-3px' : '-4px',
          borderRadius: '50%',
          background: hovered
            ? 'rgba(79, 70, 229, 0.7)'
            : 'rgba(79, 70, 229, 0.9)',
          pointerEvents: 'none',
          zIndex: 10000,
          opacity: visible ? 1 : 0,
          transition:
            'width 0.15s ease, height 0.15s ease, margin 0.15s ease, ' +
            'background 0.15s ease, opacity 0.3s ease',
          willChange: 'transform',
        }}
      />
    </>
  )
}
