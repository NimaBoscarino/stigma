import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import './components/ArtistCard'
import ArtistCard from './components/ArtistCard';
import ArtistScreen from './screens/ArtistScreen'
import LoginForm from './components/LoginForm'

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
      artists: [],
      user: null
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

  onSignIn = async (values) => {
    const result = await axios.post(
      `/api/auth/sign_in`,
      { ...values }
    );
      
    this.setState({ user: result.data.data });
  }
  
  render() {
    const {artists, user} = this.state
    return (
      <div className="App">
        <Router>
          <Link to="/">Home</Link>
          <Route exact path="/" render={() => {
            return <ArtistContainer artists={artists}/>
          }} />
          <Route path="/artists/:id" component={ArtistScreen} />
        </Router>
        <LoginForm onSignIn={this.onSignIn}/>
        <h3>{user && user.email}</h3>
      </div>
    );
  }
}

export default App;
