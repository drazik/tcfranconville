import React from 'react'
import Layout from '../components/Layout'
import { Section, SectionTitle } from '../components/Section'
import Wrapper from '../components/Wrapper'
import Card from '../components/Card'
import minitennisCardBackground from '../images/teaching/minitennis.jpg'
import juniorCardBackground from '../images/teaching/junior.jpg'
import junior2CardBackground from '../images/teaching/junior2.jpg'
import teenCardBackground from '../images/teaching/teen.jpg'
import adultCardBackground from '../images/teaching/adult.jpg'
import { Text } from '../components/Text'
import { List, ListItem } from '../components/List'
import SEO from '../components/seo'
import { Stack } from '../components/Stack'
import { PageTitle } from '../components/PageTitle'
import { PageDescription } from '../components/PageDescription'
import { TwoCol } from '../components/TwoCol'

const SectionTitleDetails = props => {
  return (
    <div css={{ fontSize: '1rem' }} {...props} />
  )
}

const EnseignementPage = () => {
  return (
    <Layout>
      <SEO title="Enseignement" />
      <Section skewed variant="primary">
        <Wrapper>
          <Stack spacing="m">
            <PageTitle>Enseignement</PageTitle>
            <PageDescription>
              Un enseignement à haute valeur ajoutée !
              Grâce à ses enseignants très qualifiés, le TCF propose des cours
              pour tout âge et tout niveau. Les cours sont très demandés, pensez
              à vous inscrire dès le mois de mai !
            </PageDescription>
          </Stack>
        </Wrapper>
      </Section>
      <Section skewed css={{ zIndex: 5 }}>
        <Wrapper>
          <Stack spacing="m">
            <Text>
              <strong>Nos objectifs pour vos enfants :</strong>
            </Text>
            <List>
              <ListItem>
                Partager le plaisir du jeu en s'amusant avant tout
              </ListItem>
              <ListItem>
                Faire progresser chaque enfant à son rythme en tenant compte 
                des singularités de chacun
              </ListItem>
              <ListItem>
                Transmettre les valeurs de l'esprit sportif associant fair-play,
                dépassement de soi et esprit de compétition
              </ListItem>
            </List>
            <Text>
              <strong>Notre politique de club vise à :</strong>
            </Text>
            <List>
              <ListItem>
                promouvoir le tennis à l'extérieur du club par des actions
                comme le « tennis à l'école » en lien avec la mairie de
                Franconville et l'inspection académique,
              </ListItem>
              <ListItem>
                emmener nos compétiteurs à développer leur potentiel en les
                intégrant à un centre d'entraînement intensif, en leur
                proposant des cours supplémentaires,...
              </ListItem>
              <ListItem>
                fidéliser les enfants par le développement du jeu en dehors
                des cours (animations tennis, organisation de tournois,
                participation à des compétitions par équipes,...)
              </ListItem>
              <ListItem>
                faciliter la transition vers l'âge adulte en intégrant les
                ados performants aux cours adultes
              </ListItem>
            </List>
          </Stack>
        </Wrapper>
      </Section>
      <Section skewed variant="light" css={{ zIndex: 4 }}>
        <Wrapper>
          <Stack spacing="xl">
            <SectionTitle>Notre école de tennis</SectionTitle>
            <TwoCol css={{ alignItems: 'center' }}>
              <Stack spacing="m">
                <SectionTitle>
                  Mini-tennis<br />
                  <SectionTitleDetails>
                    pour les enfants 4-6 ans
                  </SectionTitleDetails>
                </SectionTitle>
                <Text>
                  1 heure par semaine
                </Text>
                <Text>
                  4 créneaux en 2019-2020 : mercredi matin, vendredi en début
                  de soirée et samedi matin
                </Text>
                <Text>
                  Un encadrement adapté au nombre d'enfants : 1 adulte pour 5
                  enfants environ
                </Text>
                <Text>
                  Un matériel pédagogique spécifique
                </Text>
                <Text>
                  Compétences travaillées : développer la motricité, la notion
                  d'envoi-renvoi, arriver en fin d'année à effectuer des petits
                  échanges (notion de partenaire) et des mini-matchs (notion de
                  compétition).
                </Text>
                <Text>
                  41 enfants inscrits en mini-tennis en 2019-2020, soit une
                  explosion des effectifs de 70% !
                </Text>
              </Stack>
              <Card
                css={{
                  backgroundImage: `url(${minitennisCardBackground})`
                }}
                variant="image"
              />
            </TwoCol>
            <TwoCol reversed css={{ alignItems: 'center' }}>
              <Stack spacing="m">
                <SectionTitle>
                  Club junior 1<br />
                  <SectionTitleDetails>
                    pour les enfants 7-8 ans
                  </SectionTitleDetails>
                </SectionTitle>
                <Text>
                  1 heure par semaine
                </Text>
                <Text>
                  En 2019-2020, une trentaine d'enfants répartis sur 5
                  créneaux : mercredi matin et après-midi, samedi matin
                </Text>
                <Text>
                  Deux niveaux : initiation et perfectionnement
                </Text>
                <Text>
                  Une fidélisation d'environ 60% des enfants !
                </Text>
              </Stack>
              <Card
                css={{
                  backgroundImage: `url(${juniorCardBackground})`,
                  backgroundPosition: '50% 100%'
                }}
                variant="image"
              />
            </TwoCol>
            <TwoCol css={{ alignItems: 'center' }}>
              <Stack spacing="m">
                <SectionTitle>
                  Club junior 2<br />
                  <SectionTitleDetails>
                    pour les enfants 9-11 ans
                  </SectionTitleDetails>
                </SectionTitle>
                <Text>
                  1h15 par semaine
                </Text>
                <Text>
                  9 créneaux en 2019-2020 pour 60 enfants : lundi en fin
                  d'après-midi, mercredi matin et après-midi, vendredi en fin
                  d'après-midi, samedi matin et après-midi
                </Text>
                <Text>
                  Trois niveaux : initiation, perfectionnement, compétition
                </Text>
                <Text>
                  50% des enfants poursuivent le tennis l'année suivante !
                </Text>
              </Stack>
              <Card
                css={{
                  backgroundImage: `url(${junior2CardBackground})`
                }}
                variant="image"
              />
            </TwoCol>
            <TwoCol reversed css={{ alignItems: 'center' }}>
              <Stack spacing="m">
                <SectionTitle>
                  Club ados<br />
                  <SectionTitleDetails>
                    de 12 à 18 ans
                  </SectionTitleDetails>
                </SectionTitle>
                <Text>
                  1h15 par semaine
                </Text>
                <Text>
                  Trois niveaux : initiation, perfectionnement, compétition
                </Text>
                <Text>
                  60 jeunes répartis sur 13 créneaux : lundi et mardi en fin
                  d'après-midi, mercredi après-midi, samedi après-midi
                </Text>
                <Text>
                  Plus de 70% des ados poursuivent le tennis l'année suivante !
                </Text>
                <Text>
                  Un effectif en hausse de 25% entre 2019 et 2020 !
                </Text>
              </Stack>
              <Card
                css={{
                  backgroundImage: `url(${teenCardBackground})`,
                  backgroundPosition: '50% 100%'
                }}
                variant="image"
              />
            </TwoCol>
          </Stack>
        </Wrapper>
      </Section>
      <Section skewed>
        <Wrapper>
          <Stack spacing="l">
            <SectionTitle>Cours adultes</SectionTitle>
            <TwoCol css={{ alignItems: 'center' }}>
              <Stack spacing="m">
                <Text>
                  70% de nos adultes (hors retraite sportive) prennent des
                  cours !
                </Text>
                <Text>
                  Des cours très demandés remplis à 100% de leur capacité !
                </Text>
                <Text>
                  Des cours adaptés au niveau et aux objectifs de chacun : du
                  niveau débutant à 4/6, pour le loisir ou la compétition...
                </Text>
                <Text>
                  Des formats variables en fonction des préférences de
                  chacun :
                </Text>
                <List>
                  <ListItem>
                    1h15 (+15 minutes de jeu libre) en plateau pour des
                    partenaires plus variés : 8 joueurs sur 2 terrains avec
                    2 enseignants (1 DE + 1 AMT). Une formule idéale pour se
                    perfectionner à moindre coût et rencontrer davantage de
                    joueurs !
                  </ListItem>
                  <ListItem>
                    1h30 pour les compétiteurs : 4 joueurs sur 1 terrain avec
                    un enseignant DE
                  </ListItem>
                </List>
              </Stack>
              <Card
                css={{
                  backgroundImage: `url(${adultCardBackground})`,
                  backgroundPosition: '50% 10%'
                }}
                variant="image"
              />
            </TwoCol>
          </Stack>
        </Wrapper>
      </Section>
      <Section variant="primary">
        <Wrapper>
          <Stack spacing="l">
            <SectionTitle variant="primary">
              Nos enseignants
            </SectionTitle>
            <Stack spacing="m">
              <Text>
                L'équipe enseignante du TC Franconville est composée de :
              </Text>
              <List>
                <ListItem>1 Diplomé d'État Supérieur (D.E.S)</ListItem>
                <ListItem>2 Diplomés d'État (D.E)</ListItem>
                <ListItem>2 Éducateurs (CQPAMT)</ListItem>
                <ListItem>2 Éducateurs en formation</ListItem>
              </List>
              <Text>
                Notre équipe est à votre écoute pour répondre à vos besoins et
                ainsi vous accompagner dans l'apprentissage du tennis quels que
                soient votre niveau et votre âge. Ils seront ravis de vous faire
                profiter de leurs années d'expérience dans la formation du
                joueur de tennis.
              </Text>
              <Text>
                Un suivi est réalisé toute l'année selon que vous soyez un
                pratiquant loisir ou compétiteur.
              </Text>
              <Text>
                Alors n'hésitez plus et faites partie de l'aventure au TCF !
              </Text>
            </Stack>
          </Stack>
        </Wrapper>
      </Section>
    </Layout>
  )
}

export default EnseignementPage
