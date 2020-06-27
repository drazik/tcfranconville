import React from "react"
import { Caption } from "../Text"

export const Table = (props) => {
  return (
    <table
      css={{
        width: "100%",
        borderCollapse: "collapse",
      }}
      {...props}
    />
  )
}

export const TableHead = (props) => {
  return <thead {...props} />
}

export const TableBody = (props) => {
  return <tbody {...props} />
}

const baseRowStyle = {
  "tbody &": {
    borderTop: "1px solid #dfdfdf",
  },

  "tbody &:nth-child(2n)": {
    backgroundColor: "white",
  },

  "tbody &:nth-child(2n + 1)": {
    backgroundColor: "#f7f2f2",
  },
}

const primaryRowStyle = (theme) => ({
  "tbody &": {
    backgroundColor: `${theme.main} !important`,
    color: "white !important",
  },

  [Caption]: {
    color: "white !important",
  },
})

export const TableRow = (props) => {
  const { variant, ...rest } = props

  return (
    <tr
      css={(theme) => [
        baseRowStyle,
        variant === "primary" && primaryRowStyle(theme),
      ]}
      {...rest}
    />
  )
}

export const TableCell = (props) => {
  const { heading, align = "left", ...rest } = props

  const Component = heading ? "th" : "td"

  return (
    <Component
      css={{
        padding: "1rem",
        textAlign: align,
      }}
      {...rest}
    />
  )
}
