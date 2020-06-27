import React from "react"
import Ratio from "react-ratio"
import { FluidBgImg } from "../FluidBgImg"
import PropTypes from "prop-types"

export const IllustrationCard = (props) => {
  const { ratio, image, ...rest } = props

  return (
    <Ratio ratio={ratio}>
      <div
        css={{
          boxShadow: "0 40px 30px -30px rgba(0, 0, 0, 0.5)",
          borderRadius: "0.5rem",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          width: "100%",
          height: "100%",
          position: "relative",
          overflow: "hidden",
        }}
        style={{
          backgroundImage: typeof image === "string" ? `url(${image})` : null,
        }}
        {...rest}
      >
        <FluidBgImg image={image} />
      </div>
    </Ratio>
  )
}

IllustrationCard.propTypes = {
  ratio: PropTypes.number.isRequired,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
}
