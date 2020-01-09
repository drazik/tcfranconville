import React from 'react'
import Wrapper from '../components/Wrapper'
import { Section, SectionTitle } from '../components/Section'
import teachingCardBackground from '../images/teaching-card.jpg'
import competitionCardBackground from '../images/competition-card.jpg'
import animationCardBackground from '../images/animation-card.jpg'
import { mq } from '../helpers/media-queries'
import Card from '../components/Card'
import { Link, graphql } from 'gatsby'
import { Text } from '../components/Text'
import { Button } from '../components/Button'
import SEO from '../components/seo'
import { Stack } from '../components/Stack'
import { Post } from '../components/Post'

const IndexPage = ({ data }) => {
  const [post] = data.allFacebookPosts.edges
    .map(edge => edge.node)
    .filter(post => post.message)

  return (
    <>
      <SEO title="Accueil" />
      <Section skewed variant="primary" css={{ paddingTop: '3rem' }}>
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

            [mq('s')]: {
              marginTop: -150,
            },
          }}
        >
          <div
            css={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gridColumnGap: '1rem',
              gridRowGap: '2rem',

              [mq('m')]: {
                gridTemplateColumns: 'repeat(3, 1fr)',
              },

              [mq('l')]: {
                gridColumnGap: '2rem',
              },
            }}
          >
            <Card
              component={Link}
              clickable
              to="/enseignement"
              css={{ backgroundImage: `url(${teachingCardBackground})` }}
              variant="image"
            >
              Enseignement
            </Card>
            <Card
              component={Link}
              clickable
              to="/competition"
              css={{ backgroundImage: `url(${competitionCardBackground})` }}
              variant="image"
            >
              Compétition
            </Card>
            <Card
              component={Link}
              clickable
              to="/animations"
              css={{ backgroundImage: `url(${animationCardBackground})` }}
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
                  marginLeft: 'auto',
                  marginRight: 'auto',
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
                  marginLeft: 'auto',
                  marginRight: 'auto',
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
            <Post post={post} />
            <div css={{ textAlign: 'center' }}>
              <Button as={Link} to="/actualite" variant="primary">
                Voir plus d'actualités
              </Button>
            </div>
          </Stack>
        </Wrapper>
      </Section>
    </>
  )
}

export const query = graphql`
  query HomePageQuery {
    allFacebookPosts {
      edges {
        node {
          id
          message
          created_time
          permalink_url
          attachments {
            data {
              url
              type
              title
              media {
                image {
                  height
                  src
                  width
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
