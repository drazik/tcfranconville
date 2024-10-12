"use client"

import { type CSSProperties, type ReactNode, useEffect, useState } from "react"
import background from "./background.jpg"
import { Wrapper } from "../Wrapper"
import { Logo } from "../Logo"
import Link from "next/link"
import cn from "classnames"
import { usePathname } from "next/navigation"
import { FaFacebook, FaInstagram } from "react-icons/fa6"
import { match } from "ts-pattern"

export function Header() {
  const [open, setOpen] = useState(false)

  const pathname = usePathname()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={`h-40 bg-center bg-cover flex flex-col justify-center bg-fixed lg:h-64 xl:h-auto py-12`}
      style={{ backgroundImage: `url(${background.src})` }}
    >
      <Wrapper>
        <div className="flex flex-col items-center space-y-8">
          <Link href="/">
            <Logo />
          </Link>
          <div className="hidden xl:block">
            <LargeMenu items={items} socials={socials} />
          </div>
        </div>
      </Wrapper>
      <div
        className="fixed z-30 transform -translate-y-1/2 xl:hidden"
        style={{ top: "5rem", left: `${(1 / 2 / 12) * 100}%` }}
      >
        <MenuButton open={open} onClick={() => setOpen(!open)} />
      </div>
      <SmallMenu
        open={open}
        onClose={() => setOpen(false)}
        items={items}
        socials={socials}
      />
    </header>
  )
}

const items = [
  { href: "/", label: "Accueil" },
  { href: "/enseignement", label: "Enseignement" },
  { href: "/competition", label: "Compétition" },
  { href: "/animations", label: "Animations" },
  { href: "/le-club", label: "Le club" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/reservation", label: "Réservation" },
]

const socials = [
  {
    href: "https://www.facebook.com/TCFranconvilleOfficiel",
    network: "facebook",
  },
  {
    href: "https://www.instagram.com/tennisclubdefranconville/",
    network: "instagram",
  },
]

function MenuButton({ open, onClick }: MenuButtonProps) {
  return (
    <button
      className={cn(
        "w-12 h-12 rounded-full shadow-xl transition-all duration-200",
        {
          "bg-white": open,
          "bg-brand": !open,
        }
      )}
      type="button"
      onClick={onClick}
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

type MenuButtonProps = {
  open: boolean
  onClick: () => void
}

function MenuButtonLine({ className, style = {}, open }: MenuButtonLineProps) {
  return (
    <span
      className={cn("absolute w-1/2 top-1/2 left-1/2 rounded-s", className, {
        "bg-brand": open,
        "bg-white": !open,
      })}
      style={{ height: "2px", ...style }}
    />
  )
}

type MenuButtonLineProps = {
  open: boolean
  className?: string
  style?: CSSProperties
}

function SmallMenu({ open, onClose, items, socials }: SmallMenuProps) {
  return (
    <div
      className={cn(
        "xl:hidden fixed top-0 left-0 z-20 w-full h-screen transition-all duration-500",
        {
          visible: open,
          invisible: !open,
        }
      )}
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
              <div
                className={cn("transition-all transform", {
                  "opacity-100 translate-x-0 duration-300": open,
                  "opacity-0 -translate-x-full": !open,
                })}
                style={{
                  transitionDelay: open ? `${100 + index * 100}ms` : undefined,
                }}
                key={item.href}
              >
                <SmallMenuLink href={item.href}>{item.label}</SmallMenuLink>
              </div>
            ))}

            <div
              className={cn("px-8 flex gap-7 transition-opacity", {
                "opacity-100 duration-300": open,
                "opacity-0": !open,
              })}
              style={{
                transitionDelay: open
                  ? `${300 + items.length * 100}ms`
                  : undefined,
              }}
            >
              {socials.map(({ href, network }) => (
                <SocialLink key={href} href={href} network={network} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

type SmallMenuProps = {
  items: typeof items
  socials: typeof socials
  open: boolean
  onClose: () => void
}

function SmallMenuLink({ children, href }: SmallMenuLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={cn(
        "block text-white uppercase tracking-wide font-semibold text-2xl px-8",
        {
          underline: isActive,
        }
      )}
    >
      {children}
    </Link>
  )
}

type SmallMenuLinkProps = {
  children: ReactNode
  href: string
}

function LargeMenu({ items, socials }: LargeMenuProps) {
  return (
    <nav className={"flex space-x-8 w-full justify-center items-center"}>
      {items.map((item) => (
        <LargeMenuLink key={item.href} href={item.href}>
          {item.label}
        </LargeMenuLink>
      ))}

      {socials.map(({ href, network }) => (
        <SocialLink key={href} href={href} network={network} />
      ))}
    </nav>
  )
}

type LargeMenuProps = {
  items: typeof items
  socials: typeof socials
}

function LargeMenuLink({ href, children }: LargeMenuLinkProps) {
  const pathname = usePathname()
  const isCurrent = pathname === href

  return (
    <Link
      href={href}
      className={cn("text-white font-bold text-xl flex flex-col items-stretch")}
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

type LargeMenuLinkProps = {
  href: string
  children: ReactNode
}

function SocialLink({ href, network }: SocialLinkProps) {
  const IconComponent = match(network)
    .with("facebook", () => FaFacebook)
    .with("instagram", () => FaInstagram)
    .otherwise(() => null)

  if (!IconComponent) {
    return null
  }

  return (
    <a href={href} target={"_blank"}>
      {<IconComponent className={"w-7 h-7 text-white"} />}
    </a>
  )
}

type SocialLinkProps = {
  href: string
  network: string
}
