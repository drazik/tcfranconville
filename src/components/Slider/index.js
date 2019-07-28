import React, { useRef } from "react";
import BaseSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Slider = props => {
  const { children, ...rest } = props
  const ref = useRef(null)

  const pause = () =>
    ref.current && ref.current.slickPause && ref.current.slickPause()

  return (
    <BaseSlider
      onSwipe={pause}
      ref={ref}
      {...rest}
    >
      {children}
    </BaseSlider>
  )
}

export const Slide = props => {
  const {
    backgroundImage,
    text,
    tabindex,
    style,
    as: Component,
    ...rest
  } = props

  return (
    <div tabIndex={tabindex} style={style}>
      <Component
        css={{
          height: '400px',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom right',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          paddingTop: '40px',
          textDecoration: 'none'
        }}
        {...rest}
      >
        <div
          css={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: 'white',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.35)'
          }}
        >
          {text}
        </div>
      </Component>
    </div>
  )
}
