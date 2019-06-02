import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import './components/ArtistCard'
import ArtistCard from './components/ArtistCard';
import ArtistScreen from './screens/ArtistScreen'
import LoginForm from './components/LoginForm'
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

const LoginScreen = () => (
  <h1>You need to log in</h1>
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

  useEffect(fetchData, []);


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
  
  const [user, setUser] = useUserState(null)

  const onSignIn = async (values) => {
    const result = await axios.post(
      `/api/auth/sign_in`, {
        email: values.email + '@test.com',
        password: values.password
      }
    );

    setUser({
      ...result.data.data,
      client: result.headers.client,
      'access-token': result.headers['access-token'],
      uid: result.headers.uid
    });
  }

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
          <LoginScreen />
        )}/>

        <PrivateRoute exact path="/artists/:id" user={user} render={(props) => (
          <ArtistScreen {...props} user={user}/>
        )}/>

      </Router>
      <LoginForm onSignIn={onSignIn}/>
      <h3>{user && user.email}</h3>
      <h3>{user && <Button onClick={logout}>Log out</Button>}</h3>
      {
        user && user.type === 'Client' && <FollowedArtistsList user={user} />
      }
    </div>
  );
}

export default App;
