import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { typography } from "@/lib/typography"

const projectCardClass = "border-white/10 bg-[#0d1e38]/80 text-white shadow-none"

interface ProjectCardProps {
  title: string
  icon?: React.ReactNode
  headerBorder?: boolean
  className?: string
  children: React.ReactNode
}

export function ProjectCard({
  title,
  icon,
  headerBorder = false,
  className,
  children,
}: ProjectCardProps) {
  return (
    <Card className={cn(projectCardClass, className)}>
      <CardHeader className={headerBorder ? "border-b border-white/10" : undefined}>
        <CardTitle className={icon ? typography.cardTitleWithIcon : typography.cardTitle}>
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}

export { projectCardClass }
