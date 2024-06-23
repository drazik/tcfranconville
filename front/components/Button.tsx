import { Slot } from "@radix-ui/react-slot"
import cn from "classnames"
import { type ReactNode } from "react"

export const Button = ({
  color = "normal",
  size = "medium",
  children,
  asChild = false,
  onClick,
}: ButtonProps) => {
  const Component = asChild ? Slot : "button"

  return (
    <Component
      className={cn(
        "no-underline  inline-flex justify-center items-center rounded-full text-lg font-semibold shadow-md text-center",
        {
          "bg-brand text-white hover:bg-blue-800 active:bg-blue-900 focus:shadow-outline":
            color === "brand",
          "bg-gray-100 hover:bg-blue-100 active:bg-blue-200 focus:shadow-outline text-brand":
            color === "normal",
          "px-8 py-3": size === "medium",
          "px-4 py-1 text-sm": size === "small",
        }
      )}
      onClick={onClick}
    >
      {children}
    </Component>
  )
}

type ButtonProps = {
  color?: "normal" | "brand"
  size?: "medium" | "small"
  children?: ReactNode
  asChild?: boolean
  onClick?: () => void
}
