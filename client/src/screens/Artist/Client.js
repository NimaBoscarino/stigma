import React, { useState, useEffect } from 'react'
import axios from 'axios'

// This page is where the artist can interface with the client, who may be at any stage of the Interaction

const ClientScreen = ({ interaction_id }) => {

  // use interaction_id to get the interaction
  // i realize I'd made this call before... 
  // it may be a good idea to bring in Redux soon? Maybe. Maybe not.

  const [client, setClient] = useState(null)
  const [interaction, setInteraction] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/interactions/${interaction_id}`)

      setClient(result.data.client)
      setInteraction({
        ...result.data.interaction,
        ...result.data.information,
        type: result.data.type,
        images: result.data.images
      })
    };

    fetchData();
  }, []);

  if (!client || !interaction) return 'Loading...'

  return (
    <div>
      <h1>{interaction.type} - {client.name}</h1>
      <h2>{interaction.information}</h2>
      <p>{interaction.description}</p>
      <p>{interaction.placement}</p>
      <p>{interaction.coverUp && 'CoverUp'}</p>
      <p>{interaction.consultation && 'Consultation'}</p>
      {
        interaction.images.length && interaction.images.map(i => {
          return (
            <img src={i.url} key={i.id} style={{
              height: '200px'
            }}/>
          )
        })
      }
    </div>
  )
}

export default ClientScreen