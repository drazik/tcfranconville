import { useState, createContext, useContext } from "react"
import { useCarousel } from "../Carousel"
import PropTypes from "prop-types"
import cn from "classnames"

const ImagesCarouselContext = createContext({ hasFocus: false })

export function ImagesCarousel({ images, className, ...props }) {
  const [hasFocus, setHasFocus] = useState(false)

  const length = images.length
  const [active, setActive, previous, next, handlers, style] = useCarousel({
    length,
    interval: null,
  })

  const slides = images.map((image) => (
    <img
      src={image}
      className="object-cover object-center w-full"
      alt=""
      key={image}
    />
  ))

  return (
    <ImagesCarouselContext.Provider value={{ hasFocus }}>
      <div
        className="relative group"
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
      >
        <div className="overflow-hidden rounded-md">
          <div
            className={cn(
              "w-full rounded-md shadow-2xl overflow-hidden",
              className
            )}
            {...props}
          >
            <div
              className="relative flex flex-row flex-no-wrap"
              {...handlers}
              style={{ ...style, touchAction: "pan-x" }}
            >
              {length > 1 ? (
                <div className="w-full">{slides[length - 1]}</div>
              ) : null}
              {slides.map((slide, index) => (
                <div className="w-full" key={index}>
                  {slide}
                </div>
              ))}
              {length > 1 ? <div className="w-full">{slides[0]}</div> : null}
            </div>
          </div>
          {length > 1 ? (
            <>
              <Control direction="left" onClick={previous} className="left-0" />
              <Control direction="right" onClick={next} className="right-0" />
            </>
          ) : null}
        </div>
        <div
          className="absolute left-0 flex justify-center w-full space-x-4"
          style={{ bottom: "-40px" }}
        >
          {slides.map((slide, index) => (
            <button
              type="button"
              className={cn(
                "w-4 h-4 border-2 border-brand rounded-full transform origin-center transition-transform duration-150",
                {
                  "bg-brand scale-100": index === active,
                  "bg-transparent scale-75": index !== active,
                }
              )}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
      </div>
    </ImagesCarouselContext.Provider>
  )
}

ImagesCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
}

function Control({ direction, className, ...props }) {
  const DEFAULT_ANGLE = 35
  const ACTIVE_ANGLE = 25
  const [angle, setAngle] = useState(DEFAULT_ANGLE)

  const { hasFocus } = useContext(ImagesCarouselContext)

  return (
    <button
      className={cn(
        "absolute top-1/2 h-1/2 w-8 bg-black bg-opacity-25 hover:bg-opacity-50 cursor-pointer transition-all duration-300 transform -translate-y-1/2 opacity-0 group-hover:opacity-100",
        { "opacity-100": hasFocus },
        className
      )}
      style={{ "--angle": `${angle}deg` }}
      onMouseDown={() => setAngle(ACTIVE_ANGLE)}
      onMouseUp={() => setAngle(DEFAULT_ANGLE)}
      {...props}
    >
      <ControlArrow direction={direction} />
    </button>
  )
}

Control.propTypes = {
  direction: PropTypes.oneOf(["left", "right"]).isRequired,
  className: PropTypes.string,
}

function ControlArrow({ direction, className, ...props }) {
  return (
    <span className={cn("relative inline-block w-4 h-4", className)} {...props}>
      <ControlArrowPart
        direction={direction}
        style={{ transform: "rotate(calc(var(--angle) * -1))" }}
      />
      <ControlArrowPart
        direction={direction}
        style={{ transform: "rotate(var(--angle))" }}
      />
    </span>
  )
}

ControlArrow.propTypes = {
  direction: Control.propTypes.direction,
  className: PropTypes.string,
}

function ControlArrowPart({ direction, className, style = {}, ...props }) {
  return (
    <span
      className={cn(
        "absolute top-1/2 left-1/2 h-1 w-full bg-white rounded-sm transition-transform duration-150",
        {
          "origin-left": direction === "left",
          "origin-right": direction === "right",
        },
        className
      )}
      style={{ marginTop: "1px", marginLeft: "-50%", ...style }}
      {...props}
    />
  )
}

ControlArrowPart.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  direction: ControlArrow.propTypes.direction,
}
