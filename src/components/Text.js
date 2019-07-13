import React from 'react'

export const Text = props => {
  return (
    <p
      css={{
        lineHeight: 1.5,
        fontSize: '1.125rem',
      }}
      {...props}
    />
  )
}
