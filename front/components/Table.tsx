import type { ReactNode } from "react"

export function Table({ children }: TableProps) {
  return <table className={"w-full border-collapse"}>{children}</table>
}

type TableProps = {
  children?: ReactNode
}
