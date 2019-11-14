import React from 'react'
import { mq } from '../../helpers/media-queries'

export const TwoCol = props => {
  return (
    <div
      css={theme => ({
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridGap: theme.spacing * 6,

        [mq('m')]: {
          gridTemplateColumns: 'repeat(2, 1fr)'
        }
      })}
      {...props}
    />
  )
}
