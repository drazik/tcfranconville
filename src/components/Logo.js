import styled from '@emotion/styled'
import logo from '../images/logo-tcf.png'

const Logo = styled.span`
  display: inline-block;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background-color: white;
  position: relative;
  border-radius: 50%;
  border: 2px solid ${props => props.theme.main};

  &::before {
    content: '';
    position: absolute;
    top: 3px;
    bottom: 3px;
    left: 3px;
    right: 3px;
    background-image: url(${logo});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
`

Logo.defaultProps = {
  size: 62
}

export default Logo
