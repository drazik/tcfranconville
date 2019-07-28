import React from 'react'
import styled from '@emotion/styled'
import Layout from '../components/Layout'
import Timeline from '../components/Timeline'
import Wrapper from '../components/Wrapper'
import { Section, SectionTitle } from '../components/Section'
import teachingCardBackground from '../images/teaching-card.jpg'
import competitionCardBackground from '../images/competition-card.jpg'
import animationCardBackground from '../images/animation-card.jpg'
import mq from '../helpers/media-queries'
import Card from '../components/Card'
import { Link } from 'gatsby'
import { Text } from '../components/Text'
import { Slider, Slide } from '../components/Slider'
import sliderTournament from '../images/slider.jpg'
import sliderKid from '../images/slider-kid.jpg'
import slider50ans from '../images/slider-50-ans.jpg'
import { Button } from '../components/Button'

const MapIframe = styled.iframe`
  width: 100%;
  height: 400px;
  border: 0;
`

const IndexPage = () => {
  return (
    <Layout>
      <Slider
        arrows={false}
        autoplay
        autoplaySpeed={5000}
      >
        <Slide
          backgroundImage={sliderTournament}
          text="37ème tournoi Open"
          as={Link}
          to="/"
        />
        <Slide
          backgroundImage={sliderKid}
          text="Inscriptions ouvertes !"
          as={Link}
          to="/"
        />
        <Slide
          backgroundImage={slider50ans}
          text="Les 50 ans du club"
          as={Link}
          to="/"
        />
      </Slider>

      <Section skewed variant="primary">
        <Wrapper>
          <SectionTitle variant="primary">
            Bienvenue !
          </SectionTitle>
          <Text>
            Depuis plus de 50 ans, le TC Franconville est In id velit sodales arcu iaculis venenatis. Etiam at leo. Vivamus vitae sem. Mauris volutpat congue risus. Curabitur leo. Aenean tempor tortor eget ligula. Aenean vel augue. Vestibulum ac justo. In hac habitasse platea dictumst. Nam dignissim nisi non mauris. Donec et tortor. Morbi felis. Donec aliquet, erat eu.
          </Text>
          <Text>
            Le TCF est un club vivant et convivial dont la vie s'articule autour de 3 grands axes :
          </Text>
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

      <Section padded skewed variant="primary" css={{ zIndex: 2 }}>
        <Wrapper>
          <SectionTitle variant="primary">
            Venir jouer au TCF
          </SectionTitle>
          <Text>
            Le club est ouvert à toutes et à tous. Envie de taper la petite balle jaune en famille ou entre amis ? En simple, en double ? Nos courts sont disponibles à la réservation, même si vous n'ête pas (encore) adhérents.
          </Text>
          <Button
            as={Link}
            to="/reservation"
            fullWidth
            css={{
              marginTop: '2rem',
              marginBottom: '2rem'
            }}
          >
            Réserver un court
          </Button>
          <Text>
            Le TC Franconville est situé au 78 Avenue des Marais, à côté du stade municipal Jean Rolland.
          </Text>
          <Text>
            Vous pouvez nous contacter par téléphone au 01 75 40 75 20 ou par e-mail à l'adresse <a href="mailto:tennis.club.franconville@cegetel.net" css={{ wordWrap: 'break-word' }}>tennis.club.franconville@cegetel.net</a>.
          </Text>
          <MapIframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=2.2181868553161626%2C48.99875568510867%2C2.2217273712158208%2C49.00034117786823&amp;layer=mapnik"
          />
        </Wrapper>
      </Section>

      <Section css={{
        paddingTop: 0,
        paddingBottom: 0,
        marginTop: '-4rem',
        zIndex: 1
      }}>
        <Wrapper>
          <SectionTitle css={{ position: 'absolute', top: '2rem' }}>
            Prochains<br css={mq({ display: ['block', 'block', 'none'] })} /> événements
          </SectionTitle>
          <Timeline css={{ paddingTop: '12rem' }} />
        </Wrapper>
      </Section>
    </Layout>
  )
}

export default IndexPage
