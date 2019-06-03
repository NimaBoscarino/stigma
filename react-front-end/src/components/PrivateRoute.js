import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ user, ...rest }) => (
  <Route {...rest} render={(props) => (
      user
      ? rest.render(props)
      : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
  )} />
)

export default PrivateRoute