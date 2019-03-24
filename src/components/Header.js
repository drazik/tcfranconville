import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import Logo from './Logo'
import Wrapper from './Wrapper'
import Nav from './Nav'

const Container = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  z-index: 1;
`

const Content = styled.div`
  display: flex;
  align-items: center;
`

const StyledNav = styled(Nav)`
  margin-left: 3rem;
`

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <Link to="/" title="Revenir à l'accueil">
            <Logo />
          </Link>
          <StyledNav />
        </Content>
      </Wrapper>
    </Container>
  )
}

export default Header
