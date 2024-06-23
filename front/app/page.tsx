import { Wrapper } from "../components/Wrapper"
import { Section } from "../components/Section"
import { SectionTitle } from "../components/SectionTitle"
import PropTypes from "prop-types"
import Link from "next/link"
import teachingBackground from "../img/index/teaching.jpg"
import competitionBackground from "../img/index/competition.jpg"
import animationBackground from "../img/index/animation.jpg"
import { FacebookFeed } from "../components/FacebookFeed"
import { Button } from "../components/Button"
import Image, { StaticImageData } from "next/image"

export const metadata = {
  title: "Accueil - TC Franconville",
}

export default function HomePage() {
  return (
    <>
      <Section variant="brand" skewed>
        <Wrapper>
          <div className="space-y-8">
            <SectionTitle>Bienvenue&nbsp;!</SectionTitle>
            <div className="prose lg:prose-lg">
              <p>
                Vous souhaitez vous maintenir en forme, en famille, entre
                amis&nbsp;?
                <br />
                Vous voulez progresser dans votre discipline sportive, le
                tennis&nbsp;?
                <br />
                Vous recherchez un lieu de partage d&apos;émotions&nbsp;?
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
          <div className="space-y-8 md:grid md:grid-cols-3 md:gap-8 md:space-y-0">
            <ThemeCard
              title="Enseignement"
              href="/enseignement"
              image={teachingBackground}
            />
            <ThemeCard
              title="Compétition"
              href="/competition"
              image={competitionBackground}
            />
            <ThemeCard
              title="Animations"
              href="/animations"
              image={animationBackground}
            />
          </div>
        </Wrapper>
      </Section>
      <Section variant="brand" skewed>
        <Wrapper>
          <div className="space-y-8">
            <SectionTitle>Venir jouer au TCF</SectionTitle>
            <div className="space-y-8 lg:grid lg:grid-cols-2 lg:gap-16 lg:space-y-0">
              <div className="space-y-6">
                <div className="prose">
                  <p>
                    Le club est ouvert à toutes et à tous. Envie de taper la
                    petite balle jaune en famille ou entre amis&nbsp;? En
                    simple, en double&nbsp;? Nos courts sont disponibles à la
                    réservation, même si vous n&apos;êtes pas (encore) adhérent.
                  </p>
                </div>
                <div className={"flex flex-col"}>
                  <Button asChild>
                    <Link href="/reservation">Réserver un court</Link>
                  </Button>
                </div>
              </div>
              <div className="space-y-6">
                <div className="prose">
                  <p>
                    Vous aimeriez jouer régulièrement&nbsp;? En devenant
                    adhérent(e) du TC Franconville, vous pourrez profiter au
                    maximum des infrastructures du club. Différentes
                    possibilités s&apos;offrent à vous&nbsp;: cotisation à
                    l&apos;année, saisonnière...
                  </p>
                </div>
                <div className={"flex flex-col"}>
                  <Button asChild>
                    <Link href="/tarifs">Découvrir la cotisation</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </Section>
      <Section>
        <Wrapper>
          <div className="space-y-8">
            <SectionTitle>L&apos;actualité du club</SectionTitle>
            <FacebookFeed />
          </div>
        </Wrapper>
      </Section>
    </>
  )
}

function ThemeCard({ href, title, image }: ThemeCardProps) {
  return (
    <Link
      href={href}
      className={
        "flex flex-col p-6 rounded-lg justify-end text-white bg-cover bg-center h-56 text-xl font-bold shadow-2xl overflow-clip relative"
      }
    >
      <Image
        src={image}
        alt={""}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          position: "absolute",
          inset: 0,
        }}
      />
      <span className={"relative drop-shadow-lg"}>{title}</span>
    </Link>
  )
}

type ThemeCardProps = {
  href: string
  title: string
  image: StaticImageData
}

ThemeCard.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
}
