import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import './components/ArtistCard'
import ArtistCard from './components/ArtistCard';
import ArtistScreen from './screens/ArtistScreen'
import LoginForm from './components/LoginForm'
import createPersistedState from 'use-persisted-state';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { Button } from 'antd'

const useUserState = createPersistedState('user');

const PrivateRoute = ({ user, ...rest }) => (
  <Route {...rest} render={(props) => (
    // fakeAuth.isAuthenticated === true
      user
      ? rest.render()
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

  const fetchData = async () => {
    const result = await axios.get('/api/artists')
    setArtists(result.data.artists)
  }

  const logout = () => {
    // TODO: call sign_out endpoint

    setUser(null)
  }

  useEffect(fetchData, []);

  return (
    <div className="App">
      <Router>
        <Link to="/">Home</Link>
        
        <PrivateRoute exact path="/" user={user} render={() => (
          <ArtistContainer artists={artists}/>
        )}/>

        <RedirectHomeRoute exact path="/login" user={user} render={() => (
          <LoginScreen />
        )}/>

        <Route path="/artists/:id" component={ArtistScreen} />
      </Router>
      <LoginForm onSignIn={onSignIn}/>
      <h3>{user && user.email}</h3>
      <h3>{user && <Button onClick={logout}>Log out</Button>}</h3>
    </div>
  );
}

export default App;
