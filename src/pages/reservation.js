import React from 'react'
import Layout from '../components/Layout'
import { Section, SectionTitle } from '../components/Section'
import { Text } from '../components/Text'
import Wrapper from '../components/Wrapper'
import SEO from '../components/seo'
import { PageTitle } from '../components/PageTitle'
import { Stack } from '../components/Stack'
import { Button } from '../components/Button'
import { ExternalLink } from '../components/ExternalLink'
import { Link } from 'gatsby'
import { mq } from '../helpers/media-queries'

const ReservationPage = props => {
  return (
    <Layout>
      <SEO title="Réservation" />
      <Section skewed variant="primary">
        <PageTitle>Réservation</PageTitle>
      </Section>
      <Section>
        <Wrapper>
          <div
            css={theme => ({
              display: 'grid',
              gridTemplateColumns: '1fr',
              gridGap: theme.spacing * 4,

              [mq('m')]: {
                gridGap: theme.spacing * 8
              },

              [mq('l')]: {
                gridTemplateColumns: 'repeat(2, 1fr)'
              }
            })}
          >
            <div>
              <Stack>
                <SectionTitle>Adhérent</SectionTitle>
                <Text>
                  Les adhérents du club peuvent passer par leur espace <ExternalLink href="https://tenup.fft.fr/">TenUp</ExternalLink> pour réserver un court.
                </Text>
                <Text>
                  Si vous n'avez pas encore de compte, vous pouvez en créer un. Vous aurez besoin de votre numéro de licence, qui vous a été envoyé par e-mail. En cas de difficultés, pensez à consulter <ExternalLink href="https://tenup.fft.fr/FAQ">la FAQ de TenUp</ExternalLink>.
                </Text>
                <Button
                  as={ExternalLink}
                  href="https://tenup.fft.fr"
                  variant="primary"
                  block
                >
                  Accéder à TenUp
                </Button>
              </Stack>
            </div>
            <div>
              <Stack>
                <SectionTitle>Non adhérent</SectionTitle>
                <Text>
                  Pour les non adhérents, l'application <ExternalLink href="">Anybuddy</ExternalLink> vous permet de réserver, payer et accéder au club en toute autonomie.
                </Text>
                <Text>
                  Si vous jouez régulièrement, pensez à jetter un oeil à <Link to="/tarifs#cotisation">la cotisation</Link>. Elle pourrait être plus avantageuse que des réservations à l'unité. N'hésitez pas à nous contacter si vous avez des questions à ce propos.
                </Text>
                <Button
                  as={ExternalLink}
                  href="https://anybuddyapp.com/"
                  variant="primary"
                  block
                >
                  Accéder à Anybuddy
                </Button>
              </Stack>
            </div>
          </div>
        </Wrapper>
      </Section>
    </Layout>
  )
}

export default ReservationPage
