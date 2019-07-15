// src/components/ConversationsList.js

import React, { useState, useEffect } from 'react';
import { ActionCable } from 'react-actioncable-provider';
import axios from 'axios'
import NewMessageForm from './NewMessageForm';

const ChatList = ({ conversation }) => {

  const [messages, setMessages] = useState([])

  const handleReceivedMessage = message => {
    // const conversations = [...this.state.conversations];
    const newMessages = [...messages, message];
    setMessages(newMessages);
  };

  const orderedMessages = messages => {
    const sortedMessages = messages.sort(
      (a, b) => new Date(a.created_at) - new Date(b.created_at)
    );
    console.log('messages', messages)
    return sortedMessages.map(message => {
      return <li key={message.id}>{message.text}</li>;
    });
  };  

  useEffect(() => {
    const fetchData = async () => {
      if (conversation) {
        const result = await axios.get(`/conversations/${conversation.id}`)
        setMessages(result.data)
      }
    };

    fetchData();
  }, [conversation]);

  return (
      <div className="conversationsList">
        <NewMessageForm conversation_id={conversation && conversation.id} />
        <ActionCable
          channel={{ channel: 'MessagesChannel', conversation: conversation && conversation.id }}
          onReceived={handleReceivedMessage}
        />        
        <h2>Messages</h2>
        <ul>{orderedMessages(messages)}</ul>
      </div>    
  )
}

export default ChatList