import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Calendar, Badge} from 'antd';
import moment from 'moment';

export default ({ artist }) => {
  const [date, setDate] = useState(moment());
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `/api/artists/${artist.username}/events`,
      );

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
        <p>{date && `Events for: ${date.format('YYYY-MM-DD')}`}</p>
        <ul>
          {
            selectedDayEvents.map(e => (
              <li key={e.id}>{e.name}</li>
            ))
          }
        </ul>
      </div>
    </div>      
  )
}
