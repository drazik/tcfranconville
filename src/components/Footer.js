import React from 'react'
import mq from '../helpers/media-queries'
import Wrapper from './Wrapper'
import { Link } from 'gatsby'
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
  paddingTop: '6rem',
  paddingBottom: '3rem',
  color: 'white',

  '&::before': {
    content: "''",
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    zIndex: -1
  }
}

const footerInner = mq({
  display: 'flex',
  flexDirection: ['column', 'row'],
  alignItems: 'center',
  justifyContent: ['center', 'space-between']
})

const footerNav = mq({
  display: 'flex',
  flexDirection: 'column',
  alignItems: ['center', 'flex-end']
})

const footerLink = {
  color: 'inherit',

  '& + &': {
    marginTop: '0.5rem'
  }
}

const paragraph = {
  marginTop: '3rem',
  fontSize: '1.25rem',
  textAlign: 'center'
}

const FooterLink = props => <Link {...props} css={footerLink} />

function Footer() {
  return (
    <footer css={footer}>
      <Wrapper>
        <div css={footerInner}>
          <Logo size={100} />
          <p css={paragraph}>
            &copy; Tennis Club Franconville {formatDate(new Date(), 'yyyy')}
          </p>
          <nav css={footerNav}>
            <FooterLink to="/">Accueil</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
            <FooterLink to="/enseignement">Enseignement</FooterLink>
            <FooterLink to="/competition">Compétition</FooterLink>
            <FooterLink to="/animations">Animations</FooterLink>
            <FooterLink to="/reservations">Réservation</FooterLink>
          </nav>
        </div>
      </Wrapper>
    </footer>
  )
}

export default Footer
