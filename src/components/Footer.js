import React from 'react'
import { formatDate } from '../helpers/date'
import footerBackground from '../images/footer.jpg'
import Logo from './Logo'

const footer = {
  position: 'relative',
  zIndex: 0,
  backgroundImage: `url(${footerBackground})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  paddingTop: '3rem',
  paddingBottom: '3rem',
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  '&::before': {
    content: "''",
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    zIndex: -1
  }
}

const paragraph = {
  marginTop: '3rem',
  fontSize: '1.25rem',
  textAlign: 'center'
}

function Footer() {
  return (
    <footer css={footer}>
      <Logo size={100} />
      <p css={paragraph}>
        &copy; Tennis Club Franconville {formatDate(new Date(), 'yyyy')}
      </p>
    </footer>
  )
}

export default Footer
