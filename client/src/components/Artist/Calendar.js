import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Calendar, Badge } from 'antd';
import moment from 'moment';

const ArtistCalendar = ({ setDate, events, date, eventsForDay}) => {

  const onSelect = (value, mode) => {
    setDate(value);
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
      onSelect={onSelect}
      defaultValue={date}
      dateCellRender={dateCellRender}
    />
  )
}

export default ArtistCalendar