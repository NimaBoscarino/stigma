import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'


const localizer = momentLocalizer(moment)

const BigCalendar = ({events, setDate}) => (
  <div style={{
      height: '100%'
  }}>
    <Calendar
      localizer={localizer}
      events={events.map(e => ({title: e.name, start: new Date(moment(e.date)), end: e.date, allDay: true}))}
      startAccessor="start"
      endAccessor="end"
      onSelectSlot={setDate}
      selectable={true}
    />
  </div>
)


export default BigCalendar