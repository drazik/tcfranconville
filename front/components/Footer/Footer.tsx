import background from "./background.jpg"
import { Logo } from "../Logo"
import logoFranconville from "./logo-franconville.png"
import { Wrapper } from "../Wrapper"
import Image from "next/image"
import { ReactNode } from "react"
import { socials } from "../../app/data"
import { SocialIcon } from "../SocialIcon"

export function Footer() {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <footer
      className={"relative bg-cover bg-center py-4 bg-fixed"}
      style={{ backgroundImage: `url(${background.src})` }}
    >
      <div className={"absolute inset-0 bg-black/30"} />
      <div className={"relative"}>
        <Wrapper>
          <div className="flex flex-col items-center space-y-6">
            <div className="flex flex-col items-center space-y-4 lg:flex-row lg:space-y-0 lg:space-x-10">
              <Logo />
              <a href="https://www.ville-franconville.fr/" className="w-40">
                <Image src={logoFranconville} alt="Ville de Franconville" />
              </a>
            </div>
            <p className="text-lg font-semibold text-center text-white drop-shadow-lg">
              &copy;&nbsp;Tennis Club Franconville {year}
            </p>

            <div className={"flex gap-6 items-center"}>
              {socials.map(({ href, network }) => (
                <a key={href} href={href} target={"_blank"}>
                  <SocialIcon
                    network={network}
                    className={"w-10 h-10 lg:w-7 lg:h-7 text-white"}
                  />
                </a>
              ))}
            </div>
          </div>
        </Wrapper>
      </div>
    </footer>
  )
}

function Link({ children, href }: LinkProps) {
  return (
    <a
      className={"text-white underline drop-shadow-lg"}
      target="_blank"
      href={href}
    >
      {children}
    </a>
  )
}

type LinkProps = {
  children?: ReactNode
  href: string
}
