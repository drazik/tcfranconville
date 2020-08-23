import React from "react"
import { Text } from "./Text"

export const List = (props) => {
  return <Text {...props} component="ul" />
}

export const ListItem = (props) => {
  return <Text {...props} component="li" />
}
