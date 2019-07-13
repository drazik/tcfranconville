import React from 'react'
import Layout from '../components/Layout'
import SplashImage from '../components/SplashImage'
import { Section } from '../components/Section'
import Wrapper from '../components/Wrapper'
import { Text } from '../components/Text'

const EnseignementPage = () => {
  return (
    <Layout>
      <SplashImage height="400px">
        Les tarifs
      </SplashImage>
      <Section padded skewed variant="primary">
        <Wrapper>
          <Text>
            Retrouvez ci-dessous l'ensemble des tarifs appliqués pour la saison 2019&nbsp;/&nbsp;2020
          </Text>
        </Wrapper>
      </Section>
    </Layout>
  )
}

export default EnseignementPage
