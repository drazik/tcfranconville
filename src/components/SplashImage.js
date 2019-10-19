import React from 'react'
import image from '../images/splash.jpg'

const SplashImage = props => {
  const { component: Component, ...rest } = props

  return (
    <Component
      css={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
      {...rest}
    />
  )
}

export default SplashImage
