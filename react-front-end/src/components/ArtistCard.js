import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Card, Icon } from 'antd';
const { Meta } = Card;

const LinkToProfile = ({artist}) => (
  <Link to={`/artists/${artist.username}`}>
    <Icon type="calendar" />
  </Link>
)

export default (props) => {
  const { artist } = props;
  console.log(props)
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={
        <img alt="example" src={artist.avatar} />
      }
      actions={[
        <LinkToProfile artist={artist} />,
        <Icon type="heart" />
      ]}
    >
      <Meta title={artist.name} description={artist.username} />
    </Card>
  );
}