import React from 'react'
import LoginForm from './components/LoginForm'
import axios from 'axios'

const LoginScreen = ({ user, setUser }) => {
  
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

  return (
    <div>
      <h1>You need to log in</h1>
      <LoginForm onSignIn={onSignIn}/>
    </div>

  )
}

export default LoginScreen