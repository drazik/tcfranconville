import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { mq as mqNew } from '../helpers/media-queries'
import { withTheme } from 'emotion-theming'

export const SectionTitle = styled.h1(
  {
    fontSize: '1.5rem',

    '&::after': {
      content: '""',
      display: 'block',
      marginTop: '0.75rem',
      height: 3,
      width: '3rem',
    },
  },
  props => ({
    '&::after': {
      backgroundColor: props.variant === 'primary' ? 'white' : props.theme.main,
    },
  })
)

export const SectionTitleDetails = props => {
  return <div css={{ fontSize: '1rem' }} {...props} />
}

const getSectionBackgroundColor = (variant, theme) => {
  switch (variant) {
    case 'primary':
      return theme.main
    case 'light':
      return 'white'
    default:
      return theme.background
  }
}

export const SectionContainer = props => {
  const { variant, theme, skewed, ...rest } = props

  const styles = {
    position: 'relative',
    paddingTop: '5rem',
    paddingBottom: '5rem',
    backgroundColor: getSectionBackgroundColor(variant, theme),
    color: props.variant === 'primary' ? 'white' : 'inherit',
  }

  const skewedStyles = {
    transform: 'skewY(3deg)',
    transformOrigin: '100% 0',
    zIndex: 0,

    '& > *': {
      transform: 'skewY(-3deg)',
    },

    [mqNew('s')]: {
      transform: 'skewY(2.5deg)',
      '& > *': {
        transform: 'skewY(-2.5deg)',
      },
    },

    [mqNew('m')]: {
      transform: 'skewY(2deg)',
      '& > *': {
        transform: 'skewY(-2deg)',
      },
    },

    [mqNew('l')]: {
      transform: 'skewY(1.5deg)',
      '& > *': {
        transform: 'skewY(-1.5deg)',
      },
    },
  }

  return <section css={[styles, props.skewed && skewedStyles]} {...rest} />
}

SectionContainer.propTypes = {
  variant: PropTypes.oneOf(['normal', 'primary', 'light']),
}

SectionContainer.defaultProps = {
  variant: 'normal',
}

export const Section = withTheme(props => {
  const { children, ...rest } = props

  return (
    <SectionContainer {...rest}>
      {props.skewed ? <div>{children}</div> : children}
    </SectionContainer>
  )
})
