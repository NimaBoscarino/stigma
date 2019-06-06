import React, { useState, useEffect } from 'react'
import { Table, Divider, Tag } from 'antd';
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
    dataIndex: 'text',
    key: 'text',
  }
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