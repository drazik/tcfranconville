import { BOSection, Section, SectionTitle } from "../components/Section"
import cn from "classnames"
import PropTypes from "prop-types"
import Link from "next/link"
import { FacebookFeed } from "../components/FacebookFeed"
import { SEO } from "../components/SEO"
import * as React from "react"
import { fetchData, useApiMedia } from "../api"

export default function Home({
  greetingsSection,
  activityCardBackground,
  competitionCardBackground,
  teachingCardBackground,
  section3,
  newsSection,
  ...props
}) {
  const makeMediaUrl = useApiMedia()
  const activityBackgroundUrl = makeMediaUrl(activityCardBackground)
  const competitionBackgroundUrl = makeMediaUrl(competitionCardBackground)
  const teachingBackgroundUrl = makeMediaUrl(teachingCardBackground)

  return (
    <>
      <SEO
        title={props.metadata.title}
        description={props.metadata.description}
      />
      <BOSection {...greetingsSection} />
      <Section>
        <div className="md:h-64 space-y-8 md:grid md:grid-cols-3 md:gap-8 md:space-y-0 lg:h-96">
          <ThemeCard
            title="Enseignement"
            href="/enseignement"
            style={{ backgroundImage: `url(${teachingBackgroundUrl})` }}
          />
          <ThemeCard
            title="Compétition"
            href="/competition"
            style={{ backgroundImage: `url(${competitionBackgroundUrl})` }}
          />
          <ThemeCard
            title="Animations"
            href="/animations"
            style={{ backgroundImage: `url(${activityBackgroundUrl})` }}
          />
        </div>
      </Section>
      <BOSection {...section3} />
      <Section skewed={newsSection.skewed} color={newsSection.color}>
        <div className="space-y-8">
          <SectionTitle>{newsSection.title}</SectionTitle>
          <FacebookFeed />
        </div>
      </Section>
    </>
  )
}

function ThemeCard({ href, className, title, ...props }) {
  return (
    <Link href={href}>
      <a
        className={cn(
          "flex flex-col p-6 rounded-lg justify-end text-white bg-cover bg-center h-56 text-xl font-bold text-shadow-xl shadow-2xl h-full",
          className
        )}
        {...props}
      >
        {title}
      </a>
    </Link>
  )
}

ThemeCard.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export async function getStaticProps() {
  const data = await fetchData("/home")

  return {
    props: data,
  }
}
