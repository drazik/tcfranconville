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

  {
    id: "forum-associations-2025",
    dateStart: new Date(2025, 7, 24),
    dateEnd: new Date(2025, 8, 8),
    content: (
      <p>
        Le club sera présent au forum des associations de Franconville le{" "}
        <strong>6 septembre 2025 au CSL</strong>
      </p>
    ),
    cta: {
      label: "Comment venir",
      href: "https://maps.app.goo.gl/hsVcNjt2Qpa6V9MNA",
      target: "_blank",
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
    target?: string
  }
}

export const socials: Array<Social> = [
  {
    href: "https://www.facebook.com/TCFranconvilleOfficiel",
    network: "facebook",
  },
  {
    href: "https://www.instagram.com/tennisclubdefranconville/",
    network: "instagram",
  },
]

export type Social = {
  href: string
  network: SocialNetwork
}

type SocialNetwork = "facebook" | "instagram"
