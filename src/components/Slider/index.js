import React from 'react'
import styled from '@emotion/styled'

const SliderTrack = props => {
  return <div css={{ display: 'flex', flexWrap: 'nowrap' }} {...props} />
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
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
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

const useSlider = nbSlides => {
  return [
    {},
    true,
    true,
    () => console.log('previous'),
    () => console.log('next'),
  ]
}

export const Slider = ({ children, style, ...props }) => {
  const [sliderStyle, hasPrevious, hasNext, goToPrevious, goToNext] = useSlider(
    children.length
  )

  return (
    <div
      css={{ overflow: 'hidden', position: 'relative' }}
      style={{ ...style, ...sliderStyle }}
      {...props}
    >
      <SliderTrack>{children}</SliderTrack>
      {hasPrevious && <SliderPrevious onClick={goToPrevious} />}
      {hasNext && <SliderNext onClick={goToNext} />}
    </div>
  )
}
