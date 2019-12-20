import React from 'react'
import { Section } from '../components/Section'
import Wrapper from '../components/Wrapper'
import { Text } from '../components/Text'
import SEO from '../components/seo'
import { PageTitle } from '../components/PageTitle'

const ContactPage = () => {
  return (
    <>
      <SEO title="Compétition" />
        <Section skewed variant="primary">
          <PageTitle>Contact</PageTitle>
        </Section>
      <Section skewed>
        <Wrapper>
          <Text>TODO</Text>
        </Wrapper>
      </Section>
    </>
  )
}

export default ContactPage
