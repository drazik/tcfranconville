import React from 'react'
import Layout from '../components/Layout'
import SplashImage from '../components/SplashImage'
import { Section, SectionTitle } from '../components/Section'
import Wrapper from '../components/Wrapper'
import Card from '../components/Card'
import Teacher from '../components/Teacher'
import teachingCardBackground from '../images/teaching-card.jpg'
import philippePhoto from '../images/teachers/philippe.jpg'
import benjaminPhoto from '../images/teachers/benjamin.jpg'
import jeanClaudePhoto from '../images/teachers/jean-claude.jpg'
import paulinePhoto from '../images/teachers/pauline.jpg'
import maxencePhoto from '../images/teachers/maxence.jpg'
import rodryckPhoto from '../images/teachers/rodryck.jpg'
import davidPhoto from '../images/teachers/david.jpg'
import carinePhoto from '../images/teachers/carine.jpg'

const EnseignementPage = () => {
  return (
    <Layout>
      <SplashImage height="400px">
        L'enseignement
      </SplashImage>
      <Section padded skewed variant="primary">
        <Wrapper>
          <SectionTitle variant="primary">
            Cours enfants
          </SectionTitle>
          <p>
            Dès 3 ans...
          </p>
          <Card
            css={{ backgroundImage: `url(${teachingCardBackground})` }}
          />
        </Wrapper>
      </Section>
      <Section padded variant="light">
        <Wrapper>
          <SectionTitle>
            Cours ados
          </SectionTitle>
          <p>
            Dès 10 ans...
          </p>
          <Card
            css={{ backgroundImage: `url(${teachingCardBackground})` }}
          />
        </Wrapper>
      </Section>
      <Section padded skewed>
        <Wrapper>
          <SectionTitle>
            Cours adultes
          </SectionTitle>
          <p>
            Les parents aussi...
          </p>
          <Card
            css={{ backgroundImage: `url(${teachingCardBackground})` }}
          />
        </Wrapper>
      </Section>
      <Section padded variant="light">
        <Wrapper>
          <SectionTitle>
            Les enseignants
          </SectionTitle>
          <Teacher
            name="Philippe Pieyre de Mandiargues"
            description="D.E. Directeur sportif"
            photo={philippePhoto}
          />
          <Teacher
            name="Carine Guyard"
            description="D.E."
            photo={carinePhoto}
          />
          <Teacher
            name="David Gelsonimo"
            description="D.E."
            photo={davidPhoto}
          />
          <Teacher
            name="Rodryck Cazenave"
            description="D.E. en formation"
            photo={rodryckPhoto}
          />
          <Teacher
            name="Benjamin Noury"
            description="A.M.T."
            photo={benjaminPhoto}
          />
          <Teacher
            name="Jean-Claude Pastrans"
            description="A.M.T."
            photo={jeanClaudePhoto}
          />
          <Teacher
            name="Pauline Dubois"
            description="Initiatrice"
            photo={paulinePhoto}
          />
          <Teacher
            name="Maxence Patrignani"
            description="Initiateur"
            photo={maxencePhoto}
          />
        </Wrapper>
      </Section>
    </Layout>
  )
}

export default EnseignementPage
