import React from 'react';
import Navbar from './Navbar';

const Company = (props) => {
  return (
    <div>
      <div>
        <div>
          <Navbar
            onProfileClick={props.onProfileClick}
            onJobsClick={props.onJobsClick}
            onSubmissionsClick={props.onSubmissionsClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Company;
