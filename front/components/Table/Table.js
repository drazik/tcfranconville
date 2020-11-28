import PropTypes from "prop-types"
import cn from "classnames"

export function Table({ className, ...props }) {
  return (
    <table className={cn("w-full border-collapse", className)} {...props} />
  )
}

Table.propTypes = {
  className: PropTypes.string,
}

export function TableRow({ className, variant, ...props }) {
  return (
    <tr
      className={cn(
        "border-t border-gray-300",
        {
          "bg-white": variant === "even",
          "bg-gray-100": variant === "odd",
          "bg-brand text-white": variant === "brand",
        },
        className
      )}
      {...props}
    />
  )
}

TableRow.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(["even", "odd", "brand"]).isRequired,
}

export function TableCell({
  className,
  heading = false,
  align = "left",
  ...props
}) {
  const Component = heading ? "th" : "td"

  return (
    <Component
      className={cn(
        "p-4",
        {
          "text-left": align === "left",
          "text-center": align === "center",
          "text-right": align === "right",
        },
        className
      )}
      {...props}
    />
  )
}

TableCell.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.bool,
  align: PropTypes.oneOf(["left", "center", "right"]),
}
