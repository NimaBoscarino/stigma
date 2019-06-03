import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../../components/Navbar'

const ArtistHomeScreen = ({ user, logout }) => {
  return (
    <div>
      <Navbar user={user} logout={logout} />      
      <h2>ARTIST HOME</h2>
      <p>
        Dashboard with calendar + upcoming events, and ability to create new events / delete existing events.

        Also see current interactions with clients
      </p>
    </div>
  )
}

export default ArtistHomeScreen