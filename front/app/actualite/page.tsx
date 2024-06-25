import { Section } from "../../components/Section"
import { Wrapper } from "../../components/Wrapper"
import { FacebookFeed } from "../../components/FacebookFeed"
import { PageHeader } from "../../components/PageHeader"

export default function ActualitePage() {
  return (
    <>
      <PageHeader title={"L'actu du club"} />
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
