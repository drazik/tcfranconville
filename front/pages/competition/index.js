import { SEO } from "../../components/SEO"
import { Section, SectionTitle } from "../../components/Section"
import { Wrapper } from "../../components/Wrapper"
import { TwoCol } from "../../components/TwoCol"
import { ImagesCarousel } from "../../components/ImagesCarousel"
import importAll from "import-all.macro"
import { Button } from "../../components/Button"
import isAfter from "date-fns/isAfter"

const printempsIllustrations = importAll.sync(
  "../../img/competition/championnat-printemps/*.jpg"
)
const potelIllustrations = importAll.sync("../../img/competition/potel/*.jpg")
const championnat45Illustrations = importAll.sync(
  "../../img/competition/championnat-45/*.jpg"
)
const championnat55Illustrations = importAll.sync(
  "../../img/competition/championnat-55/*.jpg"
)
const openIllustrations = importAll.sync("../../img/competition/open/*.jpg")
const openSeniorHiverIllustrations = importAll.sync(
  "../../img/competition/open-senior-hiver/*.jpg"
)
const openSeniorPlusIllustrations = importAll.sync(
  "../../img/competition/open-senior-plus/*.jpg"
)
const interneIllustrations = importAll.sync(
  "../../img/competition/interne/*.jpg"
)
const interneCouleurIllustrations = importAll.sync(
  "../../img/competition/interne-couleur/*.jpg"
)

const competitions = [
  {
    title: "Tournoi Open",
    description: [
      "Chaque été le club organise son tournoi Open, au mois d'août. De nombreux(ses) joueurs(euses) du club, du département ainsi que de la France entière voire de l'étranger (450 en 2019) y prennent part.",
    ],
    dates: { start: new Date(2021, 7, 7), end: new Date(2021, 7, 22) },
    categories: [
      "simple dames (senior, 35, 45, 55)",
      "simple messieurs (senioor, 35, 45, 55, 60, 65, 70, 75)",
      "filles/garçons (U12, U14, U16, U18)",
    ],
    tenupURL: "https://tenup.fft.fr/tournoi/82240888",
    images: Object.values(openIllustrations),
  },
  {
    title: "Tournoi Open Seniors Hiver",
    description: [
      "Organisé entre fin novembre et début décembre en semaine. Les matchs ont lieu en journée (premiers matchs à 9h, dernière rotation à 15h), du lundi au vendredi;",
    ],
    dates: { start: new Date(2022, 10, 14), end: new Date(2022, 11, 2) },
    categories: ["Seniors dames", "Seniors messieurs"],
    tenupURL: "https://tenup.fft.fr/tournoi/82337170",
    images: Object.values(openSeniorHiverIllustrations),
  },
  {
    title: "Tournoi Open Seniors+",
    description: [
      "Vous avez plus de 55 ans&nbsp;? Venez vous confronter en journée en semaine à des joueurs d'Île de France au club de Franconville au mois de mars et sur terre battue.",
    ],
    dates: { start: new Date(2022, 8, 29), end: new Date(2022, 9, 18) },
    categories: [
      "Dames 55 ans  et 65 ans",
      "Messieurs 60 ans, 65 ans, 70 ans et 75 ans",
    ],
    tenupURL: "https://tenup.fft.fr/tournoi/82337167",
    images: Object.values(openSeniorPlusIllustrations),
  },
  {
    title: "Tournoi interne",
    description: [
      "Au printemps, le tournoi interne permet à tous(tes) les joueurs(eueses) du club de jouer ensemble dans la convivialité et la bonne humeur qui caractérisent le TCF.",
    ],
    dates: null,
    categories: [
      "filles/garçons (U12, U16)",
      "dames (senior, +35)",
      "messieurs (senioor, +35, +55)",
    ],
    tenupURL: null,
    images: Object.values(interneIllustrations),
  },
  {
    title: "Tournois internes couleurs",
    description: [
      "Une fois par trimestre nos enseignants organisent des tournois par couleurs pour les enfants du club. Les enfants y sont regroupés par niveaux et jouent avec des balles évolutives.",
    ],
    dates: null,
    categories: ["blanc", "violet", "rouge", "orange", "vert"],
    tenupURL: null,
    images: Object.values(interneCouleurIllustrations),
  },
]

