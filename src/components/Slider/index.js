import React, { useState } from 'react'
import styled from '@emotion/styled'

const SliderTrack = props => {
  return (
    <div
      css={{
        display: 'flex',
        flexWrap: 'nowrap',
        transition: 'transform 0.4s ease-in-out',
      }}
      {...props}
    />
  )
}

export const Slide = props => {
  return (
    <div css={{ flexBasis: '100%', flexShrink: 0, flexGrow: 0 }} {...props} />
  )
}

const SliderControl = styled.button({
  position: 'absolute',
  top: 0,
  bottom: 0,
  width: '2rem',
  border: 0,
  backgroundColor: 'transparent',
  color: 'white',
  padding: 0,
  transition: 'background-color 0.25s ease-out',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
  },
})

const SliderControlArrow = styled.span`
  --angle: 35deg;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1rem;
  height: 1rem;
  transform: translate(-50%);

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    let: 50%;
    width: 100%;
    height: 3px;
    margin-top: -1px;
    margin-left: -50%;
    background-color: white;
    border-radius: 2px;
    transform-origin: ${props =>
      props.direction === 'left' ? '0 50%' : '100% 50%'};
    transition: transform 0.2s ease-in-out;
  }

  &::before {
    transform: rotate(calc(var(--angle) * -1));
  }

  &::after {
    transform: rotate(var(--angle));
  }

  ${SliderControl}:hover &,
  ${SliderControl}:focus & {
    --angle: 30deg;
  }
`

const SliderPrevious = props => {
  return (
    <SliderControl css={{ left: 0 }} {...props}>
      <SliderControlArrow direction="left" />
    </SliderControl>
  )
}

const SliderNext = props => {
  return (
    <SliderControl css={{ right: 0 }} {...props}>
      <SliderControlArrow direction="right" />
    </SliderControl>
  )
}

const SliderDots = ({ currentIndex, nbSlides, ...props }) => {
  return (
    <div
      css={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}
    >
      {Array.from({ length: nbSlides }).map((_, index) => (
        <div
          key={index}
          css={theme => ({
            width: '0.5rem',
            height: '0.5rem',
            border: `2px solid ${theme.main}`,
            backgroundColor: index === currentIndex ? theme.main : 'white',
            margin: '0 1rem',
            borderRadius: '50%',
            opacity: index === currentIndex ? 1 : 0.7,
            transform: index === currentIndex ? 'scale(1.5)' : null,
            transition: 'transform 0.2s ease-out',
          })}
        />
      ))}
    </div>
  )
}

const useSlider = nbSlides => {
  const [index, setIndex] = useState(0)

  const style = {
    transform: `translateX(${-index * 100}%)`,
  }

  const hasPrevious = index > 0
  const hasNext = index < nbSlides - 1

  const goToPrevious = () => {
    if (!hasPrevious) {
      return
    }

    setIndex(index - 1)
  }

  const goToNext = () => {
    if (!hasNext) {
      return
    }

    setIndex(index + 1)
  }

  return [style, hasPrevious, hasNext, goToPrevious, goToNext, index]
}

export const Slider = ({ children, ...props }) => {
  const [
    style,
    hasPrevious,
    hasNext,
    goToPrevious,
    goToNext,
    currentIndex,
  ] = useSlider(children.length)

  return (
    <div css={{ position: 'relative' }} {...props}>
      <div
        css={{
          overflow: 'hidden',
          position: 'relative',
          borderRadius: '0.5rem',
          boxShadow: '0 40px 30px -30px rgba(0,0,0,0.5)',
        }}
      >
        <SliderTrack style={style}>{children}</SliderTrack>
        {hasPrevious && <SliderPrevious onClick={goToPrevious} />}
        {hasNext && <SliderNext onClick={goToNext} />}
      </div>
      <SliderDots currentIndex={currentIndex} nbSlides={children.length} />
    </div>
  )
}
