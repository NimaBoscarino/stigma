import React, { useState, useEffect } from 'react'
import ClientList from '../../components/Artist/ClientList'
import axios from 'axios'
import { Switch } from 'antd';

const HomeScreen = ({ user }) => {
  const [booksOpen, setBooksOpen] = useState(null)

  const fetchBooksStatus = () => {
    const fetchDataAsync = async () => {
      const result = await axios.get(`/api/artists/${user.id}/booksStatus`, {
        headers: {
          client: user.client,
          'access-token': user['access-token'],
          uid: user.uid
        }
      })
      console.log('new value', result.data.booksStatus)
      setBooksOpen(result.data.booksStatus)
    }

    fetchDataAsync()
  }

  useEffect(fetchBooksStatus, []);

  const onChange = (checked) => {
    if (checked) {
      openBooks()
    } else {
      closeBooks()
    }
  }
  
  const openBooks = async () => {
    const result = await axios(`/api/artists/${user.id}/openBooks`, {
      method: 'post',
      headers: {
        client: user.client,
        'access-token': user['access-token'],
        uid: user.uid
      }
    })

    setBooksOpen(true)
  }

  const closeBooks = async () => {
    const result = await axios(`/api/artists/${user.id}/closeBooks`, {
      method: 'post',
      headers: {
        client: user.client,
        'access-token': user['access-token'],
        uid: user.uid
      }
    })

    setBooksOpen(false)
  }
  
  return (
    <div style={{
      padding: '25px'
    }}>
      <h2>Books Open?</h2>
      <Switch loading={booksOpen === null} checked={booksOpen} onChange={onChange} />
    </div>
  )
}

export default HomeScreen