import React from 'react'
import Layout from '../components/Layout'
import SplashImage from '../components/SplashImage'
import { Section, SectionTitle } from '../components/Section'
import Wrapper from '../components/Wrapper'
import Card from '../components/Card'
import Teacher from '../components/Teacher'
import teachingCardBackground from '../images/teaching-card.jpg'
import teachingKidsBackground from '../images/teaching-kids.jpg'
import teachingAdultBackground from '../images/teaching-adult.jpg'
import philippePhoto from '../images/teachers/philippe.jpg'
import benjaminPhoto from '../images/teachers/benjamin.jpg'
import jeanClaudePhoto from '../images/teachers/jean-claude.jpg'
import paulinePhoto from '../images/teachers/pauline.jpg'
import maxencePhoto from '../images/teachers/maxence.jpg'
import rodryckPhoto from '../images/teachers/rodryck.jpg'
import davidPhoto from '../images/teachers/david.jpg'
import carinePhoto from '../images/teachers/carine.jpg'
import { Text } from '../components/Text'
import { Link } from 'gatsby'

const PricesLink = props => {
  const { variant, ...rest } = props

  return (
    <Link
      css={theme => ({
        backgroundColor: variant === 'primary' ? theme.main : 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: variant === 'primary' ? 'white' : theme.main,
        height: '3rem',
        fontSize: '1.25rem',
        zIndex: 5,
        textDecoration: 'none',
        margin: '2rem 0',
        borderRadius: '0.75rem'
      })}
      to="/tarifs"
      {...rest}
    />
  )
}

const EnseignementPage = () => {
  return (
    <Layout>
      <div css={{ position: 'relative' }}>
        <SplashImage height="400px">
          L'enseignement
        </SplashImage>
        <Section padded skewed variant="primary" css={{ zIndex: 4 }}>
          <Wrapper>
            <SectionTitle variant="primary">
              Cours enfants
            </SectionTitle>
            <Text>
              Turpis. Quisque sem. Quisque elementum sapien iaculis augue. In
              dui sem, congue sit amet, feugiat quis, lobortis at, eros.
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum
              vehicula purus. Cum.
            </Text>
            <Text>
              Id turpis. Nam posuere lectus vitae nibh. Etiam tortor orci,
              sagittis malesuada, rhoncus quis, hendrerit eget, libero. Quisque
              commodo nulla at nunc. Mauris consequat, enim vitae venenatis
              sollicitudin, dolor orci bibendum enim, a sagittis nulla nunc quis
              elit. Phasellus augue. Nunc suscipit, magna tincidunt lacinia
              faucibus, lacus tellus ornare purus, a.
            </Text>
            <PricesLink>Voir les tarifs 2019&nbsp;/&nbsp;2020 enfants</PricesLink>
            <Card
              css={{
                backgroundImage: `url(${teachingKidsBackground})`,
                marginBottom: -70
              }}
            />
          </Wrapper>
        </Section>
        <Section padded skewed variant="light" css={{ zIndex: 3, paddingTop: '6rem' }}>
          <Wrapper>
            <SectionTitle>
              Cours jeunes
            </SectionTitle>
            <Text>
              Nunc mi tortor, tristique sit amet, rhoncus porta, malesuada
              elementum, nisi. Integer vitae enim quis risus aliquet gravida.
              Curabitur vel lorem vel erat dapibus lobortis. Donec dignissim
              tellus at arcu. Quisque molestie pulvinar sem.
              Nulla magna neque, ullamcorper tempus, luctus eget, malesuada ut, velit. Morbi
              felis. Praesent in purus at ipsum cursus posuere. Morbi bibendum facilisis
              eros. Phasellus aliquam sapien in erat. Praesent venenatis diam dignissim dui.
              Praesent risus erat, iaculis ac.
            </Text>
            <PricesLink variant="primary">
              Voir les tarifs 2019&nbsp;/&nbsp;2020 jeunes
            </PricesLink>
            <Card
              css={{
                backgroundImage: `url(${teachingCardBackground})`,
                marginBottom: -70
              }}
            />
          </Wrapper>
        </Section>
        <Section padded skewed css={{ zIndex: 2, paddingTop: '6rem' }}>
          <Wrapper>
            <SectionTitle>
              Cours adultes
            </SectionTitle>
            <Text>
              Leo. Ut feugiat. Vivamus urna quam, congue vulputate, convallis
              non, cursus cursus, risus. Quisque aliquet. Donec vulputate egestas
              elit. Morbi dictum, sem sit amet aliquam euismod, odio tortor
              pellentesque odio, ac ultrices enim nibh sed quam. Integer tortor
              velit, condimentum a, vestibulum eget, sagittis nec, neque. Aenean
              est urna, bibendum et, imperdiet at, rhoncus in, arcu. In hac
              habitasse platea dictumst. Vestibulum blandit dignissim dui.
              Maecenas vitae magna non felis ornare consectetuer. Sed lorem. Nam
              leo.
            </Text>
            <PricesLink variant="primary">
              Voir les tarifs 2019&nbsp;/&nbsp;2020 adultes
            </PricesLink>
            <Card
              css={{
                backgroundImage: `url(${teachingAdultBackground})`,
                marginBottom: -70
              }}
            />
          </Wrapper>
        </Section>
      </div>
      <Section padded skewed variant="light" css={{ zIndex: 1, paddingTop: '6rem' }}>
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
