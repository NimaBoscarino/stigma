import React from 'react'
import InteractionsList from '../../components/Client/InteractionsList'

const ApplicationsScreen = ({ user }) => {
  return (
    <div>
      <InteractionsList user={user}/>
    </div>
  )
}

export default ApplicationsScreen