import React, { useState, useEffect } from 'react'
import { Calendar, Badge } from 'antd'
import axios from 'axios'
import moment from 'moment';

const InteractionCalendar = ({ interaction }) => {
  /*
    This calendar is used to:
    1. see upcoming appointments
    2. handle the appointment suggestion/acceptance/etc flow
  */
  const { interaction_id } = interaction
  const [appointments, setAppointments] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/interactions/${interaction_id}/appointments`);
      setAppointments(result.data.appointments);
    };

    fetchData();
  }, []);

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
    <Calendar
      dateCellRender={dateCellRender}
    />
  )
}

export default InteractionCalendar