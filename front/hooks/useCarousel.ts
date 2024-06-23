import { useReducer, useEffect, Dispatch, CSSProperties } from "react"
import { SwipeEventData, useSwipeable } from "react-swipeable"

function previous(length: number, current: number) {
  return (current - 1 + length) % length
}

function next(length: number, current: number) {
  return (current + 1) % length
}

function threshold(target: HTMLElement) {
  const width = target.clientWidth
  return width / 3
}

const transitionTime = 400
const elastic = `transform ${transitionTime}ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`
const smooth = `transform ${transitionTime}ms ease`

const initialCarouselState = {
  offset: 0,
  desired: 0,
  active: 0,
}

type State = typeof initialCarouselState

type Action =
  | { type: "jump"; desired: number }
  | { type: "next"; length: number }
  | { type: "prev"; length: number }
  | { type: "done" }
  | { type: "drag"; offset: number }

function carouselReducer(state: State, action: Action) {
  switch (action.type) {
    case "jump":
      return {
        ...state,
        desired: action.desired,
      }

    case "next":
      return {
        ...state,
        desired: next(action.length, state.active),
      }

    case "prev":
      return {
        ...state,
        desired: previous(action.length, state.active),
      }

    case "done":
      return {
        ...state,
        offset: NaN,
        active: state.desired,
      }

    case "drag":
      return {
        ...state,
        offset: action.offset,
      }

    default:
      return state
  }
}

function swiped(
  e: SwipeEventData,
  dispatch: Dispatch<Action>,
  length: number,
  dir: number
) {
  const t = threshold(e.event.target as HTMLElement)
  const d = dir * -e.deltaX

  if (d >= t) {
    dispatch({
      type: dir > 0 ? "next" : "prev",
      length,
    })
  } else {
    dispatch({
      type: "drag",
      offset: 0,
    })
  }
}

export function useCarousel({ length, interval }: UseCarouselProps) {
  const [state, dispatch] = useReducer(carouselReducer, initialCarouselState)
  const handlers = useSwipeable({
    onSwiping(e) {
      dispatch({
        type: "drag",
        offset: e.deltaX,
      })
    },

    onSwipedLeft(e) {
      swiped(e, dispatch, length, 1)
    },

    onSwipedRight(e) {
      swiped(e, dispatch, length, -1)
    },

    trackMouse: false,
    trackTouch: true,
  })

  useEffect(() => {
    if (interval) {
      const id = setTimeout(() => dispatch({ type: "next", length }), interval)
      return () => clearTimeout(id)
    }
  }, [state.offset, state.active, interval, length])

  useEffect(() => {
    const id = setTimeout(() => dispatch({ type: "done" }), transitionTime)
    return () => clearTimeout(id)
  }, [state.desired])

  const style: CSSProperties = {
    transform: `translateX(0)`,
    width: length > 1 ? `${100 * (length + 2)}%` : "100%",
    left: length > 1 ? `-${(state.active + 1) * 100}%` : "0",
  }

  if (state.desired !== state.active) {
    const dist = Math.abs(state.active - state.desired)
    const pref = Math.sign(state.offset || 0)
    const dir =
      (dist > length / 2 ? 1 : -1) * Math.sign(state.desired - state.active)
    const shift = (100 * (pref || dir)) / (length + 2)
    style.transition = smooth
    style.transform = `translateX(${shift}%)`
  } else if (!isNaN(state.offset)) {
    if (state.offset !== 0) {
      style.transform = `translateX(${state.offset}px)`
    } else {
      style.transition = elastic
    }
  }

  return [
    state.active,
    (n: number) => dispatch({ type: "jump", desired: n }),
    () => dispatch({ type: "prev", length }),
    () => dispatch({ type: "next", length }),
    length > 1 ? handlers : {},
    style,
  ] as const
}

type UseCarouselProps = {
  length: number
  interval?: number
}
