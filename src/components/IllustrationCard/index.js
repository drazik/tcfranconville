import React from 'react'
import Ratio from 'react-ratio'

export const IllustrationCard = props => {
  const { ratio, image, ...rest } = props

  return (
    <Ratio ratio={ratio}>
      <div
        css={{
          boxShadow: '0 40px 30px -30px rgba(0, 0, 0, 0.5)',
          borderRadius: '0.5rem',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '100%'
        }}
        style={{
          backgroundImage: `url(${image})`
        }}
        {...rest}
      />
    </Ratio>
  )
}
