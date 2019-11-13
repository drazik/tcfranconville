import React from 'react'
import styled from '@emotion/styled'

export const Text = props => {
  const { component: Component = 'p', ...rest } = props

  return (
    <Component
      css={{
        lineHeight: 1.5,
        fontSize: '1.125rem',
        marginTop: 0,
        marginBottom: 0
      }}
      {...rest}
    />
  )
}


export const Caption = styled(Text)({
  fontSize: '0.75rem',
  color: '#393939'
})

export const Subtitle = props => {
  return (
    <Text
      css={{
        fontSize: '1.25rem',
        fontWeight: 'bold'
      }}
      {...props}
    />
  )
}
