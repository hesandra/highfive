import React from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

const NavigationBar = (props) => {
  const { user, company, onUserLoginClick, onUserLogoutClick, onCompanyLoginClick, onCompanyLogoutClick } = props;

  let logType = onUserLoginClick;
  let logText = '';
  let authType = 'company';

  if (user.isAuthenticated) {
    logText = 'Logout';
    logType = onUserLogoutClick;
    authType = 'user';
  }
  if (company.isAuthenticated) {
    logText = 'Logout';
    logType = onCompanyLogoutClick;
  }

  return (
    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Hi-Five</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
        { authType === 'user' ? <LinkContainer to="/profile"><NavItem>Profile</NavItem></LinkContainer> : '' }
        { authType === 'user' ? <LinkContainer to="/jobposts"><NavItem>Jobposts</NavItem></LinkContainer> : '' }
        <NavItem className="nav-item" onClick={logType}>{logText}</NavItem>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
