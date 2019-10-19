import React from 'react'
import Layout from '../components/Layout'
import { Section, SectionTitle } from '../components/Section'
import { Text } from '../components/Text'
import Wrapper from '../components/Wrapper'
import { BookingForm } from '../components/BookingForm'
import SEO from '../components/seo'

const ReservationPage = props => {
  return (
    <Layout>
      <SEO title="Réservation" />
      <Section skewed variant="primary">
        <Wrapper>
          <BookingForm />
        </Wrapper>
      </Section>
      <Section>
        <Wrapper>
          <SectionTitle>
            Infos pratiques
          </SectionTitle>
          <Text>
            Le TC Franconville est situé au 78 Avenue des Marais, à côté du stade municipal Jean Rolland. Un parking est disponible à cette adresse, mais vous en trouverez un autre au 112 Rue des Pommiers Saulniers.
          </Text>
          <Text>
            Pour les adhérents, les réservations s'effectuent via le service de la FFT <a href="https://tenup.fft.fr/" target="_blank" rel="noopener noreferrer">Tenup</a>. Pour les non adhérents, le service <a href="https://anybuddyapp.com" target="_blank" rel="noopener noreferrer">Anybuddy</a> vous permet de réserver et de payer en ligne, ainsi que d'accéder au club en toute autonomie.
          </Text>
          <Text>
            En cas de question, vous pouvez contacter le club au au 01 75 40 75 20 ou par e-mail à l'adresse <a href="mailto:tennis.club.franconville@cegetel.net" css={{ wordWrap: 'break-word' }}>tennis.club.franconville@cegetel.net</a>.
          </Text>
        </Wrapper>
      </Section>
    </Layout>
  )
}

export default ReservationPage
