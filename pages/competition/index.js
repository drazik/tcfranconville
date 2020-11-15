import { SEO } from "../../components/SEO"
import { Section, SectionTitle } from "../../components/Section"
import { Wrapper } from "../../components/Wrapper"
import { TwoCol } from "../../components/TwoCol"
import { ImagesCarousel } from "../../components/ImagesCarousel"
import importAll from "import-all.macro"
import { Button } from "../../components/Button"

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
                  images={Object.values(printempsIllustrations)}
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
                <ImagesCarousel images={Object.values(potelIllustrations)} />
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
                  images={Object.values(championnat45Illustrations)}
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
                  images={Object.values(championnat55Illustrations)}
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
            <TwoCol
              firstCol={
                <div className="space-y-8">
                  <SectionTitle>Tournoi Open</SectionTitle>
                  <div className="prose max-w-none">
                    <p>
                      Chaque été le club organise son tournoi Open, au mois
                      d'août. De nombreux(ses) joueurs(euses) du club, du
                      département ainsi que de la France entière voire de
                      l'étranger (450 en 2019) y prennent part.
                    </p>
                    <p>
                      Catégories&nbsp;: simple dames (senior, 35, 45, 55),
                      simples messieurs (senior, 35, 45, 55, 60, 65, 70,
                      75)&nbsp;; filles/garçons (U12, U14, U16, U18)
                    </p>
                    <p>
                      La 39ème édition du tournoi Open du TCF aura lieu du 7
                      août au 22 août 2021.
                    </p>
                  </div>
                  <Button
                    component="a"
                    href="https://tenup.fft.fr/tournoi/82240888"
                    target="_blank"
                    rel="noreferrer"
                    color="brand"
                  >
                    Voir sur Tenup
                  </Button>
                </div>
              }
              secondCol={
                <ImagesCarousel images={Object.values(openIllustrations)} />
              }
            />

            <TwoCol
              inversed
              firstCol={
                <div className="space-y-8">
                  <SectionTitle>Tournoi Open Seniors Hiver</SectionTitle>
                  <div className="prose max-w-none">
                    <p>
                      Organisé entre fin novembre et début décembre en semaine.
                      Les matchs ont lieu en journée (premiers matchs à 9h,
                      dernière rotation à 15h), du lundi au vendredi;
                    </p>
                    <p>
                      Prochaine édition du 16 novembre au vendredi 4 décembre
                      2020
                    </p>
                    <p>Catégories&nbsp;:</p>
                    <ul>
                      <li>Seniors dames</li>
                      <li>Seniors messieurs</li>
                    </ul>
                  </div>
                  <Button
                    component="a"
                    href="https://tenup.fft.fr/tournoi/82240880"
                    target="_blank"
                    rel="noreferrer"
                    color="brand"
                  >
                    Voir sur Tenup
                  </Button>
                </div>
              }
              secondCol={
                <ImagesCarousel
                  images={Object.values(openSeniorHiverIllustrations)}
                />
              }
            />

            <TwoCol
              firstCol={
                <div className="space-y-8">
                  <SectionTitle>Tournoi Open Séniors+</SectionTitle>
                  <div className="prose max-w-none">
                    <p>
                      Vous avez plus de 55 ans&nbsp;? Venez vous confronter en
                      journée en semaine à des joueurs d'Île de France au club
                      de Franconville au mois de mars et sur terre battue.
                    </p>
                    <p>Prochaine édition du 29 mars au 16 avril 2021</p>
                    <p>Catégories&nbsp;:</p>
                    <ul>
                      <li>Dames 55 ans et 65 ans</li>
                      <li>Messieurs 60 ans, 65 ans, 70 ans et 75 ans</li>
                    </ul>
                  </div>
                  <Button
                    component="a"
                    href="https://tenup.fft.fr/tournoi/82240865"
                    target="_blank"
                    rel="noreferrer"
                    color="brand"
                  >
                    Voir sur Tenup
                  </Button>
                </div>
              }
              secondCol={
                <ImagesCarousel
                  images={Object.values(openSeniorPlusIllustrations)}
                />
              }
            />

            <TwoCol
              inversed
              firstCol={
                <div className="space-y-8">
                  <SectionTitle>Tournoi interne</SectionTitle>
                  <div className="prose max-w-none">
                    <p>
                      Au printemps, le tournoi interne permet à tous(tes) les
                      joueurs(eueses) du club de jouer ensemble dans la
                      convivialité et la bonne humeur qui caractérisent le TCF.
                    </p>
                    <p>
                      Catégories&nbsp;: filles/garçons (U12, U16), dames
                      (senior, +35), messieurs (senior, +35, +55)
                    </p>
                    <p>
                      Les adhérents du TCF peuvent également se confronter en
                      double à cette occasion (mixtes, dames et messieurs).
                    </p>
                  </div>
                </div>
              }
              secondCol={
                <ImagesCarousel images={Object.values(interneIllustrations)} />
              }
            />

            <TwoCol
              firstCol={
                <div className="space-y-8">
                  <SectionTitle>Tournois internes couleur</SectionTitle>
                  <div className="prose max-w-none">
                    <p>
                      Une fois par trimestre nos enseignants organisent des
                      tournois par couleurs pour les enfants du club. Les
                      enfants y sont regroupés par niveaux et jouent avec des
                      balles évolutives.
                    </p>
                    <p>Catégories&nbsp;: blanc, violet, rouge, orange, vert</p>
                  </div>
                </div>
              }
              secondCol={
                <ImagesCarousel
                  images={Object.values(interneCouleurIllustrations)}
                />
              }
            />
          </div>
        </Wrapper>
      </Section>
    </>
  )
}
