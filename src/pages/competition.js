import React from 'react'
import Layout from '../components/Layout'
import { Section } from '../components/Section'
import Wrapper from '../components/Wrapper'
import { Text } from '../components/Text'
import SEO from '../components/seo'
import { PageTitle } from '../components/PageTitle'

const CompetitionPage = () => {
  return (
    <Layout>
      <SEO title="Compétition" />
        <Section skewed variant="primary">
          <PageTitle>Compétition</PageTitle>
        </Section>
      <Section skewed>
        <Wrapper>
          <Text>TODO</Text>
        </Wrapper>
      </Section>
    </Layout>
  )
}

export default CompetitionPage
