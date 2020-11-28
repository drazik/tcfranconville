import Head from "next/head"
import PropTypes from "prop-types"

export function SEO({ title, description, keywords }) {
  const fullTitle = `${title} - TC Franconville`

  return (
    <Head>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="..." />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta
        property="google-site-verification"
        content="sgP1a5KOzca0JDP7SLouQZMzj2LT8Aou5c-ViSnpF8o"
      />
      {keywords.length > 0 ? (
        <meta name="keywords" content={keywords.join(", ")} />
      ) : null}
    </Head>
  )
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
}

SEO.defaultProps = {
  description:
    "Club de tennis convivial à Franconville (Val d'Oise). 9 courts de tennis dont 3 couverts et 2 extérieurs éclairés",
  keywords: [],
}
