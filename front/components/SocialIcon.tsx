import { match } from "ts-pattern"
import { Social } from "../app/data"
import { FaFacebook, FaInstagram } from "react-icons/fa6"

export function SocialIcon({ network, className }: SocialIconProps) {
  const Component = match(network)
    .with("facebook", () => FaFacebook)
    .with("instagram", () => FaInstagram)
    .exhaustive()

  return <Component className={className} />
}

type SocialIconProps = {
  network: Social["network"]
  className?: string
}
