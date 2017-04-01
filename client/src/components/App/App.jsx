import { Message } from 'semantic-ui-react';
import React, { Component } from 'react';
import { NavBarContainer } from '../../containers';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true
    };
    // check login status here
    this.props.checkUserLogin();
    this.props.checkCompanyLogin();
    this.handleDismiss = this.handleDismiss.bind(this);
    console.log(props);
  }
  componentDidMount() {
    this.handleDismiss();
  }
  handleDismiss() {
    setTimeout(() => {
      this.setState({ visible: false });

    }, 2000);
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <NavBarContainer />
        { this.state.visible ? 
          <div>
            <Message
              onDismiss={this.handleDismiss}
              header="Logged In Successfully"
              content="thank-you for logging in"
              floating
            />
            </div>
            : '' }
        { this.props.children }
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default App;
