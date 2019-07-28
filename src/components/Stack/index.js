import React from 'react'

export const Stack = props => {
  const { as: Component = 'div', ...rest } = props

  return (
    <Component
      css={{
        '> :first-child': {
          marginTop: 0
        },
        '> * + *': {
          marginTop: '1rem'
        }
      }}
      {...rest}
    />
  )
}
