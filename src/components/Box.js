import styled from 'styled-components'

export const Box = styled.div`
  background-color: #fff;
  padding: 1rem 0.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12), 0 1px 2px 0 rgba(0, 0, 0, .24);

  > :first-child {
    margin-top: 0;
  }

  > :last-child {
    margin-bottom: 0;
  }
`

export const LeftBorderedBox = styled(Box)`
  border-left: 2px solid ${props => props.theme.main};
`

export default Box
