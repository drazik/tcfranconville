import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledLink = styled(Link)`
  color: ${props => props.theme.main};
`

export default StyledLink
