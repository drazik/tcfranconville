import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import FacebookIcon from '../images/icons/facebook.svg'

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
`

const StyledLink = styled(Link)`
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
    background-color: ${props => props.theme.main};
    margin-top: 0.25rem;
  }
`

const StyledFBIcon = styled(FacebookIcon)`
  width: 1.5rem;
  height: 1.5rem;
  fill: white;
  vertical-align: bottom;
`

function Nav(props) {
  return (
    <StyledNav {...props}>
      <StyledLink to="/">Accueil</StyledLink>
      <StyledLink to="/contact">Contact</StyledLink>
      <StyledLink to="/enseignement">Enseignement</StyledLink>
      <StyledLink to="/competition">Compétition</StyledLink>
      <StyledLink to="/animations">Animations</StyledLink>
      <StyledLink to="/reservation">Réservation</StyledLink>
      <StyledLink
        as="a"
        href="https://fr-fr.facebook.com/TCFranconvilleOfficiel/"
        target="_blank"
      >
        <StyledFBIcon />
      </StyledLink>
    </StyledNav>
  )
}

export default Nav
