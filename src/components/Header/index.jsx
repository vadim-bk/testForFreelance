import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = () => {
  const Navbar = styled.nav`
    background-color: #343a40;
    flex-flow: row nowrap;
    justify-content: flex-start;
    position: relative;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
  `;

  const Nav = styled.div`
    margin-right: auto;
    display: flex;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  `;

  const NavLink = styled.span`
    display: block;
    padding: 0.5rem 1rem;
  `;

  return (
    <Navbar bg="dark" variant="dark">
      <Nav className="mr-auto">
        <Link to="/">
          <NavLink as="span">Home</NavLink>
        </Link>
        <Link to="/users/new">
          <NavLink as="span">Create new user</NavLink>
        </Link>
      </Nav>
    </Navbar>
  );
};
