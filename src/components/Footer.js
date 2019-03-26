import React from 'react'
import { css } from '@emotion/core'
import mq from '../helpers/media-queries'
import Wrapper from './Wrapper'
import { Link } from 'gatsby'
import { formatDate } from '../helpers/date'
import footerBackground from '../images/footer.jpg'
import Logo from './Logo'

const footer = css`
  position: relative;
  z-index: 0;
  background-image: url(${footerBackground});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding-top: 6rem;
  padding-bottom: 3rem;
  color: white;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.35);
    z-index: -1;
  }
`

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

const footerLink = css`
  color: inherit;

  & + & {
    margin-top: 0.5rem;
  }
`

const paragraph = css`
  margin-top: 3rem;
  font-size: 1.25rem;
  text-align: center;
`

function Footer() {
  return (
    <footer css={footer}>
      <Wrapper>
        <div css={footerInner}>
          <Logo size={100} />
          <p css={paragraph}>
            &copy; Tennis Club Franconville {formatDate(new Date(), 'YYYY')}
          </p>
          <nav css={footerNav}>
            <Link css={footerLink} to="/">Accueil</Link>
            <Link css={footerLink} to="/contact">Contact</Link>
            <Link css={footerLink} to="/enseignement">Enseignement</Link>
            <Link css={footerLink} to="/competition">Compétition</Link>
            <Link css={footerLink} to="/animations">Animations</Link>
            <Link css={footerLink} to="/reservations">Réservation</Link>
          </nav>
        </div>
      </Wrapper>
    </footer>
  )
}

export default Footer
