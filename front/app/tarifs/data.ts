export const subscriptionPricings: Array<Pricing> = [
  {
    title: "Adulte",
    pricing: ["278€ + licence", "288€ + licence"],
  },
  {
    title: "Etudiant ou chercheur d'emploi (-25 ans)",
    pricing: "120€ + licence",
  },
  {
    title: "Semaine",
    description: "du lundi au vendredi de 8h à 18h",
    pricing: ["220€ + licence", "230€ + licence"],
  },
  {
    title: "Retraite sportive (ARSF)",
    pricing: "158€ + licence",
  },
  {
    title: "Cotisation parentale",
    description:
      "Venez jouez avec votre enfant autant de fois que vous le souhaitez !",
    pricing: "68€ + licence",
    isHighlighted: true,
  },
  {
    title: "Cotisation Printemps-Été ",
    description: "du 1er mars au 31 août",
    pricing: ["178€ + licence", "188€ + licence"],
  },
  {
    title: "Mini-tennis",
    description: "2019-2021",
    pricing: "50€ + licence",
  },
  {
    title: "Club junior 1",
    description: "2017-2018",
    pricing: "80€ + licence",
  },
  {
    title: "Club junior 2",
    description: "2014-2016",
    pricing: "100€ + licence",
  },
  {
    title: "Club ados",
    description: "2007-2013",
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
    pricing: "300€",
  },
  {
    title: "Adultes 1h30",
    description: "1h30 hebdomadaire encadrée par un DE",
    pricing: "445€",
  },
]

export const childLessons: Array<Pricing> = [
  {
    title: "Mini-tennis",
    description: "1h",
    pricing: "128€",
  },
  {
    title: "Club Junior Niveau Rouge",
    description: "1h15",
    pricing: "186€",
  },
  {
    title: "Club Junior Niveau Orange ou Vert",
    description: "1h30",
    pricing: "218€",
  },
  {
    title: "Club Ados débutant",
    description: "1h15",
    pricing: "186€",
  },
  {
    title: "Club Ados",
    description: "1h30",
    pricing: "258€",
  },
  {
    title: "Cours supplémentaire",
    description: "Sur accord du club",
    pricing: "100 € (1h mini tennis) / 160 € (1h15) / 185 € (1h30)",
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
    content: ["À partir de 1300€."],
  },
]
