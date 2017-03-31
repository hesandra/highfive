import React from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { Link } from 'react-router';

const NavigationBar = (props) => {
  return (
    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Hi-Five</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>

        <NavItem onClick={props.onUserLoginClick} href="#">Login</NavItem>
        <NavItem href="#">status: { props.isAuthenticated ? ' loggedin' : ' loggedout' }</NavItem>
        <NavItem onClick={props.onUserLogoutClick} href="#">Logout</NavItem>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
