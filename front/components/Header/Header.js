"use client"

import { useEffect, useState } from "react"
import background from "./background.jpg"
import PropTypes from "prop-types"
import { Wrapper } from "../Wrapper"
import { Logo } from "../Logo"
import Link from "next/link"
import cn from "classnames"
import { usePathname } from "next/navigation"

export function Header({ className, style = {}, ...props }) {
  const [open, setOpen] = useState(false)

  const items = [
    { href: "/", label: "Accueil" },
    { href: "/enseignement", label: "Enseignement" },
    { href: "/competition", label: "Compétition" },
    { href: "/animations", label: "Animations" },
    { href: "/le-club", label: "Le club" },
    { href: "/tarifs", label: "Tarifs" },
    { href: "/reservation", label: "Réservation" },
    { href: "/actualite", label: "Actualité" },
  ]

  const pathname = usePathname()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={`h-40 bg-center bg-cover flex flex-col justify-center bg-fixed lg:h-64 xl:h-auto py-12 ${className}`}
      style={{ backgroundImage: `url(${background.src})`, ...style }}
      {...props}
    >
      <Wrapper className="flex flex-col items-center space-y-8">
        <Link href="/">
          <Logo />
        </Link>
        <div className="hidden xl:block">
          <LargeMenu items={items} />
        </div>
      </Wrapper>
      <MenuButton
        open={open}
        onClick={() => setOpen(!open)}
        className="fixed z-20 transform -translate-y-1/2 xl:hidden"
        style={{ top: "5rem", left: `${(1 / 2 / 12) * 100}%` }}
      />
      <SmallMenu
        open={open}
        onClose={() => setOpen(false)}
        className="xl:hidden"
        items={items}
      />
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
      className={cn(
        "w-12 h-12 rounded-full shadow-xl transition-all duration-200",
        className,
        {
          "bg-white": open,
          "bg-brand": !open,
        }
      )}
      type="button"
      {...props}
    >
      <MenuButtonLine
        open={open}
        className={cn("transition-opacity duration-300", {
          "opacity-0": open,
          "opacity-100": !open,
        })}
        style={{ transform: "translateY(-50%) translateX(-50%)" }}
      />
      <MenuButtonLine
        open={open}
        className="transition-transform duration-300 origin-center"
        style={{
          transform: `translateY(-50%) translateX(-50%) ${
            open ? "rotate(45deg)" : "translateY(-6px)"
          }`,
        }}
      />
      <MenuButtonLine
        open={open}
        className="transition-transform duration-300 origin-center"
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

function MenuButtonLine({ className, style = {}, open, ...props }) {
  return (
    <span
      className={cn("absolute w-1/2 top-1/2 left-1/2 rounded-s", className, {
        "bg-brand": open,
        "bg-white": !open,
      })}
      style={{ height: "2px", ...style }}
      {...props}
    />
  )
}

MenuButtonLine.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  open: PropTypes.bool.isRequired,
}

function SmallMenu({ open, onClose, className, items, ...props }) {
  return (
    <div
      className={cn(
        "fixed top-0 left-0 z-10 w-full h-screen transition-all duration-500",
        className,
        {
          visible: open,
          invisible: !open,
        }
      )}
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
            {items.map((item, index) => (
              <SmallMenuLink
                key={item.href}
                href={item.href}
                visible={open}
                style={{ transitionDelay: `${100 + index * 100}ms` }}
              >
                {item.label}
              </SmallMenuLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const itemPropType = PropTypes.shape({
  href: PropTypes.string,
  label: PropTypes.string,
})

SmallMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  className: PropTypes.string,
  items: PropTypes.arrayOf(itemPropType).isRequired,
}

function SmallMenuLink({ children, className, visible, href, ...props }) {
  const pathname = usePathname()

  return (
    <Link
      href={href}
      className={cn(
        "block text-white uppercase tracking-wide font-semibold text-2xl px-8 transition-all duration-300 transform",
        className,
        {
          "opacity-100 translate-x-0": visible,
          "opacity-0 -translate-x-full": !visible,
          underline: pathname === href,
        }
      )}
      {...props}
    >
      {children}
    </Link>
  )
}

SmallMenuLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

function LargeMenu({ className, items }) {
  return (
    <nav className={cn("flex space-x-8 w-full justify-center", className)}>
      {items.map((item) => (
        <LargeMenuLink key={item.href} href={item.href}>
          {item.label}
        </LargeMenuLink>
      ))}
    </nav>
  )
}

LargeMenu.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(itemPropType).isRequired,
}

function LargeMenuLink({ href, className, children, ...props }) {
  const pathname = usePathname()
  const isCurrent = pathname === href

  return (
    <Link
      href={href}
      className={cn(
        "text-white font-bold text-xl flex flex-col items-stretch",
        className
      )}
      {...props}
    >
      <span className={"drop-shadow-sm"}>{children}</span>
      <span
        className={cn("h-1 bg-brand transition-opacity duration-200", {
          "opacity-100": isCurrent,
          "opacity-0": !isCurrent,
        })}
      />
    </Link>
  )
}

LargeMenuLink.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
}
