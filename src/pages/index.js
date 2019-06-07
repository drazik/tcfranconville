import React from 'react'
import styled from '@emotion/styled'
import Layout from '../components/Layout'
import SplashImage from '../components/SplashImage'
import Timeline from '../components/Timeline'
import Wrapper from '../components/Wrapper'
import { Section, SectionTitle } from '../components/Section'
import teachingCardBackground from '../images/teaching-card.jpg'
import competitionCardBackground from '../images/competition-card.jpg'
import animationCardBackground from '../images/animation-card.jpg'
import { NewsList } from '../components/News'
import mq from '../helpers/media-queries'
import Card from '../components/Card'
import { Link } from 'gatsby'

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
