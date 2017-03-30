import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    //check login status here
  }
  render() {
    return (
      <div>
        { this.props.children }
      </div>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.element.isRequired,
}

export default App;