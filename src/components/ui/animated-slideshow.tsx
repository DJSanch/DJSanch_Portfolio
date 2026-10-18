"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

export interface ServiceSlide {
  title: string
  description: string
  image: string
  alt: string
}

interface SliderContextValue {
  activeSlide: number
  changeSlide: (index: number) => void
}

const SliderContext = React.createContext<SliderContextValue | undefined>(undefined)

function useSlider() {
  const context = React.useContext(SliderContext)
  if (!context) throw new Error("Service slideshow items must be inside ServiceSlideshow.")
  return context
}

export function TextStaggerHover({ text, index, className }: { text: string; index: number; className?: string }) {
  const { activeSlide, changeSlide } = useSlider()
  const active = activeSlide === index

  return (
    <button
      type="button"
      aria-pressed={active}
      className={cn("service-slide-title", active && "active", className)}
      onMouseEnter={() => changeSlide(index)}
      onFocus={() => changeSlide(index)}
      onClick={() => changeSlide(index)}
    >
      {text.split(" ").map((word, wordIndex) => (
        <span className="service-slide-word" key={`${word}-${wordIndex}`}>
          {word.split("").map((character, characterIndex) => (
            <motion.span
              key={`${character}-${characterIndex}`}
              className="service-slide-character"
              animate={{ y: active ? 0 : 5, opacity: active ? 1 : 0.38 }}
              transition={{ duration: 0.22, delay: active ? characterIndex * 0.012 : 0 }}
            >
              {character}
            </motion.span>
          ))}
          {wordIndex < text.split(" ").length - 1 && <span className="service-slide-space">&nbsp;</span>}
        </span>
      ))}
    </button>
  )
}

export function ServiceSlideshow({ slides }: { slides: ServiceSlide[] }) {
  const [activeSlide, setActiveSlide] = React.useState(0)
  if (!slides.length) return null

  return (
    <SliderContext.Provider value={{ activeSlide, changeSlide: setActiveSlide }}>
      <section className="services-showcase" aria-label="Skills and services">
        <div className="services-list">
          <p className="eyebrow">What I can help with</p>
          <h3>Skills &amp; <em>services.</em></h3>
          <div className="services-options" role="group" aria-label="Choose a service">
            {slides.map((slide, index) => (
              <TextStaggerHover key={slide.title} text={slide.title} index={index} />
            ))}
          </div>
          <motion.p className="services-description" key={activeSlide} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.28 }} aria-live="polite">
            {slides[activeSlide].description}
          </motion.p>
        </div>

        <div className="services-image-wrap">
          {slides.map((slide, index) => (
            <motion.div
              key={slide.title}
              className="services-image"
              initial={false}
              animate={{ clipPath: activeSlide === index ? "inset(0% 0% 0% 0%)" : "inset(0% 0% 100% 0%)" }}
              transition={{ duration: 0.65, ease: [0.33, 1, 0.68, 1] }}
              aria-hidden={activeSlide !== index}
            >
              <Image src={slide.image} alt={slide.alt} fill sizes="(max-width: 760px) 100vw, 52vw" />
              <span className="services-image-index">0{index + 1} / 0{slides.length}</span>
            </motion.div>
          ))}
          <span className="services-image-caption">A FEW THINGS I BUILD</span>
        </div>
      </section>
    </SliderContext.Provider>
  )
}
