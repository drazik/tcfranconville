import React from "react"
import { Section } from "../components/Section"
import Wrapper from "../components/Wrapper"
import { Text } from "../components/Text"
import SEO from "../components/seo"
import { PageTitle } from "../components/PageTitle"
import { List, ListItem } from "../components/List"

const CoronavirusReouverturePage = () => {
  return (
    <>
      <SEO title="Réouverture du club" />
      <Section skewed variant="primary">
        <PageTitle>Réouverture du club</PageTitle>
      </Section>
      <Section skewed variant="light">
        <Wrapper>
          <Text>
            A partir du 11 mai, le club réouvre ses portes. Comme vous vous en
            doutez certainement, cette réouverture n'est possible qu'à certaines
            conditions :
          </Text>
          <List>
            <ListItem>...</ListItem>
            <ListItem>...</ListItem>
            <ListItem>...</ListItem>
          </List>
        </Wrapper>
      </Section>
    </>
  )
}

export default CoronavirusReouverturePage
