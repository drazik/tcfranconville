import React from 'react'
import Layout from '../components/Layout'
import { Section, SectionTitle } from '../components/Section'
import Wrapper from '../components/Wrapper'
import Card from '../components/Card'
import Teacher from '../components/Teacher'
import teachingCardBackground from '../images/teaching-card.jpg'
import teachingKidsBackground from '../images/teaching-kids.jpg'
import teachingAdultBackground from '../images/teaching-adult.jpg'
import olivierPhoto from '../images/teachers/olivier.jpg'
import jeanClaudePhoto from '../images/teachers/jean-claude.jpg'
import davidPhoto from '../images/teachers/david.jpg'
import carinePhoto from '../images/teachers/carine.jpg'
import { Text, List, ListItem } from '../components/Text'
import { Link } from 'gatsby'
import SEO from '../components/seo'
import { mq } from '../helpers/media-queries'
import { Stack } from '../components/Stack'
import { PageTitle } from '../components/PageTitle'
import { Button } from '../components/Button'

const EnseignementPage = () => {
  return (
    <Layout>
      <SEO title="Enseignement" />
      <div css={{ position: 'relative' }}>
        <Section skewed variant="primary">
          <PageTitle>Enseignement</PageTitle>
        </Section>
        <Section skewed variant="light" css={{ zIndex: 4 }}>
          <Wrapper>
            <div
              css={theme => ({
                display: 'grid',
                gridGap: theme.spacing * 4,
                gridTemplateColumns: '1fr',
                alignItems: 'center',

                [mq('m')]: {
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gridGap: theme.spacing * 4
                },

                [mq('l')]: {
                  gridGap: theme.spacing * 8
                }
              })}
            >
              <Stack spacing="l">
                <SectionTitle>
                  Cours enfants
                </SectionTitle>
                <Stack>
                  <Text>
                    Turpis. Quisque sem. Quisque elementum sapien iaculis augue. In
                    dui sem, congue sit amet, feugiat quis, lobortis at, eros.
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum
                    vehicula purus. Cum.
                  </Text>
                  <Text>
                    Id turpis. Nam posuere lectus vitae nibh. Etiam tortor orci,
                    sagittis malesuada, rhoncus quis, hendrerit eget, libero. Quisque
                    commodo nulla at nunc. Mauris consequat, enim vitae venenatis
                    sollicitudin, dolor orci bibendum enim, a sagittis nulla nunc quis
                    elit. Phasellus augue. Nunc suscipit, magna tincidunt lacinia
                    faucibus, lacus tellus ornare purus, a.
                  </Text>
                  <Button
                    as={Link}
                    to="/tarifs#ecole-de-tennis"
                    variant="primary"
                    css={{
                      marginLeft: 'auto',
                      marginRight: 'auto'
                    }}
                    block
                  >
                    Voir les tarifs 2019&nbsp;/&nbsp;2020 enfants
                  </Button>
                </Stack>
              </Stack>
              <Card
                css={{
                  backgroundImage: `url(${teachingKidsBackground})`,
                  marginBottom: -70,

                  [mq('m')]: {
                    marginBottom: 0
                  }
                }}
                variant="image"
              />
            </div>
          </Wrapper>
        </Section>
        <Section skewed css={{ zIndex: 3, paddingTop: '6rem' }}>
          <Wrapper>
            <div
              css={theme => ({
                display: 'grid',
                gridGap: theme.spacing * 4,
                gridTemplateColumns: '1fr',
                alignItems: 'center',

                [mq('m')]: {
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gridGap: theme.spacing * 4
                },

                [mq('l')]: {
                  gridGap: theme.spacing * 8
                }
              })}
            >
              <Stack spacing="l">
                <SectionTitle>
                  Cours jeunes
                </SectionTitle>
                <Stack>
                  <Text>
                    Nunc mi tortor, tristique sit amet, rhoncus porta, malesuada
                    elementum, nisi. Integer vitae enim quis risus aliquet gravida.
                    Curabitur vel lorem vel erat dapibus lobortis. Donec dignissim
                    tellus at arcu. Quisque molestie pulvinar sem.
                    Nulla magna neque, ullamcorper tempus, luctus eget, malesuada ut, velit. Morbi
                    felis. Praesent in purus at ipsum cursus posuere. Morbi bibendum facilisis
                    eros. Phasellus aliquam sapien in erat. Praesent venenatis diam dignissim dui.
                    Praesent risus erat, iaculis ac.
                  </Text>
                  <Button
                    as={Link}
                    to="/tarifs#ecole-de-tennis"
                    variant="primary"
                    css={{
                      marginLeft: 'auto',
                      marginRight: 'auto'
                    }}
                    block
                  >
                    Voir les tarifs 2019&nbsp;/&nbsp;2020 jeunes
                  </Button>
                </Stack>
              </Stack>
              <Card
                css={{
                  backgroundImage: `url(${teachingCardBackground})`,
                  marginBottom: -70,

                  [mq('m')]: {
                    order: -1,
                    marginBottom: 0
                  }
                }}
                variant="image"
              />
            </div>
          </Wrapper>
        </Section>
        <Section skewed variant="light" css={{ zIndex: 2, paddingTop: '6rem' }}>
          <Wrapper>
            <div
              css={theme => ({
                display: 'grid',
                gridGap: theme.spacing * 4,
                gridTemplateColumns: '1fr',
                alignItems: 'center',

                [mq('m')]: {
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gridGap: theme.spacing * 4
                },

                [mq('l')]: {
                  gridGap: theme.spacing * 8
                }
              })}
            >
              <Stack spacing="l">
                <SectionTitle>
                  Cours adultes
                </SectionTitle>
                <Stack>
                  <Text>
                    Leo. Ut feugiat. Vivamus urna quam, congue vulputate, convallis
                    non, cursus cursus, risus. Quisque aliquet. Donec vulputate egestas
                    elit. Morbi dictum, sem sit amet aliquam euismod, odio tortor
                    pellentesque odio, ac ultrices enim nibh sed quam. Integer tortor
                    velit, condimentum a, vestibulum eget, sagittis nec, neque. Aenean
                    est urna, bibendum et, imperdiet at, rhoncus in, arcu. In hac
                    habitasse platea dictumst. Vestibulum blandit dignissim dui.
                    Maecenas vitae magna non felis ornare consectetuer. Sed lorem. Nam
                    leo.
                  </Text>
                  <Button
                    as={Link}
                    to="/tarifs#cours-adultes"
                    variant="primary"
                    css={{
                      marginLeft: 'auto',
                      marginRight: 'auto'
                    }}
                    block
                  >
                    Voir les tarifs 2019&nbsp;/&nbsp;2020 adultes
                  </Button>
                </Stack>
              </Stack>
              <Card
                css={{
                  backgroundImage: `url(${teachingAdultBackground})`,
                  marginBottom: -70,

                  [mq('m')]: {
                    marginBottom: 0
                  }
                }}
                variant="image"
              />
            </div>
          </Wrapper>
        </Section>
      </div>
      <Section skewed css={{ zIndex: 1, paddingTop: '6rem' }}>
        <Wrapper>
          <Stack spacing="l">
            <SectionTitle>
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
