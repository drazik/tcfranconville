import type { ReactNode } from "react"
import { Section } from "./Section"
import { Wrapper } from "./Wrapper"

export function PageHeader({ title, description, cta }: PageHeaderProps) {
  return (
    <Section skewed variant="brand">
      <Wrapper>
        <div className="flex flex-col items-center gap-y-6">
          <h1 className="text-3xl font-bold text-white text-center">{title}</h1>

          {description ? (
            <div className={"prose lg:prose-lg"}>{description}</div>
          ) : null}

          {cta ? <div className={"flex justify-center"}>{cta}</div> : null}
        </div>
      </Wrapper>
    </Section>
  )
}

type PageHeaderProps = {
  title: string
  description?: ReactNode
  cta?: ReactNode
}
