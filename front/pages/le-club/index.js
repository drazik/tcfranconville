import { SEO } from "../../components/SEO"
import {
  Section,
  SectionTitle,
  IllustratedBOSection,
  BOSection,
} from "../../components/Section"
import cn from "classnames"
import { Button } from "../../components/Button"
import { fetchData, useApiMedia } from "../../api"
import omit from "lodash/omit"
import Markdown from "markdown-to-jsx"

export default function LeClubPage({
  metadata,
  infrastructuresSection,
  contactSection,
  partners,
}) {
  const makeMediaUrl = useApiMedia()

  return (
    <>
      <SEO title={metadata.title} description={metadata.description} />
      <Section skewed variant="brand">
        <h1 className="text-3xl font-bold text-center text-white text-shadow-sm">
          {metadata.title}
        </h1>
      </Section>

      <Section skewed color="light">
        <SectionTitle>{infrastructuresSection.title}</SectionTitle>
        <IllustratedBOSection {...omit(infrastructuresSection, ["title"])} />
      </Section>

      <BOSection {...contactSection} />

      <Section skewed variant="light">
        <div className="space-y-16">
          <SectionTitle>Partenaires</SectionTitle>
          <ul className="space-y-16">
            {partners.map((partner) => (
              <li key={partner.id}>
                <Partner
                  logo={makeMediaUrl(partner.logo)}
                  name={partner.name}
                  description={
                    <div className="prose lg:prose-lg max-w-none">
                      <Markdown>{partner.description}</Markdown>
                    </div>
                  }
                  url={partner.url}
                />
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  )
}

function Partner({ logo, name, description, className, url, ...props }) {
  return (
    <div
      className={cn(
        "flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8",
        className
      )}
      {...props}
    >
      <img
        src={logo}
        alt=""
        className="flex-grow-0 flex-shrink-0"
        style={{ maxWidth: "200px" }}
      />
      <div className="flex flex-col items-center space-y-4 lg:items-start">
        <div className="text-2xl font-semibold">{name}</div>
        <div className="prose max-w-none">{description}</div>
        {url ? (
          <Button component="a" href={url} target="_blank" color="brand">
            En savoir plus
          </Button>
        ) : null}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const [pageData, partners] = await Promise.all([
    fetchData("/le-club"),
    fetchData("/partenaires"),
  ])

  return {
    props: {
      ...pageData,
      partners,
    },
  }
}
