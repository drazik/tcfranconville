import type { ComponentPropsWithoutRef } from "react"

export const Icon = ({ name, ...svgProps }: IconProps) => {
  return (
    <svg {...svgProps}>
      <use xlinkHref={`/icon-sprite.svg#${name}`} />
    </svg>
  )
}

type IconProps = ComponentPropsWithoutRef<"svg"> & {
  name: string
}
