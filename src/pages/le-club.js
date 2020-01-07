import React from 'react'
import { Section } from '../components/Section'
import Wrapper from '../components/Wrapper'
import { Text } from '../components/Text'
import SEO from '../components/seo'
import { PageTitle } from '../components/PageTitle'
import { TwoCol } from '../components/TwoCol'
import { Stack } from '../components/Stack'
import { mq } from '../helpers/media-queries'
import { SectionTitle } from '../components/Section'
import { List, ListItem } from '../components/List'
import { IllustrationCard } from '../components/IllustrationCard'
import { ExternalLink } from '../components/ExternalLink'
import { Partner } from '../components/Partner'

const LeClubPage = () => {
  return (
    <>
      <SEO title="Le club" />
      <Section skewed variant="primary">
        <PageTitle>Le club</PageTitle>
      </Section>
      <Section skewed variant="light">
        <Wrapper>
          <TwoCol align="center">
            <Stack spacing="l">
              <SectionTitle>Les infrastructures</SectionTitle>
              <Stack spacing="m">
                <Text>
                  Le club met à disposition de ses adhérents{' '}
                  <strong>9 courts dont 3 couverts</strong>
                </Text>
                <List>
                  <ListItem>2 courts extérieurs éclairés en greenset</ListItem>
                  <ListItem>1 court extérieur en béton poreux</ListItem>
                  <ListItem>3 courts extérieurs en terre battue</ListItem>
                  <ListItem>3 courts couverts en terre battue</ListItem>
                  <ListItem>1 court de mini-tennis</ListItem>
                  <ListItem>1 mur d'entraînement</ListItem>
                </List>
                <Text>
                  Vous pourrez par ailleurs profiter du club-house et de la
                  terrasse en toute convivialité
                </Text>
              </Stack>
            </Stack>
            <IllustrationCard
              image={require('../images/installations.jpg')}
              ratio={550 / 406}
            />
          </TwoCol>
        </Wrapper>
      </Section>
      <Section skewed>
        <Wrapper>
          <TwoCol align="center">
            <Stack spacing="l">
              <SectionTitle>Contacter le club</SectionTitle>
              <Stack spacing="m">
                <Text>
                  Le TC Franconville est situé au 78 Avenue des Marais, à côté
                  du stade municipal Jean Rolland. Un parking est disponible à
                  cette adresse, ainsi qu'un autre au 110 rue des Pommiers
                  Saulniers.
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
      <Section skewed variant="light">
        <Wrapper>
          <Stack spacing="l">
            <SectionTitle>Partenaires</SectionTitle>
            <Stack spacing="m">
              <Partner
                logo={require('../images/partners/ecosport.png')}
                name="Ecosport"
                description={
                  <>
                    <Text>
                      Ecosport est un magasin spécialisé dans la vente
                      d'articles de tennis pour les clubs et les particuliers.
                    </Text>
                    <Text>
                      Ils proposent à leurs clients l'un des plus grand choix en
                      France d'articles dédiés principalement à la pratique du
                      tennis, ce choix s'effectuant dans les plus grandes
                      marques connues (Nike, Asics, Adidas, Wilson, Babolat,
                      Tecnifibre, Yonex, Dunlop, Fila, Pro Kennex).
                    </Text>
                    <div>
                      <ExternalLink href="https://www.ecosport-tennis.fr/">
                        En savoir plus
                      </ExternalLink>
                    </div>
                  </>
                }
              />
              <Partner
                logo={require('../images/partners/capifrance.png')}
                name="Ludovic KORA"
                description={
                  <>
                    <Text>
                      Agent immobilier dans le réseau Capifrance, Ludovic vous
                      accompagne quelque soit votre projet immobilier en vous
                      apportant des solutions pertinentes et efficaces.
                    </Text>
                    <div>
                      <ExternalLink href="https://www.capifrance.fr/conseillers/ludovic.kora">
                        En savoir plus
                      </ExternalLink>
                    </div>
                  </>
                }
              />
            </Stack>
          </Stack>
        </Wrapper>
      </Section>
    </>
  )
}

export default LeClubPage
