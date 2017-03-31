import React from 'react';
import Signup from './Signup';

const Home = (props) => {
  return (
    <div>
      <div>
        <div>
          <Signup
            onUserLoginClick={props.onUserLoginClick}
            onCompanyLoginClick={props.onCompanyLoginClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
