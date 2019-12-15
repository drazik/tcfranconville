import React from 'react'
import { Stack } from './Stack'
import { Text } from './Text'

export const List = props => {
  return (
    <Stack spacing="s" component="ul" {...props} />
  )
}

export const ListItem = props => {
  return (
    <Text component="li" {...props} />
  )
}
