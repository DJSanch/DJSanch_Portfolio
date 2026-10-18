"use client"

import { useState, type CSSProperties, type FocusEvent } from "react"
import Image from "next/image"
import { ArrowUpRight, FolderOpen } from "lucide-react"

interface Project {
  name: string
  type: string
  image: string
  href: string
  number: string
  description: string
}

const collections = [
  { id: "web", title: "Web & E-commerce", names: ["Big Bros Hawaiian Grill", "JS Aromatoc", "Cards Bros", "Examiner"], description: "Web products, online stores, and customer-facing experiences." },
  { id: "mobile-ai", title: "Mobile & AI", names: ["RiceProTech", "CrackVision"], description: "Mobile tools and applied machine learning projects." },
  { id: "systems", title: "Data & Systems", names: ["Envirotech"], description: "Operational software and data-rich applications." },
]

export function ProjectFolderCatalog({ projects }: { projects: Project[] }) {
  const [activeCollection, setActiveCollection] = useState<string | null>(null)

  return (
    <div className="project-folder-catalog">
      <div className="project-folder-intro">
        <p>An interactive catalog of my work. Hover or focus a collection to reveal project previews.</p>
      </div>
      <div className="project-folder-grid">
        {collections.map((collection, collectionIndex) => {
          const items = collection.names.map((name) => projects.find((project) => project.name === name)).filter((project): project is Project => Boolean(project))
          const isOpen = activeCollection === collection.id

          return (
            <article
              key={collection.id}
              className={`project-folder-card ${isOpen ? "is-open" : ""}`}
              onMouseEnter={() => setActiveCollection(collection.id)}
              onMouseLeave={() => setActiveCollection(null)}
              onBlur={(event: FocusEvent<HTMLElement>) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setActiveCollection(null)
              }}
              data-folder={collection.id}
            >
              <div className="project-preview-stack" aria-label={`${collection.title} projects`}>
                {items.map((project, index) => {
                  const isExternal = project.href.startsWith("http")
                  return (
                    <a
                      key={project.name}
                      className={`project-preview-card preview-${index}`}
                      href={project.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noreferrer" : undefined}
                      tabIndex={isOpen ? 0 : -1}
                      aria-label={`Open ${project.name}`}
                      style={{ "--preview-index": index } as CSSProperties}
                    >
                      <Image src={project.image} alt="" fill sizes="(max-width: 760px) 45vw, 20vw" />
                      <span>{project.name}</span>
                      <ArrowUpRight size={13} />
                    </a>
                  )
                })}
              </div>

              <button
                className="project-folder-trigger"
                type="button"
                aria-expanded={isOpen}
                onClick={() => setActiveCollection(collection.id)}
                onFocus={() => setActiveCollection(collection.id)}
              >
                <span className="project-folder-art" aria-hidden="true">
                  <span className="project-folder-tab" />
                  <span className="project-folder-face" />
                  {isOpen && <FolderOpen className="project-folder-open-icon" strokeWidth={1.2} />}
                </span>
                <span className="project-folder-name">{collection.title}</span>
                <span className="project-folder-count">{items.length} {items.length === 1 ? "project" : "projects"}</span>
                <span className="project-folder-hint">{isOpen ? collection.description : "HOVER OR SELECT"}</span>
              </button>
              <span className="project-folder-index">0{collectionIndex + 1}</span>
            </article>
          )
        })}
      </div>
    </div>
  )
}
