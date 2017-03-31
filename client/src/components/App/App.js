import React, { Component } from 'react';
import { NavBarContainer } from '../../containers';

class App extends Component {
  constructor(props) {
    super(props);

    // check login status here
    this.props.checkUserLogin();
  }
  render() {
    return (
      <div>
        <NavBarContainer />
        { this.props.children }
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default App;
