import React, { useState, useEffect } from 'react'
import { Badge } from 'antd'
import axios from 'axios'
import moment from 'moment';
import CreateAppointmentInviteModal from './Artist/CreateAppointmentInviteModal';
import Calendar from './Artist/BigCalendar'

const InteractionCalendar = ({ interaction, artist, artistName }) => {
  /*
    This calendar is used to:
    1. see upcoming appointments
    2. handle the appointment suggestion/acceptance/etc flow
  */
  const { interaction_id } = interaction
  const [appointments, setAppointments] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      let result;
      let fullCalendar;
      result = await axios.get(`/interactions/${interaction_id}/appointments`)
      fullCalendar = result.data.appointments
      if (artist) {
        result = await axios.get(`/artists/${artistName}/events?appointments=true`)
        const allEvents = result.data.events
        for (const event of allEvents) {
          event.all = true;
          if (!fullCalendar.some(item => item.date === event.date)) {
            fullCalendar.push(event)
          }
        }
      }
      setAppointments(fullCalendar)
    };

    fetchData();
  }, []);

  const addAppointment = (appointment) => {
    setAppointments([...appointments, appointment])
  }

  const eventsForDay = (value) => {
    return appointments.filter(e => value.format('DD-MM-YYYY') === moment(e.date).format('DD-MM-YYYY'));
  }
  const dateCellRender = (value) => {
    const listData = eventsForDay(value);
    return (
      <div className="events">
        {listData.map(item => (
          <Badge key={item.id} status={'success'} text={item.name} />
        ))}
      </div>
    );
  }

  return (
    <div style={{
      height: '550px',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {
        artist && (
          <CreateAppointmentInviteModal
            addAppointment={addAppointment}
            interaction={interaction}
          />
        )
      }

      <Calendar
        events={appointments}
      />
    </div>
  )
}

export default InteractionCalendar