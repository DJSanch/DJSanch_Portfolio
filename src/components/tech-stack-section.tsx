"use client"

import { useState } from "react"

const stacks = [
  { category: "Frontend", tools: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", tools: ["Node.js", "Python", "Supabase", "PostgreSQL"] },
  { category: "Mobile", tools: ["React Native"] },
  { category: "AI & machine learning", tools: ["Python", "Computer vision"] },
  { category: "Network engineering", tools: ["Cisco", "CCNA"] },
]

export function TechStackSection() {
  const [active, setActive] = useState(0)

  return (
    <section className="tech-stack-section" id="tech-stack" aria-labelledby="tech-stack-title" data-reveal>
      <div className="tech-stack-heading">
        <p className="eyebrow"><span className="tech-stack-rule" /> Expertise</p>
        <h2 id="tech-stack-title">Tools for<br />thoughtful <em>products.</em></h2>
        <p className="tech-stack-note">A practical stack for building useful products, from interface to infrastructure.</p>
      </div>
      <div className="tech-stack-list" role="group" aria-label="Technology categories">
        {stacks.map((stack, index) => (
          <button
            className={`tech-stack-row${active === index ? " is-active" : ""}`}
            type="button"
            key={stack.category}
            aria-pressed={active === index}
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
            onClick={() => setActive(index)}
          >
            <span className="tech-stack-row-top"><span className="tech-stack-category">{stack.category}</span><span className="tech-stack-tools">{stack.tools.join(" · ")}</span></span>
            <span className="tech-stack-track"><span /></span>
          </button>
        ))}
        <p className="tech-stack-hint"><span /> Hover or select to explore</p>
      </div>
    </section>
  )
}
