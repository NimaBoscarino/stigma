// src/components/ConversationsList.js

import React, { useRef, useEffect } from 'react';
import  ActionCable  from 'actioncable';
import axios from 'axios'
import NewMessageForm from './NewMessageForm';
import ChatMessage from './ChatMessage'

let WS_ROUTE = process.env.NODE_ENV === 'development' ? 'ws://localhost:3001' : 'ws://' + window.location.host

const MessageList = ({ messages, user }) => {
  const dummyDiv = useRef(null);

  useEffect(() => {
    dummyDiv.current.scrollIntoView({ behavior: "smooth" });
  }, [messages])

  return (
    <div style={{
      height: '400px',
      overflow: 'scroll'
    }}>
      {
        messages.map(message => <ChatMessage user_id={user.id} key={message.id}>{message}</ChatMessage>)
      }
      <div
        ref={dummyDiv}
      ></div>
    </div>
  )
}

class ChatList extends React.Component {

  state = {
    messages: []
  }

  async componentDidMount() {
    if (this.props.conversation) {
      const result = await axios.get(`/conversations/${this.props.conversation.id}`)
      this.setState({
        messages: result.data
      })
    }

    const cable = ActionCable.createConsumer(WS_ROUTE + '/cable');

    cable.subscriptions.create(
      {
        channel: "MessagesChannel",
        conversation: this.props.conversation.id
      },
      {
        received: this.handleReceivedMessage
      }
    );
  }
  
  
  handleReceivedMessage = message => {
    const newMessages = [...this.state.messages, message];
    this.setState({
      messages: newMessages
    })
  }

  render() {
    return (
      <div className="conversationsList">
        <h2 onClick={this.handleReceivedMessage}>Messages</h2>
      
        <MessageList user={this.props.user} messages={this.state.messages}/>
        <NewMessageForm conversation_id={this.props.conversation.id} />    
      </div>
    )
  }
 
}

export default ChatList