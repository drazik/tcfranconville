import Markdown from "markdown-to-jsx"
import { ButtonLink } from "../Button"
import cn from "classnames"
import omitBy from "lodash/omitBy"
import * as React from "react"
import { SectionContext } from "./Section"

export const SectionContent = ({ content }) => {
  return (
    <div
      className={cn("grid grid-cols-1 gap-8", {
        "md:grid-cols-1": content.columns.length === 1,
        "md:grid-cols-2": content.columns.length === 2,
        "md:grid-cols-3": content.columns.length === 3,
        "md:grid-cols-4": content.columns.length === 4,
      })}
    >
      {content.columns.map((column) => (
        <SectionColumn key={column.id} parts={column.parts} />
      ))}
    </div>
  )
}

const SectionColumn = ({ parts }) => {
  return (
    <div className="space-y-4">
      {parts.map((part) => (
        <SectionPart key={part.id} part={part} />
      ))}
    </div>
  )
}

const SectionPart = ({ part: partProps }) => {
  const part = omitBy(partProps, (value) => value === null)
  const { color: sectionColor } = React.useContext(SectionContext)

  if (part.wysiwyg) {
    return (
      <div className="prose lg:prose-lg">
        <Markdown>{part.wysiwyg.content}</Markdown>
      </div>
    )
  }

  if (part.cta) {
    return (
      <div className="text-center">
        <ButtonLink
          href={part.cta.url}
          color={sectionColor === "brand" ? "normal" : "brand"}
          className="w-full max-w-md"
        >
          {part.cta.label}
        </ButtonLink>
      </div>
    )
  }

  if (part.didYouKnow) {
    return <div>didYouKnow TO IMPLEMENT</div>
  }

  console.warn(
    "The SectionPart received a `part` prop without any of these properties: wysiwyg, cta, didYouKnow. Nothing can be rendered",
    partProps
  )

  return null
}
