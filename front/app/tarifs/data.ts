export const subscriptionPricings: Array<Pricing> = [
  {
    title: "Adulte",
    pricing: ["290€ + licence", "300€ + licence"],
  },
  {
    title: "Etudiant ou chercheur d'emploi (-25 ans)",
    pricing: "130€ + licence",
  },
  {
    title: "Semaine",
    description: "du lundi au vendredi de 7h à 17h",
    pricing: ["232€ + licence", "242€ + licence"],
  },
  {
    title: "Retraite sportive (ARSF)",
    pricing: "172€ + licence",
  },
  {
    title: "Cotisation parentale",
    description:
      "Venez jouez avec votre enfant autant de fois que vous le souhaitez !",
    pricing: "77€ + licence",
    isHighlighted: true,
  },
  {
    title: "Cotisation Printemps-Été",
    description: "du 1er mars au 31 août",
    pricing: ["192€ + licence", "202€ + licence"],
  },
  {
    title: "Mini-tennis",
    description: "Enfant né entre 2021 et 2023",
    pricing: "60€ + licence",
  },
  {
    title: "Club Junior",
    description: "Enfant né entre 2016 et 2020",
    pricing: "100€ + licence",
  },
  {
    title: "Club Ados",
    description: "Enfant né entre 2009 et 2015",
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
    pricing: "317€",
  },
  {
    title: "Adultes 1h30",
    description: "1h30 hebdomadaire encadrée par un DE",
    pricing: "472€",
  },
]

export const childLessons: Array<Pricing> = [
  {
    title: "Mini-tennis",
    description: "1h hebdomadaire",
    pricing: "137€",
  },
  {
    title: "Club Junior 1",
    description: "2019-2020; 1h15 hebdomadaire",
    pricing: "187€",
  },
  {
    title: "Club Junior 2 - 1h15",
    description: "2016-2018; 1h15 hebdomadaire",
    pricing: "212€",
  },
  {
    title: "Club Junior 2 - 1h30",
    description: "2016-2018; 1h30 hebdomadaire",
    pricing: "242€",
  },
  {
    title: "Club Ados débutant",
    description: "1h15 hebdomadaire",
    pricing: "212€",
  },
  {
    title: "Club Ados",
    description: "1h30 hebdomadaire",
    pricing: "282€",
  },
  {
    title: "Cours supplémentaire",
    description: "Sur accord du club",
    pricing: "170 € (1h15) / 195 € (1h30)",
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
