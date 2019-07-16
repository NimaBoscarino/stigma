import React from 'react'

const ChatMessage = ({children}) => {
  return (
    <div style={{
      background: 'lightblue',
      padding: '10px',
      margin: '5px'
    }}>
      { children }
    </div>
  )
}

export default ChatMessage