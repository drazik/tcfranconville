import { Section } from "../../components/Section"
import { SectionTitle } from "../../components/SectionTitle"
import { Wrapper } from "../../components/Wrapper"
import { TwoCol } from "../../components/TwoCol"
import { Illustration } from "../../components/Illustration"
import kidsIllustration from "../../img/animations/kids.jpg"
import familyIllustration from "../../img/animations/family.jpg"
import adultIllustration from "../../img/animations/adults.jpg"
import { PageHeader } from "../../components/PageHeader"

export default function AnimationsPage() {
  return (
    <>
      <PageHeader
        title={"Animations"}
        description={
          <p>
            Le club de tennis de Franconville vous propose de nombreuses
            animations tout au long de l&apos;année. Se retrouver au sein du
            club, c&apos;est l&apos;occasion de partager sa passion du tennis
            autour de moments conviviaux. Les animations à thèmes sont ouvertes
            à tous : enfants, compétiteurs, parents...
          </p>
        }
      />

      <Section skewed>
        <Wrapper>
          <TwoCol
            firstCol={
              <div className="space-y-6">
                <SectionTitle>Pour les enfants</SectionTitle>
                <div className="prose max-w-none">
                  <p>
                    Grâce à notre équipe pédagogique, les enfants peuvent
                    s&apos;adonner régulièrement à des ateliers, tout en fêtant
                    Noël, la Chandeleur, Pâques, ou autre...
                  </p>
                </div>
              </div>
            }
            secondCol={<Illustration src={kidsIllustration} />}
          />
        </Wrapper>
      </Section>
      <Section skewed variant="light">
        <Wrapper>
          <TwoCol
            firstCol={
              <div className="space-y-6">
                <SectionTitle>Pour la famille</SectionTitle>
                <div className="prose max-w-none">
                  <p>
                    Chaque année, des animations familiales rassemblent petits
                    et grands autour d&apos;une raclette, de la galette des
                    rois, d&apos;un super loto, de la fête du club et bien plus
                    encore...
                  </p>
                </div>
              </div>
            }
            secondCol={<Illustration src={familyIllustration} />}
            inversed
          />
        </Wrapper>
      </Section>
      <Section skewed>
        <Wrapper>
          <TwoCol
            firstCol={
              <div className="space-y-6">
                <SectionTitle>Pour les grands</SectionTitle>
                <div className="prose max-w-none">
                  <p>
                    Des animations adultes sont également programmées de façon
                    spontanée : doubles-surprises, Secret Santa...
                  </p>
                </div>
              </div>
            }
            secondCol={<Illustration src={adultIllustration} />}
          />
        </Wrapper>
      </Section>
    </>
  )
}

export const metadata = {
  title: "Animations",
  description:
    "Le club de tennis de Franconville vous propose de nombreuses animations conviviales tout au long de l'année",
}
