import React from 'react'
import { css } from '@emotion/core'
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

const overlay = css`
  position: relative;
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.15);
    z-index: -1;
  }
`

const card = css`
  height: 400px;
  background-size: cover;
  background-position: center;
  box-shadow: 0px 40px 30px -30px rgba(0, 0, 0, 0.5);
  transition: transform 0.35s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.5rem;
  padding-left: 1.5rem;
  padding-bottom: 1.5rem;
  border-radius: 0.5rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.35);
  overflow: hidden;

  &:hover,
  &:focus {
    transform: translateY(-0.5rem);
  }
`

function Card(props) {
  return (
    <Link css={[card, overlay]} {...props} />
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
            css={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gridColumnGap: '2rem'
            }}
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
          <SectionTitle css={{ position: 'absolute', top: '3rem' }}>
            Prochains événements
          </SectionTitle>
          <Timeline />
        </Wrapper>
      </Section>
      <Section padded variant="primary">
        <Wrapper>
          <SectionTitle variant="primary">
            Venir au club
          </SectionTitle>
          <div
            css={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gridColumnGap: '2rem'
            }}
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
