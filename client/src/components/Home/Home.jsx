import React from 'react';
import Signup from './Signup';
import { Image } from 'semantic-ui-react'

const Home = (props) => {
  const { isUserAuthenticated, isCompanyAuthenticated, onUserLoginClick,
    onCompanyLoginClick, onAuthedUserLoginClick, onAuthedCompanyLoginClick } = props;
  return (
    <div>
      <img src="./images/background.jpg" />
        <Signup
          onUserLoginClick={onUserLoginClick}
          onCompanyLoginClick={onCompanyLoginClick}
          onAuthedUserLoginClick={onAuthedUserLoginClick}
          onAuthedCompanyLoginClick={onAuthedCompanyLoginClick}
          isUserAuthed={isUserAuthenticated}
          isCompanyAuthed={isCompanyAuthenticated}
        />
    </div>
  );
};

export default Home;
