import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import ReferenceImages from './ReferenceImages'
import InteractionCalendar from './InteractionCalendar'

const tabList = [
  {
    key: 'tab1',
    tab: 'Reference Images',
  },
  {
    key: 'tab2',
    tab: 'Appointments',
  },
];

const InteractionTabsCard = ({ interaction }) => {
  const [key, setKey] = useState('tab1')
  const contentList = {
    tab1: <ReferenceImages photos={interaction.images || []} />,
    tab2: <InteractionCalendar />,
  }
  
  const onTabChange = (key, type) => {
    setKey(key);
  };

  return (
    <div>
      <Card
        style={{ width: '100%' }}
        tabList={tabList}
        activeTabKey={key}
        onTabChange={key => {
          onTabChange(key, 'key');
        }}
      >
        {contentList[key]}
      </Card>
    </div>
  );
}

export default InteractionTabsCard
