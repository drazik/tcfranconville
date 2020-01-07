import React from 'react'
import { Section } from '../components/Section'
import Wrapper from '../components/Wrapper'
import { Text } from '../components/Text'
import SEO from '../components/seo'
import { PageTitle } from '../components/PageTitle'
import { TwoCol } from '../components/TwoCol'
import { Stack } from '../components/Stack'
import { mq } from '../helpers/media-queries'

const LeClubPage = () => {
  return (
    <>
      <SEO title="Contact" />
      <Section skewed variant="primary">
        <PageTitle>Le club</PageTitle>
      </Section>
      <Section skewed>
        <Wrapper>
          <TwoCol align="center">
            <Stack spacing="m">
              <Text>
                Le TC Franconville est situé au 78 Avenue des Marais, à côté du
                stade municipal Jean Rolland. Un parking est disponible à cette
                adresse, ainsi qu'un autre au 110 rue des Pommiers Saulniers.
              </Text>
              <Text>
                Vous pouvez nous contacter par téléphone au
                01&nbsp;75&nbsp;40&nbsp;75&nbsp;20 ou par e-mail à l'adresse{' '}
                <a href="mailto:tennis.club.franconville@cegetel.net">
                  tennis.club.franconville@cegetel.net
                </a>
                .
              </Text>
            </Stack>
            <div>
              <iframe
                css={{
                  width: '100%',
                  height: 400,
                  border: 0,

                  [mq('s')]: {
                    height: 500,
                  },
                }}
                title="Carte"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2617.57427100331!2d2.2175768160385503!3d48.9996586793017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6673fa2c4f21b%3A0x73fa94e076916ed!2sTennis%20Club%20de%20Franconville!5e0!3m2!1sfr!2sfr!4v1570894237189!5m2!1sfr!2sfr"
              ></iframe>
            </div>
          </TwoCol>
        </Wrapper>
      </Section>
    </>
  )
}

export default LeClubPage