import React from 'react'
import axios from 'axios'
import {Card, Button} from 'antd'
import moment from 'moment'

const EventCard = ({event, onDelete}) => {
  const deleteEvent = async () => {
    await axios.delete(`/events/${event.id}`)
    onDelete(event)
  }

  return (
    <Card size="small" title={event.name} style={{
      width: '30%',
      margin: '5px'
    }}>
      <p>{moment(event.date).format('DD-MM-YYYY')}</p>
      <Button 
        onClick={deleteEvent}
        type="danger" 
        block>
        Delete
      </Button>
    </Card>
  )
}

export default EventCard