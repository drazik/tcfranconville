// import styled from '@emotion/styled'
import React from 'react'
import logo from '../images/logo-tcf.png'

// const Logo = styled.span`
//   display: inline-block;
//   width: ${props => props.size}px;
//   height: ${props => props.size}px;
//   background-color: white;
//   position: relative;
//   border-radius: 50%;
//   border: 2px solid ${props => props.theme.main};

//   &::before {
//     content: '';
//     position: absolute;
//     top: 3px;
//     bottom: 3px;
//     left: 3px;
//     right: 3px;
//     background-image: url(${logo});
//     background-size: contain;
//     background-position: center;
//     background-repeat: no-repeat;
//   }
// `

export const Logo = props => {
  return (
    <div
      css={theme => ({
        backgroundColor: 'white',
        borderRadius: '50%',
        padding: 5,
        border: `2px solid ${theme.main}`,
      })}
    >
      <img
        src={logo}
        alt="TC Franconville"
        css={{
          width: props.size,
          height: props.size,
          verticalAlign: 'middle',
        }}
      />
    </div>
  )
}

Logo.defaultProps = {
  size: 100,
}
