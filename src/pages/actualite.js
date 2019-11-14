import React from 'react'
import Layout from '../components/Layout'
import { Section } from '../components/Section'
import Wrapper from '../components/Wrapper'
import { Text } from '../components/Text'
import SEO from '../components/seo'
import { PageTitle } from '../components/PageTitle'
import { graphql } from 'gatsby'
import Card from '../components/Card'
import { Stack } from '../components/Stack'
import { parseISO } from 'date-fns'
import { formatDate } from '../helpers/date'

const Post = props => {
  const { post, ...rest } = props

  const message = post.message && post.message.replace(/(?:\r\n|\r|\n)/g, '<br>')
  const date = parseISO(post.created_time)

  return (
    <Card {...rest} component="article">
      <Stack>
        <h1>{formatDate(date, 'dd LLLL Y')}</h1>
        <p dangerouslySetInnerHTML={{ __html: message }} />
      </Stack>
    </Card>
  )
}

const ActualitePage = ({ data }) => {
  const posts = data.allFacebookPosts.edges.map(edge => edge.node)

  return (
    <Layout>
      <SEO title="Actualité" />
        <Section skewed variant="primary">
          <PageTitle>L'actu du club</PageTitle>
        </Section>
      <Section skewed>
        <Wrapper>
          <Stack spacing="l">
            {posts.map(post => <Post post={post} key={post.id} />)}
          </Stack>
        </Wrapper>
      </Section>
    </Layout>
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
