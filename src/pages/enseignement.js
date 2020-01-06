import React from 'react'
import {
  Section,
  SectionTitle,
  SectionTitleDetails,
} from '../components/Section'
import Wrapper from '../components/Wrapper'
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
import { IllustrationCard } from '../components/IllustrationCard'
import { ReactComponent as InfoIcon } from '../images/icons/info.svg'

const Info = props => {
  const { children, ...rest } = props
  const r = 50
  const d = 2 * r

  return (
    <div
      css={{
        position: 'relative',
      }}
    >
      <InfoIcon
        viewBox="0 0 29 29"
        width="50"
        height="50"
        css={theme => ({
          position: 'absolute',
          top: -10,
          left: -10,
          fill: theme.main,
        })}
      />
      <div
        css={theme => ({
          padding: 'calc(50px + 1rem) 1.5rem 2rem',
          color: 'white',
          overflow: 'hidden',
          position: 'relative',
          borderRadius: '0.75rem',

          '&::before': {
            content: "''",
            position: 'absolute',
            width: d,
            height: d,
            boxShadow: `0 0 0 1000px ${theme.main}`,
            top: -r,
            left: -r,
            borderRadius: '50%',
            zIndex: -1,
          },
        })}
        {...rest}
      >
        <p
          css={{
            position: 'absolute',
            top: 25,
            left: 'calc(50px + 1rem)',
            fontWeight: 'bold',
            margin: 0,
            transform: 'translateY(-50%)',
          }}
        >
          Le saviez-vous ?
        </p>
        {children}
      </div>
    </div>
  )
}

const EnseignementPage = () => {
  return (
    <>
      <SEO title="Enseignement" />
      <Section skewed variant="primary">
        <Wrapper>
          <Stack spacing="m">
            <PageTitle>Enseignement</PageTitle>
            <PageDescription>
              Un enseignement à haute valeur ajoutée ! Grâce à ses enseignants
              très qualifiés, le TCF propose des cours pour tout âge et tout
              niveau. Les cours sont très demandés, pensez à vous inscrire dès
              le mois de mai !
            </PageDescription>
          </Stack>
        </Wrapper>
      </Section>
      <Section skewed>
        <Wrapper>
          <Stack spacing="m">
            <Text>
              <strong>Nos objectifs pour vos enfants :</strong>
            </Text>
            <List>
              <ListItem>
                partager le plaisir du jeu en s'amusant avant tout
              </ListItem>
              <ListItem>
                faire progresser chaque enfant à son rythme en tenant compte des
                singularités de chacun
              </ListItem>
              <ListItem>
                transmettre les valeurs de l'esprit sportif associant fair-play,
                dépassement de soi et esprit de compétition
              </ListItem>
            </List>
            <Text>
              <strong>Notre politique de club vise à :</strong>
            </Text>
            <List>
              <ListItem>
                promouvoir le tennis à l'extérieur du club par des actions comme
                le « tennis à l'école » en lien avec la mairie de Franconville
                et l'inspection académique
              </ListItem>
              <ListItem>
                emmener nos compétiteurs à développer leur potentiel en les
                intégrant à un centre d'entraînement intensif, en leur proposant
                des cours supplémentaires...
              </ListItem>
              <ListItem>
                fidéliser les enfants par le développement du jeu en dehors des
                cours (animations tennis, organisation de tournois,
                participation à des compétitions par équipes...)
              </ListItem>
              <ListItem>
                faciliter la transition vers l'âge adulte en intégrant les ados
                performants aux cours adultes
              </ListItem>
            </List>
          </Stack>
        </Wrapper>
      </Section>
      <Section skewed variant="light">
        <Wrapper>
          <Stack spacing="xl">
            <SectionTitle>Notre école de tennis</SectionTitle>
            <TwoCol css={{ alignItems: 'center' }}>
              <Stack spacing="m">
                <SectionTitle>
                  Mini-tennis
                  <br />
                  <SectionTitleDetails>
                    pour les enfants 4-6 ans
                  </SectionTitleDetails>
                </SectionTitle>
                <Text>1 heure par semaine</Text>
                <Text>
                  4 créneaux en 2019-2020 : mercredi matin, vendredi en début de
                  soirée et samedi matin
                </Text>
                <Text>
                  Un encadrement adapté au nombre d'enfants : 1 adulte pour 5
                  enfants environ
                </Text>
                <Text>Un matériel pédagogique spécifique</Text>
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
                <Info>
                  <Text>
                    Le club dispose d'un terrain de mini-tennis (devant le mur
                    du club-house) sur lequel les enfants peuvent librement
                    venir s'entrainer !
                  </Text>
                </Info>
              </Stack>
              <IllustrationCard
                image={minitennisCardBackground}
                ratio={3000 / 1987}
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
                <Text>1 heure par semaine</Text>
                <Text>
                  En 2019-2020, une trentaine d'enfants répartis sur 5 créneaux
                  : mercredi matin et après-midi, samedi matin
                </Text>
                <Text>Deux niveaux : initiation et perfectionnement</Text>
                <Text>Une fidélisation d'environ 60% des enfants !</Text>
              </Stack>
              <IllustrationCard
                image={juniorCardBackground}
                ratio={600 / 400}
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
                <Text>1h15 par semaine</Text>
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
                <Info>
                  <Text>
                    Pour 95€ seulement, vous pouvez jouer autant que vous le
                    voulez avec votre enfant inscrit à l'école de tennis et même
                    réserver un court avec lui ! Optez pour la cotisation parent
                    !
                  </Text>
                </Info>
              </Stack>
              <IllustrationCard
                image={junior2CardBackground}
                ratio={500 / 598}
              />
            </TwoCol>
            <TwoCol reversed css={{ alignItems: 'center' }}>
              <Stack spacing="m">
                <SectionTitle>
                  Club ados
                  <br />
                  <SectionTitleDetails>de 12 à 18 ans</SectionTitleDetails>
                </SectionTitle>
                <Text>1h15 par semaine</Text>
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
                <Text>Un effectif en hausse de 25% entre 2019 et 2020 !</Text>
              </Stack>
              <IllustrationCard image={teenCardBackground} ratio={500 / 630} />
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
                  70% de nos adultes (hors retraite sportive) prennent des cours
                  !
                </Text>
                <Text>
                  Des cours très demandés remplis à 100% de leur capacité !
                </Text>
                <Text>
                  Des cours adaptés au niveau et aux objectifs de chacun : du
                  niveau débutant à 4/6, pour le loisir ou la compétition...
                </Text>
                <Text>
                  Des formats variables en fonction des préférences de chacun :
                </Text>
                <List>
                  <ListItem>
                    1h avec un enseignant DE : 4 joueurs sur 1 terrain
                  </ListItem>
                  <ListItem>
                    1h15 (+15 minutes de jeu libre) en plateau pour des
                    partenaires plus variés : 8 joueurs sur 2 terrains avec 2
                    enseignants (1 DE + 1 AMT). Une formule idéale pour se
                    perfectionner à moindre coût et rencontrer davantage de
                    joueurs !
                  </ListItem>
                  <ListItem>
                    1h30 pour les compétiteurs : 4 joueurs sur 1 terrain avec un
                    enseignant DE
                  </ListItem>
                </List>
              </Stack>
              <IllustrationCard image={adultCardBackground} ratio={500 / 750} />
            </TwoCol>
          </Stack>
        </Wrapper>
      </Section>
      <Section variant="primary">
        <Wrapper>
          <Stack spacing="l">
            <SectionTitle variant="primary">Nos enseignants</SectionTitle>
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
    </>
  )
}

export default EnseignementPage
