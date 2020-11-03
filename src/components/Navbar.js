import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  // Styling
  const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 1.125rem;
    background: ${props => props.background};
    color: white;
  `

  const NavItem = styled.a`
    padding: 1rem;
    color: white;
  `

  const NavRoute = styled(NavLink) `
    padding: 1rem;
    color: white;
    cursor: pointer;
    text-decoration: none;
    &:hover {
      font-weight: 600;
      border-bottom: 3px solid #a22633;
      margin-bottom: -3px;
    }   
  `

  const NavSpacer = styled.div`
    flex-grow: 1;
  `
  
  // Rendering
  return (
    <NavContainer background="#e43b44">
      <NavItem>Logo</NavItem>
      <NavSpacer />
      <NavRoute to="/">Home</NavRoute>
      <NavRoute to="/stories">Stories</NavRoute>
      <NavRoute to="/about">About</NavRoute>
    </NavContainer>
  )
}

export default Navbar;