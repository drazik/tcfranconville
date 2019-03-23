import React from 'react'
import styled from 'styled-components'
// import sortBy from 'lodash/fp/sortBy'
// import groupBy from 'lodash/fp/groupBy'
// import compose from 'lodash/flowRight'
import { formatDate } from '../helpers'
import parseDate from 'date-fns/parse'
import getHours from 'date-fns/get_hours'
import getMinutes from 'date-fns/get_minutes'
import { lighten } from 'polished'

const LINE_WIDTH = 4

export const StyledTimeline = styled.ol`
  list-style: none;
  padding-left: 0;
  position: relative;
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 10rem;
  padding-bottom: 2rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: ${LINE_WIDTH}px;
    background-color: ${props => props.theme.main};
  }
`

const StyledTimelineItem = styled.li`
  position: relative;
  z-index: 0;
  display: flex;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    border-radius: 50%;
  }

  &::before {
    height: 0.5rem;
    width: 0.5rem;
    background-color: ${props => lighten(0.5, props.theme.main)};
    transform: translateX(-50%) translateX(${LINE_WIDTH / 2}px);
    z-index: -1;
  }

  &::after {
    height: 1rem;
    width: 1rem;
    background-color: ${props => props.theme.main};
    border-radius: 50%;
    transform: translateX(-50%) translateX(${LINE_WIDTH / 2}px) translateY(-${LINE_WIDTH}px);
    z-index: -2;
  }

  & + & {
    margin-top: 2rem;
  }
`

function invertPosition(position) {
  return position === 'right' ? 'left' : 'right'
}

const TimelineContent = styled.div`
  flex-basis: calc(50% - 2rem);
  flex-shrink: 0;
  flex-grow: 0;
  margin-${props => invertPosition(props.position)}: auto;
  background-color: white;
  padding: 2rem 1rem 1rem;
  box-shadow: 0 20px 25px -15px rgba(0, 0, 0, 0.2);
  transform: translateY(-1rem);
  position: relative;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;

  &::before {
    content: '';
    position: absolute;
    top: 0.5rem;
    ${props => props.position}: 100%;
    border: 0.75rem solid transparent;
    border-${props => invertPosition(props.position)}-width: 0;
    border-${props => props.position}-color: white;
  }
`

const TimelineDay = styled.span`
  font-size: 1.25rem;
  font-weight: bold;
`

const TimelineDateSeparator = styled.span.attrs({ children: ' / ' })`
  color: ${props => props.theme.main};
  font-size: 1.25rem;
  font-weight: bold;
`

function RawTimelineDate(props) {
  const { date } = props
  const hours = getHours(date)
  const minutes = getMinutes(date)

  const dayFormatStr = 'Do MMMM'
  const hourFormatStr = `HH[h]${minutes > 0 ? 'mm' : ''}`

  return (
    <time className={props.className} dateTime={date.toISOString()}>
      <TimelineDay>{formatDate(date, dayFormatStr)}</TimelineDay>
      {hours > 0 && <TimelineDateSeparator />}
      {hours > 0 && <span>{formatDate(date, hourFormatStr)}</span>}
    </time>
  )
}

const TimelineDate = styled(RawTimelineDate)`
  &::after {
    content: '';
    display: block;
    height: 2px;
    width: 28px;
    margin-top: 0.5rem;
    background-color: ${props => props.theme.main};
  }
`

export function TimelineItem(props) {
  return (
    <StyledTimelineItem>
      <TimelineContent position={props.position}>
        <TimelineDate
          date={props.date}
          position={props.position}
        />
        {props.children}
      </TimelineContent>
    </StyledTimelineItem>
  )
}

TimelineItem.defaultProps = {
  position: 'left'
}

// function formatItemDate(item) {
//   return formatDate(item.date, 'YYYY-MM-DD')
// }

function Timeline(props) {
  // const items = compose(
  //   groupBy(formatItemDate),
  //   sortBy(formatItemDate)
  // )(props.items)

  return (
    <StyledTimeline>
      <TimelineItem position="left" date={parseDate('2019-03-23T15:00:00')}>
        <p>Réunion du comité</p>
      </TimelineItem>
      <TimelineItem position="right" date={parseDate('2019-03-24T09:00:00')}>
        <p>L'équipe raquettes FFT messieurs reçoit Ermont 1 (courts 7 et 8)</p>
      </TimelineItem>
      <TimelineItem position="left" date={parseDate('2019-03-24T14:00:00')}>
        <p>L'équipe dames +45 2 reçoit Ermont 2 (courts 7 et 8)</p>
      </TimelineItem>
      <TimelineItem position="right" date={parseDate('2019-03-25')}>
        <p>Début du tournoi Open Seniors Plus. Fin le 12 avril</p>
      </TimelineItem>
      {/*Object.entries(items).map(([date, items]) => (
        <TimelineItem key={date}>
          <TimelineDate date={date} />
          <TimelineItems items={items} />
        </TimelineItem>
      ))*/}
    </StyledTimeline>
  )
}

export default Timeline
