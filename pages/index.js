import { Wrapper } from "../components/Wrapper"
import { Section, SectionTitle } from "../components/Section"
import cn from "classnames"
import PropTypes from "prop-types"
import Link from "next/link"
import teachingBackground from "./teaching.jpg"
import competitionBackground from "./competition.jpg"
import animationBackground from "./animation.jpg"
import { FacebookFeed } from "../components/FacebookFeed"
import { Button } from "../components/Button"

export default function Home() {
  return (
    <>
      <Section variant="brand" skewed>
        <Wrapper>
          <div className="space-y-8">
            <SectionTitle>Bienvenue&nbsp;!</SectionTitle>
            <div className="prose">
              <p>
                Vous souhaitez vous maintenir en forme, en famille, entre
                amis&nbsp;?
                <br />
                Vous voulez progresser dans votre discipline sportive, le
                tennis&nbsp;?
                <br />
                Vous recherchez un lieu de partage d'émotions&nbsp;?
              </p>
              <p>
                Quels que soient votre âge, votre niveau, votre ambition, le TCF
                vous offre&nbsp;:
              </p>
              <ul>
                <li>
                  des enseignements à haute valeur ajoutée, dynamiques,
                  motivants
                </li>
                <li>des compétitions adaptées, individuelles ou par équipe</li>
                <li>
                  des animations placées sous le signe de la convivialité, du
                  jeu et de la gastronomie&nbsp;!
                </li>
              </ul>
            </div>
          </div>
        </Wrapper>
      </Section>
      <Section>
        <Wrapper>
          <div className="space-y-8">
            <ThemeCard
              title="Enseignement"
              href="/enseignement"
              style={{ backgroundImage: `url(${teachingBackground})` }}
            />
            <ThemeCard
              title="Compétition"
              href="/competition"
              style={{ backgroundImage: `url(${competitionBackground})` }}
            />
            <ThemeCard
              title="Animations"
              href="/animations"
              style={{ backgroundImage: `url(${animationBackground})` }}
            />
          </div>
        </Wrapper>
      </Section>
      <Section variant="brand" skewed>
        <Wrapper>
          <div className="space-y-8">
            <SectionTitle>Venir jouer au TCF</SectionTitle>
            <div className="prose">
              <p>
                Le club est ouvert à toutes et à tous. Envie de taper la petite
                balle jaune en famille ou entre amis&nbsp;? En simple, en
                double&nbsp;? Nos courts sont disponibles à la réservation, même
                si vous n'êtes pas (encore) adhérent.
              </p>
            </div>
            <Link href="/reservation" passHref>
              <Button component="a" className="w-full">
                Réserver un court
              </Button>
            </Link>
            <div className="prose">
              <p>
                Vous aimeriez jouer régulièrement&nbsp;? En devenant adhérent(e)
                du TC Franconville, vous pourrez profiter au maximum des
                infrastructures du club. Différentes possibilités s'offrent à
                vous&nbsp;: cotisation à l'année, saisonnière...
              </p>
            </div>
            <Link href="/tarifs" passHref>
              <Button component="a" className="w-full">
                Découvrir la cotisation
              </Button>
            </Link>
          </div>
        </Wrapper>
      </Section>
      <Section>
        <Wrapper>
          <div className="space-y-8">
            <SectionTitle>L'actualité du club</SectionTitle>
            <FacebookFeed />
          </div>
        </Wrapper>
      </Section>
    </>
  )
}

function ThemeCard({ href, className, title, ...props }) {
  return (
    <Link href={href}>
      <a
        className={cn(
          "flex flex-col p-6 rounded-lg justify-end text-white bg-cover bg-center h-56 text-xl font-bold text-shadow-xl shadow-2xl",
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
