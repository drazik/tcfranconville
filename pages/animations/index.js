import { SEO } from "../../components/SEO"
import { Section, SectionTitle } from "../../components/Section"
import { Wrapper } from "../../components/Wrapper"
import { TwoCol } from "../../components/TwoCol"
import { Illustration } from "../../components/Illustration"
import kidsIllustration from "../../img/animations/kids.jpg"
import familyIllustration from "../../img/animations/family.jpg"
import adultIllustration from "../../img/animations/adults.jpg"

export default function AnimationsPage() {
  return (
    <>
      <SEO
        title="Animations"
        description="Le club de tennis de Franconville vous propose de nombreuses animations conviviales tout au long de l'année"
      />
      <Section skewed variant="brand">
        <Wrapper>
          <div className="flex flex-col items-center space-y-6">
            <h1 className="text-3xl font-bold text-white text-shadow-sm">
              Animations
            </h1>
            <p className="text-lg font-semibold text-center">
              Le club de tennis de Franconville vous propose de nombreuses
              animations tout au long de l'année. Se retrouver au sein du club,
              c'est l'occasion de partager sa passion du tennis autour de
              moments conviviaux. Les animations à thèmes sont ouvertes à tous :
              enfants, compétiteurs, parents...
            </p>
          </div>
        </Wrapper>
      </Section>
      <Section skewed>
        <Wrapper>
          <TwoCol
            firstCol={
              <div className="space-y-6">
                <SectionTitle>Pour les enfants</SectionTitle>
                <div className="prose max-w-none">
                  <p>
                    Grâce à notre équipe pédagogique, les enfants peuvent
                    s'adonner régulièrement à des ateliers, tout en fêtant Noël,
                    la Chandeleur, Pâques, ou autre...
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
                    et grands autour d'une raclette, de la galette des rois,
                    d'un super loto, de la fête du club et bien plus encore...
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
