import React from 'react'
import { Link } from 'gatsby'
import Logo from './Logo'
import Wrapper from './Wrapper'
import Nav from './Nav'
import mq from '../helpers/media-queries'

const container = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  paddingTop: '0.5rem',
  paddingBottom: '0.5rem',
  zIndex: 1
}

const wrapper = mq({
  display: 'flex',
  alignItems: 'center',
  justifyContent: ['center', 'flex-start']
})

const nav = {
  marginLeft: '3rem'
}

const Header = () => {
  return (
    <header css={container}>
      <Wrapper css={wrapper}>
        <Link to="/" title="Revenir à l'accueil">
          <Logo />
        </Link>
        <Nav css={nav} />
      </Wrapper>
    </header>
  )
}

export default Header
