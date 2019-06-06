import React from 'react'
import LoginForm from './components/LoginForm'
import axios from 'axios'
import styled from 'styled-components'
import { Layout, Icon } from 'antd'
const { Footer } = Layout;

const StyledFooter = styled(Footer)`
  background: transparent;
`

const ScreenContainer = styled.div`
  background: green;
  height: 100%;
  background: url('/assets/background.jpg');
  box-shadow: 0 0 200px rgba(0,0,0,0.9) inset;
`

const Logo = styled.img`
  height: 100px;
  margin: 5px;
`

const FogContainer = styled.div`
  height: 100%;
  background: rgba(100,100,100,0.4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const LogoText = styled.h1`
  font-family: 'Lobster Two',cursive;
  font-weight: bold;
  font-style: italic;
  font-size: 7vw;
  color: white;
  margin: 5px;
  margin-bottom: 35px;
`

const LoginScreen = ({ user, setUser }) => {
  
  const onSignIn = async (values) => {
    const result = await axios.post(
      `/auth/sign_in`, {
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
    <ScreenContainer>
      <FogContainer>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <LogoText>
            {"Stigma.ink "}
            <Logo alt="logo" src="/logo.svg" />
          </LogoText>
        </div>
        <LoginForm onSignIn={onSignIn}/>
        <StyledFooter style={{color: 'white'}}>Made with <Icon type="heart" theme="filled"/> in Vancouver</StyledFooter>
      </FogContainer>
    </ScreenContainer>
  )
}

export default LoginScreen