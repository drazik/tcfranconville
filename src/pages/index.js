import React from 'react'
import Wrapper from '../components/Wrapper'
import { Section, SectionTitle } from '../components/Section'
import teachingCardBackground from '../images/teaching-card.jpg'
import competitionCardBackground from '../images/competition-card.jpg'
import animationCardBackground from '../images/animation-card.jpg'
import { mq as mqNew } from '../helpers/media-queries'
import Card from '../components/Card'
import { Link } from 'gatsby'
import { Text } from '../components/Text'
import { Button } from '../components/Button'
import SEO from '../components/seo'
import { Stack } from '../components/Stack'
import { Post } from '../components/Post'

const IndexPage = ({ data }) => {
  const [post] = data.allFacebookPosts.edges.map(edge => edge.node).filter(post => post.message)

  return (
    <>
      <SEO title="Accueil" />
      <Section skewed variant="primary">
        <Wrapper>
          <Stack spacing="l">
            <SectionTitle variant="primary">
              Bienvenue !
            </SectionTitle>
            <Stack spacing="m">
              <Text>
                Vous souhaitez vous maintenir en forme, en familles, entre amis ?<br />
                Vous voulez progresser dans votre discipline sportive, le tennis ?<br />
                Vous recherchez un lieu de partage d'émotions ?
              </Text>
              <Text>
                Quels que soient votre âge, votre niveau, votre ambition, le TCF vous offre :
              </Text>
              <Text component="ul">
                <li>Des enseignements à haute valeur ajoutée, dynamiques, motivants</li>
                <li>des compétitions adaptées, individuelles ou par équipe</li>
                <li>des animations placées sous le signe de la convivialité, du jeu et de la gastronomie !</li>
              </Text>
            </Stack>
          </Stack>
        </Wrapper>
      </Section>

      <Section>
        <Wrapper css={{
          marginTop: -130,

          [mqNew('s')]: {
            marginTop: -150
          }
        }}>
          <div
            css={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gridColumnGap: '1rem',
              gridRowGap: '2rem',

              [mqNew('m')]: {
                gridTemplateColumns: 'repeat(3, 1fr)'
              },

              [mqNew('l')]: {
                gridColumnGap: '2rem'
              }
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
            <SectionTitle variant="primary">
              Venir jouer au TCF
            </SectionTitle>
            <div
              css={theme => ({
                display: 'grid',
                gridTemplateColumns: '1fr',
                gridGap: theme.spacing * 6,

                [mqNew('m')]: {
                  gridTemplateColumns: 'repeat(2, 1fr)'
                }
              })}
            >
              <div>
                <Stack spacing="m">
                  <Text>
                    Le club est ouvert à toutes et à tous. Envie de taper la petite balle jaune en famille ou entre amis ? En simple, en double ? Nos courts sont disponibles à la réservation, même si vous n'ête pas (encore) adhérents.
                  </Text>
                  <Button
                    as={Link}
                    to="/reservation"
                    css={{
                      marginLeft: 'auto',
                      marginRight: 'auto'
                    }}
                    block
                  >
                    Réserver un court
                  </Button>
                  <Text>
                    Vous aimeriez jouer régulièrement ? En devenant adhérent(e) du TC Franconville, vous pourrez profiter au maximum des infrastructures du club. Différentes possibilités s'offrent à vous : cotisation à l'année, saisonnière...
                  </Text>
                  <Button
                    as={Link}
                    to="/tarifs"
                    css={{
                      marginLeft: 'auto',
                      marginRight: 'auto'
                    }}
                    block
                  >
                    Découvrir la cotisation
                  </Button>
                  <Text>
                    Le TC Franconville est situé au 78 Avenue des Marais, à côté du stade municipal Jean Rolland. Un parking est disponible à cette adresse, ainsi qu'un autre au 110 rue des Pommiers Saulniers.
                  </Text>
                  <Text>
                    Vous pouvez nous contacter par téléphone au 01 75 40 75 20 ou par e-mail à l'adresse <a href="mailto:tennis.club.franconville@cegetel.net">tennis.club.franconville@cegetel.net</a>.
                  </Text>
                </Stack>
              </div>
              <div>
                <iframe
                  css={{
                    width: '100%',
                    height: 400,
                    border: 0,

                    [mqNew('s')]: {
                      height: 500
                    },

                    [mqNew('m')]: {
                      height: '100%'
                    }
                  }}
                  title="Carte"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2617.57427100331!2d2.2175768160385503!3d48.9996586793017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6673fa2c4f21b%3A0x73fa94e076916ed!2sTennis%20Club%20de%20Franconville!5e0!3m2!1sfr!2sfr!4v1570894237189!5m2!1sfr!2sfr"
                ></iframe>
              </div>
            </div>
          </Stack>
        </Wrapper>
      </Section>

      <Section>
        <Wrapper>
          <Stack spacing="l">
            <SectionTitle>
              L'actualité du club
            </SectionTitle>
            <Post post={post} />
            <div css={{ textAlign: 'center' }}>
              <Button
                as={Link}
                to="/actualite"
                variant="primary"
              >
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
