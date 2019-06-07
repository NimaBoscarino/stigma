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
  }
];

const ClientList = ({ user }) => {
  const [clients, setClients] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/artists/${user.id}/clients?status=booking`, {
        headers: {
          client: user.client,
          'access-token': user['access-token'],
          uid: user.uid
        }
      })

      setClients(result.data.clients)
    };

    fetchData();
  }, []);

  return (
    <Table columns={columns} dataSource={clients} />
  )
}

export default ClientList