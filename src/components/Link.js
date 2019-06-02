import React from 'react'
import { Link as BaseLink } from 'gatsby'

const style = theme => ({
  color: theme.main
})
const Link = props => <BaseLink {...props} css={style} />

export default Link
