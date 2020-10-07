import React from "react"
import {
  Section,
  SectionTitle,
  SectionTitleDetails,
} from "../components/Section"
import Wrapper from "../components/Wrapper"
import { Text, List, ListItem } from "../components/Text"
import SEO from "../components/seo"
import { PageTitle } from "../components/PageTitle"
import { PageDescription } from "../components/PageDescription"
import { Stack } from "../components/Stack"
import { TwoCol } from "../components/TwoCol"
import { Slider as BaseSlider, Slide } from "../components/Slider"
import Ratio from "react-ratio"
import { graphql } from "gatsby"
import { FluidBgImg } from "../components/FluidBgImg"
import { Button } from "../components/Button"
import { ExternalLink } from "../components/ExternalLink"

const Slider = (props) => {
  return (
    <BaseSlider
      css={{
        "& img": {
          verticalAlign: "middle",
          width: "100%",
          height: "100%",
        },
      }}
      {...props}
    />
  )
}

const CompetitionPage = ({ data }) => {
  return (
    <>
      <SEO
        title="Compétition"
        description="Venez participer quel que soit votre âge et votre niveau à des compétitions par équipes en championnats ou en tournois individuellement"
      />
      <Section skewed variant="primary">
        <Wrapper>
          <Stack>
            <PageTitle>Compétition</PageTitle>
            <PageDescription>
              Venez participer quel que soit votre âge et votre niveau à des
              compétitions par équipes en championnats ou en tournois
              individuellement
            </PageDescription>
          </Stack>
        </Wrapper>
      </Section>
      <Section variant="light" skewed>
        <Wrapper>
          <Stack spacing="xl">
            <SectionTitle>Épreuves par équipe</SectionTitle>
            <Text>
              Tout au long de chaque saison sportive, des équipes de différents
              âges et niveaux sont constituées pour participer à des
              compétitions par équipe
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
                    nationale 3), entre 3 et 6 équipes jeunes (dont 2 de filles)
                  </Text>
                  <Text>
                    Les meilleurs classements senior du TCF en 2019 sont 1/6,
                    4/6 pour les messieurs; 3/6, 4/6 pour les dames
                  </Text>
                </Stack>
              </Stack>
              <Slider>
                {data.championnatPrintempsImages.edges.map((edge) => (
                  <Slide key={edge.node.id}>
                    <Ratio ratio={3 / 2}>
                      <FluidBgImg image={edge.node.childImageSharp.fluid} />
                    </Ratio>
                  </Slide>
                ))}
              </Slider>
            </TwoCol>
            <TwoCol reversed align="center">
              <Stack spacing="l">
                <SectionTitle>
                  Championnat 4ème série
                  <SectionTitleDetails>Dames / messieurs</SectionTitleDetails>
                </SectionTitle>
                <Stack spacing="m">
                  <Text>
                    Le TCF est un des rares clubs du Val d'Oise à présenter 2
                    équipes dames et 1 équipes messieurs en Potel. Les équipes 1
                    sont en série 1 et remportent régulièrement le championnat
                    du Val d'Oise
                  </Text>
                </Stack>
              </Stack>
              <Slider>
                {data.potelImages.edges.map((edge) => (
                  <Slide key={edge.node.id}>
                    <Ratio ratio={3 / 2}>
                      <FluidBgImg image={edge.node.childImageSharp.fluid} />
                    </Ratio>
                  </Slide>
                ))}
              </Slider>
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
                    dames (dont une est championne du Val d'Oise 2019 et est
                    qualifiée pour le championnat Île de France)
                  </Text>
                </Stack>
              </Stack>
            </TwoCol>
            <TwoCol reversed align="center">
              <Stack spacing="l">
                <SectionTitle>
                  Championnat +45 ans
                  <SectionTitleDetails>Dames</SectionTitleDetails>
                </SectionTitle>
                <Stack spacing="m">
                  <Text>
                    Le TCF a 90% de ses adhérentes qui jouent en équipe,
                    notamment dans 2 équipes Caren +45, dont une est en
                    excellence départementale
                  </Text>
                </Stack>
              </Stack>
              <Slider>
                {data.championnat45Images.edges.map((edge) => (
                  <Slide key={edge.node.id}>
                    <Ratio ratio={1280 / 960}>
                      <FluidBgImg image={edge.node.childImageSharp.fluid} />
                    </Ratio>
                  </Slide>
                ))}
              </Slider>
            </TwoCol>
            <TwoCol align="center">
              <Stack spacing="l">
                <SectionTitle>
                  Championnat +55 ans
                  <SectionTitleDetails>Messieurs</SectionTitleDetails>
                </SectionTitle>
                <Stack spacing="m">
                  <Text>
                    Les messieurs +55 représentent dignement le TCF, avec une de
                    ses 2 équipes 1/2 finaliste en challenge AFTS 2019
                  </Text>
                </Stack>
              </Stack>
              <Slider>
                {data.championnat55Images.edges.map((edge) => (
                  <Slide key={edge.node.id}>
                    <Ratio ratio={2560 / 1920}>
                      <FluidBgImg image={edge.node.childImageSharp.fluid} />
                    </Ratio>
                  </Slide>
                ))}
              </Slider>
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
                      l'étranger (450 en 2019) y prennent part
                    </Text>
                    <Text>
                      Catégories : simples dames (senior, 35, 45, 55) ; simples
                      messieurs (senior, 35, 45, 55, 60, 65, 70, 75) ;
                      filles/garçons (U12, U14, U16, U18)
                    </Text>
                    <Text>
                      La 39ème édition du tournoi open du TCF aura lieu du 7
                      août au 22 août 2021
                    </Text>
                    <Button
                      as={ExternalLink}
                      href="https://tenup.fft.fr/tournoi/82240888"
                      variant="primary"
                    >
                      Voir sur Tenup
                    </Button>
                  </Stack>
                </Stack>
                <Slider>
                  {data.openImages.edges.map((edge) => (
                    <Slide key={edge.node.id}>
                      <Ratio ratio={3 / 2}>
                        <FluidBgImg image={edge.node.childImageSharp.fluid} />
                      </Ratio>
                    </Slide>
                  ))}
                </Slider>
              </TwoCol>
              <TwoCol reversed align="center">
                <Stack spacing="l">
                  <SectionTitle>Tournoi Open Seniors hiver</SectionTitle>
                  <Stack spacing="m">
                    <Text>
                      Organisé entre fin novembre et début décembre en semaine.
                      Les matchs ont lieu en journée (premiers matchs à 9h,
                      dernière rotation à 15h), du lundi au vendredi
                    </Text>
                    <Text>
                      Prochaine édition du 16 novembre au vendredi 4 décembre
                      2020
                    </Text>
                    <Stack spacing="s">
                      <Text>Catégories&nbsp;:</Text>
                      <List>
                        <ListItem>Seniors dames</ListItem>
                        <ListItem>Seniors messieurs</ListItem>
                      </List>
                    </Stack>
                    <Button
                      as={ExternalLink}
                      href="https://tenup.fft.fr/tournoi/82240880"
                      variant="primary"
                    >
                      Voir sur Tenup
                    </Button>
                  </Stack>
                </Stack>
                <Slider>
                  {data.openJourneeImages.edges.map((edge) => (
                    <Slide key={edge.node.id}>
                      <Ratio ratio={956 / 717}>
                        <FluidBgImg image={edge.node.childImageSharp.fluid} />
                      </Ratio>
                    </Slide>
                  ))}
                </Slider>
              </TwoCol>
              <TwoCol>
                <Stack spacing="l">
                  <SectionTitle>Tournoi Open Séniors+</SectionTitle>
                  <Stack spacing="m">
                    <Text>
                      Vous avez plus de 55 ans ? Venez vous confronter en
                      journée en semaine à des joueurs d'Île de France au club
                      de Franconville au mois de mars et sur terre battue
                    </Text>
                    <Stack spacing="s">
                      <Text>Prochaines éditions&nbsp;:</Text>
                      <List>
                        <ListItem>du 28 septembre au 16 octobre 2020</ListItem>
                        <ListItem>
                          du 29 mars au vendredi 16 avril 2021
                        </ListItem>
                      </List>
                    </Stack>
                    <Stack spacing="s">
                      <Text>Catégories&nbsp;:</Text>
                      <List>
                        <ListItem>Dames 55 ans et 65 ans</ListItem>
                        <ListItem>
                          Messieurs 60 ans, 65 ans, 70 ans et 75 ans
                        </ListItem>
                      </List>
                    </Stack>

                    <Button
                      as={ExternalLink}
                      href="https://tenup.fft.fr/tournoi/82240865"
                      variant="primary"
                    >
                      Voir sur Tenup
                    </Button>
                  </Stack>
                </Stack>
                <Slider>
                  {data.openSeniorPlusImages.edges.map((edge) => (
                    <Slide key={edge.node.id}>
                      <Ratio ratio={3 / 2}>
                        <FluidBgImg image={edge.node.childImageSharp.fluid} />
                      </Ratio>
                    </Slide>
                  ))}
                </Slider>
              </TwoCol>
              <TwoCol reversed align="center">
                <Stack spacing="l">
                  <SectionTitle>Tournoi interne</SectionTitle>
                  <Stack spacing="m">
                    <Text>
                      Au printemps, le tournoi interne permet à tous(tes) les
                      joueurs(euses) du club de jouer ensemble dans la
                      convivialité et la bonne humeur qui caractérisent le TCF
                    </Text>
                    <Text>
                      Catégories : filles/garçons (U12, U16), dames (senior,
                      +35), messieurs (senior, +35, +55)
                    </Text>
                    <Text>
                      Les adhérents du TCF peuvent également se confronter en
                      double à cette occasion (mixtes, dames et messieurs)
                    </Text>
                    <Text>
                      Le prochain tournoi interne aura lieu du 1er au 28 juin
                      2020
                    </Text>
                  </Stack>
                </Stack>
                <Slider>
                  {data.interneImages.edges.map((edge) => (
                    <Slide key={edge.node.id}>
                      <Ratio ratio={3 / 2}>
                        <FluidBgImg image={edge.node.childImageSharp.fluid} />
                      </Ratio>
                    </Slide>
                  ))}
                </Slider>
              </TwoCol>
              <TwoCol align="center">
                <Stack spacing="l">
                  <SectionTitle>Tournois internes couleur</SectionTitle>
                  <Stack spacing="m">
                    <Text>
                      Une fois par trimestre nos enseignants organisent des
                      tournois par couleurs pour les enfants du club. Les
                      enfants y sont regroupés par niveaux et jouent avec des
                      balles évolutives
                    </Text>
                    <Text>Catégories : blanc, violet, rouge, orange, vert</Text>
                  </Stack>
                </Stack>
                <Slider>
                  {data.interneCouleurImages.edges.map((edge) => (
                    <Slide key={edge.node.id}>
                      <Ratio ratio={3 / 2}>
                        <FluidBgImg image={edge.node.childImageSharp.fluid} />
                      </Ratio>
                    </Slide>
                  ))}
                </Slider>
              </TwoCol>
            </Stack>
          </Stack>
        </Wrapper>
      </Section>
    </>
  )
}

