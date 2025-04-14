import { Section } from "../../components/Section"
import { SectionTitle } from "../../components/SectionTitle"
import { Wrapper } from "../../components/Wrapper"
import { TwoCol } from "../../components/TwoCol"
import { ImagesCarousel } from "../../components/ImagesCarousel"
import { Button } from "../../components/Button"
import { isAfter } from "date-fns/isAfter"
import { PageHeader } from "../../components/PageHeader"
import {
  type Competition,
  fetchNextTournaments,
  individualTournaments,
  teamChampionships,
} from "./data"

export default async function CompetitionPage() {
  const tournaments = await fetchNextTournaments()

  console.log(tournaments)

  return (
    <>
      <PageHeader
        title={"Compétition"}
        description={
          <p>
            Venez participer quel que soit votre âge et votre niveau à des
            compétitions par équipes en championnats ou en tournois
            individuellement
          </p>
        }
      />

      <Section skewed variant="light">
        <Wrapper>
          <div className="space-y-16">
            <SectionTitle>Epreuves par équipes</SectionTitle>
            <div className="prose max-w-none">
              <p>
                Tout au long de chaque saison sportive, des équipes de
                différents âges et niveaux sont constituées pour participer à
                des compétitions par équipe.
              </p>
            </div>

            {teamChampionships.map((competition, index) => (
              <Competition
                key={competition.title}
                competition={competition}
                inversed={index % 2 === 1}
              />
            ))}
          </div>
        </Wrapper>
      </Section>

      <Section skewed>
        <Wrapper>
          <div className="space-y-16">
            <SectionTitle>Epreuves individuelles</SectionTitle>
            <div className="prose max-w-none">
              <p>
                Le club organise des compétitions individuelles pour tous les
                âges et niveaux.
              </p>
            </div>
            {individualTournaments.map((competition, index) => (
              <Competition
                key={competition.title}
                competition={competition}
                inversed={index % 2 === 1}
              />
            ))}
          </div>
        </Wrapper>
      </Section>
    </>
  )
}

const Competition = ({ competition, inversed }: CompetitionProps) => {
  return (
    <TwoCol
      inversed={inversed}
      firstCol={
        <div className="space-y-8">
          <SectionTitle>{competition.title}</SectionTitle>
          <div className="prose max-w-none">
            {competition.description.map((paragraph) => (
              <p
                dangerouslySetInnerHTML={{ __html: paragraph }}
                key={paragraph}
              />
            ))}
            {competition.dates ? (
              <p>
                {isAfter(competition.dates.start, new Date())
                  ? "Prochaine"
                  : "Dernière"}{" "}
                édition du {competition.dates.start.toLocaleDateString()} au{" "}
                {competition.dates.end.toLocaleDateString()}
              </p>
            ) : null}
            {competition.categories ? (
              <>
                <p>Catégories&nbsp;:</p>
                <ul>
                  {competition.categories.map((category) => (
                    <li key={category}>{category}</li>
                  ))}
                </ul>
              </>
            ) : null}
          </div>
          {competition.tenupURL ? (
            <Button asChild color="brand">
              <a href={competition.tenupURL} target="_blank" rel="noreferrer">
                Voir sur Tenup
              </a>
            </Button>
          ) : null}
        </div>
      }
      secondCol={<ImagesCarousel images={competition.images} />}
    />
  )
}

type CompetitionProps = {
  competition: Competition
  inversed: boolean
}

export const metadata = {
  title: "Compétition",
  description:
    "Venez participer quel que soit votre âge et votre niveau à des compétitions par équipes en championnats ou en tournois individuellement",
}
