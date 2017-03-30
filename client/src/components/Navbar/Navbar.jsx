import React from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { Link } from 'react-router';

const NavigationBar = (props) => {
  console.log(props);
  return (
    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Hi-Five</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
        <NavItem onClick={props.onLoginClick} href="#">Login</NavItem>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
