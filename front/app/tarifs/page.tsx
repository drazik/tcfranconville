import { Section } from "../../components/Section"
import { SectionTitle } from "../../components/SectionTitle"
import { Wrapper } from "../../components/Wrapper"
import { Table } from "../../components/Table"
import { TableRow } from "../../components/TableRow"
import { TableCell } from "../../components/TableCell"
import { Fragment } from "react"
import { HelpButton } from "./HelpButton"
import {
  adultLessons,
  childLessons,
  discounts,
  miscellaneous,
  Pricing,
  subscriptionPricings,
} from "./data"
import { PageHeader } from "../../components/PageHeader"

export default function PricesPage() {
  return (
    <Fragment>
      <PageHeader title={"Tarifs 2025 / 2026"} />

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
                . L&apos;inscription en ligne vous permet de ne pas être
                contraint(e) de venir à une permanence au club ou au forum des
                associations pour vous inscrire pour la saison 2025/2026, mais
                aussi de payer votre cotisation et vos cours en ligne. Le
                paiement en plusieurs fois est possible.
              </p>
            </div>

            <HelpButton />
          </div>
        </Wrapper>
      </Section>

      <Section skewed variant="light">
        <Wrapper>
          <div className="space-y-8">
            <SectionTitle>Licence</SectionTitle>
            <div className="prose max-w-none">
              <p>
                La licence est associée à votre adhésion à un club affilié à la
                FFT. Intégrer un club affilié, c&apos;est la garantie de trouver
                une structure qui répond à vos attentes et facilite votre
                pratique.
              </p>
              <p>
                La licence 2025-2026 est valable du 1er septembre 2025 au 31
                août 2026. Son tarif est mis en place par la FFT&nbsp;:
                33&nbsp;€ pour les adultes, 23&nbsp;€ pour les jeunes de 6 à 18
                ans, 13&nbsp;€ pour les enfants de moins de 6 ans.
              </p>
              <p>
                Être licencié vous procure de nombreux avantages.{" "}
                <a
                  href="https://www.fft.fr/la-federation/licences"
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
                vous permet de réserver des courts afin de jouer avec
                d&apos;autres adhérents ou avec des invités (moyennant 6€ par
                invitation). Une invitation est offerte pour toute cotisation
                annuelle.
              </p>
              <p>
                Nous proposons différents tarifs afin que chacun puisse trouver
                une cotisation qui correspond le mieux à ses besoins. En cas de
                question, n&apos;hésitez pas à nous contacter.
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
                  {subscriptionPricings.map((pricing, index) => (
                    <PricingRow
                      key={pricing.title}
                      {...pricing}
                      index={index}
                    />
                  ))}
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
                communiqué lors de l&apos;inscription.
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
                {adultLessons.map((pricing, index) => (
                  <PricingRow key={pricing.title} {...pricing} index={index} />
                ))}
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
                communiqué lors de l&apos;inscription.
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
                {childLessons.map((pricing, index) => (
                  <PricingRow key={pricing.title} {...pricing} index={index} />
                ))}
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
                {miscellaneous.map((pricing, index) => (
                  <PricingRow key={pricing.title} {...pricing} index={index} />
                ))}
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
                permettant d&apos;améliorer les infrastructures et les
                équipements à disposition des adhérents.
              </p>
            </div>
          </div>
        </Wrapper>
      </Section>
    </Fragment>
  )
}

function PricingRow({
  pricing,
  description,
  title,
  isHighlighted,
  index,
}: PricingRowProps) {
  return (
    <TableRow
      variant={isHighlighted ? "brand" : index % 2 === 0 ? "even" : "odd"}
    >
      <TableCell>
        <div className="space-y-1">
          <div>{title}</div>
          {description ? <div className="text-xs">{description}</div> : null}
        </div>
      </TableCell>

      {typeof pricing === "string" ? (
        <TableCell align={"center"} colSpan={2}>
          {pricing}
        </TableCell>
      ) : (
        pricing.map((price) => (
          <TableCell key={price} align={"center"}>
            {price}
          </TableCell>
        ))
      )}
    </TableRow>
  )
}

type PricingRowProps = Pricing & { index: number }

export const metadata = {
  title: "Tarifs",
  description: "Tarifs pour la saison 2023/2024",
}
