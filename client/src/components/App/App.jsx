import { Message } from 'semantic-ui-react';
import React, { Component } from 'react';
import recordRTC from 'recordrtc';
import { captureUserMedia } from '../../utils/recordRTCUtils';
import { NavBarContainer } from '../../containers';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    // check login status here
    this.props.checkUserLogin();
    this.props.checkCompanyLogin();
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
