import React from 'react'
import styled from '@emotion/styled'
import Layout from '../components/Layout'
import SplashImage from '../components/SplashImage'
import Link from '../components/Link'
import Timeline from '../components/Timeline'
import Wrapper from '../components/Wrapper'
import { Section, SectionTitle } from '../components/Section'
import teachingCardBackground from '../images/teaching-card.jpg'
import competitionCardBackground from '../images/competition-card.jpg'
import animationCardBackground from '../images/animation-card.jpg'
import { NewsList } from '../components/News'
import mq from '../helpers/media-queries'

const card = mq({
  height: ['200px', '400px'],
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  boxShadow: '0 40px 30px -30px rgba(0, 0, 0, 0.5)',
  transition: ['none', 'transform 0.35s ease-in-out'],
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  color: 'white',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '1.5rem',
  paddingLeft: '1.5rem',
  paddingBottom: '1.5rem',
  borderRadius: '0.5rem',
  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.35)',
  overflow: 'hidden',
  '&:hover,&:focus': {
    transform: ['none', 'translateY(-0.5rem)']
  }
})

function Card(props) {
  return (
    <Link css={card} {...props} />
  )
}

const MapIframe = styled.iframe`
  width: 100%;
  height: 400px;
  border: 0;
`

const IndexPage = () => {
  return (
    <Layout>
      <SplashImage height="400px" />
      <Section skewed variant="primary">
        <Wrapper css={{ transform: 'translateY(-100px)' }}>
          <div
            css={mq({
              display: 'grid',
              gridTemplateColumns: ['1fr', 'repeat(3, 1fr)'],
              gridColumnGap: '2rem',
              gridRowGap: '2rem'
            })}
          >
            <Card
              to="/enseignement"
              css={{ backgroundImage: `url(${teachingCardBackground})` }}
            >
              Enseignement
            </Card>
            <Card
              to="/competition"
              css={{ backgroundImage: `url(${competitionCardBackground})` }}
            >
              Compétition
            </Card>
            <Card
              to="/animations"
              css={{ backgroundImage: `url(${animationCardBackground})` }}
            >
              Animations
            </Card>
          </div>
        </Wrapper>
      </Section>
      <Section>
        <Wrapper>
          <SectionTitle css={{ position: 'absolute', top: '5rem' }}>
            Prochains<br css={mq({ display: ['block', 'none'] })} /> événements
          </SectionTitle>
          <Timeline css={{ paddingTop: '12rem' }} />
        </Wrapper>
      </Section>
      <Section padded variant="primary">
        <Wrapper>
          <SectionTitle variant="primary">
            Venir au club
          </SectionTitle>
          <div
            css={mq({
              display: 'grid',
              gridTemplateColumns: ['1fr', 'repeat(2, 1fr)'],
              gridColumnGap: '2rem',
              gridRowGap: '2rem'
            })}
          >
            <div>
              <p>
                Le TC Franconville est situé au 78 Avenue des Marais, à côté du stade municipal Jean Rolland.
              </p>
              <p>
                Téléphone : 01 75 40 75 20
              </p>
              <p>
                Email : <a href="mailto:tennis.club.franconville@cegetel.net">tennis.club.franconville@cegetel.net</a>
              </p>
            </div>
            <MapIframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=2.2181868553161626%2C48.99875568510867%2C2.2217273712158208%2C49.00034117786823&amp;layer=mapnik"
            />
          </div>
        </Wrapper>
      </Section>
      <Section padded skewed>
        <Wrapper>
          <SectionTitle>Dernières actualités</SectionTitle>
          <NewsList />
        </Wrapper>
      </Section>
    </Layout>
  )
}

export default IndexPage
