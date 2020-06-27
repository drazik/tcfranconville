import React from "react"

export const ExternalLink = (props) => {
  const { children, ...rest } = props

  return (
    <a target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  )
}
