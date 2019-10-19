import React from 'react'
import PropTypes from 'prop-types'

export const Stack = props => {
  const { spacing = 'm', ...rest } = props

  const spacingToMultiplicator = {
    xs: 1,
    s: 2,
    m: 4,
    l: 6
  }

  return (
    <div
      css={theme => ({
        '& > *': {
          marginTop: 0,
          marginBottom: 0
        },
        '& > * + *': {
          marginTop: theme.spacing * spacingToMultiplicator[spacing]
        }
      })}
      {...rest}
    />
  )
}

Stack.propTypes = {
  spacing: PropTypes.oneOf(['xs', 's', 'm', 'l'])
}
