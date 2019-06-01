import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import './components/ArtistCard'
import ArtistCard from './components/ArtistCard';
import { BrowserRouter as Router, Route } from "react-router-dom";

const ArtistContainer = ({artists}) => {
  return (
    <div style={{
      padding: '25px',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap'
    }}>
      {
        artists.map(a => <ArtistCard key={a.id} artist={a}/>)
      }
    </div>
  )
}

class ArtistPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      artist: null,
      photos: []
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    console.log(this.props.match.params.id)
    axios.get(`/api/artists/${this.props.match.params.id}`)
    .then((response) => {
      this.setState({
        artist: response.data.artist
      })
    })

    axios.get(`/api/artists/${this.props.match.params.id}/photos`)
    .then((response) => {
      this.setState({
        photos: response.data.photos
      })
    })

  }

  render() {
    const {artist, photos} = this.state

    if (!artist) return 'Loading'

    return (
      <div style={{
      }}>
        <img alt={artist.name} src={artist.avatar} />
        <h2>{artist.name}</h2>
        <h3>{artist.username}</h3>
        {
          photos.map(p => <img alt={p.url} src={p.url} />)
        }
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!',
      artists: []
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    axios.get('/api/artists')
    .then((response) => {
      this.setState({
        artists: response.data.artists
      });
    }) 
  }

  render() {
    const {artists} = this.state
    return (
      <div className="App">
        <Router>
          <Route exact path="/" render={() => {
            return <ArtistContainer artists={artists}/>
          }} />
          <Route path="/artists/:id" component={ArtistPage} />
        </Router>
      </div>
    );
  }
}

export default App;
