import React from 'react'
import { Section } from '../components/Section'
import Wrapper from '../components/Wrapper'
import SEO from '../components/seo'
import { PageTitle } from '../components/PageTitle'
import { graphql } from 'gatsby'
import { Stack } from '../components/Stack'
import { ExternalLink } from '../components/ExternalLink'
import { PageDescription } from '../components/PageDescription'
import { Button } from '../components/Button'
import { Post } from '../components/Post'

const ActualitePage = ({ data }) => {
  const posts = data.allFacebookPosts.edges.map(edge => edge.node).filter(post => post.message).slice(0, 10)

  return (
    <>
      <SEO title="Actualité" />
        <Section skewed variant="primary">
          <PageTitle>L'actu du club</PageTitle>
          <PageDescription>
            Votre club bouge. Retrouvez ici les dernières actualités.
          </PageDescription>
        </Section>
      <Section skewed>
        <Wrapper>
          <Stack spacing="xl">
            {posts.map(post => <Post post={post} key={post.id} />)}
            <div css={{ textAlign: 'center' }}>
              <Button
                as={ExternalLink}
                href="https://www.facebook.com/TCFranconvilleOfficiel"
                variant="primary"
              >
                Voir plus d'actualités sur Facebook
              </Button>
            </div>
          </Stack>
        </Wrapper>
      </Section>
    </>
  )
}

export const query = graphql`
  query ActualitePageQuery {
    allFacebookPosts {
      edges {
        node {
          id
          message
          created_time
          permalink_url
          attachments {
            data {
              url
              type
              title
              media {
                image {
                  height
                  src
                  width
                }
              }
            }
          }
        }
      }
    }
  }
`

export default ActualitePage