export const query = graphql`
  query CompetitionPageQuery {
    championnatPrintempsImages: allFile(
      filter: { relativePath: { glob: "competition/championnat-printemps/*" } }
    ) {
      edges {
        node {
          id
          childImageSharp {
            fluid(maxWidth: 690) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

    potelImages: allFile(
      filter: { relativePath: { glob: "competition/potel/*" } }
    ) {
      edges {
        node {
          id
          childImageSharp {
            fluid(maxWidth: 690) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

    championnat45Images: allFile(
      filter: { relativePath: { glob: "competition/championnat-45/*" } }
    ) {
      edges {
        node {
          id
          childImageSharp {
            fluid(maxWidth: 690) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

    championnat55Images: allFile(
      filter: { relativePath: { glob: "competition/championnat-55/*" } }
    ) {
      edges {
        node {
          id
          childImageSharp {
            fluid(maxWidth: 690) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

    openImages: allFile(
      filter: { relativePath: { glob: "competition/open/*" } }
    ) {
      edges {
        node {
          id
          childImageSharp {
            fluid(maxWidth: 690) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

    openJourneeImages: allFile(
      filter: { relativePath: { glob: "competition/open-journee/*" } }
    ) {
      edges {
        node {
          id
          childImageSharp {
            fluid(maxWidth: 690) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

    openSeniorPlusImages: allFile(
      filter: { relativePath: { glob: "competition/open-senior-plus/*" } }
    ) {
      edges {
        node {
          id
          childImageSharp {
            fluid(maxWidth: 690) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

    interneImages: allFile(
      filter: { relativePath: { glob: "competition/interne/*" } }
    ) {
      edges {
        node {
          id
          childImageSharp {
            fluid(maxWidth: 690) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

    interneCouleurImages: allFile(
      filter: { relativePath: { glob: "competition/interne-couleurs/*" } }
    ) {
      edges {
        node {
          id
          childImageSharp {
            fluid(maxWidth: 690) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default CompetitionPage
