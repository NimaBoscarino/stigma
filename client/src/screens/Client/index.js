import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import ArtistProfile from './ArtistProfile'
import InteractionsScreen from './Interactions';
import InteractionScreen from './Interaction';
import FavouritesScreen from './Favourites';
import EventsScreen from './Events';

const ClientIndex = ({ user, logout, match }) => {
  return (
    <div>
      <Navbar user={user} logout={logout}/>
        <Switch>
        <Route exact path={`/`} component={() => <Home user={user}/>} />
        <Route exact path={`/interactions`} component={(props) => <InteractionsScreen user={user}/>} />
        <Route exact path={`/interactions/:interaction_id`} component={(props) => <InteractionScreen user={user} interaction_id={props.match.params.interaction_id} />} />
        <Route exact path={`/favourites`} component={(props) => <FavouritesScreen user={user}/>} />
        <Route exact path={`/events`} component={(props) => <EventsScreen user={user}/>} />
        <Route exact path={`/:id`} component={(props) => (
          <ArtistProfile {...props} user={user}/>
        )} />
      </Switch>        
    </div>
  )
}

export default ClientIndex