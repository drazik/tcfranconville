import React from 'react'
import { css } from '@emotion/core'
import { withTheme } from 'emotion-theming'
import PropTypes from 'prop-types'

function isSkewedTop(props) {
  return props.skewed || props.skewedTop
}

function isSkewedBottom(props) {
  return props.skewed || props.skewedBottom
}

function isSkewed(props) {
  return isSkewedTop(props) || isSkewedBottom(props)
}

const sectionBase = css`
  position: relative;
  z-index: 0;
`

const sectionNormal = props => css`
  background-color: ${props.theme.background};
  color: inherit;
`

const sectionPrimary = props => css`
  background-color: ${props.theme.main};
  color: white;

  a {
    color: inherit;
  }
`

const sectionLight = css`
  background-color: white;
  color: inherit;
`

const sectionPadded = css`
  padding-top: 5rem;
  padding-bottom: 5rem;
`

const sectionSkewed = css`
  z-index: 1;
`

const sectionSkewedTop = css`
  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: inherit;
    transform-origin: 100% 100%;
    transform: skewY(3deg);
    z-index: -1;
  }
`

const sectionSkewedTopPadded = css`
  padding-top: 2rem;
`

const sectionSkewedBottom = css`
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: inherit;
    transform-origin: 0 0;
    transform: skewY(3deg);
    z-index: -1;
  }
`

const sectionSkewedBottomPadded = css`
  padding-bottom: 2rem;
`

function _Section(props) {
  const { variant, skewed, skewedTop, skewedBottom, padded, ...rest } = props
  return <section
    css={[
      sectionBase,
      props.variant === 'normal' && sectionNormal(props),
      props.variant === 'primary' && sectionPrimary(props),
      props.variant === 'light' && sectionLight,
      props.padded && sectionPadded,
      isSkewed(props) && sectionSkewed,
      isSkewedTop(props) && sectionSkewedTop,
      isSkewedBottom(props) && sectionSkewedBottom,
      props.padded && isSkewedTop(props) && sectionSkewedTopPadded,
      props.padded && isSkewedBottom(props) && sectionSkewedBottomPadded
    ].filter(Boolean)}
    {...rest}
  />
}

_Section.propTypes = {
  variant: PropTypes.oneOf(['normal', 'primary', 'light'])
}

_Section.defaultProps = {
  variant: 'normal'
}

export const Section = withTheme(_Section)

const titleBase = props => css`
  margin-top: 0;

  &::after {
    content: '';
    display: block;
    margin-top: 0.5rem;
    height: 3px;
    width: 3rem;
    background-color: ${props.theme.main};
  }
`

const titlePrimary = css`
  color: white;

  &::after {
    background-color: currentColor;
  }
`

function _SectionTitle(props) {
  const { variant, children, ...rest } = props

  return <h2
    css={[
      titleBase(props),
      variant === 'primary' && titlePrimary
    ]}
    {...rest}
  >
    {children}
  </h2>
}

export const SectionTitle = withTheme(_SectionTitle)

export const SectionSeparator = () => {
  return (
    <hr
      css={{
        width: '80%'
      }}
    />
  )
}
