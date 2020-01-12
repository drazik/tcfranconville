import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

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
      <Img
        fluid={data.backgroundImage.childImageSharp.fluid}
        alt=""
        css={{
          position: 'absolute !important',
          width: '100%',
          height: '100%',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
      {children}
    </Component>
  )
}

export default SplashImage
