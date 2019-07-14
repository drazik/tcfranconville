import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

export const SectionTitle = styled.h1(
  {
    fontSize: '1.5rem',

    '&::after': {
      content: '""',
      display: 'block',
      marginTop: '0.75rem',
      height: 3,
      width: '3rem',
    }
  },
  props => ({
    '&::after': {
      backgroundColor:
        props.variant === 'primary' ? 'white' : props.theme.main
    }
  })
)

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

export const SectionContainer = styled.section(
  {
    position: 'relative',
    paddingTop: '5rem',
    paddingBottom: '5rem'
  },
  props => {
    const styles = {
      backgroundColor: getSectionBackgroundColor(props.variant, props.theme),
      color: props.variant === 'primary' ? 'white' : 'inherit',
    }

    if (props.skewed) {
      styles.zIndex = 0
      styles.transformOrigin = '100% 0'
      styles.transform = 'skewY(3deg)'
      styles['& > *'] = {
        transform: 'skewY(-3deg)'
      }
    }

    return styles
  }
)

SectionContainer.propTypes = {
  variant: PropTypes.oneOf(['normal', 'primary', 'light'])
}

SectionContainer.defaultProps = {
  variant: 'normal'
}

export const Section = props => {
  const { children, ...rest } = props

  return (
    <SectionContainer {...rest}>
      {props.skewed ? <div>{children}</div> : children}
    </SectionContainer>
  )
}
