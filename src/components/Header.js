import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import Logo from './Logo'
import Wrapper from './Wrapper'
import Nav from './Nav'

const container = css({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  paddingTop: '0.5rem',
  paddingBottom: '0.5rem',
  zIndex: 1
})

const wrapper = css({
  display: 'flex',
  alignItems: 'center'
})

const nav = css({
  marginLeft: '3rem'
})

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
