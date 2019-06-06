import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Calendar, Badge, Card } from 'antd';
import moment from 'moment';

const EventCard = ({event}) => {

  return (
    <Card size="small" title={event.name} style={{
      width: '100%',
      marginBottom: '5px'
    }}>
      <p>{moment(event.date).format('DD-MM-YYYY')}</p>
    </Card>
  )
}

const CalendarScreen = ({ user }) => {
  const [date, setDate] = useState(moment());
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/artists/${user.username}/events`);
      setEvents(result.data.events);
    };

    fetchData();
  }, []);

  const onSelect = (value, mode) => {
    setDate(value);
  }

  const eventsForDay = (value) => {
    return events.filter(e => value.format('DD-MM-YYYY') === moment(e.date).format('DD-MM-YYYY'));
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
  
  const selectedDayEvents = date && eventsForDay(date)

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row'
    }}>
      <div style={{
        width: '80%'
      }}>
        <Calendar
          onSelect={onSelect}
          defaultValue={date}
          dateCellRender={dateCellRender}
        />
      </div>
      <div>
        <h2>{date && `Events for: ${date.format('YYYY-MM-DD')}`}</h2>
        {
          selectedDayEvents.map(e => (
            <EventCard key={e.id} event={e} />
          ))
        }
      </div>
    </div>      
  )
}

export default CalendarScreen