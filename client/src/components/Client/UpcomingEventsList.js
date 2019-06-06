import React, { useState, useEffect } from 'react';
import axios from 'axios'
import moment from 'moment'
import { Card, Button } from 'antd'

const UpcomingEventCard = ({event}) => (
  <Card size="small" title={event.name} style={{
    width: '150px',
    margin: '5px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  }}>
    <div>
      <h3>{event.artist}</h3>
      <p>{moment(event.date).format('DD-MM-YYYY')}</p>
    </div>      
    <Button 
      block>
      Save
    </Button>
  </Card>
)

const UpcomingEventsList = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([])
  
  const fetchData = () => {

    const fetchDataAsync = async () => {
      const result = await axios.get('/events')
      setUpcomingEvents(result.data.events)
    }

    fetchDataAsync()
  }

  useEffect(fetchData, []);

  return (
    <div>
      <h2>Upcoming Events:</h2>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
      {
        upcomingEvents.map(e => {
          return (
            <UpcomingEventCard
              key={e.id}
              event={e}
            />
          )
        })
      }
      </div>
    </div>
  )
}

export default UpcomingEventsList