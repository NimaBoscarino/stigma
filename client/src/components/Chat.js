import React from 'react'
import { Card } from 'antd'
import ConversationsList from './ConversationsList';

const Chat = ({conversation, user}) => {
  // I need to bring in Redux to deal with user stuff
  // It's such a pain to pass the user down all the way
  return (
    <Card style={{
      margin: '0 0 10px 0'
    }}>
      {
        conversation.id && <ConversationsList user={user} conversation={conversation}/>
      }
    </Card>
  )
}

export default Chat