import React from 'react'
import { Card } from 'antd'
import ConversationsList from './ConversationsList';

const Chat = ({conversation}) => {
  return (
    <Card style={{
      margin: '0 0 10px 0'
    }}>
      <p>Chat</p>
      {
        conversation && <ConversationsList conversation={conversation}/>
      }
    </Card>
  )
}

export default Chat