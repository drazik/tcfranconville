import React from 'react'
import { Text } from '../Text'
import Card from '../Card'
import { parseISO } from 'date-fns'
import { formatDate } from '../../helpers/date'
import snarkdown from 'snarkdown'
import { mq } from '../../helpers/media-queries'
import { ExternalLink } from '../ExternalLink'
import { Stack } from '../Stack'

const PostHeader = props => {
  const { post, ...rest } = props
  const date = parseISO(post.created_time)

  return (
    <header {...rest}>
      <h1
        css={theme => ({
          margin: 0,

          '&::after': {
            content: '""',
            display: 'block',
            height: 3,
            width: 64,
            backgroundColor: theme.main,
            marginTop: theme.spacing
          }
        })}
      >
        <span>Le {formatDate(date, 'dd LLLL Y')}</span>
        <span
          css={theme => ({
            color: theme.main,
            fontSize: '0.85rem',
            display: 'block',
            marginTop: theme.spacing,

            [mq('m')]: {
              display: 'inline-block',
              marginTop: 0,
              marginLeft: theme.spacing
            }
          })}
        >à {formatDate(date, "HH'h'mm")}</span>
      </h1>
    </header>
  )
}

const PostMessage = props => {
  const { post: { message }, ...rest } = props
  const parsedMessage = snarkdown(message)

  return (
    <Text
      component="div"
      dangerouslySetInnerHTML={{ __html: parsedMessage }}
      {...rest}
    />
  )
}

const PostFooter = props => {
  const { post, ...rest } = props

  return (
    <footer {...rest}>
      <ExternalLink href={post.permalink_url}>Voir sur Facebook</ExternalLink>
    </footer>
  )
}

export const Post = props => {
  const { post, ...rest } = props

  return (
    <Card
      css={theme => ({
        padding: theme.spacing * 2,

        [mq('m')]: {
          padding: theme.spacing * 4
        }
      })}
      {...rest}
      component="article"
    >
      <Stack>
        <PostHeader post={post} />
        <PostMessage post={post} />
        <PostFooter post={post} />
      </Stack>
    </Card>
  )
}
