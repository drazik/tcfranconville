import { builder } from "@builder.io/react"

export function init() {
  builder.init(process.env.GATSBY_BUILDERIO_API_KEY)
}
