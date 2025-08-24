export const subscriptionPricings: Array<Pricing> = [
  {
    title: "Adulte",
    pricing: ["283€ + licence", "293€ + licence"],
  },
  {
    title: "Etudiant ou chercheur d'emploi (-25 ans)",
    pricing: "125€ + licence",
  },
  {
    title: "Semaine",
    description: "du lundi au vendredi de 8h à 18h",
    pricing: ["225€ + licence", "235€ + licence"],
  },
  {
    title: "Retraite sportive (ARSF)",
    pricing: "163€ + licence",
  },
  {
    title: "Cotisation parentale",
    description:
      "Venez jouez avec votre enfant autant de fois que vous le souhaitez !",
    pricing: "73€ + licence",
    isHighlighted: true,
  },
  {
    title: "Cotisation Printemps-Été",
    description: "du 1er mars au 31 août",
    pricing: ["183€ + licence", "193€ + licence"],
  },
  {
    title: "Mini-tennis",
    description: "Enfant né entre 2020 et 2022",
    pricing: "55€ + licence",
  },
  {
    title: "Club Junior 1",
    description: "Enfant né entre 2018 et 2019",
    pricing: "85€ + licence",
  },
  {
    title: "Club Junior 2",
    description: "Enfant né entre 2015 et 2017",
    pricing: "100€ + licence",
  },
  {
    title: "Club Ados",
    description: "Enfant né entre 2008 et 2014",
    pricing: "100€ + licence",
  },
]

export type Pricing = {
  title: string
  description?: string
  pricing: string | [string, string]
  isHighlighted?: boolean
}

export const adultLessons: Array<Pricing> = [
  {
    title: "Adultes 1h",
    description: "1h hebdomadaire encadrée par un DE",
    pricing: "309€",
  },
  {
    title: "Adultes 1h30",
    description: "1h30 hebdomadaire encadrée par un DE",
    pricing: "459€",
  },
]

export const childLessons: Array<Pricing> = [
  {
    title: "Mini-tennis",
    description: "1h hebdomadaire",
    pricing: "132€",
  },
  {
    title: "Club Junior Niveau Rouge",
    description: "1h15 hebdomadaire",
    pricing: "190€",
  },
  {
    title: "Club Junior Niveau Orange ou Vert",
    description: "1h30 hebdomadaire",
    pricing: "227€",
  },
  {
    title: "Club Ados débutant",
    description: "1h15 hebdomadaire",
    pricing: "186€",
  },
  {
    title: "Club Ados",
    description: "1h30 hebdomadaire",
    pricing: "267€",
  },
  {
    title: "Cours supplémentaire",
    description: "Sur accord du club",
    pricing: "105 € (1h mini tennis) / 165 € (1h15) / 190 € (1h30)",
  },
]

export const miscellaneous: Array<Pricing> = [
  {
    title: "Réservation d'un terrain par deux non-adhérents du TCF",
    pricing: "20€/h (via Anybuddy)",
  },
  {
    title: "Invitation par un adhérent d'un non-adhérent du TCF",
    pricing: "6€/h",
  },
]

export const discounts = [
  {
    title: "Réduction conjoint",
    content: [
      "Si votre conjoint prend aussi une cotisation annuelle, vous bénéficiez de 80€ de réduction sur la vôtre. Il ne vous reste plus qu'à le/la convaincre.",
    ],
  },
  {
    title: "Réduction enfant",
    content: [
      "Lors de l'inscription d'un enfant, vous bénéficiez d'une réduction de 30€ sur sa cotisation si un autre membre de la famille a déjà souscrit à une cotisation (hors cotisation parentale).",
    ],
  },
  {
    title: "Forfait famillial",
    content: ["À partir de 1350€."],
  },
]
