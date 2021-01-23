import { SEO } from "../../components/SEO"
import {
  Section,
  BOSection,
  IllustratedBOSection,
} from "../../components/Section"
import { fetchData } from "../../api"

export default function CompetitionPage({
  metadata,
  teamEventsSection,
  teamEvents,
  singleEventsSection,
  singleEvents,
  ...props
}) {
  console.log(props)
  return (
    <>
      <SEO title={metadata.title} description={metadata.description} />
      <Section skewed variant="brand">
        <div className="flex flex-col items-center space-y-6">
          <h1 className="text-3xl font-bold text-white text-shadow-sm">
            {metadata.title}
          </h1>
          <p className="text-lg font-semibold text-center">
            {metadata.description}
          </p>
        </div>
      </Section>

      <BOSection {...teamEventsSection}>
        <div className="space-y-20">
          {teamEvents.map((event, index) => (
            <IllustratedBOSection
              key={event.id}
              {...event}
              inversed={index % 2 === 1}
            />
          ))}
        </div>
      </BOSection>

      <BOSection {...singleEventsSection}>
        <div className="space-y-20">
          {singleEvents.map((event, index) => (
            <IllustratedBOSection
              key={event.id}
              {...event}
              inversed={index % 2 === 1}
            />
          ))}
        </div>
      </BOSection>
    </>
  )
}

export async function getStaticProps() {
  const data = await fetchData("/competition")

  return {
    props: data,
  }
}
