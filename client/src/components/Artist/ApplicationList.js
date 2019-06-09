import React, { useState, useEffect } from 'react'
import { Table, Divider, Tag } from 'antd';
import { Link } from 'react-router-dom'
import axios from 'axios'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Title',
    dataIndex: 'subject',
    key: 'subject',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, client) => (
      <span>
        <Link to={`/clients/${client.id}`}>View</Link>
      </span>
    ),
  },
];

const ClientList = ({ user }) => {
  const [clients, setClients] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/artists/${user.id}/clients?status=application`)
      setClients(result.data.clients)
    };

    fetchData();
  }, []);

  return (
    <Table columns={columns} dataSource={clients} />
  )
}

export default ClientList