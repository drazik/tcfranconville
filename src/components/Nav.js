import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Match } from '@reach/router'
import { ReactComponent as FBIcon } from '../images/icons/facebook.svg'
import { mq as mqNew } from '../helpers/media-queries'

const BurgerButton = props => {
  const { active, ...rest } = props

  return (
    <button
      css={theme => ({
        position: 'fixed',
        top: 'calc(0.5rem + 50px)',
        left: '5%',
        height: 48,
        width: 48,
        backgroundColor: theme.main,
        padding: 0,
        border: 0,
        transform: 'translateY(-50%)',
        borderRadius: '50%',
        zIndex: 999,
        display: 'block',

        [mqNew('l')]: {
          display: 'none'
        }
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

  const transform = props.isOpen ? 'translateX(0)' : 'translateX(-100%)'

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
        transform: transform,
        transitionProperty: 'transform',
        transitionDuration: '0.25s',
        transitionTimingFunction: 'ease-in-out',
        padding: '6rem 2rem 0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        fontWeight: 'normal',
        paddingBottom: 0,

        [mqNew('l')]: {
          position: 'static',
          width: '100%',
          backgroundColor: 'transparent',
          transform: 'translateX(0)',
          transitionDuration: '0s',
          padding: 0,
          flexDirection: 'row',
          fontWeight: 'bold',
          paddingBottom: '1rem'
        }
      })}
      {...rest}
    >
    </nav>
  )
}

const MenuLink = props => {
  const { isCurrent, ...rest } = props

  const Component = props.href ? 'a' : Link

  return (
    <span
      css={{
        position: 'relative',
        display: 'inline-flex',

        '& + &': {
          marginLeft: 0,

          [mqNew('l')]: {
            marginLeft: '2rem'
          }
        },

        '& + &::before': {
          content: '""',
          display: 'block',
          position: 'absolute',
          top: 0,
          backgroundColor: 'white',
          width: 100,
          height: 1,

          [mqNew('l')]: {
            display: 'none'
          }
        }
      }}
    >
      <Component
        css={theme => ({
          color: 'white',
          fontSize: '1.5rem',
          textTransform: 'uppercase',
          textDecoration: 'none',
          padding: '1rem 0',
          position: 'relative',
          textShadow: 'none',

          [mqNew('l')]: {
            fontSize: '1.25rem',
            textTransform: 'none',
            textShadow: '1px 1px 1px #000'
          },

          '&::after': {
            content: '""',
            display: 'none',
            height: '3px',
            width: '100%',
            backgroundColor: theme.main,
            marginTop: 2,
            [mqNew('l')]: {
              display: isCurrent ? 'block' : 'none'
            }
          }
        })}
        {...rest}
      />
    </span>
  )
}

const MenuLinkExternal = props => {
  return <MenuLink {...props} />
}

const MenuLinkInternal = props => {
  return (
    <Match path={props.to}>
      {({ match }) => (
        <MenuLink
          isCurrent={match}
          {...props}
        />
      )}
    </Match>
  )
}

const MenuItem = props => {
  if (props.href) {
    return <MenuLinkExternal {...props} />
  }

  return <MenuLinkInternal {...props} />
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

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handler = isOpen ? handleClose : handleOpen

  return (
    <>
      <BurgerButton onClick={handler} active={isOpen} />
      <Menu isOpen={isOpen}>
        <MenuItem to="/enseignement" onClick={handleClose}>
          Enseignement
        </MenuItem>
        <MenuItem to="/competition" onClick={handleClose}>
          Compétition
        </MenuItem>
        <MenuItem to="/animation" onClick={handleClose}>
          Animations
        </MenuItem>
        <MenuItem to="/tarifs" onClick={handleClose}>
          Tarifs
        </MenuItem>
        <MenuItem to="/reservation" onClick={handleClose}>
          Réservation
        </MenuItem>
        <MenuItem to="/actualite" onClick={handleClose}>
          Actualité
        </MenuItem>
        <MenuItem to="/contact" onClick={handleClose}>
          Contact
        </MenuItem>
        <MenuItem
          as="a"
          href="https://fr-fr.facebook.com/TCFranconvilleOfficiel/"
          target="_blank"
          css={{
            display: 'block',

            [mqNew('l')]: {
              display: 'none'
            }
          }}
        >
          <FBIcon
            viewBox="0 0 512 512"
            width="32"
            height="32"
            css={{ fill: 'white' }}
          />
        </MenuItem>
      </Menu>
      <Overlay isOpen={isOpen} onClick={handler} />
    </>
  )
}

export default Nav
