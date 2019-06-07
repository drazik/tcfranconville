import React from 'react'
import Link from '../components/Link'
import mq from '../helpers/media-queries'

const card = mq({
  height: ['200px', '400px'],
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  boxShadow: '0 40px 30px -30px rgba(0, 0, 0, 0.5)',
  transition: ['none', 'transform 0.35s ease-in-out'],
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  color: 'white',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '1.5rem',
  paddingLeft: '1.5rem',
  paddingBottom: '1.5rem',
  borderRadius: '0.5rem',
  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.35)',
  overflow: 'hidden',
  '&:hover,&:focus': {
    transform: ['none', 'translateY(-0.5rem)']
  }
})

function Card(props) {
  return (
    <Link css={card} {...props} />
  )
}

export default Card
