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

const primaryStyle = theme => ({
  backgroundColor: theme.main,
  color: 'white'
})

export const Button = props => {
  const { as: Component = 'button', fullWidth, variant, ...rest } = props

  return (
    <Component
      css={theme => [
        baseStyle(theme),
        fullWidth && fullWidthStyle,
        variant === 'primary' && primaryStyle(theme)
      ].filter(Boolean)}
      {...rest}
    />
  )
}
