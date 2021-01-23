import { Section } from "./Section"
import { SectionTitle } from "./SectionTitle"
import { SectionContent } from "./SectionContent"

export const BOSection = ({ skewed, color, title, content }) => {
  return (
    <Section skewed={skewed} color={color}>
      <div className="space-y-8">
        {title ? <SectionTitle>{title}</SectionTitle> : null}
        <SectionContent content={content} />
      </div>
    </Section>
  )
}
