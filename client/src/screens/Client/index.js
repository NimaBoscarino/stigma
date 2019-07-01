import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import ArtistProfile from './ArtistProfile'
import InteractionsScreen from './Interactions';
import FavouritesScreen from './Favourites';

const ClientIndex = ({ user, logout, match }) => {
  return (
    <div>
      <Navbar user={user} logout={logout}/>
        <Switch>
        <Route exact path={`/`} component={() => <Home user={user}/>} />
        <Route exact path={`/interactions`} component={(props) => <InteractionsScreen user={user}/>} />
        <Route exact path={`/favourites`} component={(props) => <FavouritesScreen user={user}/>} />
        <Route exact path={`/:id`} component={(props) => (
          <ArtistProfile {...props} user={user}/>
        )} />
      </Switch>        
    </div>
  )
}

export default ClientIndex