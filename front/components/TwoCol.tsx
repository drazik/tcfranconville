import cn from "classnames"
import { ReactNode } from "react"

export function TwoCol({ firstCol, secondCol, inversed = false }: TwoColProps) {
  return (
    <div
      className={
        "space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-10 lg:items-center"
      }
    >
      <div className={cn({ "lg:order-2": inversed })}>{firstCol}</div>
      <div className={cn({ "lg:order-1": inversed })}>{secondCol}</div>
    </div>
  )
}

type TwoColProps = {
  firstCol: ReactNode
  secondCol: ReactNode
  inversed?: boolean
}
