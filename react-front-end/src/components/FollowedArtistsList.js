import React, { useState, useEffect } from 'react';
import axios from 'axios'

const FollowedArtistsList = ({ user }) => {
  const [followingArtists, setFollowingArtists] = useState([])
  
  const fetchData = () => {

    if (!user) return

    const fetchDataAsync = async () => {
      const result = await axios.get('/followings')
      setFollowingArtists(result.data.followings)
    }

    fetchDataAsync()
  }

  useEffect(fetchData, [user]);

  return (
    <div>
      <h2>Artists you are following:</h2>
      {
        followingArtists.map(i => <p key={i.id}>{i.name}</p>)
      }
    </div>
  )
}

export default FollowedArtistsList