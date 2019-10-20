import React from 'react'

export const PageTitle = props => {
  const { children, ...rest } = props

  return (
    <h1
      css={{
        fontSize: '2rem',
        fontWeight: 'bold',
        textAlign: 'center'
      }}
      {...rest}
    >
      {children}
    </h1>
  )
}
