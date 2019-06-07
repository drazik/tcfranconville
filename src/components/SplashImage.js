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
`

SplashImage.defaultProps = {
  height: '200px'
}

export default SplashImage
