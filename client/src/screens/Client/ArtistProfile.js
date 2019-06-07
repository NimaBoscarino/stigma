import React, { Component } from 'react';
import axios from 'axios';
import ArtistTabsCard from '../../components/ArtistTabsCard'
import ArtistProfileBanner from '../../components/Client/ArtistProfileBanner'

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
        <ArtistProfileBanner artist={artist} />
        <ArtistTabsCard artist={artist} />
      </div>
    )
  }
}