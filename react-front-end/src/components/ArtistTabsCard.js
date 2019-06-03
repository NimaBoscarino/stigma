import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'antd';
import ArtistCalendar from './ArtistCalendar';
import styled from 'styled-components'

const PhotosContainer = styled.div`
  line-height: 0;
  
  -webkit-column-count: 4;
  -webkit-column-gap:   0px;
  -moz-column-count:    4;
  -moz-column-gap:      0px;
  column-count:         4;
  column-gap:           0px;  

  & img {
    /* Just in case there are inline attributes */
    width: 100% !important;
    height: auto !important;
    padding: 3px;
  }
`

const Photo = ({src}) => {
  return (<img style={{
    width: '300px'
  }} alt={src} src={src} />)
}

const PhotoList = ({artist}) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `/api/artists/${artist.username}/photos`,
      );

      setPhotos(result.data.photos);
    };

    fetchData();
  }, []);

  return (
    <PhotosContainer>
      {
        photos.map(p => <Photo key={p.id} src={p.url} />)
      }
    </PhotosContainer>
  )
}

const PortfolioTab = ({ artist }) => {
  return (
    <div>
      <p>Hey this is a description lol</p>
      <PhotoList artist={artist} />
    </div>      
  )
}

const tabList = [
  {
    key: 'tab1',
    tab: 'Portfolio',
  },
  {
    key: 'tab2',
    tab: 'Calendar',
  },
];

export default class TabsCard extends React.Component {
  state = {
    key: 'tab1',
    noTitleKey: 'app',
    contentList: {
      tab1: <PortfolioTab artist={this.props.artist} />,
      tab2: <ArtistCalendar artist={this.props.artist} />,
    }
  };
  
  onTabChange = (key, type) => {
    this.setState({ [type]: key });
  };

  render() {
    const {artist} = this.props
    const {contentList} = this.state
    return (
      <div>
        <Card
          style={{ width: '100%' }}
          tabList={tabList}
          activeTabKey={this.state.key}
          onTabChange={key => {
            this.onTabChange(key, 'key');
          }}
        >
          {contentList[this.state.key]}
        </Card>
      </div>
    );
  }
}
