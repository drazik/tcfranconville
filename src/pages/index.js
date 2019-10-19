import React from 'react'
import Layout from '../components/Layout'
import Wrapper from '../components/Wrapper'
import { Section, SectionTitle } from '../components/Section'
import teachingCardBackground from '../images/teaching-card.jpg'
import competitionCardBackground from '../images/competition-card.jpg'
import animationCardBackground from '../images/animation-card.jpg'
import mq from '../helpers/media-queries'
import Card from '../components/Card'
import { Link } from 'gatsby'
import { Text } from '../components/Text'
import { Button } from '../components/Button'

const Stack = props => {
  const { spacing, ...rest } = props

  const spacingToMultiplicator = {
    xs: 1,
    s: 2,
    m: 4,
    l: 6
  }

  return (
    <div
      css={theme => mq({
        '& > *': {
          marginTop: 0,
          marginBottom: 0
        },
        '& > * + *': {
          marginTop: theme.spacing * spacingToMultiplicator[spacing]
        }
      })}
      {...rest}
    />
  )
}

const IndexPage = () => {
  return (
    <Layout>
      <Section skewed variant="primary">
        <Wrapper>
          <Stack spacing="l">
            <SectionTitle variant="primary">
              Bienvenue !
            </SectionTitle>
            <Stack spacing="m">
              <Text>
                Depuis plus de 50 ans, le TC Franconville est In id velit sodales arcu iaculis venenatis. Etiam at leo. Vivamus vitae sem. Mauris volutpat congue risus. Curabitur leo. Aenean tempor tortor eget ligula. Aenean vel augue. Vestibulum ac justo. In hac habitasse platea dictumst. Nam dignissim nisi non mauris. Donec et tortor. Morbi felis. Donec aliquet, erat eu.
              </Text>
              <Text>
                Le TCF est un club vivant et convivial dont la vie s'articule autour de 3 grands axes :
              </Text>
            </Stack>
          </Stack>
        </Wrapper>
      </Section>

      <Section>
        <Wrapper css={mq({
          marginTop: [-130, -150]
        })}>
          <div
            css={mq({
              display: 'grid',
              gridTemplateColumns: ['1fr',  '1fr', 'repeat(3, 1fr)'],
              gridColumnGap: ['1rem', '1rem', '1rem', '2rem'],
              gridRowGap: '2rem'
            })}
          >
            <Card
              component={Link}
              to="/enseignement"
              css={{ backgroundImage: `url(${teachingCardBackground})` }}
            >
              Enseignement
            </Card>
            <Card
              component={Link}
              to="/competition"
              css={{ backgroundImage: `url(${competitionCardBackground})` }}
            >
              Compétition
            </Card>
            <Card
              component={Link}
              to="/animations"
              css={{ backgroundImage: `url(${animationCardBackground})` }}
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
              css={theme => mq({
                display: 'grid',
                gridTemplateColumns: ['1fr', '1fr', 'repeat(2, 1fr)'],
                gridGap: theme.spacing * 6
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
                    css={mq({
                      marginLeft: 'auto',
                      marginRight: 'auto'
                    })}
                    block
                  >
                    Réserver un court
                  </Button>
                  <Text>
                    Vous aimeriez jouer régulièrement ? En devenant adhérent(e) du TC Franconville, vous pourrez profiter au maximum des infrastructures du club. Différentes possibilités s'offrent à vous : cotisation à l'année, pour 6 mois...
                  </Text>
                  <Button
                    as={Link}
                    to="/tarifs"
                    css={mq({
                      marginLeft: 'auto',
                      marginRight: 'auto'
                    })}
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
                  css={mq({
                    width: '100%',
                    height: ['400px', '500px', '100%'],
                    border: 0
                  })}
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
            <Text>
              L'actualité du club est disponible sur notre <a href="https://fr-fr.facebook.com/TCFranconvilleOfficiel/">page Facebook</a>.
            </Text>
          </Stack>
        </Wrapper>
      </Section>
    </Layout>
  )
}

export default IndexPage
