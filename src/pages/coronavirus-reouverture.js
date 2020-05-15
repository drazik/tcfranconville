import React from "react"
import { Section } from "../components/Section"
import Wrapper from "../components/Wrapper"
import { Text } from "../components/Text"
import SEO from "../components/seo"
import { PageTitle } from "../components/PageTitle"
import { ExternalLink } from "../components/ExternalLink"
import { Stack } from "../components/Stack"

const CoronavirusReouverturePage = () => {
  return (
    <>
      <SEO title="Réouverture du club" />
      <Section skewed variant="primary">
        <PageTitle>Réouverture du club</PageTitle>
      </Section>
      <Section skewed variant="light">
        <Wrapper>
          <Stack spacing="l">
            <Text>
              A partir du 15 mai le club sera à nouveau ouvert, et les courts 1,
              2 et 3 seront accessibles.
            </Text>
            <Text>
              Cette réouverture est bien entendu partielle : seuls les simples
              sont autorisés pur le moment et le club-house ainsi que les
              vestiaires restent strictement fermés.
            </Text>
            <Text>
              Un certain nombre de règles devront être respectés par tous,
              conformément au{" "}
              <ExternalLink href="http://www.digital.fft.fr/02-emailing/2020/FFT/clubs/information-sanitaire/docs/Protocole-de-sortie-de-confinement.pdf">
                protocole élaboré par la FFT
              </ExternalLink>
              . Nous vous demandons de les respectuer scrupuleusement, afin de
              préserver la santé de tous et la pérennité de l'ouverture de ces
              installations. Des visites inopinées seront réalisées par les
              membres du comité du TCF, de manière à rappeler et faire respecter
              les règles le cas échéant.
            </Text>
            <Text>
              Toute réservation est interdite avant d'avoir renvoyé votre{" "}
              <ExternalLink href="http://www.digital.fft.fr/02-emailing/2020/FFT/clubs/information-sanitaire/docs/Formulaire-reprise-activite-licencies.pdf">
                attestation de reprise d'activité
              </ExternalLink>{" "}
              sur le mail du club :{" "}
              <a href="mailto:tennis.club.franconville@cegetel.net">
                tennis.club.franconvile@cegetel.net
              </a>
              . Toute réservation comprenant un joueur n'ayant pas renvoyé son
              attestation sera immédiatement supprimée.
            </Text>
            <Text>
              Jusqu'au 2 juin pour l'instant, seuls le jeu libre et les cours
              individuels sont autorisés; vous pouvez donc contacter Carine,
              David et Olivier pour prendre un cours dans le cadre de leur
              activité libérale.
            </Text>
            <Text>
              Nous vous conseillons vivement de reprendre vos entraînements de
              tennis avec modération ; les enseignants sont à votre écoute pour
              retrouver une condition physique en toute sécurité (articulations,
              muscles, respiration, rythme cardiaque...).
            </Text>
            <Text>
              Pour toutes questions que vous jugerez utiles, la référente
              Covid-19, en la personne de la Présidente du TCF, vous répondra
              sur l'adresse mail du club.
            </Text>
          </Stack>
        </Wrapper>
      </Section>
    </>
  )
}

export default CoronavirusReouverturePage
