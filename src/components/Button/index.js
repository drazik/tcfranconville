import React from 'react'

const baseStyle = theme => ({
  backgroundColor: 'white',
  color: theme.main,
  textDecoration: 'none',
  borderRadius: '0.5rem',
  padding: '0.75em 0.5em',
  fontSize: '1.125rem'
})

const fullWidthStyle = {
  display: 'flex',
  justifyContent: 'center'
}

export const Button = props => {
  const { as: Component, fullWidth, ...rest } = props

  return (
    <Component
      css={theme => [baseStyle(theme), fullWidth && fullWidthStyle].filter(Boolean)}
      {...rest}
    />
  )
}
