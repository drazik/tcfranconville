import { Section } from "../../components/Section"
import { Wrapper } from "../../components/Wrapper"
import { FacebookFeed } from "../../components/FacebookFeed"

export default function ActualitePage() {
  return (
    <>
      <Section skewed variant="brand">
        <Wrapper>
          <h1 className="text-3xl font-bold text-center text-white">
            L&apos;actu du club
          </h1>
        </Wrapper>
      </Section>
      <Section>
        <Wrapper>
          <div className="space-y-16">
            <FacebookFeed />
          </div>
        </Wrapper>
      </Section>
    </>
  )
}

export const metadata = {
  title: "Actualité",
  description: "Votre club bouge. Retrouvez ici les dernières actualités.",
}
