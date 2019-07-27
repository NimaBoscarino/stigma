import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Tag, Switch } from 'antd'
import styled from 'styled-components'
import CreateFlashEventModal from './CreateFlashEventModal'

const BooksTag = styled(Tag)`
  margin: 5px;
`

const Avatar = styled.img`
  margin: 15px;
  height: 150px;
  width: 150px;
  object-fit: cover;
`

const InstagramHandle = styled.h3`
  font-style: italic;
`

const ArtistProfileBanner = ({ user, addEvent }) => {
  const [booksOpen, setBooksOpen] = useState(null)
  const [artist, setArtist] = useState(null)

  const fetchArtist = () => {
    const fetchDataAsync = async () => {
      const result = await axios.get(`/artists/${user.username}`)
      setBooksOpen(result.data.artist.books_open)
      setArtist(result.data.artist)
    }

    fetchDataAsync()
  }

  useEffect(fetchArtist, []);

  const onChange = (checked) => {
    if (checked) {
      openBooks()
    } else {
      closeBooks()
    }
  }
  
  const openBooks = async () => {
    await axios.post(`/artists/${user.id}/openBooks`)
    setBooksOpen(true)
  }

  const closeBooks = async () => {
    await axios.post(`/artists/${user.id}/closeBooks`)
    setBooksOpen(false)
  }

  return !artist ? 'Loading...' : (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: '15px'
    }}>
      <Avatar alt={artist.name} src={artist.avatar} />
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
      }}>
        <div>
          <h2 style={{
            display: 'inline-block'
          }}>
            {artist.name}
          </h2>
        </div>
        <InstagramHandle>@{artist.username}</InstagramHandle>
      </div>
      <div style={{
        margin: '15px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Switch
          checkedChildren={"Books Open"}
          unCheckedChildren={"Books Closed"}
          loading={booksOpen === null}
          checked={booksOpen}
          onChange={onChange}
        />
        <CreateFlashEventModal
          user={user}
          addEvent={addEvent}
        />
      </div>
    </div>    
  )
}

export default ArtistProfileBanner