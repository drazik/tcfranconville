import React from 'react'
import { formatDate } from '../helpers/date'
import footerBackground from '../images/footer.jpg'
import Logo from './Logo'
import franconvilleLogo from '../images/logo-franconville.png'
import ecosportLogo from '../images/logo-ecosport.png'
import { ExternalLink } from '../components/ExternalLink'

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
    zIndex: -1,
  },
}

const paragraph = {
  marginTop: '3rem',
  fontSize: '1.25rem',
  textAlign: 'center',
}

function Footer() {
  return (
    <footer css={footer}>
      <div
        css={{
          display: 'flex',
          alignItems: 'center',

          '* + *': {
            marginLeft: 64,
          },
        }}
      >
        <Logo size={100} />
        <ExternalLink href="https://www.ville-franconville.fr/">
          <img
            src={franconvilleLogo}
            css={{
              width: 150,
            }}
            alt="Ville de Franconville"
          />
        </ExternalLink>
        <ExternalLink href="https://www.ecosport-tennis.fr/">
          <img
            src={ecosportLogo}
            css={{
              width: 150,
            }}
            alt="Ecosport Tennis"
          />
        </ExternalLink>
      </div>
      <p css={paragraph}>
        &copy; Tennis Club Franconville {formatDate(new Date(), 'yyyy')}
      </p>
      <ul
        css={{
          display: 'flex',
          listStyle: 'none',
          paddingLeft: 0,
        }}
      >
        <li>
          <ExternalLink href="http://www.gs.applipub-fft.fr/fftfr/frameset.do?dispatch=load">
            Gestion Sportive
          </ExternalLink>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
