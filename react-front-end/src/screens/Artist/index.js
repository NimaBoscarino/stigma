import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../../components/Navbar'
import { Route } from 'react-router-dom'
import ClientsScreen from './Clients'
import QuestionsScreen from './Questions'
import CalendarScreen from './Calendar'

const HomeScreen = () => {
  return (
    <h1>Home</h1>
  )
}

const ArtistIndex = ({ user, logout, match }) => {
  return (
    <div>
      <Navbar user={user} logout={logout} />      
      <Route exact path={`/`} component={HomeScreen} />
      <Route exact path={`/clients`} component={(props) => <ClientsScreen user={user}/>} />
      <Route exact path={`/questions`} component={(props) => <QuestionsScreen user={user}/>} />
      <Route exact path={`/calendar`} component={(props) => <CalendarScreen user={user}/>} />
    </div>
  )
}

export default ArtistIndex