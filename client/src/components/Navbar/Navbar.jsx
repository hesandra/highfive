import React from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

const NavigationBar = (props) => {
  const { user, company, onUserLoginClick, onUserLogoutClick } = props;
  return (
    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Hi-Five</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
        { user.isAuthenticated ?
          <LinkContainer to="/profile">
            <NavItem>Profile</NavItem>
          </LinkContainer>
          : '' }
        { user.isAuthenticated ?
          <LinkContainer to="/jobposts">
            <NavItem>Job Posts</NavItem>
          </LinkContainer>
          : '' }
        { !user.isAuthenticated ?
          <NavItem onClick={onUserLoginClick}>Login</NavItem> :
          <NavItem onClick={onUserLogoutClick}>Logout</NavItem>
        }
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
