import React from "react"
import { formatDate } from "../helpers/date"
import parseDate from "date-fns/parseISO"
import getHours from "date-fns/getHours"
import getMinutes from "date-fns/getMinutes"
import { lighten } from "polished"
import mq from "../helpers/media-queries"

const LINE_WIDTH = 4

const timeline = (theme) =>
  mq({
    listStyle: "none",
    paddingLeft: 0,
    position: "relative",
    marginTop: 0,
    marginBottom: 0,
    paddingTop: "2rem",
    paddingBottom: "2rem",

    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      bottom: 0,
      left: ["calc(100% - 2rem)", "50%"],
      width: `${LINE_WIDTH}px`,
      backgroundColor: theme.main,
    },
  })

const timelineItem = (theme) =>
  mq({
    position: "relative",
    zIndex: 0,
    display: "flex",

    "&::before, &::after": {
      content: '""',
      position: "absolute",
      top: 0,
      left: ["calc(100% - 2rem)", "50%"],
      borderRadius: "50%",
    },

    "&::before": {
      height: "0.5rem",
      width: "0.5rem",
      backgroundColor: lighten(0.5, theme.main),
      transform: `translateX(-50%) translateX(${LINE_WIDTH / 2}px)`,
      zIndex: -1,
    },

    "&::after": {
      height: "1rem",
      width: "1rem",
      backgroundColor: theme.main,
      borderRadius: "50%",
      transform: `translateX(-50%) translateX(${
        LINE_WIDTH / 2
      }px) translateY(-${LINE_WIDTH}px)`,
      zIndex: -2,
    },

    "& + &": {
      marginTop: "2rem",
    },
  })

const timelineContent = mq({
  flexBasis: ["calc(100% - 4rem)", "calc(50% - 2rem)"],
  flexShrink: 0,
  flexGrow: 0,
  backgroundColor: "white",
  padding: "2rem 1rem 1rem",
  boxShadow: "0 20px 25px -15px rgba(0, 0, 0, 0.2)",
  transform: "translateY(-1rem)",
  position: "relative",
  borderRadius: "0.25rem",
  display: "flex",
  flexDirection: "column",

  "&::before": {
    content: '""',
    position: "absolute",
    top: "0.5rem",
    border: "0.75rem solid transparent",
  },
})

const timelineContentLeft = {
  marginRight: "auto",

  "&::before": {
    left: "100%",
    borderRightWidth: 0,
    borderLeftColor: "white",
  },
}

const timelineContentRight = mq({
  marginLeft: ["0", "auto"],

  "&::before": {
    right: ["auto", "100%"],
    left: ["100%", "auto"],
    borderLeftWidth: ["0.75rem", 0],
    borderRightWidth: [0, "0.75rem"],
    borderRightColor: "white",
    borderLeftColor: "white",
  },
})

const TimelineContent = (props) => {
  const { position, ...rest } = props

  return (
    <div
      css={[
        timelineContent,
        position === "left" ? timelineContentLeft : timelineContentRight,
      ]}
      {...rest}
    />
  )
}

const timelineDay = {
  fontSize: "1.25rem",
  fontWeight: "bold",
}

const timelineDateSeparator = (theme) => ({
  color: theme.main,
  fontSize: "1.25rem",
  fontWeight: "bold",
})

function TimelineDateSeparator(props) {
  return (
    <span {...props} css={timelineDateSeparator}>
      {" / "}
    </span>
  )
}

const timelineDate = (theme) => ({
  "&::after": {
    content: '""',
    display: "block",
    height: 2,
    width: 28,
    marginTop: "0.5rem",
    backgroundColor: theme.main,
  },
})

function TimelineDate(props) {
  const { date } = props
  const hours = getHours(date)
  const minutes = getMinutes(date)

  const dayFormatStr = "Do MMMM"
  const hourFormatStr = `HH[h]${minutes > 0 ? "mm" : ""}`

  return (
    <time css={timelineDate} dateTime={date.toISOString()} {...props}>
      <span css={timelineDay}>{formatDate(date, dayFormatStr)}</span>
      {hours > 0 && <TimelineDateSeparator />}
      {hours > 0 && <span>{formatDate(date, hourFormatStr)}</span>}
    </time>
  )
}

export function TimelineItem(props) {
  const { position, date, children, ...rest } = props

  return (
    <li css={timelineItem} {...rest}>
      <TimelineContent position={position}>
        <TimelineDate date={date} position={position} />
        {children}
      </TimelineContent>
    </li>
  )
}

TimelineItem.defaultProps = {
  position: "left",
}

function Timeline(props) {
  return (
    <ol {...props} css={timeline}>
      <TimelineItem position="left" date={parseDate("2019-03-23T15:00:00")}>
        <p>Réunion du comité</p>
      </TimelineItem>
      <TimelineItem position="right" date={parseDate("2019-03-24T09:00:00")}>
        <p>L'équipe raquettes FFT messieurs reçoit Ermont 1 (courts 7 et 8)</p>
      </TimelineItem>
      <TimelineItem position="left" date={parseDate("2019-03-24T14:00:00")}>
        <p>L'équipe dames +45 2 reçoit Ermont 2 (courts 7 et 8)</p>
      </TimelineItem>
      <TimelineItem position="right" date={parseDate("2019-03-25")}>
        <p>Début du tournoi Open Seniors Plus. Fin le 12 avril</p>
      </TimelineItem>
    </ol>
  )
}

export default Timeline
