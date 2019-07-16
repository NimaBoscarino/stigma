import React from 'react'

const ChatMessage = ({children, user_id}) => {
  const message = children.message
  const isSender = message.user_id === user_id
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: isSender ? 'flex-end' : 'flex-start'
    }}>
      <div style={{
        background: isSender ? 'blue' : 'lightblue',
        width: '60%',
        borderRadius: '5px',
        padding: '10px',
        margin: '5px',
      }}>
        { message.text }
      </div>
    </div>
  )
}

export default ChatMessage