import printemps1 from "../../img/competition/championnat-printemps/01.jpg"
import printemps2 from "../../img/competition/championnat-printemps/02.jpg"
import printemps3 from "../../img/competition/championnat-printemps/03.jpg"

import potel1 from "../../img/competition/potel/01.jpg"
import potel2 from "../../img/competition/potel/02.jpg"
import potel3 from "../../img/competition/potel/03.jpg"
import potel4 from "../../img/competition/potel/04.jpg"

import championnat45 from "../../img/competition/championnat-45/01.jpg"

import championnat55 from "../../img/competition/championnat-55/01.jpg"

import open1 from "../../img/competition/open/01.jpg"
import open2 from "../../img/competition/open/02.jpg"
import open3 from "../../img/competition/open/03.jpg"
import open4 from "../../img/competition/open/04.jpg"
import open5 from "../../img/competition/open/05.jpg"

import openSeniorHiver from "../../img/competition/open-senior-hiver/01.jpg"

import openSeniorPlus1 from "../../img/competition/open-senior-plus/01.jpg"
import openSeniorPlus2 from "../../img/competition/open-senior-plus/02.jpg"

import interne1 from "../../img/competition/interne/01.jpg"
import interne2 from "../../img/competition/interne/02.jpg"
import interne3 from "../../img/competition/interne/03.jpg"
import interne4 from "../../img/competition/interne/04.jpg"

import interneCouleur1 from "../../img/competition/interne-couleur/01.jpg"
import interneCouleur2 from "../../img/competition/interne-couleur/02.jpg"

import { type StaticImageData } from "next/image"

export type Competition = {
  title: string
  description: Array<string>
  dates?: { start: Date; end: Date }
  categories?: Array<string>
  tenupURL?: string
  images: Array<StaticImageData>
}

export const individualTournaments: Array<Competition> = [
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
    images: [open1, open2, open3, open4, open5],
  },
  {
    title: "Tournoi Open Seniors Hiver",
    description: [
      "Organisé entre fin novembre et début décembre en semaine. Les matchs ont lieu en journée (premiers matchs à 9h, dernière rotation à 15h), du lundi au vendredi;",
    ],
    dates: { start: new Date(2022, 10, 14), end: new Date(2022, 11, 2) },
    categories: ["Seniors dames", "Seniors messieurs"],
    tenupURL: "https://tenup.fft.fr/tournoi/82337170",
    images: [openSeniorHiver],
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
    images: [openSeniorPlus1, openSeniorPlus2],
  },
  {
    title: "Tournoi interne",
    description: [
      "Au printemps, le tournoi interne permet à tous(tes) les joueurs(eueses) du club de jouer ensemble dans la convivialité et la bonne humeur qui caractérisent le TCF.",
    ],
    categories: [
      "filles/garçons (U12, U16)",
      "dames (senior, +35)",
      "messieurs (senior, +35, +55)",
    ],
    images: [interne1, interne2, interne3, interne4],
  },
  {
    title: "Tournois internes couleurs",
    description: [
      "Une fois par trimestre nos enseignants organisent des tournois par couleurs pour les enfants du club. Les enfants y sont regroupés par niveaux et jouent avec des balles évolutives.",
    ],
    categories: ["blanc", "violet", "rouge", "orange", "vert"],
    images: [interneCouleur1, interneCouleur2],
  },
]

export const teamChampionships: Array<Competition> = [
  {
    title: "Championnat printemps",
    description: [
      "Le TCF présente chaque année 3 équipes messieurs (dont une en excellence régionale), 3 équipes dames (dont une en nationale 3), entre 3 et 6 équipes jeunes (dont 2 de filles) ",
      "Les meilleurs classements senior du TCF en 2019 sont 1/6, 4/6 pour les messieurs; 3/6, 4/6 pour les dames",
    ],
    images: [printemps1, printemps2, printemps3],
  },
  {
    title: "Coupe Potel (championnat 4eme série)",
    description: [
      "Le TCF est l&apos;un des rares clubs du Val d'Oise à présenter 2 équipes dames et 1 équipe messieurs en Potel. Les équipes 1 sont en série 1 et remportent régulièrement le championnat du Val d'Oise.",
    ],
    images: [potel1, potel2, potel3, potel4],
  },
  {
    title: "Championnat +35 ans",
    description: [
      "Le TCF a la chance de pouvoir faire jouer 2 équipes messieurs (dont une en excellence régionale) et 2 équipes dames (dont une est championne du Val d'Oise 2019 et est qualifiée pour le championnat Île de France).",
    ],
    images: [],
  },
  {
    title: "Championnat +45 ans",
    description: [
      "Le TCF a 90% de ses adhérentes qui jouent en équipe, notamment dans 2 équipes Caren +45, dont une est en excellence départementale.",
    ],
    images: [championnat45],
  },
  {
    title: "Championnat +55 ans",
    description: [
      "Les messieurs +55 représentent dignement le TCF, avec une de ses 2 équipes 1/2 finaliste en challenge AFTS 2019.",
    ],
    images: [championnat55],
  },
]
