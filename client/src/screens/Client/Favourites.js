import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ArtistCard from '../../components/ArtistCard'

const ArtistsContainer = ({user}) => {

  // the container is responsible for both fetching and displaying artists
  // should it be split into two? Maybe!

  const [artists, setArtists] = useState([])

  const fetchData = () => {
    const fetchDataAsync = async () => {
      const result = await axios.get('/followings')
      setArtists(result.data.artists)
    }

    fetchDataAsync()
  }

  useEffect(fetchData, [user]);


  return (
    <div style={{
      padding: '25px',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap'
    }}>
      {
        artists.map(a => <ArtistCard key={a.details.id} user={user} artist={a}/>)
      }
    </div>
  )
}

const FavouritesScreen = ({ user }) => {
  return (
    <div>
      <ArtistsContainer user={user} /> 
    </div>
  )
}

export default FavouritesScreen