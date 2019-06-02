import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import './components/ArtistCard'
import ArtistCard from './components/ArtistCard';
import ArtistScreen from './screens/ArtistScreen'
import LoginScreen from './screens/LoginScreen/index'
import createPersistedState from 'use-persisted-state';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import FollowedArtistsList from './components/FollowedArtistsList'
import { Button } from 'antd'

const useUserState = createPersistedState('user');

const PrivateRoute = ({ user, ...rest }) => (
  <Route {...rest} render={(props) => (
    // fakeAuth.isAuthenticated === true
      user
      ? rest.render(props)
      : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
  )} />
)

const RedirectHomeRoute = ({ user, ...rest }) => (
  <Route {...rest} render={(props) => (
    // fakeAuth.isAuthenticated === true
      user
      ? <Redirect to={{
          pathname: '/',
          state: { from: props.location }
        }} />
      : rest.render()
  )} />
)

const ArtistsContainer = ({user}) => {

  // the container is responsible for both fetching and displaying artists
  // should it be split into two? Maybe!

  const [artists, setArtists] = useState([])

  const fetchData = () => {
    const fetchDataAsync = async () => {
      const result = await axios.get('/api/artists', {
        headers: {
          client: user.client,
          'access-token': user['access-token'],
          uid: user.uid
        }
      })
      setArtists(result.data.artists)
    }

    fetchDataAsync()
  }

  useEffect(fetchData, [user]);


  return (
    <div style={{
      padding: '25px',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap'
    }}>
      {
        artists.map(a => <ArtistCard key={a.details.id} user={user} artist={a}/>)
      }
    </div>
  )
}

const App = (props) => {
  
  const [user, setUser] = useUserState(null)

  const logout = () => {
    // TODO: call sign_out endpoint

    setUser(null)
  }

  return (
    <div className="App">
      <Router>
        <Link to="/">Home</Link>
        
        <PrivateRoute exact path="/" user={user} render={() => (
          <ArtistsContainer user={user} />
        )}/>

        <RedirectHomeRoute exact path="/login" user={user} render={() => (
          <LoginScreen user={user} setUser={setUser} />
        )}/>

        <PrivateRoute exact path="/artists/:id" user={user} render={(props) => (
          <ArtistScreen {...props} user={user}/>
        )}/>

      </Router>
      <h3>{user && user.email}</h3>
      <h3>{user && <Button onClick={logout}>Log out</Button>}</h3>
      {
        user && user.type === 'Client' && <FollowedArtistsList user={user} />
      }
    </div>
  );
}

export default App;
