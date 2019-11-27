import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Button, Descriptions, Icon, Card } from 'antd'
import api from '../../utils/api'
import InteractionTabsCard from '../../components/InteractionTabsCard'
import Chat from '../../components/Chat'
// This page is where the artist can interface with the client, who may be at any stage of the Interaction

const ClientScreen = ({ interaction_id, user }) => {
  // use interaction_id to get the interaction
  // i realize I'd made this call before... 
  // it may be a good idea to bring in Redux soon? Maybe. Maybe not.

  const [client, setClient] = useState(null)
  const [interaction, setInteraction] = useState(null)

  // these should both trigger a notification or some other visual indicator
  // if accepted, should render the view for "Booking"
  const accept = async () => {
    await api.acceptApplication(interaction_id)
    await fetchData()
  }
  const decline = () => api.declineApplication(interaction_id)

  const fetchData = async () => {
    const result = await axios.get(`/interactions/${interaction_id}`)

    setClient(result.data.client)

    setInteraction({
      ...result.data.interaction,
      ...result.data.information,
      type: result.data.type,
      images: result.data.images,
      conversation: result.data.conversation
    })

  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!client || !interaction) return 'Loading...'

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    }}>
      <div style={{
        width: '50%',
        padding: '10px'
      }}>
        {
          interaction.type === 'Application' && (
            <div style={{
              padding: '20px'
            }}>
              <Button type="primary" onClick={accept}>Accept</Button>
              <Button type="danger" onClick={decline}>Decline</Button>
            </div>
          )
        }
        <InteractionTabsCard artist={true} artistName={user.username} interaction={interaction}/>
      </div>
      <div style={{
        width: '50%',
        padding: '10px'
      }}>
        <Card style={{
          margin: '0 0 10px 0'
        }}>
          <Descriptions title={interaction.type}>
            <Descriptions.Item label="Name">{client.name}</Descriptions.Item>
            <Descriptions.Item label="Description">{interaction.description}</Descriptions.Item>
            <Descriptions.Item label="Placement">{interaction.placement}</Descriptions.Item>
            <Descriptions.Item label="Cover-up">
              {
                interaction.coverUp ? <Icon type="check" /> : <Icon type="close" />
              }
            </Descriptions.Item>
            <Descriptions.Item label="Consultation">
              {
                interaction.consultation ? <Icon type="check" /> : <Icon type="close" />
              }
            </Descriptions.Item>
          </Descriptions>
        </Card>

        <Chat user={user} conversation={interaction.conversation}/>
      </div>
    </div>
  )
}

export default ClientScreen