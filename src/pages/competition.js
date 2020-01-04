import React from 'react'
import {
  Section,
  SectionTitle,
  SectionTitleDetails,
} from '../components/Section'
import Wrapper from '../components/Wrapper'
import { Text } from '../components/Text'
import SEO from '../components/seo'
import { PageTitle } from '../components/PageTitle'
import { PageDescription } from '../components/PageDescription'
import { Stack } from '../components/Stack'
import { TwoCol } from '../components/TwoCol'
import { Slider as BaseSlider, Slide } from '../components/Slider'
import Ratio from 'react-ratio'
import { IllustrationCard } from '../components/IllustrationCard'

const Slider = props => {
  return (
    <BaseSlider
      css={{
        '& img': {
          verticalAlign: 'middle',
          width: '100%',
          height: '100%',
        },
      }}
      {...props}
    />
  )
}

const CompetitionPage = () => {
  return (
    <>
      <SEO title="Compétition" />
      <Section skewed variant="primary">
        <Wrapper>
          <Stack>
            <PageTitle>Compétition</PageTitle>
            <PageDescription>
              Venez participer quel que soit votre âge et votre niveau à des
              compétitions par équipes en championnats ou en tournois
              individuellement.
            </PageDescription>
          </Stack>
        </Wrapper>
      </Section>
      <Section variant="light" skewed>
        <Wrapper>
          <Stack spacing="l">
            <SectionTitle>Épreuves par équipe</SectionTitle>
            <Text>
              Tout au long de chaque saison sportive, des équipes de différents
              âges et niveaux sont constituées pour participer à des
              compétitions par équipe.
            </Text>
            <TwoCol>
              <Stack spacing="l">
                <SectionTitle>
                  Championnat printemps
                  <SectionTitleDetails>
                    Filles / garçons / dames / messieurs
                  </SectionTitleDetails>
                </SectionTitle>
                <Stack spacing="m">
                  <Text>
                    Le TCF présente chaque année 3 équipes messieurs (dont une
                    en excellence régionale), 3 équipes dames (dont une en
                    nationale 3), entre 3 et 6 équipes jeunes (dont 2 de
                    filles).
                  </Text>
                  <Text>
                    Les meilleurs classements senior du TCF en 2019 sont 1/6,
                    4/6 pour les messieurs; 3/6, 4/6 pour les dames.
                  </Text>
                </Stack>
              </Stack>
            </TwoCol>
            <TwoCol reversed>
              <Stack spacing="l">
                <SectionTitle>
                  Championnat 4ème série
                  <SectionTitleDetails>Dames / messieurs</SectionTitleDetails>
                </SectionTitle>
                <Stack spacing="m">
                  <Text>
                    Le TCF est un des rares clubs du Val d'Oise à présenter 3
                    équipes dames et 2 équipes messieurs en Potel. Les équipes 1
                    sont en série 1 et remportent régulièrement le championnat
                    du Val d'Oise.
                  </Text>
                </Stack>
              </Stack>
            </TwoCol>
            <TwoCol>
              <Stack spacing="l">
                <SectionTitle>
                  Championnat +35 ans
                  <SectionTitleDetails>Dames / messieurs</SectionTitleDetails>
                </SectionTitle>
                <Stack spacing="m">
                  <Text>
                    Le TCF a la chance de pouvoir faire jouer 2 équipes
                    messieurs (dont une en excellence régionale) et 2 équipes
                    dames (dont une est championne du Val d'Oise 2019 et monte
                    en championnat de France).
                  </Text>
                </Stack>
              </Stack>
            </TwoCol>
            <TwoCol reversed>
              <Stack spacing="l">
                <SectionTitle>
                  Championnat +45 ans
                  <SectionTitleDetails>Dames</SectionTitleDetails>
                </SectionTitle>
                <Stack spacing="m">
                  <Text>
                    Le TCF a 90% de ses adhérentes qui jouent en équipe,
                    notamment dans 2 équipes Caren +45, dont une est en
                    excellence départementale.
                  </Text>
                </Stack>
              </Stack>
            </TwoCol>
            <TwoCol>
              <Stack spacing="l">
                <SectionTitle>
                  Championnat +55 ans
                  <SectionTitleDetails>Messieurs</SectionTitleDetails>
                </SectionTitle>
                <Stack spacing="m">
                  <Text>
                    Les messieurs +55 représentent dignement le TCF, avec une de
                    ses 2 équipes 1/2 finaliste en challenge AFTS 2019.
                  </Text>
                </Stack>
              </Stack>
            </TwoCol>
          </Stack>
        </Wrapper>
      </Section>
      <Section skewed>
        <Wrapper>
          <Stack spacing="l">
            <SectionTitle>Épreuves individuelles</SectionTitle>
            <Text>
              Le club organise des compétitions individuelles pour tous les âges
              et niveaux
            </Text>
            <Stack spacing="xl">
              <TwoCol align="center">
                <Stack spacing="l">
                  <SectionTitle>Tournoi Open</SectionTitle>
                  <Stack spacing="m">
                    <Text>
                      Chaque été le club organise son tournoi Open, au mois
                      d'août. De nombreux(ses) joueur(euses) du club, du
                      département ainsi que de la France entière voire de
                      l'étranger y prennent part.
                    </Text>
                    <Text>
                      Catégories : simples dames (senior, 35, 45, 55); simples
                      messieurs (senior, 35, 45, 55, 65); filles/garçons (U12,
                      U14, U16, U18).
                    </Text>
                    <Text>
                      La 38ème édition du tournoi open du TCF aura lieu du 14 au
                      30 août 2020.
                    </Text>
                  </Stack>
                </Stack>
                <Slider>
                  {['01', '02', '03', '04', '05'].map(name => (
                    <Slide key={name}>
                      <Ratio ratio={2048 / 1536}>
                        <img
                          src={require(`../images/competition/open/${name}.jpg`)}
                          alt=""
                        />
                      </Ratio>
                    </Slide>
                  ))}
                </Slider>
              </TwoCol>
              <TwoCol reversed align="center">
                <Stack spacing="l">
                  <SectionTitle>Tournoi Open hiver</SectionTitle>
                  <Stack spacing="m">
                    <Text>
                      Organisé entre fin novembre et début décembre en semaine.
                      Les matchs ont lieu en journée (premiers matchs à 9h,
                      dernière rotation à 15h), du lundi au vendredi.
                    </Text>
                    <Text>
                      Deux catégories : simple messieurs senior et simple dames
                      senior.
                    </Text>
                    <Text>
                      La prochaine édition du tournoi Open journée aura lieu en
                      novembre 2020.
                    </Text>
                  </Stack>
                </Stack>
                <IllustrationCard
                  image={require('../images/competition/open-journee/01.jpg')}
                  ratio={956 / 717}
                />
              </TwoCol>
              <TwoCol>
                <Stack spacing="l">
                  <SectionTitle>Tournoi Open Séniors+</SectionTitle>
                  <Stack spacing="m">
                    <Text>
                      Vous avez plus de 55 ans ? Venez vous confronter en
                      journée en semaine à des joueurs d'Île de France au club
                      de Franconville au mois de mars et sur terre battue.
                    </Text>
                    <Text>Prochaine édition du 16 mars au 3 avril 2020.</Text>
                  </Stack>
                </Stack>
              </TwoCol>
              <TwoCol reversed>
                <Stack spacing="l">
                  <SectionTitle>Tournoi interne</SectionTitle>
                  <Stack spacing="m">
                    <Text>
                      Au printemps, le tournoi interne permet à tous(tes) les
                      joueurs(euses) du club de jouer ensemble dans la
                      convivialité et la bonne humeur qui caractérisent le TCF.
                    </Text>
                    <Text>
                      Catégories : filles/garçons (U12, U16), dames (senior,
                      +35), messieurs (senior, +35, +55).
                    </Text>
                    <Text>
                      Les adhérents du TCF peuvent également se confronter en
                      double à cette occasion (mixtes, dames et messieurs).
                    </Text>
                    <Text>
                      Le prochain tournoi interne aura lieu du 1er au 28 juin
                      2020.
                    </Text>
                  </Stack>
                </Stack>
              </TwoCol>
              <TwoCol align="center">
                <Stack spacing="l">
                  <SectionTitle>Tournois internes couleur</SectionTitle>
                  <Stack spacing="m">
                    <Text>
                      Une fois par trimestres nos enseignants organisent des
                      tournois par couleurs pour les enfants du club. Les
                      enfants y sont regroupés par niveaux et jouent avec des
                      balles évolutives.
                    </Text>
                    <Text>
                      Catégories : blanc, violet, rouge, orange, vert.
                    </Text>
                  </Stack>
                </Stack>
                <Slider>
                  {['01', '02'].map(name => (
                    <Slide key={name}>
                      <Ratio ratio={1.33}>
                        <img
                          src={require(`../images/competition/interne-couleurs/${name}.jpg`)}
                          alt=""
                        />
                      </Ratio>
                    </Slide>
                  ))}
                </Slider>
              </TwoCol>
              <TwoCol reversed>
                <Stack spacing="l">
                  <SectionTitle>Tournoi découverte vert</SectionTitle>
                  <Stack spacing="m">
                    <Text>En fin de saison sportive</Text>
                  </Stack>
                </Stack>
              </TwoCol>
            </Stack>
          </Stack>
        </Wrapper>
      </Section>
    </>
  )
}

export default CompetitionPage
