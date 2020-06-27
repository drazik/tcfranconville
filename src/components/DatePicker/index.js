import React from "react"
import DayPicker from "react-day-picker/DayPicker"
import "react-day-picker/lib/style.css"

const MONTHS = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
]

const WEEKDAYS_LONG = [
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
]

const WEEKDAYS_SHORT = ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"]

export const DatePicker = (props) => {
  const { selectedDays, ...rest } = props
  return (
    <DayPicker
      locale="fr"
      firstDayOfWeek={1}
      months={MONTHS}
      weekdaysLong={WEEKDAYS_LONG}
      weekdaysShort={WEEKDAYS_SHORT}
      month={selectedDays[0]}
      {...rest}
    />
  )
}
