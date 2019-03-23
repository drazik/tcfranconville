import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import SplashImage from '../components/SplashImage'
import Link from '../components/Link'
import Timeline from '../components/Timeline'
import parseDate from 'date-fns/parse'
import Box from '../components/Box'
import Wrapper from '../components/Wrapper'
import { Section, PrimarySection } from '../components/Section'
import Footer from '../components/Footer'
import teachingCardBackground from '../images/teaching-card.jpg'
import competitionCardBackground from '../images/competition-card.jpg'
import animationCardBackground from '../images/animation-card.jpg'
import { NewsList } from '../components/News'

const TranslatedWrapper = styled(Wrapper)`
  transform: translateY(-100px);
`

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 2rem;
`

const Card = styled.article`
  position: relative;
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

  &:hover,
  &:focus {
    transform: translateY(-0.5rem);
  }
`

const Title = styled.h2`
  margin-top: 0;

  &::after {
    content: '';
    display: block;
    margin-top: 0.5rem;
    height: 3px;
    width: 3rem;
    background-color: ${props => props.theme.main};
  }
`

const EventsTitle = styled(Title)`
  position: absolute;
  top: 3rem;
`

const TitlePrimary = styled(Title)`
  color: white;

  &::after {
    background-color: currentColor;
  }
`

const MapContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 2rem;
`

const MapIframe = styled.iframe`
  width: 100%;
  height: 400px;
  border: 0;
`

const IndexPage = () => {
  return (
    <Layout>
      <SplashImage height="400px" />
      <PrimarySection skewed>
        <TranslatedWrapper>
          <CardsContainer>
            <Card
              as={Link}
              to="/enseignement"
              style={{ backgroundImage: `url(${teachingCardBackground})` }}
            >
              Enseignement
            </Card>
            <Card
              as={Link}
              to="/competition"
              style={{ backgroundImage: `url(${competitionCardBackground})` }}
            >
              Compétition
            </Card>
            <Card
              as={Link}
              to="/animations"
              style={{ backgroundImage: `url(${animationCardBackground})` }}
            >
              Animations
            </Card>
          </CardsContainer>
        </TranslatedWrapper>
      </PrimarySection>
      <Section>
        <Wrapper>
          <EventsTitle>
            Prochains événements
          </EventsTitle>
          <Timeline />
        </Wrapper>
      </Section>
      <PrimarySection padded>
        <Wrapper>
          <TitlePrimary>
            Venir au club
          </TitlePrimary>
          <MapContainer>
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
            <div>
              <MapIframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=2.2181868553161626%2C48.99875568510867%2C2.2217273712158208%2C49.00034117786823&amp;layer=mapnik"
              />
            </div>
          </MapContainer>
        </Wrapper>
      </PrimarySection>
      <Section padded skewed>
        <Wrapper>
          <Title>Dernières actualités</Title>
          <NewsList />
        </Wrapper>
      </Section>
      <Footer />
    </Layout>
  )
}

export default IndexPage
