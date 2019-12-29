import React, { useRef, forwardRef, useEffect, useState } from 'react'
import Hammer from 'hammerjs'

const SliderTrack = forwardRef((props, ref) => {
  const { transform, animating, ...rest } = props

  return (
    <div
      css={{
        display: 'flex',
        flexWrap: 'nowrap',
        transition: animating ? 'transform 0.4s ease-in-out' : null,
      }}
      style={{ transform }}
      ref={ref}
      {...rest}
    />
  )
})

export const Slider = props => {
  const { children, ...rest } = props
  const trackRef = useRef(null)
  const animationTimeoutRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [delta, setDelta] = useState(0)

  useEffect(() => {
    const goToSlide = index => {
      if (index < 0) {
        index = 0
      } else if (index >= children.length) {
        index = children.length - 1
      }

      setAnimating(true)
      setDelta(0)
      clearTimeout(animationTimeoutRef.current)
      animationTimeoutRef.current = setTimeout(() => setAnimating(false), 400)
      setCurrentIndex(index)
    }

    const onPan = e => {
      if (e.isFinal) {
        if (e.deltaX < 0) {
          goToSlide(currentIndex + 1)
        } else if (e.deltaX > 0) {
          goToSlide(currentIndex - 1)
        } else {
          goToSlide(currentIndex)
        }
      } else {
        setDelta(e.deltaX)
      }
    }

    const manager = new Hammer.Manager(trackRef.current)
    manager.add(new Hammer.Pan({ threshold: 0, pointers: 0 }))
    manager.on('pan', onPan)

    return () => {
      manager.off('pan', onPan)
    }
  }, [currentIndex, children.length])

  const transform = `translateX(calc(${-currentIndex * 100}% ${
    delta < 0 ? '-' : '+'
  } ${Math.abs(delta)}px))`

  return (
    <div css={{ overflow: 'hidden' }} {...rest}>
      <SliderTrack ref={trackRef} transform={transform} animating={animating}>
        {children}
      </SliderTrack>
    </div>
  )
}

export const Slide = props => {
  return <div css={{ width: '100%', flexShrink: 0 }} {...props} />
}
