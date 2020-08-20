import React from "react"
import { Section } from "../components/Section"
import Wrapper from "../components/Wrapper"
import SEO from "../components/seo"
import { PageTitle } from "../components/PageTitle"
import { PageDescription } from "../components/PageDescription"
import { FacebookFeed } from "../components/FacebookFeed"

const ActualitePage = ({ data }) => {
  return (
    <>
      <SEO
        title="Actualité"
        description="Votre club bouge. Retrouvez ici les dernières actualités."
      />
      <Section skewed variant="primary">
        <PageTitle>L'actu du club</PageTitle>
        <PageDescription>
          Votre club bouge. Retrouvez ici les dernières actualités.
        </PageDescription>
      </Section>
      <Section skewed>
        <Wrapper>
          <FacebookFeed />
        </Wrapper>
      </Section>
    </>
  )
}

export default ActualitePage
