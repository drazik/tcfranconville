import classNames from "classnames"
import type { ReactNode } from "react"

export function TableCell({
  heading = false,
  align = "left",
  children,
  colSpan,
}: TableCellProps) {
  const Component = heading ? "th" : "td"

  return (
    <Component
      className={classNames("p-4", {
        "text-left": align === "left",
        "text-center": align === "center",
        "text-right": align === "right",
      })}
      colSpan={colSpan}
    >
      {children}
    </Component>
  )
}

type TableCellProps = {
  heading?: boolean
  align?: "left" | "right" | "center"
  children?: ReactNode
  colSpan?: number
}
