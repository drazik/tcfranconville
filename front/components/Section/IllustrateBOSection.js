import { TwoCol } from "../TwoCol"
import { ImagesCarousel } from "../ImagesCarousel"
import { useApiMedia } from "../../api"
import { SectionColumn } from "./SectionContent"
import { SectionTitle } from "./SectionTitle"

export const IllustratedBOSection = ({
  parts,
  images,
  title,
  subtitle,
  inversed,
}) => {
  const makeMediaUrl = useApiMedia()

  return (
    <TwoCol
      firstCol={
        <div className="space-y-8">
          {title ? (
            <SectionTitle subtitle={subtitle}>{title}</SectionTitle>
          ) : null}
          <SectionColumn parts={parts} />
        </div>
      }
      secondCol={<ImagesCarousel images={images.map(makeMediaUrl)} />}
      inversed={inversed}
    />
  )
}
