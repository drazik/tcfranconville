import React from "react"
import { FacebookProvider, Page } from "react-facebook"
import useSize from "@react-hook/size"
import { Stack } from "../Stack"
import { ExternalLink } from "../ExternalLink"
import { Text } from "../Text"

export const FacebookFeed = (props) => {
  const ref = React.useRef(null)
  const [width] = useSize(ref)

  return (
    <Stack>
      <Text>
        Vous pouvez suivre l'actualité du club sur la page Facebook{" "}
        <ExternalLink href="https://www.facebook.com/TCFranconvilleOfficiel">
          TC Franconville Officiel
        </ExternalLink>
      </Text>
      <div ref={ref}>
        <FacebookProvider appId="2196169050680329" key={width}>
          <Page
            href="https://www.facebook.com/TCFranconvilleOfficiel/"
            tabs="timeline"
            width={width}
          />
        </FacebookProvider>
      </div>
    </Stack>
  )
}
