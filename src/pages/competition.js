import React from 'react'
import Layout from '../components/Layout'
import { Section, SectionTitle } from '../components/Section'
import Wrapper from '../components/Wrapper'
import { Text } from '../components/Text'
import SEO from '../components/seo'
import { PageTitle } from '../components/PageTitle'
import { PageDescription } from '../components/PageDescription'
import { Stack } from '../components/Stack'
import { TwoCol } from '../components/TwoCol'

const CompetitionPage = () => {
  return (
    <Layout>
      <SEO title="Compétition" />
      <Section skewed variant="primary">
        <Wrapper>
          <Stack>
            <PageTitle>Compétition</PageTitle>
            <PageDescription>
              Venez participer quel que soit votre âge et votre niveau à des compétitions par équipes en championnats ou en tournois individuellement.
            </PageDescription>
          </Stack>
        </Wrapper>
      </Section>
      <Section skewed>
        <Wrapper>
          <Stack spacing="l">
            <SectionTitle>Jeunes</SectionTitle>
            <TwoCol>
              <Stack>
                <Text>Championnat printemps (garçons-filles)</Text>
                <Text>
                  Tournois internes couleurs une fois par trimestre (balles évolutives)
                </Text>
                <Text>
                  Tournoi découverte vert fin de saison sportive
                </Text>
                <Text>
                  Tournoi interne du club (balles dures) pour les catégories U12, U14, U16, U18
                </Text>
                <Text>
                  Tournoi OPEN
                </Text>
              </Stack>
              <div />
            </TwoCol>
          </Stack>
        </Wrapper>
      </Section>
      <Section skewed variant="light">
        <Wrapper>
          <Stack spacing="l">
            <SectionTitle>Seniors</SectionTitle>
            <TwoCol>
              <div />
              <Stack>
                <Text>Championnat Rème série (Dames-Messieurs)</Text>
                <Text>Championnat +35 ans pour les Dames et Messieurs</Text>
                <Text>Championnat +45 ans Dames</Text>
                <Text>Championnat printemps : 3 équipes engagées pour les Dames et les Messieurs, dont une équipe Dame en Championnat de France</Text>
                <Text>Tournoi journée</Text>
                <Text>Tournoi interne</Text>
                <Text>Tournoi OPEN</Text>
              </Stack>
            </TwoCol>
          </Stack>
        </Wrapper>
      </Section>
      <Section skewed>
        <Wrapper>
          <Stack spacing="l">
            <SectionTitle>Seniors +</SectionTitle>
            <TwoCol>
              <Stack>
                <Text>Championnat Messieurs +55 ans</Text>
                <Text>Tournois Open Seniors +</Text>
                <Text>Tournoi interne</Text>
                <Text>Tournoi OPEN</Text>
              </Stack>
              <div />
            </TwoCol>
          </Stack>
        </Wrapper>
      </Section>
    </Layout>
  )
}

export default CompetitionPage
