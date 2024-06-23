import type { ReactNode } from "react"

export const infoBanners: Array<InfoBanner> = [
  {
    id: "permanence-2024-07-06",
    dateStart: new Date(2024, 5, 17),
    dateEnd: new Date(2024, 6, 7),
    content: (
      <p>
        <strong>Inscriptions 2024-2025&nbsp;:</strong> une permanence dédiée aux
        inscriptions aura lieu le{" "}
        <strong>samedi 6 juillet 2024 de 10h à 13h</strong>
      </p>
    ),
    cta: {
      label: "Venir au club",
      href: "/le-club#contact",
    },
  },
]

type InfoBanner = {
  id: string
  dateStart: Date
  dateEnd: Date
  content: ReactNode
  cta?: {
    label: string
    href: string
  }
}
