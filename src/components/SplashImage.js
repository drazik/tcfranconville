import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { FluidBgImg } from '../components/FluidBgImg'

const SplashImage = props => {
  const { component: Component, children, ...rest } = props
  const data = useStaticQuery(graphql`
    query {
      backgroundImage: file(relativePath: { eq: "splash.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Component css={{ position: 'relative' }} {...rest}>
      <FluidBgImg image={data.backgroundImage.childImageSharp.fluid} />
      {children}
    </Component>
  )
}

export default SplashImage
