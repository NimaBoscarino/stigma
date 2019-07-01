import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'antd';
import ArtistCalendar from './ArtistCalendar';
import PhotoMosaic from './PhotoMosaic'

const PhotoList = ({artist}) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/artists/${artist.username}/photos`);
      setPhotos(result.data.photos);
    };

    fetchData();
  }, []);

  return (
    <PhotoMosaic photos={photos} />
  )
}

const PortfolioTab = ({ artist }) => {
  return (
    <div>
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
