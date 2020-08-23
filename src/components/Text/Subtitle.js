import React from "react"
import { Text } from "./Text"

export const Subtitle = (props) => {
  return (
    <Text
      css={{
        fontSize: "1.25rem",
        fontWeight: "bold",
      }}
      {...props}
    />
  )
}
