import { SEO } from "../../components/SEO"
import { IllustratedBOSection, Section } from "../../components/Section"
import { fetchData } from "../../api"

export default function AnimationsPage({ metadata, sections }) {
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

      {sections.map((section, index) => (
        <Section color={index % 2 === 0 ? "normal" : "light"} skewed>
          <IllustratedBOSection {...section} inversed={index % 2 === 1} />
        </Section>
      ))}
    </>
  )
}

export async function getStaticProps() {
  const data = await fetchData("/animations")

  return {
    props: data,
  }
}
