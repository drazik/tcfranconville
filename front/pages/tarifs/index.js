import { SEO } from "../../components/SEO"
import { Section, SectionTitle } from "../../components/Section"
import { Wrapper } from "../../components/Wrapper"
import { Table, TableRow, TableCell } from "../../components/Table"
import { Fragment, useState } from "react"
import { Button } from "../../components/Button"
import { Dialog, Transition } from "@headlessui/react"
import Image from "next/image"
import help01 from "../../img/tarifs/help-01.png"
import help02 from "../../img/tarifs/help-02.png"
import help03 from "../../img/tarifs/help-03.png"
import help04 from "../../img/tarifs/help-04.png"
import { Info } from "../../components/Info"

export default function PricesPage() {
  const [showHelp, setShowHelp] = useState(false)

  return (
    <Fragment>
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
            <SectionTitle>Inscription en ligne</SectionTitle>
            <div className="prose max-w-none">
              <p>
                Vous pouvez vous inscrire directement en ligne sur{" "}
                <a
                  href="https://tenup.fft.fr/club/57950106/offres"
                  rel="noopener"
                  target="_blank"
                >
                  la page TenUp du club
                </a>
                . L'inscription en ligne vous permet de ne pas être contraint(e)
                de venir à une permanence au club ou au forum des associations
                pour vous inscrire pour la saison 2022/2023, mais aussi de payer
                votre cotisation et vos cours en ligne.
              </p>
            </div>
            <Button color="brand" onClick={() => setShowHelp(true)}>
              Comment faire ?
            </Button>
          </div>
        </Wrapper>
      </Section>

      <HelpDialog open={showHelp} onClose={() => setShowHelp(false)} />

      <Section skewed variant="light">
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
                La licence Club 2022 est valable du 1er septembre 2022 au 31
                août 2023. Son tarif est mis en place par la FFT&nbsp;:
                32&nbsp;€ pour les adultes, 22&nbsp;€ pour les jeunes/ados de 6
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

      <Section skewed>
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
                    <TableCell align="center">278&nbsp;€ + licence</TableCell>
                    <TableCell align="center">288&nbsp;€ + licence</TableCell>
                  </TableRow>
                  <TableRow variant="even">
                    <TableCell>
                      Etudiant ou cheurcheur d'emploi (-25 ans)
                    </TableCell>
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
                      158&nbsp;€ + licence
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
                      68&nbsp;€ + licence
                    </TableCell>
                  </TableRow>
                  <TableRow variant="even">
                    <TableCell>
                      <div className="space-y-1">
                        <div>Cotisation Printemps-Été </div>
                        <div className="text-xs">du 1er mars au 31 août</div>
                      </div>
                    </TableCell>
                    <TableCell align="center">170&nbsp;€ + licence</TableCell>
                    <TableCell align="center">180&nbsp;€ + licence</TableCell>
                  </TableRow>
                  <TableRow variant="odd">
                    <TableCell>
                      <div className="space-y-1">
                        <div>Mini-tennis</div>
                        <div className="text-xs">2017-2019</div>
                      </div>
                    </TableCell>
                    <TableCell align="center" colSpan="2">
                      50&nbsp;€ + licence
                    </TableCell>
                  </TableRow>
                  <TableRow variant="even">
                    <TableCell>
                      <div className="space-y-1">
                        <div>Club junior 1</div>
                        <div className="text-xs">2015-2016</div>
                      </div>
                    </TableCell>
                    <TableCell align="center" colSpan="2">
                      80&nbsp;€ + licence
                    </TableCell>
                  </TableRow>
                  <TableRow variant="odd">
                    <TableCell>
                      <div className="space-y-1">
                        <div>Ados et Club junior 2</div>
                        <div className="text-xs">2005-2014</div>
                      </div>
                    </TableCell>
                    <TableCell align="center" colSpan="2">
                      100&nbsp;€ + licence
                    </TableCell>
                  </TableRow>
                </tbody>
              </Table>
            </div>
          </div>
        </Wrapper>
      </Section>

      <Section variant="light">
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
                  <TableCell align="center">290&nbsp;€</TableCell>
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
                  <TableCell align="center">430&nbsp;€</TableCell>
                </TableRow>
              </tbody>
            </Table>
          </div>
        </Wrapper>
      </Section>

      <Section skewed>
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
                  <TableCell align="center">123&nbsp;€</TableCell>
                </TableRow>
                <TableRow variant="even">
                  <TableCell>
                    <div className="space-y-1">
                      <div>Club Junior Niveau Rouge</div>
                      <div className="text-xs">1h15</div>
                    </div>
                  </TableCell>
                  <TableCell align="center">178&nbsp;€</TableCell>
                </TableRow>
                <TableRow variant="odd">
                  <TableCell>
                    <div className="space-y-1">
                      <div>Club Junior Niveau Orange ou Vert</div>
                      <div className="text-xs">1h30</div>
                    </div>
                  </TableCell>
                  <TableCell align="center">208&nbsp;€</TableCell>
                </TableRow>
                <TableRow variant="even">
                  <TableCell>
                    <div className="space-y-1">
                      <div>Club Ados</div>
                      <div className="text-xs">1h15</div>
                    </div>
                  </TableCell>
                  <TableCell align="center">178&nbsp;€</TableCell>
                </TableRow>
                <TableRow variant="odd">
                  <TableCell>
                    <div className="space-y-1">
                      <div>Club Ados</div>
                      <div className="text-xs">1h30</div>
                    </div>
                  </TableCell>
                  <TableCell align="center">248&nbsp;€</TableCell>
                </TableRow>
                <TableRow variant="even">
                  <TableCell>
                    <div className="space-y-1">
                      <div>Cours supplémentaire</div>
                      <div>Sur accord du club</div>
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    90&nbsp;€ (1h mini tennis) / 150&nbsp;€ (1h15) / 170&nbsp;€
                    (1h30)
                  </TableCell>
                </TableRow>
              </tbody>
            </Table>
          </div>
        </Wrapper>
      </Section>

      <Section variant="light">
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

      <Section>
        <Wrapper>
          <div className="space-y-8">
            <SectionTitle>Réductions</SectionTitle>
            {discounts.map((discount) => (
              <div key={discount.title} className="space-y-4">
                <h3 className="text-xl font-bold">{discount.title}</h3>
                <div className="prose max-w-none">
                  {discount.content.map((part) => (
                    <p key={part}>{part}</p>
                  ))}
                </div>
              </div>
            ))}
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
                votre club. Pour cela, vous pouvez faire un don (plafonné à
                200€). Pour chaque tranche de 15€,{" "}
                <strong>
                  10€ sont déductibles de vos impôts sur le revenu
                </strong>{" "}
                et <strong>5€ sont déduits sur votre cotisation.</strong>.
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
    </Fragment>
  )
}

