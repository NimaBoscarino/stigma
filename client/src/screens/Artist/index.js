import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../../components/Navbar'
import { Route } from 'react-router-dom'
import ClientsScreen from './Clients'
import ClientScreen from './Client'
import QuestionsScreen from './Questions'
import CalendarScreen from './Calendar'
import HomeScreen from './Home'

const ArtistIndex = ({ user, logout, match }) => {
  return (
    <div>
      <Navbar user={user} logout={logout} />      
      <Route exact path={`/`} component={(props) => <HomeScreen user={user}/>} />
      <Route exact path={`/clients`} component={(props) => <ClientsScreen user={user}/>} />
      <Route exact path={`/clients/:client_id`} component={(props) => <ClientScreen user={user} clientId={props.match.params.clientId}/>} c/>
      <Route exact path={`/questions`} component={(props) => <QuestionsScreen user={user}/>} />
      <Route exact path={`/calendar`} component={(props) => <CalendarScreen user={user}/>} />
    </div>
  )
}

export default ArtistIndex