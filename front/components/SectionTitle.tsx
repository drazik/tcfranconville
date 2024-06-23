"use client"

import cn from "classnames"
import { useSectionContext } from "./Section"
import { ElementType, ReactNode } from "react"

export function SectionTitle({
  component: Component = "h2",
  children,
  subtitle,
}: SectionTitleProps) {
  const { variant } = useSectionContext()

  return (
    <Component className={"text-2xl font-bold space-y-2"}>
      <div>
        <div>{children}</div>
        {subtitle ? <div className="text-sm font-bold">{subtitle}</div> : null}
      </div>
      <div
        className={cn("h-1 w-12", {
          "bg-brand": ["normal", "light"].includes(variant),
          "bg-white": variant === "brand",
        })}
      />
    </Component>
  )
}

type SectionTitleProps = {
  component?: ElementType
  children?: ReactNode
  subtitle?: string
}
