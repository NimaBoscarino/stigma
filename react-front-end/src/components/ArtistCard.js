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
  const { details, followed } = artist
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={
        <img alt="example" src={details.avatar} />
      }
      actions={[
        <LinkToProfile artist={details} />,
        <Icon type="heart" theme={followed ? 'filled' : null}/>
      ]}
    >
      <Meta title={details.name} description={details.username} />
    </Card>
  );
}