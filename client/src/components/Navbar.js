import React from 'react';
import styled from 'styled-components'
import { NavLink, Link } from 'react-router-dom'
import { Button } from 'antd'

const StyledNavButton = styled(Button)`
  margin: 0 5px 0 5px;
`

const StyledH1 = styled.h1`
  color: white;
  font-size: 130%;
  margin: 0 5px 0 5px;

  &:visited {
    color: white;
  }
`

const NavButton = ({to, children}) => {
  return (
    <NavLink to={to} 
      style ={{
        borderBottom: 'solid black 2px'
      }}
      activeStyle={{
        borderBottom: "solid white 2px"
      }}
    >
      <StyledH1>{children}</StyledH1>
    </NavLink>    
  )
}

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
  width: 300px;
`
const UserName = styled.h1`
  font-size: 120%;
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
        {
          user.type === 'Artist' && (
            <div style={{
              display: 'flex',
              flexDirection: 'row'
            }}>
              <NavButton to={'/clients'}>Clients</NavButton>
              <NavButton to={'/applications'}>Applications</NavButton>
              <NavButton to={'/questions'}>Questions</NavButton>
              <NavButton to={'/calendar'}>Calendar</NavButton>
            </div>
          )
        }
        {
          user.type === 'Client' && (
            <div style={{
              display: 'flex',
              flexDirection: 'row'
            }}>
              <NavButton to={'/favourites'}>Favourites</NavButton>
              <NavButton to={'/events'}>Events</NavButton>
              <NavButton to={'/interactions'}>Interactions</NavButton>
            </div>
          )
        }
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '300px'         
        }}>
          <UserName>
            {user.name}
          </UserName>
          <StyledNavButton onClick={logout}>Log out</StyledNavButton>
        </div>
      </div>
    </StyledHeader>
  )
}

export default Navbar