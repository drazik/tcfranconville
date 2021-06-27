import { SEO } from "../../components/SEO"
import { Section, SectionTitle } from "../../components/Section"
import { Wrapper } from "../../components/Wrapper"
import { Table, TableRow, TableCell } from "../../components/Table"

export default function PricesPage() {
  return (
    <>
      <SEO title="Tarifs" description="Tarifs pour la saison 2020/2021" />
      <Section variant="brand" skewed>
        <Wrapper>
          <h1 className="text-3xl font-bold text-center text-white text-shadow-sm">
            Tarifs 2021&nbsp;/&nbsp;2022
          </h1>
        </Wrapper>
      </Section>

      <Section skewed>
        <Wrapper>
          <div className="space-y-8">
            <SectionTitle>Licence</SectionTitle>
            <div className="prose max-w-none">
              <p>
                La licence Club est associée à votre adhésion à un club affilié
                à la FFT. Intégrer un club affilié, c'est la garantie de trouver
                une structure qui répond à vos attentes et facilite votre
                pratique.
              </p>
              <p>
                La licence Club 2021 est valable du 1er septembre 2020 au 31
                août 2021. Son tarif est mis en place par la FFT&nbsp;:
                30&nbsp;€ pour les adultes, 20&nbsp;€ pour les jeunes/ados de 6
                à 18 ans, 12 &nbsp;€ pour les enfants de moins de 6 ans.
              </p>
              <p>
                Être licencié vous procure de nombreux avantages.{" "}
                <a
                  href="https://www.fft.fr/se-licencier/toutes-les-licences"
                  target="_blank"
                  rel="noreferrer"
                >
                  Rendez vous sur le site de la FFT pour en savoir plus
                </a>
                .
              </p>
            </div>
          </div>
        </Wrapper>
      </Section>

      <Section skewed variant="light">
        <Wrapper>
          <div className="space-y-8">
            <SectionTitle>Cotisation</SectionTitle>
            <div className="prose max-w-none">
              <p>
                La cotisation vous donne accès aux infrastructures du club et
                vous permet de réserver des courts afin de jouer avec d'autres
                adhérents ou avec des invités (moyennant 6€ par invitation).
              </p>
              <p>
                Nous proposons différents tarifs afin que chacun puisse trouver
                une cotisation qui correspond le mieux à ses besoins. En cas de
                question, n'hésitez pas à nous contacter.
              </p>
              <p>
                Vous pouvez prendre votre cotisation en ligne sur{" "}
                <a
                  href="https://tenup.fft.fr/club/57950106/offres"
                  target="_blank"
                  rel="noreferrer"
                >
                  TenUp
                </a>
                .
              </p>
            </div>
            <div className="overflow-x-auto">
              <Table>
                <thead>
                  <tr>
                    <TableCell heading></TableCell>
                    <TableCell heading align="center">
                      Habitant Franconville
                    </TableCell>
                    <TableCell heading align="center">
                      Hors Franconville
                    </TableCell>
                  </tr>
                </thead>
                <tbody>
                  <TableRow variant="odd">
                    <TableCell>Adulte</TableCell>
                    <TableCell align="center">275&nbsp;€ + licence</TableCell>
                    <TableCell align="center">285&nbsp;€ + licence</TableCell>
                  </TableRow>
                  <TableRow variant="even">
                    <TableCell>Etudiants ou demandeurs d'emploi -25 ans</TableCell>
                    <TableCell align="center" colSpan="2">
                      120&nbsp;€ + licence
                    </TableCell>
                  </TableRow>
                  <TableRow variant="odd">
                    <TableCell>
                      <div className="space-y-1">
                        <div>Semaine</div>
                        <div className="text-xs">
                          du lundi au vendredi de 8h à 18h
                        </div>
                      </div>
                    </TableCell>
                    <TableCell align="center">220&nbsp;€ + licence</TableCell>
                    <TableCell align="center">230&nbsp;€ + licence</TableCell>
                  </TableRow>
                  <TableRow variant="even">
                    <TableCell>Retraite sportive (ARSF)</TableCell>
                    <TableCell align="center" colSpan="2">
                      155&nbsp;€ + licence
                    </TableCell>
                  </TableRow>
                  <TableRow variant="brand">
                    <TableCell>
                      <div className="space-y-1">
                        <div>Cotisation parentale</div>
                        <div className="text-xs">
                          Venez jouez avec votre enfant autant de fois que vous
                          le souhaitez&nbsp;!
                        </div>
                      </div>
                    </TableCell>
                    <TableCell align="center" colSpan="2">
                      66&nbsp;€ + licence
                    </TableCell>
                  </TableRow>
                  <TableRow variant="even">
                    <TableCell>
                      <div className="space-y-1">
                        <div>Mini-tennis</div>
                        <div className="text-xs">2016-2018</div>
                      </div>
                    </TableCell>
                    <TableCell align="center" colSpan="2">
                      50&nbsp;€
                    </TableCell>
                  </TableRow>
                  <TableRow variant="odd">
                    <TableCell>
                      <div className="space-y-1">
                        <div>Club junior 1</div>
                        <div className="text-xs">2014-2015</div>
                      </div>
                    </TableCell>
                    <TableCell align="center" colSpan="2">
                      80&nbsp;€
                    </TableCell>
                  </TableRow>
                  <TableRow variant="even">
                    <TableCell>
                      <div className="space-y-1">
                        <div>Ados et Club junior 2</div>
                        <div className="text-xs">2004-2013</div>
                      </div>
                    </TableCell>
                    <TableCell align="center" colSpan="2">
                      100&nbsp;€
                    </TableCell>
                  </TableRow>
                </tbody>
              </Table>
            </div>
          </div>
        </Wrapper>
      </Section>

      <Section>
        <Wrapper>
          <div className="space-y-8">
            <SectionTitle>Cours collectifs adultes</SectionTitle>
            <div className="prose max-w-none">
              <p>
                Les cours se déroulent sur 28 semaines. Le calendrier vous sera
                communiqué lors de l'inscription.
              </p>
            </div>
            <Table>
              <thead>
                <tr>
                  <TableCell heading>Formule</TableCell>
                  <TableCell heading align="center">
                    Prix
                  </TableCell>
                </tr>
              </thead>
              <tbody>
                <TableRow variant="odd">
                  <TableCell>
                    <div className="space-y-1">
                      <div>Adultes 1h</div>
                      <div className="text-xs">
                        1h hebdomadaire encadrée par un DE
                      </div>
                    </div>
                  </TableCell>
                  <TableCell align="center">285&nbsp;€</TableCell>
                </TableRow>
                <TableRow variant="even">
                  <TableCell>
                    <div className="space-y-1">
                      <div>Adultes 1h30</div>
                      <div className="text-xs">
                        1h30 hebdomadaire encadrée par un DE
                      </div>
                    </div>
                  </TableCell>
                  <TableCell align="center">425&nbsp;€</TableCell>
                </TableRow>
                <TableRow variant="odd">
                  <TableCell>Cours supplémentaire adulte</TableCell>
                  <TableCell align="center">285h&nbsp;€ (1h) / 425&nbsp;€ (1h30)</TableCell>
                </TableRow>
              </tbody>
            </Table>
          </div>
        </Wrapper>
      </Section>

      <Section skewed variant="light">
        <Wrapper>
          <div className="space-y-8">
            <SectionTitle>Ecole de tennis</SectionTitle>
            <div className="prose max-w-none">
              <p>
                Les cours se déroulent sur 28 semaines. Le calendrier vous sera
                communiqué lors de l'inscription.
              </p>
            </div>
            <Table>
              <thead>
                <tr>
                  <TableCell heading>Formule</TableCell>
                  <TableCell heading align="center">
                    Prix
                  </TableCell>
                </tr>
              </thead>
              <tbody>
                <TableRow variant="odd">
                  <TableCell>
                    <div className="space-y-1">
                      <div>Mini-tennis</div>
                      <div className="text-xs">1h, 2016-2018</div>
                    </div>
                  </TableCell>
                  <TableCell align="center">115&nbsp;€</TableCell>
                </TableRow>
                <TableRow variant="even">
                  <TableCell>
                    <div className="space-y-1">
                      <div>Club Junior Rouge</div>
                      <div className="text-xs">1h15, 2014-2015</div>
                    </div>
                  </TableCell>
                  <TableCell align="center">170&nbsp;€</TableCell>
                </TableRow>
                <TableRow variant="odd">
                  <TableCell>
                    <div className="space-y-1">
                      <div>Club Junior Orange et Vert</div>
                      <div className="text-xs">1h30, 2011-2013</div>
                    </div>
                  </TableCell>
                  <TableCell align="center">200&nbsp;€</TableCell>
                </TableRow>
                <TableRow variant="even">
                  <TableCell>
                    <div className="space-y-1">
                      <div>Club Ados débutants</div>
                      <div className="text-xs">1h15, 2004-2010</div>
                    </div>
                  </TableCell>
                  <TableCell align="center">170&nbsp;€</TableCell>
                </TableRow>
                <TableRow variant="odd">
                  <TableCell>
                    <div className="space-y-1">
                      <div>Club Ados</div>
                      <div className="text-xs">1h30, 2004-2010</div>
                    </div>
                  </TableCell>
                  <TableCell align="center">240&nbsp;€</TableCell>
                </TableRow>
                <TableRow variant="even">
                  <TableCell>
                    <div className="space-y-1">
                      <div>Cours supplémentaire</div>
                    </div>
                  </TableCell>
                  <TableCell align="center">80&nbsp;€ (1h mini tennis) / 140&nbsp;€ (1h15) / 160&nbsp;€ (1h30)</TableCell>
                </TableRow>
              </tbody>
            </Table>
          </div>
        </Wrapper>
      </Section>

      <Section>
        <Wrapper>
          <div className="space-y-8">
            <SectionTitle>Divers</SectionTitle>
            <Table>
              <thead>
                <tr>
                  <TableCell heading></TableCell>
                  <TableCell heading align="center">
                    Prix
                  </TableCell>
                </tr>
              </thead>
              <tbody>
                <TableRow variant="odd">
                  <TableCell>
                    <div className="space-y-1">
                      Réservation d'un terrain par deux non-adhérents du TCF
                    </div>
                  </TableCell>
                  <TableCell align="center">16&nbsp;€/h</TableCell>
                </TableRow>
                <TableRow variant="even">
                  <TableCell>
                    Invitation par un adhérent d'un non-adhérent du TCF
                  </TableCell>
                  <TableCell align="center">6&nbsp;€/h</TableCell>
                </TableRow>
              </tbody>
            </Table>
          </div>
        </Wrapper>
      </Section>

      <Section variant="light">
        <Wrapper>
          <div className="space-y-8">
            <SectionTitle>Réductions</SectionTitle>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Réduction conjoint</h3>
              <div className="prose max-w-none">
                <p>
                  Si votre conjoint prend aussi une cotisation annuelle, vous
                  bénéficiez de 80€ de réduction sur la vôtre. Il ne vous reste
                  plus qu'à le/la convaincre.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Réduction famille</h3>
              <div className="prose max-w-none">
                <p>
                  Lors de l'inscription de plusieurs membres d'une même famille,
                  vous bénéficiez d'une réduction de 30€ par enfant (10€ pour le
                  mini-tennis).
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Parrainage</h3>
              <div className="prose max-w-none">
                <p>
                  Le parrain et le parrainé bénéficient chacun de 15€ de
                  réduction.
                </p>
              </div>
            </div>
          </div>
        </Wrapper>
      </Section>

      <Section variant="brand">
        <Wrapper>
          <div className="space-y-8">
            <SectionTitle>Je soutiens le club</SectionTitle>
            <div className="prose max-w-none">
              <p>
                Vous avez la possibilité de donner un coup de pouce financier à
                votre club. Pour cela, vous pouvez faire un don. Pour chaque
                tranche de 15€, près de{" "}
                <strong>
                  10€ sont déductibles de vos impôts sur le revenu
                </strong>{" "}
                et vous bénéficiez d'
                <strong>
                  une remise immédiate de 25% du don sur votre cotisation
                </strong>
                .
              </p>
              <p>
                En faisant un don, vous permettez au club de contenir la hausse
                des tarifs, mais également de mettre en place des projets
                permettant d'améliorer les infrastructures et les équipements à
                disposition des adhérents.
              </p>
            </div>
          </div>
        </Wrapper>
      </Section>
    </>
  )
}
