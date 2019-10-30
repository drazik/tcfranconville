import React from 'react'
import Layout from '../components/Layout'
import { Section, SectionTitle } from '../components/Section'
import Wrapper from '../components/Wrapper'
import { Text, Caption, Subtitle } from '../components/Text'
import SEO from '../components/seo'
import { Stack } from '../components/Stack'
import { ExternalLink } from '../components/ExternalLink'
import { Link } from 'gatsby'
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from '../components/Table'
import { PageTitle } from '../components/PageTitle'

const TarifsPage = () => {
  return (
    <Layout>
      <SEO title="Tarifs" />
      <Section padded skewed variant="primary">
        <Wrapper>
          <PageTitle>
            Tarifs 2019/2020
          </PageTitle>
        </Wrapper>
      </Section>
      <Section padded skewed>
        <Wrapper>
          <Stack spacing="l">
            <SectionTitle>Licence</SectionTitle>
            <Stack>
              <Text>
                La licence Club est associée à votre adhésion à un club affilié à la FFT. Intégrer un club affilié, c'est la garantie de trouver une structure qui répond à vos attentes et facilite votre pratique.
              </Text>
              <Text>
                La licence Club 2020 est valable du 1er septembre 2019 au 31 août 2020. Son tarif est mis en place par la FFT : 29 € pour les adultes, 20 € pour les 18 ans et moins.
              </Text>
              <Text>
                Être licencié vous procure de nombreux avantages. <ExternalLink href="https://www.fft.fr/se-licencier/toutes-les-licences">Rendez vous sur le site de la FFT pour en savoir plus</ExternalLink>.
              </Text>
            </Stack>
          </Stack>
        </Wrapper>
      </Section>
      <Section padded skewed variant="light" id="cotisation">
        <Wrapper>
          <Stack spacing="l">
            <SectionTitle>Cotisation</SectionTitle>
            <Stack>
              <Text>
                La cotisation vous donne accès aux infrastructures du club et vous permet de réserver des courts afin de jouer avec d'autres adhérents ou avec des invités.
              </Text>
              <Text>
                Nous proposons différents tarifs afin que chacun puisse trouver une cotisation qui correspond le mieux à ses besoins. En cas de question, n'hésitez pas à <Link to="/contact">nous contacter</Link>.
              </Text>
              <div css={{ overflowX: 'auto' }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell heading />
                      <TableCell heading align="center">
                        <Text>Habitant Franconville</Text>
                      </TableCell>
                      <TableCell heading align="center">
                        <Text>Hors Franconville</Text>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <Text>Adulte</Text>
                      </TableCell>
                      <TableCell align="center">
                        <Text>275€ + licence</Text>
                      </TableCell>
                      <TableCell align="center">
                        <Text>285€ + licence</Text>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Stack spacing="xs">
                          <Text>Jeune</Text>
                          <Caption>&lt;25 ans et hors école de tennis</Caption>
                        </Stack>
                      </TableCell>
                      <TableCell colSpan="2" align="center">
                        <Text>120€ + licence</Text></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Stack spacing="xs">
                            <Text>Semaine</Text>
                            <Caption>du lundi au vendredi de 8h à 18h</Caption>
                          </Stack>
                        </TableCell>
                        <TableCell align="center">
                          <Text>220€ + licence</Text>
                        </TableCell>
                        <TableCell align="center">
                          <Text>230€ + licence</Text>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Text>Retraite sportive</Text>
                        </TableCell>
                        <TableCell colSpan="2" align="center">
                          <Text>155€ + licence</Text>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Text>Cotisation parentale</Text>
                        </TableCell>
                        <TableCell colSpan="2" align="center">
                          <Text>95€ (licence comprise)</Text>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Stack spacing="xs">
                            <Text>Printemps/été</Text>
                            <Caption>du 1er mars au 31 août</Caption>
                          </Stack>
                        </TableCell>
                        <TableCell align="center">
                          <Text>160€ + licence</Text>
                        </TableCell>
                        <TableCell align="center">
                          <Text>170€ + licence</Text>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Stack spacing="xs">
                            <Text>Été adulte</Text>
                            <Caption>du 1er juin au 31 août</Caption>
                          </Stack>
                        </TableCell>
                        <TableCell align="center">
                          <Text>90€ + licence</Text>
                        </TableCell>
                        <TableCell align="center">
                          <Text>100€ + licence</Text>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Stack spacing="xs">
                            <Text>
                              Été jeune
                            </Text>
                            <Caption>
                              du 1er juin au 31 août
                            </Caption>
                            <Caption>
                              &lt;25 ans et hors école de tennis
                            </Caption>
                          </Stack>
                        </TableCell>
                        <TableCell colSpan="2" align="center">
                          <Text>40€ + licence</Text>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              <Text>
                Pour toute souscription à une cotisation anuelle, une invitation est offerte.
              </Text>
            </Stack>
          </Stack>
        </Wrapper>
      </Section>
      <Section padded skewed id="cours-adultes">
        <Wrapper>
          <Stack spacing="l">
            <SectionTitle>Cours adultes</SectionTitle>
            <Stack>
              <Text>
                Les cours se déroulent sur 28 semaines. Le calendrier vous sera communiqué lors de l'inscription.
              </Text>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell heading>Formule</TableCell>
                    <TableCell heading align="center">
                      <Text>Prix</Text>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Text>Plateau</Text>
                      <Caption>
                        1h30 de jeu dont 1h15 encadrée par un DE et un AMT
                      </Caption>
                    </TableCell>
                    <TableCell align="center">
                      <Text>280€</Text>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Stack spacing="xs">
                        <Text>Classique</Text>
                        <Caption>1h encadrée par un DE</Caption>
                      </Stack>
                    </TableCell>
                    <TableCell align="center">
                      <Text>280€</Text>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Stack spacing="xs">
                        <Text>Intensif</Text>
                        <Caption>1h30 encadrée par un DE</Caption>
                      </Stack>
                    </TableCell>
                    <TableCell align="center">
                      <Text>420€</Text>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Text>Séance de 1h ou 1h15 encadrée</Text>
                    </TableCell>
                    <TableCell align="center">
                      <Text>13€</Text>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Text>Séance de 1h30 encadrée</Text>
                    </TableCell>
                    <TableCell align="center">
                      <Text>20€</Text>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Stack>
          </Stack>
        </Wrapper>
      </Section>
      <Section padded skewed variant="light" id="ecole-de-tennis">
        <Wrapper>
          <Stack spacing="l">
            <SectionTitle>École de tennis</SectionTitle>
            <Stack>
              <Text>
                Les tarifs de l'école de tennis incluent le prix de la cotisation. Les cours se déroulent sur 28 semaines. Le calendrier vous sera communiqué lors de l'inscription.
              </Text>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell heading>Formule</TableCell>
                    <TableCell heading align="center">
                      <Text>Prix</Text>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Text>Mini-tennis 1h</Text>
                      <Caption>
                        1h, 2014-2015
                      </Caption>
                    </TableCell>
                    <TableCell align="center">
                      <Text>160€</Text>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Stack spacing="xs">
                        <Text>Club Junior 1</Text>
                        <Caption>1h, 2012-2013</Caption>
                      </Stack>
                    </TableCell>
                    <TableCell align="center">
                      <Text>210€</Text>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Stack spacing="xs">
                        <Text>Club Junior 2</Text>
                        <Caption>1h15, 2009-2011</Caption>
                      </Stack>
                    </TableCell>
                    <TableCell align="center">
                      <Text>260€</Text>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Stack spacing="xs">
                        <Text>Club Ados</Text>
                        <Caption>1h15, 2002-2008</Caption>
                      </Stack>
                    </TableCell>
                    <TableCell align="center">
                      <Text>290€</Text>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Text>1h de cours supplémentaire à l'année</Text>
                      <Caption>Sur accord du club</Caption>
                    </TableCell>
                    <TableCell align="center">
                      <Text>110€</Text>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Text>1h15 de cours supplémentaire à l'année</Text>
                      <Caption>Sur accord du club</Caption>
                    </TableCell>
                    <TableCell align="center">
                      <Text>140€</Text>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Stack>
          </Stack>
        </Wrapper>
      </Section>
      <Section padded skewed id="reductions">
        <Wrapper>
          <Stack spacing="l">
            <SectionTitle>Réductions</SectionTitle>
            <Stack>
              <Subtitle tag="h2">Réduction conjoint</Subtitle>
              <Text>
                Si votre conjoint s'inscrit aussi, vous bénéficiez de 80€ de réduction. Il ne vous reste plus qu'à le/la convaincre.
              </Text>
              <Subtitle tag="h2">Réduction enfant</Subtitle>
              <Text>
                Lors de l'inscription de plusieurs enfants, vous bénéficiez de 30€ de réduction par enfant (10€ pour le mini-tennis).
              </Text>
              <Subtitle tag="h2">Forfait familial</Subtitle>
              <Text>
                À partir de 1200€...
              </Text>
            </Stack>
          </Stack>
        </Wrapper>
      </Section>
      <Section padded variant="primary">
        <Wrapper>
          <Stack spacing="l">
            <SectionTitle variant="primary">
              Je soutiens mon club
            </SectionTitle>
            <Stack>
              <Text>
                Vous avez la possibilité de donner un coup de pouce financier à votre club. Pour cela, vous pouvez faire un don (montant maximum de 200€). Pour chaque tranche de 15€, <strong>10€ sont déductibles de vos impôts</strong> et vous bénéficiez d'<strong>une remise de 5€ sur votre cotisation</strong>.
              </Text>
              <Text>
                En faisant un don, vous permettez au club de contenir la hausse des tarifs, mais aussi de mettre en place des projets permettant d'améliorer les infrastructures et les équipements à disposition des adhérents.
              </Text>
            </Stack>
          </Stack>
        </Wrapper>
      </Section>
    </Layout>
  )
}

export default TarifsPage
