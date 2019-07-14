import React, { useState, useEffect } from 'react'
import { Table, Divider, Tag } from 'antd';
import { Link } from 'react-router-dom'
import axios from 'axios'

const columns = [
  {
    title: 'Artist',
    dataIndex: 'artist',
    key: 'artist',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, interaction) => (
      <span>
        <Link to={`/interactions/${interaction.id}`}>View</Link>
      </span>
    ),
  },
];

const InteractionsList = ({ user }) => {
  const [interactions, setInteractions] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/clients/${user.id}/interactions`)
      setInteractions(result.data.interactions)
    };

    fetchData();
  }, []);

  return (
    <Table columns={columns} dataSource={interactions} />
  )
}

export default InteractionsList