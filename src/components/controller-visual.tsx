"use client"

import { useCallback, useRef, useState } from "react"
import Image from "next/image"

type ControllerVisualProps = {
  onPrev: () => void
  onNext: () => void
  className?: string
}

type ButtonId = "triangle" | "square" | "circle" | "cross"
type ButtonAction = "prev" | "next"
type ButtonPhase = "rest" | "pressed" | "releasing"

type ButtonConfig = {
  id: ButtonId
  label: string
  action: ButtonAction
  left: string
  top: string
  size: string
}

const BUTTON_ASSETS: Record<ButtonId, string> = {
  triangle: "/projects/controller-buttons/triangle-rest.png",
  square: "/projects/controller-buttons/square-rest.png",
  circle: "/projects/controller-buttons/circle-rest.png",
  cross: "/projects/controller-buttons/cross-rest.png",
}

const BUTTONS: ButtonConfig[] = [
  { id: "triangle", label: "Previous project", action: "prev", left: "76%", top: "25%", size: "h-[5%] w-[5%]" },
  { id: "square", label: "Previous project", action: "prev", left: "69.8%", top: "34.2%", size: "h-[4.8%] w-[4.8%]" },
  { id: "circle", label: "Next project", action: "next", left: "82%", top: "34%", size: "h-[4.8%] w-[4.8%]" },
  { id: "cross", label: "Next project", action: "next", left: "76.0%", top: "42.3%", size: "h-[4.8%] w-[4.8%]" },
]

/** Tilt toward the pressed face button — pivots from the right-hand cluster */
const BUTTON_TILT: Record<ButtonId, { rotateX: number; rotateY: number; rotateZ: number }> = {
  triangle: { rotateX: 3.5, rotateY: 2.2, rotateZ: 0.6 },
  square: { rotateX: 2.2, rotateY: -1.8, rotateZ: -0.5 },
  circle: { rotateX: 2, rotateY: 3.5, rotateZ: 0.7 },
  cross: { rotateX: 4.5, rotateY: 2, rotateZ: 0.5 },
}

/** Press travel (%). Negative = shift up to seat over the controller art */
const BUTTON_PRESS_Y: Record<ButtonId, number> = {
  triangle: 7,
  square: -5,
  circle: -2,
  cross: 2,
}

const SPRING_MS = 200

const hotspotClass =
  "absolute z-30 flex -translate-x-1/2 -translate-y-1/2 touch-manipulation items-center justify-center border-0 bg-transparent focus-visible:outline-none"

function ButtonFaceOverlay({ id, phase }: { id: ButtonId; phase: ButtonPhase }) {
  const isPressed = phase === "pressed"
  const isReleasing = phase === "releasing"
  const pressY = BUTTON_PRESS_Y[id]

  const translateY = isPressed ? pressY : 0
  const scale = isPressed ? 0.94 : 1
  const transition = isReleasing
    ? "transform 200ms cubic-bezier(0.22, 1, 0.36, 1), filter 200ms ease-out"
    : isPressed
      ? "transform 70ms ease-out, filter 70ms ease-out"
      : "transform 160ms ease-out, filter 160ms ease-out"

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute left-1/2 top-1/2 h-[185%] w-[185%] -translate-x-1/2 -translate-y-1/2"
    >
      <Image
        src={BUTTON_ASSETS[id]}
        alt=""
        fill
        unoptimized
        className="object-contain"
        style={{
          transform: `translateY(${translateY}%) scale(${scale})`,
          filter: isPressed ? "brightness(0.92) contrast(1.02)" : undefined,
          transition,
        }}
        sizes="120px"
      />
    </div>
  )
}

export function ControllerVisual({ onPrev, onNext, className = "" }: ControllerVisualProps) {
  const [buttonPhases, setButtonPhases] = useState<Partial<Record<ButtonId, ButtonPhase>>>({})
  const [rumble, setRumble] = useState(false)
  const releaseTimers = useRef<Partial<Record<ButtonId, ReturnType<typeof setTimeout>>>>({})

  const setPhase = useCallback((id: ButtonId, phase: ButtonPhase) => {
    setButtonPhases((current) => ({ ...current, [id]: phase }))
  }, [])

  const press = useCallback(
    (id: ButtonId) => {
      const pending = releaseTimers.current[id]
      if (pending) {
        clearTimeout(pending)
        delete releaseTimers.current[id]
      }
      setPhase(id, "pressed")
      setRumble(true)
      window.setTimeout(() => setRumble(false), 80)
    },
    [setPhase]
  )

  const release = useCallback(
    (id: ButtonId, action?: ButtonAction) => {
      setPhase(id, "releasing")

      releaseTimers.current[id] = setTimeout(() => {
        setPhase(id, "rest")
        delete releaseTimers.current[id]
      }, SPRING_MS)

      if (action) {
        if (action === "prev") onPrev()
        else onNext()
      }
    },
    [onPrev, onNext, setPhase]
  )

  const activeTiltButton = (
    Object.entries(buttonPhases).find(
      ([, phase]) => phase === "pressed" || phase === "releasing"
    )?.[0] as ButtonId | undefined
  )
  const tilt = activeTiltButton ? BUTTON_TILT[activeTiltButton] : null

  return (
    <div
      className={`relative z-20 mx-auto w-full max-w-[min(100%,720px)] sm:mr-auto sm:max-w-[min(100%,780px)] sm:-translate-x-4 lg:max-w-[min(100%,760px)] lg:-translate-x-6 xl:max-w-[min(100%,900px)] xl:-translate-x-8 ${className}`}
    >
      <div
        className="relative aspect-[1024/723] w-full transition-transform duration-200 ease-out will-change-transform"
        style={{
          transformOrigin: "68% 36%",
          transform: tilt
            ? `perspective(1100px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) rotateZ(${tilt.rotateZ}deg)`
            : undefined,
        }}
      >
        <div className={`relative h-full w-full ${rumble ? "controller-rumble" : ""}`}>
          <Image
            src="/projects/controller-dualsense.png"
            alt=""
            fill
            unoptimized
            className="pointer-events-none object-contain drop-shadow-[0_16px_40px_rgba(0,0,0,0.35)]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 900px"
          />

          {BUTTONS.map((button) => {
            const phase = buttonPhases[button.id] ?? "rest"

            return (
              <div
                key={button.id}
                className={`${hotspotClass} ${button.size}`}
                style={{ left: button.left, top: button.top }}
              >
                <ButtonFaceOverlay id={button.id} phase={phase} />

                <button
                  type="button"
                  aria-label={button.label}
                  className="absolute inset-[-30%] z-20 rounded-full bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                  onPointerDown={(event) => {
                    event.currentTarget.setPointerCapture(event.pointerId)
                    press(button.id)
                  }}
                  onPointerUp={() => release(button.id, button.action)}
                  onPointerCancel={() => release(button.id)}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
