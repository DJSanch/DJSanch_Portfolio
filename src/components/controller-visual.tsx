"use client"

import Image from "next/image"

type ControllerVisualProps = {
  onPrev: () => void
  onNext: () => void
  className?: string
}

const hotspotClass =
  "absolute flex -translate-x-1/2 -translate-y-1/2 touch-manipulation items-center justify-center rounded-full border-0 bg-transparent transition-[box-shadow,transform] duration-200 hover:shadow-[0_0_6px_rgba(56,189,248,0.95),0_0_18px_rgba(34,211,238,0.75),0_0_32px_rgba(34,211,238,0.45)] focus-visible:outline-none focus-visible:shadow-[0_0_6px_rgba(56,189,248,0.95),0_0_18px_rgba(34,211,238,0.75),0_0_32px_rgba(34,211,238,0.45)] active:scale-95"

// Percentage positions scale with the controller aspect box at every breakpoint
const hotspotSize = "h-[5.5%] w-[5.5%] min-h-0 min-w-0"

const BUTTONS = [
  { id: "triangle", label: "Previous project", action: "prev" as const, left: "76%", top: "25%" },
  { id: "square", label: "Previous project", action: "prev" as const, left: "69.8%", top: "34.5%" },
  { id: "circle", label: "Next project", action: "next" as const, left: "82%", top: "34%" },
  { id: "cross", label: "Next project", action: "next" as const, left: "76.2%", top: "42.4%" },
]

export function ControllerVisual({ onPrev, onNext, className = "" }: ControllerVisualProps) {
  return (
    <div
      className={`relative z-20 mx-auto w-full max-w-[min(100%,720px)] sm:mr-auto sm:max-w-[min(100%,780px)] sm:-translate-x-4 lg:max-w-[min(100%,760px)] lg:-translate-x-6 xl:max-w-[min(100%,900px)] xl:-translate-x-8 ${className}`}
    >
      <div className="relative aspect-[1024/723] w-full">
        <Image
          src="/projects/controller-dualsense.png"
          alt=""
          fill
          unoptimized
          className="pointer-events-none object-contain drop-shadow-[0_16px_40px_rgba(0,0,0,0.35)]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 900px"
        />

        {BUTTONS.map((button) => (
          <button
            key={button.id}
            type="button"
            onClick={button.action === "prev" ? onPrev : onNext}
            aria-label={button.label}
            className={`${hotspotClass} ${hotspotSize} z-30`}
            style={{ left: button.left, top: button.top }}
          />
        ))}
      </div>
    </div>
  )
}
