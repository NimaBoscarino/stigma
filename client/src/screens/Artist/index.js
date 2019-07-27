import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../../components/Navbar'
import { Route } from 'react-router-dom'
import ClientsScreen from './Clients'
import ClientScreen from './Client'
import QuestionsScreen from './Questions'
import HomeScreen from './Home'
import ApplicationsScreen from './Applications';

const ArtistIndex = ({ user, logout, match }) => {
  return (
    <>
      <Navbar user={user} logout={logout} />
      <div style={{
        height: '93vh'
      }}>
        <Route exact path={`/`} component={(props) => <HomeScreen user={user}/>} />
        <Route exact path={`/clients`} component={(props) => <ClientsScreen user={user}/>} />
        <Route exact path={`/applications`} component={(props) => <ApplicationsScreen user={user}/>} />
        <Route exact path={`/clients/:interaction_id`} component={(props) => <ClientScreen user={user} interaction_id={props.match.params.interaction_id}/>} />
        <Route exact path={`/questions`} component={(props) => <QuestionsScreen user={user}/>} />
      </div>
    </>
  )
}

export default ArtistIndex