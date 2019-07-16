// src/components/ConversationsList.js

import React, { useState, useEffect } from 'react';
import  ActionCable  from 'actioncable';
import axios from 'axios'
import NewMessageForm from './NewMessageForm';

const ChatList = ({ conversation }) => {

  const [messages, setMessages] = useState([])

  const cable = ActionCable.createConsumer('ws://localhost:3001/cable');

  const handleReceivedMessage = message => {
    // const conversations = [...this.state.conversations];
    const newMessages = [...messages, message];
    setMessages(newMessages);
  };

  useEffect(() => {
      conversation && cable.subscriptions.create(
      {
        channel: "MessagesChannel",
        conversation: conversation.id
      },
      {
        received: handleReceivedMessage
      }
    );
  }, [conversation])

  const orderedMessages = messages => {
    const sortedMessages = messages.sort(
      (a, b) => new Date(a.created_at) - new Date(b.created_at)
    );
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
  });

  return (
    <div className="conversationsList">
      <NewMessageForm conversation_id={conversation && conversation.id} />    
      <h2>Messages</h2>
      <ul>{orderedMessages(messages)}</ul>
    </div>
  )
}

export default ChatList