import React from "react"
import PropTypes from "prop-types"

export const Stack = (props) => {
  const { spacing = "m", component: Component, ...rest } = props

  const spacingToMultiplicator = {
    xs: 0.5,
    s: 1,
    m: 4,
    l: 6,
    xl: 12,
  }

  return (
    <Component
      css={(theme) => ({
        "& > *": {
          marginTop: 0,
          marginBottom: 0,
        },
        "& > * + *": {
          marginTop: `${
            theme.spacing * spacingToMultiplicator[spacing]
          }px !important`,
        },
      })}
      {...rest}
    />
  )
}

Stack.propTypes = {
  spacing: PropTypes.oneOf(["xs", "s", "m", "l", "xl"]),
}

Stack.defaultProps = {
  component: "div",
  spacing: "m",
}
