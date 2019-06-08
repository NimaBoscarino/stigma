import React, { useState, useEffect } from 'react'
import ArtistProfileBanner from '../../components/Artist/ArtistProfileBanner'
import axios from 'axios'
import { Switch } from 'antd';

const HomeScreen = ({ user }) => {
  return (
    <div style={{
      padding: '25px'
    }}>
      <ArtistProfileBanner user={user}/>
    </div>
  )
}

export default HomeScreen