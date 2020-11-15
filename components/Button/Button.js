import cn from "classnames"
import PropTypes from "prop-types"
import { forwardRef } from "react"

export const Button = forwardRef(function Button(
  { component: Component = "button", color = "normal", className, ...props },
  ref
) {
  return (
    <Component
      ref={ref}
      className={cn(
        "no-underline px-8 py-3 inline-flex justify-center items-center rounded-full text-lg font-semibold shadow-md",
        {
          "bg-brand text-white hover:bg-blue-800 active:bg-blue-900 focus:shadow-outline":
            color === "brand",
          "bg-gray-100 hover:bg-blue-100 active:bg-blue-200 focus:shadow-outline text-brand":
            color === "normal",
        },
        className
      )}
      {...props}
    />
  )
})

Button.propTypes = {
  component: PropTypes.elementType,
  className: PropTypes.string,
  color: PropTypes.oneOf(["normal", "brand"]),
}
