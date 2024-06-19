export const Icon = ({ name, width, height, ...props }) => {
  return (
    <svg width={width} height={height} {...props}>
      <use xlinkHref={`/icon-sprite.svg#${name}`} />
    </svg>
  )
}
