import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../../components/Navbar'
import { Route } from 'react-router-dom'

const HomeScreen = () => {
  return (
    <h1>Home</h1>
  )
}

const ClientsScreen = () => {
  return (
    <h1>Clients</h1>
  )
}

const QuestionsScreen = () => {
  return (
    <h1>Questions</h1>
  )
}

const CalendarScreen = () => {
  return (
    <h1>Calendar</h1>
  )
}

const ArtistIndex = ({ user, logout, match }) => {
  return (
    <div>
      <Navbar user={user} logout={logout} />      
      <Route exact path={`/`} component={HomeScreen} />
      <Route exact path={`/clients`} component={ClientsScreen} />
      <Route exact path={`/questions`} component={QuestionsScreen} />
      <Route exact path={`/calendar`} component={CalendarScreen} />
    </div>
  )
}

export default ArtistIndex