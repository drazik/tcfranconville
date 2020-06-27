import React from "react"
import { Section, SectionTitle } from "../components/Section"
import Wrapper from "../components/Wrapper"
import { Text } from "../components/Text"
import SEO from "../components/seo"
import { PageTitle } from "../components/PageTitle"
import { PageDescription } from "../components/PageDescription"
import { Stack } from "../components/Stack"
import { TwoCol } from "../components/TwoCol"
import { IllustrationCard } from "../components/IllustrationCard"
import { graphql } from "gatsby"

const AnimationPage = ({ data }) => {
  return (
    <>
      <SEO
        title="Animations"
        description="Le club de tennis de Franconville vous propose de nombreuses animations conviviales tout au long de l'année."
      />
      <Section skewed variant="primary">
        <Wrapper>
          <PageTitle>Animations</PageTitle>
          <PageDescription>
            Le club de tennis de Franconville vous propose de nombreuses
            animations tout au long de l'année. Se retrouver au sein du club,
            c'est l'occasion de partager sa passion du tennis autour de moments
            conviviaux. Les animations à thèmes sont ouvertes à tous : enfants,
            compétiteurs, parents...
          </PageDescription>
        </Wrapper>
      </Section>
      <Section skewed>
        <Wrapper>
          <TwoCol align="center">
            <Stack spacing="l">
              <SectionTitle>Pour les enfants</SectionTitle>
              <Text>
                Grâce à notre équipe pédagogique, les enfants peuvent s'adonner
                régulièrement à des ateliers, tout en fêtant Noël, la
                Chandeleur, Pâques, ou autre...
              </Text>
            </Stack>
            <IllustrationCard
              image={data.childrenImage.childImageSharp.fluid}
              ratio={652 / 489}
            />
          </TwoCol>
        </Wrapper>
      </Section>
      <Section variant="light" skewed>
        <Wrapper>
          <TwoCol reversed align="center">
            <Stack spacing="l">
              <SectionTitle>Pour la famille</SectionTitle>
              <Text>
                Chaque année, des animations familiales rassemblent petits et
                grands autour d'une raclette, de la galette des rois, d'un super
                loto, de la fête du club et bien plus encore...
              </Text>
            </Stack>
            <IllustrationCard
              image={data.familyImage.childImageSharp.fluid}
              ratio={600 / 406}
            />
          </TwoCol>
        </Wrapper>
      </Section>
      <Section skewed>
        <Wrapper>
          <TwoCol align="center">
            <Stack spacing="l">
              <SectionTitle>Pour les grands</SectionTitle>
              <Text>
                Des animations adultes sont également programmées de façon
                spontanée : doubles-surprises, Secret Santa...
              </Text>
            </Stack>
            <IllustrationCard
              image={data.adultImage.childImageSharp.fluid}
              ratio={1440 / 1080}
            />
          </TwoCol>
        </Wrapper>
      </Section>
    </>
  )
}

export const query = graphql`
  query AnimationsPageQuery {
    childrenImage: file(relativePath: { eq: "animations/01.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 690) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    familyImage: file(relativePath: { eq: "animations/03.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 690) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    adultImage: file(relativePath: { eq: "animations/05.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 690) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default AnimationPage
