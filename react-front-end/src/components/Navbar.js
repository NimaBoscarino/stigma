import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button } from 'antd'

const Logo = styled.img`
  height: 40px;
  margin-left: 10px;
`

const LogoText = styled.h1`
  font-family: 'Lobster Two',cursive;
  font-weight: bold;
  font-style: italic;
  font-size: 200%;
  color: white;
  margin: 0;
`
const UserName = styled.h1`
  font-size: 200%;
  color: white;
  margin: 0 15px 0 0;
`

const StyledHeader = styled.header`
  max-width: 100%;
  background: black;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5);
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Navbar = ({ user, logout }) => {
  return (
    <StyledHeader>
      <div style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 10px 0 10px'
      }}>
        <Link to="/">
          <LogoText>
            {"Stigma.ink "}
            <Logo alt="logo" src="/logo.svg" />
          </LogoText>
        </Link>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',          
        }}>
          <UserName>
            {user.name}
          </UserName>
          <Button onClick={logout}>Log out</Button>
        </div>
      </div>
    </StyledHeader>
  )
}

export default Navbar