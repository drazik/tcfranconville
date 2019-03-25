import React from 'react'
import { css } from '@emotion/core'
import { withTheme } from 'emotion-theming'
import { Link } from 'gatsby'
import FacebookIcon from '../images/icons/facebook.svg'
import mq from '../helpers/media-queries'

const nav = mq({
  display: ['none', 'flex'],
  alignItems: 'center'
})

const link = props => css`
  font-weight: bold;
  text-decoration: none;
  color: white;
  position: relative;

  & + & {
    margin-left: 2rem;
  }

  &[aria-current]::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    right: 0;
    height: 4px;
    width: 100%;
    background-color: ${props.theme.main};
    margin-top: 0.25rem;
  }
`

const fbIcon = css`
  width: 1.5rem;
  height: 1.5rem;
  fill: white;
  vertical-align: bottom;
`

function _Nav(props) {
  const linkStyle = link(props)

  return (
    <nav css={nav} {...props}>
      <Link css={linkStyle} to="/">Accueil</Link>
      <Link css={linkStyle} to="/contact">Contact</Link>
      <Link css={linkStyle} to="/enseignement">Enseignement</Link>
      <Link css={linkStyle} to="/competition">Compétition</Link>
      <Link css={linkStyle} to="/animations">Animations</Link>
      <Link css={linkStyle} to="/reservation">Réservation</Link>
      <a
        css={linkStyle}
        href="https://fr-fr.facebook.com/TCFranconvilleOfficiel/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FacebookIcon css={fbIcon} />
      </a>
    </nav>
  )
}

const Nav = withTheme(_Nav)

export default Nav
