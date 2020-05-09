import React from "react"

export const StickyBanner = ({ children, ...props }) => {
  return (
    <div
      css={theme => ({
        backgroundColor: theme.main,
        padding: `${theme.spacing * 2}px ${theme.spacing * 3}px`,
        color: "white",
        textAlign: "center",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 997,
        boxShadow: "0 0 30px 10px rgba(0, 0, 0, 0.5)",
      })}
    >
      {children}
    </div>
  )
}
