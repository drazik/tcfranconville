import Markdown from "markdown-to-jsx"
import { Button, ButtonLink } from "../Button"
import cn from "classnames"
import omitBy from "lodash/omitBy"
import * as React from "react"
import { SectionContext } from "./Section"
import { InfoBubble } from "../Icon"

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

export const SectionColumn = ({ parts }) => {
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

  if (part.wysiwyg) {
    return (
      <div className="prose lg:prose-lg max-w-none">
        <Markdown>{part.wysiwyg.content}</Markdown>
      </div>
    )
  }

  if (part.cta) {
    return <CTA url={part.cta.url} label={part.cta.label} />
  }

  if (part.didYouKnow) {
    return (
      <DidYouKnow label={part.didYouKnow.label} cta={part.didYouKnow.cta} />
    )
  }

  console.warn(
    "The SectionPart received a `part` prop without any of these properties: wysiwyg, cta, didYouKnow. Nothing can be rendered",
    partProps
  )

  return null
}

const DidYouKnow = ({ label, cta, className, ...props }) => {
  const r = 50
  const d = 2 * r

  return (
    <div className={cn("relative", className)} {...props}>
      <InfoBubble
        className="absolute w-12 h-12 fill-current text-brand"
        style={{ top: "-10px", left: "-10px" }}
      />
      <div className="relative px-6 pt-16 pb-8 overflow-hidden text-white rounded-xl">
        <div
          className="absolute"
          style={{
            width: d,
            height: d,
            boxShadow: "0 0 0 1000px #1a38b1",
            top: -r,
            left: -r,
            borderRadius: "50%",
          }}
        />
        <div className="relative space-y-4">
          <p className="font-bold text-xl">Le saviez-vous ?</p>
          <div className="prose">
            <p>{label}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const CTA = ({ url, label }) => {
  const { color: sectionColor } = React.useContext(SectionContext)
  const color = sectionColor === "brand" ? "normal" : "brand"

  if (url.match(/^https?:\/\//)) {
    return (
      <Button
        color={color}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        component="a"
      >
        {label}
      </Button>
    )
  }

  return (
    <div className="text-center">
      <ButtonLink href={url} color={color} className="w-full max-w-md">
        {label}
      </ButtonLink>
    </div>
  )
}
