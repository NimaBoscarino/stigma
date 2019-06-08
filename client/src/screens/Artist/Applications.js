import React, { useState, useEffect } from 'react'
import ApplicationList from '../../components/Artist/ApplicationList'
import axios from 'axios'

const ApplicationsScreen = ({ user }) => {
  return (
    <div>
      <ApplicationList user={user}/>
    </div>
  )
}

export default ApplicationsScreen