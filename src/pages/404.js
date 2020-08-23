import React from "react"
import { BuilderComponent } from "@builder.io/react"
import { init } from "../helpers/builderio"

init()

function Dev404() {
  const [notFound, setNotFound] = React.useState(false)

  if (notFound) {
    return <div>No page found for this URL, did you publish it?</div>
  }

  return (
    <BuilderComponent
      model="page"
      contentLoaded={(content) => {
        if (!content) {
          setNotFound(true)
        }
      }}
    >
      <div>No matching page generated, checking builder.io... </div>
    </BuilderComponent>
  )
}

export default Dev404
