import React, { useState, useEffect } from 'react'
import ArtistProfileBanner from '../../components/Artist/ArtistProfileBanner'
import Calendar from '../../components/Artist/Calendar'
import EventCard from '../../components/Artist/EventCard'
import axios from 'axios'
import { Switch } from 'antd'
import moment from 'moment'

const HomeScreen = ({ user }) => {
  const [date, setDate] = useState(moment());
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/artists/${user.username}/events?appointments=true`);
      setEvents(result.data.events);
    };

    fetchData();
  }, []);

  const addEvent = (event) => {
    setEvents([...events, event])
  }

  const removeEvent = (event) => {
    setEvents(events.filter(e => e.id !== event.id))
  }

  const eventsForDay = (value) => {
    return events.filter(e => value.format('DD-MM-YYYY') === moment(e.date).format('DD-MM-YYYY'));
  }

  const selectedDayEvents = date && eventsForDay(date)

  return (
    <div style={{
      padding: '25px',
      display: 'flex',
      height: '100%',
      flexDirection: 'row',
    }}>
      <div style={{
        width: '50%'
      }}>
        <ArtistProfileBanner user={user} addEvent={addEvent} />
        <h2>{date && `Events for: ${date.format('YYYY-MM-DD')}`}</h2>
        <div style={{
          display: 'flex',
          flexDirection: 'row'
        }}>
        {
          selectedDayEvents.map(e => (
            <EventCard
              key={e.id}
              event={e}
              onDelete={removeEvent}
            />
          ))
        }
        </div>
      </div>
      <div style={{
        width: '50%',
        height: '100%'
      }}>
        <Calendar
          events={events}
          setDate={setDate}
          eventsForDay={eventsForDay}
        />
      </div>
    </div>
  )
}

export default HomeScreen