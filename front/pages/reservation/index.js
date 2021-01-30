import { SEO } from "../../components/SEO"
import { Section, BOSection } from "../../components/Section"
import { Wrapper } from "../../components/Wrapper"
import { fetchData } from "../../api"

export default function ReservationPage({ metadata, sections }) {
  return (
    <>
      <SEO title={metadata.title} description={metadata.description} />
      <Section skewed variant="brand">
        <Wrapper>
          <h1 className="text-3xl font-bold text-center text-white text-shadow-sm">
            {metadata.title}
          </h1>
        </Wrapper>
      </Section>

      {sections.map((section) => (
        <BOSection key={section.id} {...section} />
      ))}
    </>
  )
}

export async function getStaticProps() {
  const data = await fetchData("/reservation")

  return {
    props: data,
  }
}
