import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Card, Icon, Tag } from 'antd';
import axios from 'axios'
const { Meta } = Card;

const LinkToProfile = ({artist}) => (
  <Link to={`/${artist.username}`}>
    <Icon type="calendar" />
  </Link>
)

export default (props) => {
  const { artist, user} = props;
  const { details, followed, books_open } = artist

  const [heart, setHeart] = useState(followed)

  const followArtist = async () => {
    const result = await axios('/api/followings', {
      method: 'post',
      data: {
        artist_id: details.id
      },
      headers: {
        client: user.client,
        'access-token': user['access-token'],
        uid: user.uid
      }
    })

    setHeart(true)
  }

  const unfollowArtist = async () => {
    const result = await axios(`/api/followings/${details.id}`, {
      method: 'delete',
      headers: {
        client: user.client,
        'access-token': user['access-token'],
        uid: user.uid
      }
    })

    setHeart(false)
  }

  const onHeartClick = async () => {
    if (!heart) {
      followArtist(details.id)
    } else {
      unfollowArtist(details.id)
    }
  }

  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={
        <div>
          {
            books_open && (<Tag style={{
              position: 'absolute',
              top: 5,
              right: 0
            }}
            color="green">Books open!</Tag>)
          }          
          <img style={{width: '100%'}} alt="example" src={details.avatar} />
        </div>
      }
      actions={[
        <LinkToProfile artist={details} />,
        <Icon onClick={onHeartClick} type="heart" theme={heart ? 'filled' : null}/>
      ]}
    >
      <Meta title={details.name} description={details.username} />
    </Card>
  );
}