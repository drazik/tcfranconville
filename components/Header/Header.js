import { useState } from "react"
import background from "./background.jpg"
import PropTypes from "prop-types"
import { Wrapper } from "../Wrapper"
import { Logo } from "../Logo"
import Link from "next/link"
import cn from "classnames"

export function Header({ className, style = {}, ...props }) {
  const [open, setOpen] = useState(false)

  return (
    <header
      className={`h-40 bg-center bg-cover flex items-center ${className}`}
      style={{ backgroundImage: `url(${background})`, ...style }}
      {...props}
    >
      <Wrapper className="flex justify-center">
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <MenuButton
          open={open}
          onClick={() => setOpen(!open)}
          className="fixed z-20 transform -translate-y-1/2"
          style={{ top: "5rem", left: `${(1 / 2 / 12) * 100}%` }}
        />
        <Menu open={open} onClose={() => setOpen(false)} />
      </Wrapper>
    </header>
  )
}

Header.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
}

function MenuButton({ className, open, ...props }) {
  return (
    <button
      className={cn("w-12 h-12 rounded-full bg-brand", className)}
      type="button"
      {...props}
    >
      <MenuButtonLine
        className={cn("transition-opacity duration-150", {
          "opacity-0": open,
          "opacity-100": !open,
        })}
        style={{ transform: "translateY(-50%) translateX(-50%)" }}
      />
      <MenuButtonLine
        className="transition-transform duration-150 origin-center"
        style={{
          transform: `translateY(-50%) translateX(-50%) ${
            open ? "rotate(45deg)" : "translateY(-6px)"
          }`,
        }}
      />
      <MenuButtonLine
        className="transition-transform duration-150 origin-center"
        style={{
          transform: ` translateY(-50%) translateX(-50%) ${
            open ? "rotate(-45deg)" : "translateY(6px)"
          }`,
        }}
      />
    </button>
  )
}

MenuButton.propTypes = {
  className: PropTypes.string,
  open: PropTypes.bool.isRequired,
}

function MenuButtonLine({ className, style = {}, ...props }) {
  return (
    <span
      className={cn(
        "absolute w-1/2 bg-white top-1/2 left-1/2 rounded-s",
        className
      )}
      style={{ height: "2px", ...style }}
      {...props}
    />
  )
}

MenuButtonLine.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
}

function Menu({ open, onClose, className, ...props }) {
  return (
    <div
      className={cn("fixed top-0 left-0 z-10 w-full h-screen", className)}
      {...props}
    >
      <div
        className={cn(
          "absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 transition-opacity duration-300",
          { "opacity-100": open, "opacity-0": !open }
        )}
        onClick={onClose}
      />
      <div
        className={cn(
          "absolute top-0 left-0 w-3/4 max-w-sm h-full bg-brand transform transition-transform duration-500",
          { "translate-x-0": open, "-translate-x-full": !open }
        )}
      >
        <div className="h-full overflow-y-auto space-y-8">
          <div className="pt-32 pb-8 space-y-8">
            <MenuLink
              href="/"
              visible={open}
              style={{ transitionDelay: "200ms" }}
            >
              Accueil
            </MenuLink>
            <MenuLink
              href="/"
              style={{ transitionDelay: "300ms" }}
              visible={open}
            >
              Enseignement
            </MenuLink>
            <MenuLink
              href="/"
              style={{ transitionDelay: "400ms" }}
              visible={open}
            >
              Animations
            </MenuLink>
            <MenuLink
              href="/"
              style={{ transitionDelay: "500ms" }}
              visible={open}
            >
              Le club
            </MenuLink>
            <MenuLink
              href="/"
              style={{ transitionDelay: "600ms" }}
              visible={open}
            >
              Tarifs
            </MenuLink>
            <MenuLink
              href="/"
              style={{ transitionDelay: "700ms" }}
              visible={open}
            >
              Réservation
            </MenuLink>
            <MenuLink
              href="/"
              style={{ transitionDelay: "800ms" }}
              visible={open}
            >
              Actualité
            </MenuLink>
          </div>
        </div>
      </div>
    </div>
  )
}

Menu.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  className: PropTypes.string,
}

function MenuLink({ children, className, visible, href, ...props }) {
  return (
    <Link href={href}>
      <a
        className={cn(
          "block text-white uppercase tracking-wide font-semibold text-2xl px-8 transition-all duration-300 transform",
          className,
          {
            "opacity-100 translate-x-0": visible,
            "opacity-0 -translate-x-full": !visible,
          }
        )}
        {...props}
      >
        {children}
      </a>
    </Link>
  )
}

MenuLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}
