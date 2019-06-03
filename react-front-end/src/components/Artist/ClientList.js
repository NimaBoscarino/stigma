import React, { useState, useEffect } from 'react'
import { Table, Divider, Tag } from 'antd';
import axios from 'axios'

const columns = [
  {
    title: 'Name',
    dataIndex: 'details.name',
    key: 'name',
    render: text => <a href="javascript:;">{text}</a>,
  },
  {
    title: 'Email',
    dataIndex: 'details.email',
    key: 'email',
  },
  {
    title: 'Subject',
    dataIndex: 'interaction.text',
    key: 'text',
  },
  // {
  //   title: 'Tags',
  //   key: 'tags',
  //   dataIndex: 'tags',
  //   render: tags => (
  //     <span>
  //       {tags.map(tag => {
  //         let color = tag.length > 5 ? 'geekblue' : 'green';
  //         if (tag === 'loser') {
  //           color = 'volcano';
  //         }
  //         return (
  //           <Tag color={color} key={tag}>
  //             {tag.toUpperCase()}
  //           </Tag>
  //         );
  //       })}
  //     </span>
  //   ),
  // },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a href="javascript:;">View</a>
        <Divider type="vertical" />
        <a href="javascript:;">Delete</a>
      </span>
    ),
  },
];

const ClientList = ({ user }) => {
  const [clients, setClients] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/api/artists/${user.id}/clients`, {
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