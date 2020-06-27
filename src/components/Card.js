import React from "react"
import PropTypes from "prop-types"
import { mq as mqNew } from "../helpers/media-queries"
import { FluidBgImg } from "./FluidBgImg"

const card = {
  backgroundColor: "white",
  boxShadow: "0 40px 30px -30px rgba(0, 0, 0, 0.5)",
  transition: "none",
  display: "flex",
  flexDirection: "column",
  textDecoration: "none",
  padding: "1.5rem",
  borderRadius: "0.5rem",
  overflow: "hidden",

  [mqNew("s")]: {
    padding: "1.5rem",
  },

  [mqNew("m")]: {
    padding: "0.75rem",
  },

  [mqNew("l")]: {
    padding: "1.5rem",
  },
}

const imageCard = {
  height: 200,
  justifyContent: "flex-end",
  fontWeight: "bold",
  fontSize: "1.5rem",
  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.35)",
  color: "white",
  position: "relative",
  zIndex: 1,

  [mqNew("s")]: {
    height: 250,
  },

  [mqNew("m")]: {
    height: 300,
  },

  [mqNew("l")]: {
    height: 500,
  },
}

const clickableCard = {
  transition: "transform 0.25s ease-in-out",
  "&:hover,&:focus": {
    transform: "translateY(-0.5rem)",
  },
}

function Card(props) {
  const {
    component: Component,
    clickable,
    variant,
    children,
    backgroundImage,
    ...rest
  } = props

  return (
    <Component
      css={[card, clickable && clickableCard, variant === "image" && imageCard]}
      {...rest}
    >
      {backgroundImage && <FluidBgImg image={backgroundImage} />}
      {children}
    </Component>
  )
}

Card.propTypes = {
  component: PropTypes.elementType,
  clickable: PropTypes.bool,
  variant: PropTypes.oneOf(["normal", "image"]),
}

Card.defaultProps = {
  component: "div",
  clickable: false,
  variant: "normal",
}

export default Card
