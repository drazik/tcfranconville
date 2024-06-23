"use client"

import cn from "classnames"
import { createContext, useContext, type ReactNode } from "react"

export function Section({
  variant = DEFAULT_VARIANT,
  skewed = false,
  children,
  id,
}: SectionProps) {
  return (
    <SectionContext.Provider value={{ variant }}>
      <section
        id={id}
        className={cn("relative py-20", {
          "bg-brand text-white": variant === "brand",
          "bg-white text-grey-900": variant === "light",
          "bg-gray-100 text-grey-900": variant === "normal",
          "transform origin-top-right skew-y-1": skewed,
        })}
      >
        {skewed ? (
          <div className={cn("transform", { "-skew-y-1": skewed })}>
            {children}
          </div>
        ) : (
          children
        )}
      </section>
    </SectionContext.Provider>
  )
}

type SectionProps = {
  variant?: "normal" | "brand" | "light"
  skewed?: boolean
  children?: ReactNode
  id?: string
}

const variants = ["normal", "brand", "light"] as const
type Variant = (typeof variants)[number]

const DEFAULT_VARIANT: Variant = "normal"

export const SectionContext = createContext<{ variant: Variant }>({
  variant: DEFAULT_VARIANT,
})

export const useSectionContext = () => {
  const context = useContext(SectionContext)
  return context
}
