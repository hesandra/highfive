import React from 'react';
import Signup from './Signup';

const Home = (props) => {
  const { isUserAuthenticated, isCompanyAuthenticated, onUserLoginClick,
    onCompanyLoginClick, onAuthedUserLoginClick, onAuthedCompanyLoginClick } = props;
  return (
    <div>
      <div>
        <div>
          <Signup
            onUserLoginClick={onUserLoginClick}
            onCompanyLoginClick={onCompanyLoginClick}
            onAuthedUserLoginClick={onAuthedUserLoginClick}
            onAuthedCompanyLoginClick={onAuthedCompanyLoginClick}
            isUserAuthed={isUserAuthenticated}
            isCompanyAuthed={isCompanyAuthenticated}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
