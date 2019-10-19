import React from 'react'
import { Link } from 'gatsby'
import Logo from './Logo'
import Wrapper from './Wrapper'
import Nav from './Nav'
import SplashImage from './SplashImage'
import mq from '../helpers/media-queries'

const wrapper = mq({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2rem 0',
  flexDirection: ['row', 'row', 'row', 'column']
})

const Header = () => {
  return (
    <SplashImage component="header">
      <Wrapper css={wrapper}>
        <Link to="/" title="Revenir à l'accueil">
          <Logo size={125} />
        </Link>
        <Nav />
      </Wrapper>
    </SplashImage>
  )
}

export default Header
