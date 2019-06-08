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
    title: 'Subject',
    dataIndex: 'subject',
    key: 'subject',
  },
  {
    title: 'Text',
    dataIndex: 'text',
    key: 'text',
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

const QuestionsScreen = ({ user }) => {
  const [clients, setClients] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/artists/${user.id}/clients?status=inquiry`)
      setClients(result.data.clients)
    };

    fetchData();
  }, []);

  return (
    <Table columns={columns} dataSource={clients} />
  )
}

export default QuestionsScreen