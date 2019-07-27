import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'


const localizer = momentLocalizer(moment)

const BigCalendar = ({events}) => (
  <div style={{
      height: '100%'
  }}>
    <Calendar
      localizer={localizer}
      events={events.map(e => ({title: e.name, start: e.date, end: e.date}))}
      startAccessor="start"
      endAccessor="end"
    />
  </div>
)


export default BigCalendar