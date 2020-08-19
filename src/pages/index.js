import React from "react"
import Wrapper from "../components/Wrapper"
import { Section, SectionTitle } from "../components/Section"
import { mq } from "../helpers/media-queries"
import Card from "../components/Card"
import { Link, graphql } from "gatsby"
import { Text } from "../components/Text"
import { Button } from "../components/Button"
import SEO from "../components/seo"
import { Stack } from "../components/Stack"
import { FacebookProvider, Page } from "react-facebook"
import useSize from "@react-hook/size"
import { ExternalLink } from "../components/ExternalLink"

const IndexPage = ({ data }) => {
  const fbFeedRef = React.useRef(null)
  const [width] = useSize(fbFeedRef)

  return (
    <>
      <SEO title="Accueil" />
      <Section skewed variant="primary" css={{ paddingTop: "3rem" }}>
        <Wrapper>
          <Stack spacing="l">
            <SectionTitle variant="primary">Bienvenue !</SectionTitle>
            <Stack spacing="m">
              <Text>
                Vous souhaitez vous maintenir en forme, en familles, entre amis
                ?<br />
                Vous voulez progresser dans votre discipline sportive, le tennis
                ?<br />
                Vous recherchez un lieu de partage d'émotions ?
              </Text>
              <Text>
                Quels que soient votre âge, votre niveau, votre ambition, le TCF
                vous offre :
              </Text>
              <Text component="ul">
                <li>
                  des enseignements à haute valeur ajoutée, dynamiques,
                  motivants
                </li>
                <li>des compétitions adaptées, individuelles ou par équipe</li>
                <li>
                  des animations placées sous le signe de la convivialité, du
                  jeu et de la gastronomie !
                </li>
              </Text>
            </Stack>
          </Stack>
        </Wrapper>
      </Section>

      <Section>
        <Wrapper
          css={{
            marginTop: -130,
            [mq("s")]: {
              marginTop: -150,
            },
          }}
        >
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gridColumnGap: "1rem",
              gridRowGap: "2rem",

              [mq("m")]: {
                gridTemplateColumns: "repeat(3, 1fr)",
              },

              [mq("l")]: {
                gridColumnGap: "2rem",
              },
            }}
          >
            <Card
              component={Link}
              clickable
              to="/enseignement"
              backgroundImage={data.teachingImage.childImageSharp.fluid}
              variant="image"
            >
              Enseignement
            </Card>
            <Card
              component={Link}
              clickable
              to="/competition"
              backgroundImage={data.competitionImage.childImageSharp.fluid}
              variant="image"
            >
              Compétition
            </Card>
            <Card
              component={Link}
              clickable
              to="/animations"
              backgroundImage={data.animationImage.childImageSharp.fluid}
              variant="image"
            >
              Animations
            </Card>
          </div>
        </Wrapper>
      </Section>

      <Section skewed variant="primary" css={{ zIndex: 2 }}>
        <Wrapper>
          <Stack spacing="l">
            <SectionTitle variant="primary">Venir jouer au TCF</SectionTitle>
            <Stack spacing="m">
              <Text>
                Le club est ouvert à toutes et à tous. Envie de taper la petite
                balle jaune en famille ou entre amis ? En simple, en double ?
                Nos courts sont disponibles à la réservation, même si vous
                n'êtes pas (encore) adhérent.
              </Text>
              <Button
                as={Link}
                to="/reservation"
                css={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  maxWidth: 300,
                }}
                block
              >
                Réserver un court
              </Button>
              <Text>
                Vous aimeriez jouer régulièrement ? En devenant adhérent(e) du
                TC Franconville, vous pourrez profiter au maximum des
                infrastructures du club. Différentes possibilités s'offrent à
                vous : cotisation à l'année, saisonnière...
              </Text>
              <Button
                as={Link}
                to="/tarifs"
                css={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  maxWidth: 300,
                }}
                block
              >
                Découvrir la cotisation
              </Button>
            </Stack>
          </Stack>
        </Wrapper>
      </Section>

      <Section>
        <Wrapper>
          <Stack spacing="l">
            <SectionTitle>L'actualité du club</SectionTitle>
            <Text>
              Vous pouvez suivre l'actualité du club sur la page Facebook{" "}
              <ExternalLink href="https://www.facebook.com/TCFranconvilleOfficiel">
                TC Franconville Officiel
              </ExternalLink>
            </Text>
            <div ref={fbFeedRef}>
              <FacebookProvider appId="2196169050680329" key={width}>
                <Page
                  href="https://www.facebook.com/TCFranconvilleOfficiel/"
                  tabs="timeline"
                  width={width}
                />
              </FacebookProvider>
            </div>
          </Stack>
        </Wrapper>
      </Section>
    </>
  )
}

export const query = graphql`
  query HomePageQuery {
    teachingImage: file(relativePath: { eq: "teaching-card.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 690) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    competitionImage: file(relativePath: { eq: "competition-card.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 690) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    animationImage: file(relativePath: { eq: "animation-card.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 690) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
