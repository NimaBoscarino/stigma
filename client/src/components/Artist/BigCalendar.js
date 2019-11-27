import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'


const localizer = momentLocalizer(moment)

const BigCalendar = ({ events, setDate }) => (


  <div style={{
    height: '100%'
  }}>
    <Calendar
      localizer={localizer}
      events={events.map(e => ({ title: e.name, start: new Date(moment(e.date)), end: e.date, allDay: true, all: e.all }))}
      startAccessor="start"
      endAccessor="end"
      onSelectSlot={setDate}
      selectable={true}
      eventPropGetter={
        (event) => {
          let newStyle = {
            backgroundColor: event.all ? "#eee" : '#3174ad',
            color: event.all ? '#999999' : 'black',
            borderRadius: "0px",
            border: "none"
          };
          return {
            className: "",
            style: newStyle
          };
        }
      }
    />
  </div>
)



export default BigCalendar