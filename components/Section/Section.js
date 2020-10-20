import cn from "classnames"
import PropTypes from "prop-types"
import { createContext } from "react"

const DEFAULT_VARIANT = "normal"

export const SectionContext = createContext({ variant: DEFAULT_VARIANT })

export function Section({
  variant = DEFAULT_VARIANT,
  skewed = false,
  className,
  children,
  ...props
}) {
  return (
    <SectionContext.Provider value={{ variant }}>
      <section
        className={cn("relative py-20", className, {
          "bg-brand text-white": variant === "brand",
          "bg-white text-grey-900": variant === "light",
          "bg-gray-100 text-grey-900": variant === "normal",
          "transform origin-top-right skew-y-1": skewed,
        })}
        {...props}
      >
        {skewed ? (
          <div className={cn("transform", { "-skew-y-1": skewed })}>
            {children}
          </div>
        ) : (
          children
        )}
      </section>
    </SectionContext.Provider>
  )
}

Section.propTypes = {
  variant: PropTypes.oneOf(["normal", "brand", "light"]),
  skewed: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
}
