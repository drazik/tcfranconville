import classNames from "classnames"
import type { ReactNode } from "react"

export function TableRow({ variant, children }: TableRowProps) {
  return (
    <tr
      className={classNames("border-t border-gray-300", {
        "bg-white": variant === "even",
        "bg-gray-100": variant === "odd",
        "bg-brand text-white": variant === "brand",
      })}
    >
      {children}
    </tr>
  )
}

type TableRowProps = {
  variant: "even" | "odd" | "brand"
  children: ReactNode
}
