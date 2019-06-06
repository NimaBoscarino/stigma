import React from 'react';
import axios from 'axios';
import makeAxios from './utils/axios'
import './App.css';
import './components/ArtistCard'
import LoginScreen from './screens/LoginScreen/index'
import ArtistView from './screens/Artist/index'
import ClientView from './screens/Client/index'
import createPersistedState from 'use-persisted-state';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute'

const useUserState = createPersistedState('user');

const RedirectHomeRoute = ({ user, ...rest }) => (
  <Route {...rest} render={(props) => (
      user
      ? <Redirect to={{
          pathname: '/',
          state: { from: props.location }
        }} />
      : rest.render()
  )} />
)

const App = (props) => {
  
  const [user, setUser] = useUserState(null)

  makeAxios(axios, user)

  const logout = () => {
    // TODO: call sign_out endpoint

    setUser(null)
  }

  return (
    <div className="App" style={{ height: '100%' }}>
      <Router>
        <Switch>          
          <RedirectHomeRoute exact path="/login" user={user} render={() => (
            <LoginScreen user={user} setUser={setUser} />
          )}/>

          <PrivateRoute path="/" user={user} render={(props) => {
            return user.type === 'Artist' ? 
              <ArtistView {...props} logout={logout} user={user}/> :
              <ClientView {...props} logout={logout} user={user}/>
          }}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
