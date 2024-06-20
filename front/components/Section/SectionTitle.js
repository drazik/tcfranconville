"use client"

import { SectionContext } from "./Section"
import { useContext } from "react"
import cn from "classnames"
import PropTypes from "prop-types"

export function SectionTitle({
  component: Component = "h2",
  className,
  children,
  subtitle,
  ...props
}) {
  const { variant } = useContext(SectionContext)

  return (
    <Component
      className={cn("text-2xl font-bold space-y-2", className)}
      {...props}
    >
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

SectionTitle.propTypes = {
  component: PropTypes.elementType,
  className: PropTypes.string,
  children: PropTypes.node,
  subtitle: PropTypes.string,
}
