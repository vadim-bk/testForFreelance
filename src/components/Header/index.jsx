import React from 'react';
import { Link } from 'react-router-dom';

import routes from '../../config/routes';
import { Nav, Navbar, NavLink } from './Header.styled';

export const Header = () => {
  return (
    <Navbar>
      <Nav>
        <Link to={routes.home}>
          <NavLink>Home</NavLink>
        </Link>
        <Link to={routes.createUser}>
          <NavLink>Create new user</NavLink>
        </Link>
      </Nav>
    </Navbar>
  );
};
