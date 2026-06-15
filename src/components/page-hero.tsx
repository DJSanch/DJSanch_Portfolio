import { cn } from "@/lib/utils"
import { typography } from "@/lib/typography"

interface PageHeroProps {
  eyebrow?: string
  title: string
  description?: string
  icon?: React.ReactNode
  className?: string
  children?: React.ReactNode
}

export function PageHero({
  eyebrow = "Project",
  title,
  description,
  icon,
  className,
  children,
}: PageHeroProps) {
  return (
    <div className={cn("mb-12 sm:mb-16", className)}>
      <div className="max-w-3xl space-y-4 text-center sm:text-left">
        {eyebrow ? <p className={typography.eyebrow}>{eyebrow}</p> : null}
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start">
          {icon}
          <h1 className={typography.pageTitle}>{title}</h1>
        </div>
        {description ? <p className={typography.pageDescription}>{description}</p> : null}
        {children ? (
          <div className="flex flex-wrap justify-center gap-3 pt-2 sm:justify-start">{children}</div>
        ) : null}
      </div>
    </div>
  )
}
