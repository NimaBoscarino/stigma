import React, { Component } from 'react';
import axios from 'axios';
import ArtistTabsCard from '../../components/ArtistTabsCard'
import CreateInquiryModal from '../../components/Client/CreateInquiryModal'
import CreateApplicationModal from '../../components/Client/CreateApplicationModal'

import { Tag } from 'antd'

export default class ArtistScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      artist: null,
      photos: [],
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    axios.get(`/artists/${this.props.match.params.id}`)
    .then((response) => {
      this.setState({
        artist: response.data.artist
      })
    })
  }

  render() {
    const {artist} = this.state

    if (!artist) return 'Loading'

    return (
      <div style={{
        margin: '10px'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '5px'
        }}>
          <img alt={artist.name} src={artist.avatar} />
          <div>
            {
              artist.books_open && (<Tag color="green">Books open!</Tag>)
            }          
            <h2>{artist.name}</h2>
            <h3>{artist.username}</h3>
            <div style={{
              display: 'flex',
              flexDirection: 'row'
            }}>
              {
                artist.books_open && (<CreateApplicationModal />)
              }
              <CreateInquiryModal />
            </div>
          </div>
        </div>
        <ArtistTabsCard artist={artist} />
      </div>
    )
  }
}