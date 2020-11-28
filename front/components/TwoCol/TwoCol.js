import cn from "classnames"
import PropTypes from "prop-types"

export function TwoCol({
  firstCol,
  secondCol,
  inversed = false,
  className,
  ...props
}) {
  return (
    <div
      className={cn(
        "space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-10 lg:items-center",
        className
      )}
      {...props}
    >
      <div className={cn({ "lg:order-2": inversed })}>{firstCol}</div>
      <div className={cn({ "lg:order-1": inversed })}>{secondCol}</div>
    </div>
  )
}

TwoCol.propTypes = {
  firstCol: PropTypes.element.isRequired,
  secondCol: PropTypes.element.isRequired,
  inversed: PropTypes.bool,
  className: PropTypes.string,
}
