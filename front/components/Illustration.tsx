import Image, { type ImageProps } from "next/image"

export function Illustration({ alt = "", src }: IllustrationProps) {
  return (
    <Image
      alt={alt}
      src={src}
      className={"max-w-full rounded-xl shadow-xl mx-auto"}
    />
  )
}

type IllustrationProps = {
  alt?: string
  src: ImageProps["src"]
}
