import { Section } from "./Section"
import { SectionTitle } from "./SectionTitle"
import { SectionContent } from "./SectionContent"
import { Wrapper } from "../Wrapper"

export const BOSection = ({ skewed, color, title, content }) => {
  return (
    <Section skewed={skewed} color={color}>
      <Wrapper>
        <div className="space-y-8">
          <SectionTitle>{title}</SectionTitle>
          <SectionContent content={content} />
        </div>
      </Wrapper>
    </Section>
  )
}
