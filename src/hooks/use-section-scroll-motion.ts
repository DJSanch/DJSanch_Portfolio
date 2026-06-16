"use client"

import { useCallback, useEffect, useMemo, useState } from "react"

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

export type SectionScrollStyle = {
  scale: number
  blur: number
  opacity: number
  translateX: number
  translateY: number
}

export type SlideFrom = "left" | "right"

export function computeSectionScrollProgress(
  panelTop: number,
  panelHeight: number,
  scrollY: number,
  vh: number
) {
  const enterStart = panelTop - vh * 1.2
  const enterEnd = panelTop - vh * 0.12
  const enter = clamp((scrollY - enterStart) / (enterEnd - enterStart), 0, 1)

  const exitStart = panelTop + panelHeight * 0.35
  const exitEnd = panelTop + panelHeight * 0.85
  const exit = clamp((scrollY - exitStart) / (exitEnd - exitStart), 0, 1)

  return { enter, exit }
}

export function getSectionBlurScrollStyle(
  enter: number,
  exit: number,
  from: SlideFrom = "left",
  enterDelay = 0
): SectionScrollStyle {
  const delayedEnter =
    enterDelay > 0 ? clamp((enter - enterDelay) / (1 - enterDelay), 0, 1) : clamp(enter, 0, 1)
  const exitT = clamp(exit, 0, 1)
  const sign = from === "left" ? -1 : 1
  const travel = 80

  return {
    scale: 1.06 - delayedEnter * 0.06 + exitT * 0.06,
    blur: (1 - delayedEnter) * 16 + exitT * 16,
    opacity: delayedEnter * (1 - exitT * 0.92),
    translateX: sign * travel * ((1 - delayedEnter) + exitT),
    translateY: (1 - delayedEnter) * 28 - exitT * 28,
  }
}

export function sectionScrollBlockStyle(style: SectionScrollStyle): React.CSSProperties {
  return {
    opacity: style.opacity,
    transform: `translate(${style.translateX}px, ${style.translateY}px) scale(${style.scale})`,
    filter: `blur(${style.blur}px)`,
  }
}

export function useSectionScrollMotion(panelId: string) {
  const [enter, setEnter] = useState(0)
  const [exit, setExit] = useState(0)

  useEffect(() => {
    const update = () => {
      const panel = document.getElementById(panelId)
      if (!panel) return

      const vh = window.innerHeight
      const panelTop = panel.offsetTop
      const panelHeight = panel.offsetHeight
      const { enter, exit } = computeSectionScrollProgress(panelTop, panelHeight, window.scrollY, vh)
      setEnter(enter)
      setExit(exit)
    }

    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [panelId])

  const getStyle = useCallback(
    (from: SlideFrom = "left", enterDelay = 0) =>
      getSectionBlurScrollStyle(enter, exit, from, enterDelay),
    [enter, exit]
  )

  const headerStyle = useMemo(() => getSectionBlurScrollStyle(enter, exit, "left"), [enter, exit])
  const contentStyle = useMemo(
    () => getSectionBlurScrollStyle(enter, exit, "left", 0.14),
    [enter, exit]
  )
  const visualStyle = useMemo(() => getSectionBlurScrollStyle(enter, exit, "right", 0.08), [enter, exit])

  return { enter, exit, getStyle, headerStyle, contentStyle, visualStyle }
}
