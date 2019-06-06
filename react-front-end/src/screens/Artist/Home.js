import React, { useState, useEffect } from 'react'
import ClientList from '../../components/Artist/ClientList'
import axios from 'axios'
import { Switch } from 'antd';

const HomeScreen = ({ user }) => {
  const [booksOpen, setBooksOpen] = useState(null)

  const fetchBooksStatus = () => {
    const fetchDataAsync = async () => {
      const result = await axios.get(`/artists/${user.id}/booksStatus`)
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
    await axios.post(`/artists/${user.id}/openBooks`)
    setBooksOpen(true)
  }

  const closeBooks = async () => {
    await axios.post(`/artists/${user.id}/closeBooks`)
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