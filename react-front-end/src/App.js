import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import './components/ArtistCard'
import ArtistCard from './components/ArtistCard';
import ArtistScreen from './screens/ArtistScreen'
import LoginForm from './components/LoginForm'
import createPersistedState from 'use-persisted-state';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const useUserState = createPersistedState('user');

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

const App = (props) => {
  
  const [artists, setArtists] = useState([])

  const [user, setUser] = useUserState(null)

  const onSignIn = async (values) => {
    const result = await axios.post(
      `/api/auth/sign_in`, {
        email: values.email + '@test.com',
        password: values.password
      }
    );
      
    setUser(result.data.data);
  }

  const fetchData = () => {
    axios.get('/api/artists')
    .then((response) => {
      setArtists(response.data.artists)
    })
  }

  useEffect(fetchData, []);

  return (
    <div className="App">
      <Router>
        <Link to="/">Home</Link>
        <Route exact path="/" render={() => {
          return <ArtistContainer artists={artists}/>
        }} />
        <Route path="/artists/:id" component={ArtistScreen} />
      </Router>
      <LoginForm onSignIn={onSignIn}/>
      <h3>{user && user.email}</h3>
    </div>
  );
}

export default App;
