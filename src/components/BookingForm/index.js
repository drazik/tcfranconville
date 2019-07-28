import React, { useReducer } from 'react'
import { formatDate } from '../../helpers/date'
import { Text } from '../Text'
import { Button } from '../Button'
import range from 'lodash/range'
import { DatePicker } from '../DatePicker'
import { Stack } from '../Stack'
import { Modal } from '../Modal'
import addWeeks from 'date-fns/addWeeks'

const MIN_HOURS = 7
const MAX_HOURS = 21
const TIME_FORMAT = 'HH:mm'

export const getNearestSlotDate = date => {
  const hours = date.getHours()

  const slotDate = new Date(date.getTime())
  slotDate.setMinutes(0)
  slotDate.setSeconds(0)
  slotDate.setMilliseconds(0)

  if (hours < MIN_HOURS) {
    slotDate.setHours(MIN_HOURS)
    return slotDate
  }

  if (hours >= MAX_HOURS) {
    slotDate.setHours(MIN_HOURS)
    slotDate.setDate(date.getDate() + 1)
    return slotDate
  }

  if (hours >= MIN_HOURS && hours < MAX_HOURS) {
    slotDate.setHours(hours + 1)
  }

  return slotDate
}

const getInitialState = () => {
  const nearestSlotDate = getNearestSlotDate(new Date())

  return {
    date: nearestSlotDate,
    time: formatDate(nearestSlotDate, TIME_FORMAT),
    member: false,
    showDatePicker: false
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATE':
      return {
        ...state,
        date: action.payload
      }

    case 'SET_TIME':
      return {
        ...state,
        time: action.payload
      }

    case 'SET_MEMBER':
      return {
        ...state,
        member: action.payload
      }

    case 'SHOW_DATE_PICKER':
      return {
        ...state,
        showDatePicker: true
      }

    case 'HIDE_DATE_PICKER':
      return {
        ...state,
        showDatePicker: false
      }

    default:
      return state
  }
}

const getMemberUrl = date => {
  const formattedDate = formatDate(date, 'yyyyMMdd')
  return `https://tenup.fft.fr/adherent/reservations/${formattedDate}`
}

const getExternalUrl = (date, time) => {
  const formattedDate = formatDate(date, 'yyyy-MM-dd')
  return `https://anybuddyapp.com/club-franconville-tc?date=${formattedDate}&time=${time}&price=20&sport=tennis`
}

const getTargetUrl = (date, time, isMember) => {
  if (isMember) {
    return getMemberUrl(date, time)
  }

  return getExternalUrl(date, time)
}

export const BookingForm = props => {
  const [state, dispatch] = useReducer(reducer, null, getInitialState)
  const today = new Date()

  return (
    <Stack>
      <Text>
        Je souhaite jouer le
      </Text>
      <div
        css={theme => ({
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'white',
          color: theme.main,
          fontSize: '1.125rem',
          borderRadius: '0.5em',
          overflow: 'hidden',

          '> *': {
            paddingTop: '0.75em',
            paddingBottom: '0.75em'
          }
        })}
      >
        <button
          type="button"
          css={{
            flexGrow: 1,
            fontSize: 'inherit',
            border: 0,
            backgroundColor: 'transparent'
          }}
          onClick={() => dispatch({ type: 'SHOW_DATE_PICKER' })}
        >
          {formatDate(state.date, 'EEEE d MMMM')}
        </button>
        <span
          css={{
            paddingLeft: '0.5rem',
            paddingRight: '0.5rem',
            flexShrink: 0
          }}
        >
          à
        </span>
        <select
          value={state.time}
          onChange={e => dispatch({type: 'SET_TIME', payload: e.target.value})}
          css={{
            fontSize: 'inherit',
            flexShrink: 0,
            border: 0,
            backgroundColor: 'transparent'
          }}
        >
          {range(MIN_HOURS, MAX_HOURS + 1).map(hour => (
            <option
              value={`${hour.toString().padStart(2, '0')}:00`}
              key={hour}
            >
              {hour}h
            </option>
          ))}
        </select>
      </div>
        <Modal
          isOpen={state.showDatePicker}
          onRequestClose={() => dispatch({ type: 'HIDE_DATE_PICKER' })}
          style={{
            content: {
              inset: 20,
              padding: 0
            }
          }}
        >
          <DatePicker
            onDayClick={day => {
              dispatch({ type: 'SET_DATE', payload: day })
              dispatch({ type: 'HIDE_DATE_PICKER' })
            }}
            fromMonth={today}
            disabledDays={[
              { before: today },
              { after: addWeeks(today, 1) }
            ]}
            selectedDays={[state.date]}
          />
        </Modal>
      <Text>
        <input
          type="checkbox"
          name="member"
          id="member"
          checked={state.member}
          onChange={e => dispatch({
            type: 'SET_MEMBER',
            payload: e.target.checked
          })}
        />
        <label htmlFor="member">Je suis adhérent(e)</label>
      </Text>
      <Button
        as="a"
        href={getTargetUrl(state.date, state.time, state.member)}
        target="_blank"
        fullWidth
      >
        Réserver
      </Button>
    </Stack>
  )
}
