import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import './components/ArtistCard'
import ArtistCard from './components/ArtistCard';
import ArtistScreen from './screens/ArtistScreen'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
          <Link to="/">Home</Link>
          <Route exact path="/" render={() => {
            return <ArtistContainer artists={artists}/>
          }} />
          <Route path="/artists/:id" component={ArtistScreen} />
        </Router>
      </div>
    );
  }
}

export default App;
