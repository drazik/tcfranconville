import React from 'react'
import { Link } from 'gatsby'
import { Logo } from './Logo'
import Wrapper from './Wrapper'
import Nav from './Nav'
import SplashImage from './SplashImage'

const wrapper = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2rem 0',
  flexDirection: 'column',
}

const Header = () => {
  return (
    <SplashImage component="header">
      <Wrapper css={wrapper}>
        <Link to="/" title="Revenir à l'accueil">
          <Logo size={110} />
        </Link>
        <Nav />
      </Wrapper>
    </SplashImage>
  )
}

export default Header
