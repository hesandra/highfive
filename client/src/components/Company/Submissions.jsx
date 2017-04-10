import React from 'react';
import { } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSubmissions } from '../../actions/company';

class PositionsLevel extends React.Component {
  componentDidMount() {
    //this.props.getSubmissions();
  }
  renderJobs() {
    //console.log('PROPS IN SUBMISSIONS', this.props);
    return (<div>this should show</div>
    );
  }
  render() {
    if (this.props.companyProfile.jobs !== undefined) {
      return (
        <div>{this.renderJobs()}</div>
      )
    } else {
      return (<div>{}</div>)
    }
  }
}

function mapStateToProps(state) {
  return {
    companyProfile: state.companyProfile
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PositionsLevel);



