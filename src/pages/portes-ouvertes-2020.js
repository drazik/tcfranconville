import React from "react"
import { Section } from "../components/Section"
import Wrapper from "../components/Wrapper"
import { Text } from "../components/Text"
import SEO from "../components/seo"
import { PageTitle } from "../components/PageTitle"
import { Stack } from "../components/Stack"

const CoronavirusReouverturePage = () => {
  return (
    <>
      <SEO title="Réouverture du club" />
      <Section skewed variant="primary">
        <PageTitle>Journées portes ouvertes 2020</PageTitle>
      </Section>
      <Section skewed variant="light">
        <Wrapper>
          <Stack spacing="l">
            <Text>
              A l'occasion du Forum des Associations et de la "Faites du
              Tennis", le Tennis Club Franconville vous accueillera directement
              au club le samedi 5 et dimanche 6 septembre 2020 de 10h à 17h.
            </Text>
            <Text>
              Enfants et adultes pourront tester le tennis avec nos enseignants
              : venez en tenue !
            </Text>
            <Text>
              Les inscriptions pourront être faites directement à ce moment-là
              (prévoir un certificat médical autorisant le tennis y compris en
              compétition, une photo et le règlement).
            </Text>
            <Text>Nous vous attendons nombreux !</Text>
          </Stack>
        </Wrapper>
      </Section>
    </>
  )
}

export default CoronavirusReouverturePage
