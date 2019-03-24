import React from 'react'
import styled from '@emotion/styled'
import Wrapper from './Wrapper'
import { Link } from 'gatsby'
import { formatDate } from '../helpers'
import footerBackground from '../images/footer.jpg'
import Logo from './Logo'

const StyledFooter = styled.footer`
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

const FooterInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const FooterLink = styled(Link)`
  color: inherit;

  & + & {
    margin-top: 0.5rem;
  }
`

const Paragraph = styled.p`
  margin-top: 3rem;
  font-size: 1.25rem;
  text-align: center;
`

function Footer() {
  return (
    <StyledFooter>
      <Wrapper>
        <FooterInner>
          <Logo size={100} />
          <Paragraph>
            &copy; Tennis Club Franconville {formatDate(new Date(), 'YYYY')}
          </Paragraph>
          <FooterNav>
            <FooterLink to="/">Accueil</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
            <FooterLink to="/enseignement">Enseignement</FooterLink>
            <FooterLink to="/competition">Compétition</FooterLink>
            <FooterLink to="/animations">Animations</FooterLink>
            <FooterLink to="/reservations">Réservation</FooterLink>
          </FooterNav>
        </FooterInner>
      </Wrapper>
    </StyledFooter>
  )
}

export default Footer
