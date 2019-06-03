import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import { Route } from 'react-router-dom'
import Home from './Home'
import ArtistScreen from '../ArtistScreen'

const ClientIndex = ({ user, logout, match }) => {
  return (
    <div>
      <Navbar user={user} logout={logout}/>
      <Route exact path={`/`} component={() => <Home user={user}/>} />
      <Route exact path={`/:id`} component={(props) => (
        <ArtistScreen {...props} user={user}/>
      )} />
    </div>
  )
}

export default ClientIndex