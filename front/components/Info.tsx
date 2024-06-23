import { Icon } from "../components/Icon"
import { ReactNode } from "react"

export function Info({ children, title = "Le saviez-vous ?" }: InfoProps) {
  const r = 50
  const d = 2 * r

  return (
    <div className={"relative"}>
      <Icon
        name={"info-bubble"}
        className={"w-12 h-12 absolute fill-current text-brand"}
        style={{ top: "-10px", left: "-10px" }}
      />
      <div className="relative px-6 pt-16 pb-8 overflow-hidden text-white rounded-xl">
        <div
          className="absolute"
          style={{
            width: d,
            height: d,
            boxShadow: "0 0 0 1000px #1a38b1",
            top: -r,
            left: -r,
            borderRadius: "50%",
            zIndex: "-1",
          }}
        />
        <p
          className="absolute font-bold transform -translate-y-1/2"
          style={{ top: "25px", left: "calc(50px + 1rem)" }}
        >
          {title}
        </p>
        {children}
      </div>
    </div>
  )
}

type InfoProps = {
  children: ReactNode
  title?: string
}
