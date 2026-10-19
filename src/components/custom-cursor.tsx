"use client"

import { useEffect, useRef } from "react"

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)")
    if (!cursor || !finePointer.matches) return

    const move = (event: PointerEvent) => {
      cursor.style.left = `${event.clientX}px`
      cursor.style.top = `${event.clientY}px`
      cursor.classList.add("is-visible")
      cursor.classList.toggle("is-over-interactive", Boolean((event.target as HTMLElement | null)?.closest("a, button, [role=button]")))
    }
    const leave = () => cursor.classList.remove("is-visible")

    window.addEventListener("pointermove", move, { passive: true })
    document.documentElement.addEventListener("pointerleave", leave)
    return () => {
      window.removeEventListener("pointermove", move)
      document.documentElement.removeEventListener("pointerleave", leave)
    }
  }, [])

  return <div ref={cursorRef} className="custom-cursor" aria-hidden="true" />
}
