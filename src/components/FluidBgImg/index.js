import React from 'react'
import Img from 'gatsby-image'

export const FluidBgImg = ({ image, ...props }) => {
  return (
    <Img
      css={{
        position: 'absolute !important',
        width: '100%',
        height: '100%',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: -1,
      }}
      fluid={image}
      {...props}
    />
  )
}

FluidBgImg.defaultProps = {
  alt: '',
}
