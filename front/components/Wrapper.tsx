import type { ReactNode } from "react"

export function Wrapper({ children }: WrapperProps) {
  return <div className={`relative w-11/12 max-w-6xl mx-auto`}>{children}</div>
}

type WrapperProps = {
  children: ReactNode
}
