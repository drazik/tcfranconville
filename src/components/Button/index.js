import React from 'react'

const baseStyle = theme => ({
  backgroundColor: 'white',
  color: theme.main,
  textDecoration: 'none',
  borderRadius: '0.5rem',
  padding: '0.75em 0.5em',
  fontSize: '1.125rem',
  display: 'inline-flex',
  justifyContent: 'center'
})

const blockStyle = {
  display: 'flex'
}

const primaryStyle = theme => ({
  backgroundColor: theme.main,
  color: 'white'
})

export const Button = props => {
  const { as: Component = 'button', variant, block, ...rest } = props

  return (
    <Component
      css={theme => [
        baseStyle(theme),
        block && blockStyle,
        variant === 'primary' && primaryStyle(theme)
      ].filter(Boolean)}
      {...rest}
    />
  )
}
