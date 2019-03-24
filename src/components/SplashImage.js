import styled from '@emotion/styled'
import image from '../images/splash.jpg'

const SplashImage = styled.div`
  height: ${props => props.height};
  padding-top: 70px;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 0;
  background-attachment: fixed;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: -1;
  }
`

SplashImage.defaultProps = {
  height: '200px'
}

export default SplashImage
