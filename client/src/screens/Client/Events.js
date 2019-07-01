import React, { useState, useEffect } from 'react'
import UpcomingEventsList from '../../components/Client/UpcomingEventsList';

const EventsScreen = ({ user }) => {
  return (
    <div>
      <UpcomingEventsList />
    </div>
  )
}

export default EventsScreen