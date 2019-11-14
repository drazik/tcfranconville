import React from 'react'
import { mq } from '../../helpers/media-queries'
import PropTypes from 'prop-types'

export const TwoCol = props => {
  const { reversed = false, ...rest } = props

  return (
    <div
      css={theme => ({
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridAutoFlow: 'column',
        gridGap: theme.spacing * 6,

        [mq('m')]: {
          gridTemplateColumns: 'repeat(2, 1fr)',
          direction: reversed ? 'rtl' : 'ltr',

          '> *': {
            direction: 'ltr'
          }
        }
      })}
      {...rest}
    />
  )
}

TwoCol.propTypes = {
  reversed: PropTypes.bool
}
