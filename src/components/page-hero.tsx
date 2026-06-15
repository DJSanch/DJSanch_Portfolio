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
    <div className={cn("mb-16 text-center", className)}>
      {eyebrow ? <p className={cn(typography.eyebrow, "mb-2")}>{eyebrow}</p> : null}
      <div className="mb-4 flex items-center justify-center gap-3">
        {icon}
        <h1 className={typography.pageTitle}>{title}</h1>
      </div>
      {description ? <p className={cn(typography.pageDescription, "mb-6")}>{description}</p> : null}
      {children}
    </div>
  )
}
