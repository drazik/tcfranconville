import { SEO } from "../../components/SEO"
import {
  Section,
  SectionTitle,
  BOSection,
  IllustratedBOSection,
} from "../../components/Section"
import { fetchData } from "../../api"

export default function EnseignementPage({
  metadata,
  introductionSection,
  childrenSections,
  adultsSections,
  coachesSection,
}) {
  return (
    <>
      <SEO
        title="Enseignement"
        description="Grâce à ses enseignants très qualifiés, le TC Franconville propose des cours pour tout âge et tout niveau"
      />
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
      <BOSection {...introductionSection} />
      <Section skewed color="light">
        <div className="space-y-16">
          <SectionTitle>Notre école de tennis</SectionTitle>
          {childrenSections.map((childrenSection, index) => (
            <IllustratedBOSection
              key={childrenSection.id}
              {...childrenSection}
              inversed={index % 2 === 1}
            />
          ))}
        </div>
      </Section>
      <Section skewed color="normal">
        {adultsSections.map((section, index) => (
          <IllustratedBOSection
            key={section.id}
            {...section}
            inversed={index % 2 === 1}
          />
        ))}
      </Section>
      <BOSection {...coachesSection} />
    </>
  )
}

export async function getStaticProps() {
  const data = await fetchData("/enseignement")

  return {
    props: data,
  }
}
