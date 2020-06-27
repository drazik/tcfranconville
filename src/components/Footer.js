import React from "react"
import { formatDate } from "../helpers/date"
import { Logo } from "./Logo"
import franconvilleLogo from "../images/logo-franconville.png"
import { ExternalLink } from "../components/ExternalLink"
import { mq } from "../helpers/media-queries"
import { useStaticQuery, graphql } from "gatsby"
import { FluidBgImg } from "./FluidBgImg"

const footer = {
  position: "relative",
  zIndex: 0,
  paddingTop: "3rem",
  paddingBottom: "3rem",
  color: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  "&::before": {
    content: "''",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.15)",
    zIndex: -1,
  },
}

const paragraph = {
  marginTop: "3rem",
  fontSize: "1.25rem",
  textAlign: "center",
}

function Footer() {
  const data = useStaticQuery(graphql`
    query {
      backgroundImage: file(relativePath: { eq: "footer.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <footer css={footer}>
      <FluidBgImg image={data.backgroundImage.childImageSharp.fluid} />
      <div
        css={(theme) => ({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",

          "& > * + *": {
            marginTop: theme.spacing * 4,
          },

          [mq("m")]: {
            flexDirection: "row",

            "& > *": {
              margin: `0 ${theme.spacing * 4}px`,
            },
          },
        })}
      >
        <Logo size={100} />
        <ExternalLink href="https://www.ville-franconville.fr/">
          <img
            src={franconvilleLogo}
            css={{
              width: 150,
            }}
            alt="Ville de Franconville"
          />
        </ExternalLink>
      </div>
      <p css={paragraph}>
        &copy; Tennis Club Franconville {formatDate(new Date(), "yyyy")}
      </p>
      <ul
        css={{
          display: "flex",
          listStyle: "none",
          paddingLeft: 0,
          whiteSpace: "nowrap",
          flexWrap: "wrap",
          alignItems: "center",

          "& > li": {
            margin: "0.5rem 1rem",
          },
        }}
      >
        <li>
          <ExternalLink href="http://www.gs.applipub-fft.fr/fftfr/frameset.do?dispatch=load">
            Gestion Sportive
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="http://www.comite.fft.fr/val-d-oise/val-d-oise_a/cms/index_public.php?us_action=show_note_site&login_off=1&ui_id_site=1">
            Comité du Val d'Oise
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://tenup.fft.fr/">TenUp</ExternalLink>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
