import React from 'react'
import Ratio from 'react-ratio'
import { FluidBgImg } from '../FluidBgImg'

export const IllustrationCard = props => {
  const { ratio, image, ...rest } = props

  return (
    <Ratio ratio={ratio}>
      <div
        css={{
          boxShadow: '0 40px 30px -30px rgba(0, 0, 0, 0.5)',
          borderRadius: '0.5rem',
          width: '100%',
          height: '100%',
          position: 'relative',
          overflow: 'hidden',
        }}
        {...rest}
      >
        <FluidBgImg image={image} />
      </div>
    </Ratio>
  )
}
