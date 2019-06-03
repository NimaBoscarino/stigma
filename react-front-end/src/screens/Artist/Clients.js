import React, { useState, useEffect } from 'react'
import ClientList from '../../components/Artist/ClientList'
import axios from 'axios'

const ClientsScreen = ({ user }) => {
  return (
    <div>
      <ClientList user={user}/>
    </div>
  )
}

export default ClientsScreen