import React, { useState } from 'react'
import { Link } from 'gatsby'
import FacebookIcon from '../images/icons/facebook.svg'

const BurgerButton = props => {
  const { active, ...rest } = props

  return (
    <button
      css={theme => ({
        position: 'fixed',
        top: 'calc(0.5rem + 50px)',
        left: '1rem',
        height: 48,
        width: 48,
        backgroundColor: theme.main,
        padding: 0,
        border: 0,
        transform: 'translateY(-50%)',
        borderRadius: '50%',
        zIndex: 999,
      })}
      {...rest}
    >
      <span
        css={{
          display: 'block',
          top: '50%',
          left: '50%',
          marginTop: -1,
          marginLeft: -12,
          transform: props.active ? 'rotate(45deg)' : 'rotate(0)',

          '&, &::before, &::after': {
            position: 'absolute',
            width: 24,
            height: 2,
            borderRadius: 2,
            backgroundColor: 'white'
          },

          '&::before, &::after': {
            content: '""',
            display: 'block'
          },

          '&::before': {
            top: props.active ? 0 : -6,
            opacity: props.active ? 0 : 1,
          },

          '&::after': {
            bottom: props.active ? 0 : -6,
            transform: props.active ? 'rotate(-90deg)' : 'rotate(0)'
          }
        }}
      />
    </button>
  )
}

const Menu = props => {
  const { isOpen, ...rest } = props

  return (
    <nav
      css={theme => ({
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        width: '80%',
        backgroundColor: theme.main,
        zIndex: 998,
        transform: props.isOpen ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 0.25s ease-in-out',
        padding: '6rem 2rem 0',
        display: 'flex',
        flexDirection: 'column'
      })}
      {...rest}
    >
    </nav>
  )
}

const MenuItem = props => {
  return (
    <Link
      css={{
        color: 'white',
        fontSize: '1.5rem',
        textTransform: 'uppercase',
        textDecoration: 'none',
        padding: '1rem 0',
        position: 'relative',

        '& + &::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          backgroundColor: 'white',
          width: 100,
          height: 1
        }
      }}
      {...props}
    />
  )
}

const Overlay = props => {
  const { isOpen, ...rest } = props

  return (
    <div
      css={{
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        zIndex: 997,
        opacity: props.isOpen ? 1 : 0,
        visibility: props.isOpen ? 'visible' : 'hidden',
        transition: 'opacity 0.25s ease-out, visibility'
      }}
      {...rest}
    />
  )
}

function Nav() {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <BurgerButton onClick={() => setOpen(!isOpen)} active={isOpen} />
      <Menu isOpen={isOpen}>
        <MenuItem to="/">
          Accueil
        </MenuItem>
        <MenuItem to="/">
          Enseignement
        </MenuItem>
        <MenuItem to="/">
          Compétition
        </MenuItem>
        <MenuItem to="/">
          Animations
        </MenuItem>
        <MenuItem to="/">
          Contact
        </MenuItem>
        <MenuItem to="/">
          <FacebookIcon width="32" height="32" css={{ fill: 'white' }} />
        </MenuItem>
      </Menu>
      <Overlay isOpen={isOpen} onClick={() => setOpen(!isOpen)} />
    </>
  )
}

export default Nav
