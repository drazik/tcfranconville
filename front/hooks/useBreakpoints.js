import resolveConfig from "tailwindcss/resolveConfig"
import tailwindConfig from "../tailwind.config.js"
import omit from "lodash/omit"
import mapValues from "lodash/mapValues"
import { useMediaQueries } from "@react-hook/media-query"

const configWithoutPlugins = omit(tailwindConfig, ["plugins"])
const fullConfig = resolveConfig(configWithoutPlugins)

function mkMediaQuery(minWidth) {
  return `screen and (min-width: ${minWidth})`
}

const mediaQueries = mapValues(fullConfig.theme.screens, mkMediaQuery)

export function useBreakpoints() {
  const { matches } = useMediaQueries(mediaQueries)

  return matches
}
