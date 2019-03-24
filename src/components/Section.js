import styled from '@emotion/styled'

function isSkewedTop(props) {
  return props.skewed || props.skewedTop
}

function isSkewedBottom(props) {
  return props.skewed || props.skewedBottom
}

function isSkewed(props) {
  return isSkewedTop(props) || isSkewedBottom(props)
}

export const Section = styled.section`
  padding: ${props => props.padded ? '5rem 0' : '0'};
  position: relative;
  z-index: 0;
  background-color: ${props => props.theme.background};

  ${props => isSkewed(props) && `
    z-index: 1;
  `}

  ${props => isSkewedTop(props) && `
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

  ${props => isSkewedBottom(props) && `

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

export const PrimarySection = styled(Section)`
  background-color: ${props => props.theme.main};
  color: white;

  a {
    color: inherit;
  }
`