const discounts = [
  {
    title: "Réduction conjoint",
    content: [
      "Si votre conjoint prend aussi une cotisation annuelle, vous bénéficiez de 80€ de réduction sur la vôtre. Il ne vous reste plus qu'à le/la convaincre.",
    ],
  },
  {
    title: "Réduction enfant",
    content: [
      "Lors de l'inscription de plusieurs enfants d'une même famille, vous bénéficiez d'une réduction de 30€ sur la cotisation de chaque enfant.",
    ],
  },
  {
    title: "Forfait famillial",
    content: ["À partir de 1200€."],
  },
]

const HelpDialog = ({ open, onClose }) => {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-20" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-xl font-medium leading-6 text-gray-900"
                >
                  Inscription en ligne : commment faire ?
                </Dialog.Title>
                <div className="mt-8 space-y-6">
                  <div className="space-y-3">
                    <h4 className="text-lg font-medium">
                      Étape 1 : créer son compte sur Ten'Up
                    </h4>
                    <div className="prose max-w-none">
                      <p>
                        Rendez vous sur le site{" "}
                        <a href="https://tenup.fft.fr/" rel="noopener">
                          Ten'Up
                        </a>{" "}
                        puis cliquez sur "Connexion / inscription".
                      </p>
                      <Image src={help01} alt="" />
                      <p>
                        Créez votre compte en remplissant le formulaire
                        d'inscription. Si vous avez déjà un compte,
                        connectez-vous.
                      </p>
                    </div>
                    <Info title="Inscription famille">
                      Si vous souhaitez inscrire plusieurs membre d'une même
                      famille, chaque membre de la famille devra avoir un compte
                      Ten'Up.
                    </Info>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-lg font-medium">
                      Étape 2 : Choisir sa formule
                    </h4>
                    <div className="prose max-w-none">
                      <p>
                        Rendez vous sur{" "}
                        <a
                          href="https://tenup.fft.fr/club/57950106/offres"
                          rel="noopener"
                          target="_blank"
                        >
                          la page des offres du TC Franconville
                        </a>
                        .
                      </p>
                      <p>
                        Sélectionnez la formule qui vous intéresse en cliquant
                        sur le bouton "Ajouter" associé à cette formule.
                      </p>
                      <p>
                        Par exemple, pour sélectionner des cours de mini-tennis
                        :
                      </p>
                      <Image src={help02} alt="" />
                    </div>
                    <Info title="Attention">
                      Ne prenez pas de licence "web". Une licence vous sera
                      attribuée par le club après votre inscription.
                    </Info>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-lg font-medium">Étape 3 : Paiement</h4>
                    <div className="prose max-w-none">
                      <p>
                        Accédez à votre panier en cliquant sur le bouton
                        "Panier" :
                      </p>
                      <Image src={help03} alt="" />
                      <p>
                        Suivez les instructions afin de procéder au paiement. Si
                        vous souhaitez payer en 4 fois, sélectionnez "Je paye en
                        plusieurs fois"&nbsp;:
                      </p>
                      <Image src={help04} alt="" />
                    </div>
                    <Info title="Inscription famille">
                      Pour une famille, il faut consulter le panier du compte du
                      "Chef de famille".
                    </Info>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
