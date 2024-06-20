import cn from "classnames"
import background from "./background.jpg"
import { Logo } from "../Logo"
import logoFranconville from "./logo-franconville.png"
import { Wrapper } from "../Wrapper"
import Image from "next/image"

export function Footer({ className, style, ...props }) {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <footer
      className={cn("bg-cover bg-center py-4 bg-fixed", className)}
      style={{ backgroundImage: `url(${background.src})`, ...style }}
      {...props}
    >
      <Wrapper className="flex flex-col items-center space-y-6">
        <div className="flex flex-col items-center space-y-4 lg:flex-row lg:space-y-0 lg:space-x-10">
          <Logo />
          <a href="https://www.ville-franconville.fr/" className="w-40">
            <Image src={logoFranconville} alt="Ville de Franconville" />
          </a>
        </div>
        <p className="text-lg font-semibold text-center text-white drop-shadow-lg">
          &copy;&nbsp;Tennis Club Franconville {year}
        </p>
        <div className="flex flex-col items-center space-y-2">
          <Link href="http://www.gs.applipub-fft.fr/fftfr/frameset.do?dispatch=load">
            Gestion Sportive
          </Link>
          <Link href="http://www.comite.fft.fr/val-d-oise/val-d-oise_a/cms/index_public.php?us_action=show_note_site&login_off=1&ui_id_site=1">
            Comité du Val d'Oise
          </Link>
          <Link href="https://tenup.fft.fr/">TenUp</Link>
        </div>
      </Wrapper>
    </footer>
  )
}

function Link({ className, ...props }) {
  return (
    <a
      className={cn("text-white underline drop-shadow-lg", className)}
      target="_blank"
      {...props}
    />
  )
}
