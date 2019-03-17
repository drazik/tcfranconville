import styled, { css } from 'styled-components'

export const Section = styled.section`
  padding: ${props => props.padded ? '3rem 0' : '0'};
  position: relative;
  z-index: 0;
`

export const PrimarySection = styled(Section)`
  background-color: ${props => props.theme.main};
  color: white;

  a {
    color: inherit;
  }

  ${props => (props.skewed || props.skewedTop || props.skewedBottom) && `
    z-index: 1;
  `}

  ${props => (props.skewed || props.skewedTop) && `
    &::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: inherit;
      transform-origin: 100% 100%;
      transform: skewY(3deg);
      z-index: -1;
    }
  `}

  ${props => (props.skewed || props.skewedBottom) && `
    &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: inherit;
      transform-origin: 0 0;
      transform: skewY(3deg);
      z-index: -1;
    }
  `}
`
