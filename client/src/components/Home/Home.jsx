import React from 'react';
import Signup from './Signup';

const Home = (props) => {
  console.log(props, 'props in home')
  return (
    <div>
      <div>
        <div>
          <Signup onLoginClick={props.onLoginClick} />
        </div>
      </div>
    </div>
  );
};

export default Home;
