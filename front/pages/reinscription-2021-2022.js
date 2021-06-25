import { Wrapper } from "../components/Wrapper"
import { Section } from "../components/Section"
import { SEO } from "../components/SEO"
import Link from "next/link"

export default function Information() {
  return (
    <>
      <SEO title="Information" />
      <Section skewed variant="brand">
        <Wrapper>
          <div className="flex flex-col items-center space-y-6">
            <h1 className="text-3xl font-bold text-white text-shadow-sm">
              Inscriptions saison 2021-2022
            </h1>
          </div>
        </Wrapper>
      </Section>
      <Section skewed>
        <Wrapper>
          <div className="prose mx-auto">
            <p>Les inscriptions pour la saison 2021-2022 sont ouvertes.</p>
            <p>Des permanences sont assurées pour vous permettre de vous inscrire :</p>
            <ul>
              <li>Samedi 26/06 de 10h à 18h</li>
              <li>Mercredi 30/06 de 10h à 16h</li>
              <li>Samedi 03/07 de 10h à 12h</li>
              <li>Samedi 10/07 de 10h à 12h</li>
              <li>Samedi 17/07 de 10h à 12h</li>
              <li>Samedi 24/07 de 10h à 12h</li>
            </ul>
            <p>Découvrez <Link href="/tarifs"><a>les tarifs</a></Link> proposés pour cette nouvelle saison.</p>
            <p>Si vous êtes adhérent et prenez des cours, votre enseignant vous a donné une fiche de réinscription personnalisée. Vous pouvez la remplir et la déposer au club ou l'envoyer par e-mail à <a href="mailto:tennis.club.franconville@cegetel.net">tennis.club.franconville@cegetel.net</a>.</p>
          </div>
        </Wrapper>
      </Section>
    </>
  )
}
