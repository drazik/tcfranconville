import React from "react"
import { graphql } from "gatsby"
import { BuilderComponent } from "@builder.io/react"
import "@builder.io/widgets"
import { init } from "../helpers/builderio"
import "../components/FacebookFeed"

init()

function PageTemplate({ data }) {
  const content =
    data.allBuilderModels.page[0] && data.allBuilderModels.page[0].content

  return <BuilderComponent content={content} />
}

export default PageTemplate

export const pageQuery = graphql`
  query($path: String!) {
    allBuilderModels {
      page(target: { urlPath: $path }, limit: 1, options: { cachebust: true }) {
        content
      }
    }
  }
`