export default function CompetitionPage() {
  return (
    <>
      <SEO
        title="Compétition"
        description="Venez participer quel que soit votre âge et votre niveau à des compétitions par équipes en championnats ou en tournois individuellement"
      />
      <Section skewed variant="brand">
        <Wrapper>
          <div className="flex flex-col items-center space-y-6">
            <h1 className="text-3xl font-bold text-white text-shadow-sm">
              Compétition
            </h1>
            <p className="text-lg font-semibold text-center">
              Venez participer quel que soit votre âge et votre niveau à des
              compétitions par équipes en championnats ou en tournois
              individuellement
            </p>
          </div>
        </Wrapper>
      </Section>

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
            <TwoCol
              firstCol={
                <div className="space-y-8">
                  <SectionTitle subtitle="Filles / garçons / dames / messieurs">
                    Championnat printemps
                  </SectionTitle>
                  <div className="prose max-w-none">
                    <p>
                      Le TCF présente chaque année 3 équipes messieurs (dont une
                      en excellence régionale), 3 équipes dames (dont une en
                      nationale 3), entre 3 et 6 équipes jeunes (dont 2 de
                      filles)
                    </p>
                    <p>
                      Les meilleurs classements senior du TCF en 2019 sont 1/6,
                      4/6 pour les messieurs; 3/6, 4/6 pour les dames
                    </p>
                  </div>
                </div>
              }
              secondCol={
                <ImagesCarousel
                  images={Object.values(printempsIllustrations).map(
                    getNextImageSrc
                  )}
                />
              }
            />

            <TwoCol
              inversed
              firstCol={
                <div className="space-y-8">
                  <SectionTitle subtitle="Dames / messieurs">
                    Championnat 4ème série
                  </SectionTitle>
                  <div className="prose max-w-none">
                    <p>
                      Le TCF est l'un des rares clubs du Val d'Oise à présenter
                      2 équipes dames et 1 équipe messieurs en Potel. Les
                      équipes 1 sont en série 1 et remportent régulièrement le
                      championnat du Val d'Oise.
                    </p>
                  </div>
                </div>
              }
              secondCol={
                <ImagesCarousel
                  images={Object.values(potelIllustrations).map(
                    getNextImageSrc
                  )}
                />
              }
            />

            <TwoCol
              firstCol={
                <div className="space-y-8">
                  <SectionTitle subtitle="Dames / messieurs">
                    Championnat +35 ans
                  </SectionTitle>
                  <div className="prose max-w-none">
                    <p>
                      Le TCF a la chance de pouvoir faire jouer 2 équipes
                      messieurs (dont une en excellence régionale) et 2 équipes
                      dames (dont une est championne du Val d'Oise 2019 et est
                      qualifiée pour le championnat Île de France).
                    </p>
                  </div>
                </div>
              }
              secondCol={<div />}
            />

            <TwoCol
              inversed
              firstCol={
                <div className="space-y-8">
                  <SectionTitle subtitle="Dames / messieurs">
                    Championnat +45 ans
                  </SectionTitle>
                  <div className="prose max-w-none">
                    <p>
                      Le TCF a 90% de ses adhérentes qui jouent en équipe,
                      notamment dans 2 équipes Caren +45, dont une est en
                      excellence départementale.
                    </p>
                  </div>
                </div>
              }
              secondCol={
                <ImagesCarousel
                  images={Object.values(championnat45Illustrations).map(
                    getNextImageSrc
                  )}
                />
              }
            />

            <TwoCol
              firstCol={
                <div className="space-y-8">
                  <SectionTitle subtitle="Messieurs">
                    Championnat +55 ans
                  </SectionTitle>
                  <div className="prose max-w-none">
                    <p>
                      Les messieurs +55 représentent dignement le TCF, avec une
                      de ses 2 équipes 1/2 finaliste en challenge AFTS 2019.
                    </p>
                  </div>
                </div>
              }
              secondCol={
                <ImagesCarousel
                  images={Object.values(championnat55Illustrations).map(
                    getNextImageSrc
                  )}
                />
              }
            />
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
            {competitions.map((competition, index) => (
              <Competition
                key={competition.name}
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

const getNextImageSrc = (nextImageModule) => nextImageModule.default.src

const Competition = ({ competition, inversed }) => {
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
            <p>Catégories&nbsp;:</p>
            <ul>
              {competition.categories.map((category) => (
                <li key={category}>{category}</li>
              ))}
            </ul>
          </div>
          {competition.tenupURL ? (
            <Button
              component="a"
              href={competition.tenupURL}
              target="_blank"
              rel="noreferrer"
              color="brand"
            >
              Voir sur Tenup
            </Button>
          ) : null}
        </div>
      }
      secondCol={
        <ImagesCarousel images={competition.images.map(getNextImageSrc)} />
      }
    />
  )
}
