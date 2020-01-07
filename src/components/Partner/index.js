import React from 'react'
import { Stack } from '../Stack'
import { mq } from '../../helpers/media-queries'

export const Partner = ({ logo, name, description, ...props }) => {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        [mq('m')]: {
          flexDirection: 'row',
        },
      }}
      {...props}
    >
      <img
        src={logo}
        alt={name}
        css={theme => ({
          maxWidth: '100%',
          [mq('m')]: {
            marginRight: theme.spacing * 4,
            flexBasis: 200,
            flexShrink: 0,
          },
        })}
      />
      <div
        css={theme => ({
          marginTop: theme.spacing * 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',

          [mq('m')]: {
            alignItems: 'flex-start',
          },
        })}
      >
        <div
          css={{
            fontSize: '2rem',
            fontWeight: 'bold',
          }}
        >
          {name}
        </div>
        <Stack spacing="m" css={theme => ({ marginTop: theme.spacing * 2 })}>
          {description}
        </Stack>
      </div>
    </div>
  )
}
