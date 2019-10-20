import React from 'react'
import PropTypes from 'prop-types'
import { mq as mqNew } from '../helpers/media-queries'

const card = {
  height: 200,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  boxShadow: '0 40px 30px -30px rgba(0, 0, 0, 0.5)',
  transition: 'none',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  color: 'white',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '1.5rem',
  padding: '1.5rem',
  borderRadius: '0.5rem',
  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.35)',
  overflow: 'hidden',

  [mqNew('s')]: {
    height: 250,
    padding: '1.5rem'
  },

  [mqNew('m')]: {
    height: 300,
    padding: '0.75rem'
  },

  [mqNew('l')]: {
    height: 400,
    padding: '1.5rem',
    transition: 'transform 0.35s ease-in-out'
  },

  '&:hover,&:focus': {
    transform: 'none',

    [mqNew('l')]: {
      transform: 'translateY(-0.5rem)'
    }
  }
}

function Card(props) {
  const { component: Component, ...rest } = props
  return (
    <Component css={card} {...rest} />
  )
}

Card.propTypes = {
  component: PropTypes.elementType
}

Card.defaultProps = {
  component: 'div'
}

export default Card
