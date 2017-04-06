import React from 'react';
import { Grid, Row, Col, Image, Button, FormGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class InterviewForm extends React.Component {
  renderAll() {
    return this.props.companyProfile.selectedQuestion.map((item) => {
      if (item.type === 'algorithm'){
      return (
        <div>
        <h2>Algorithm Questions</h2>
        <div>
          {item.question}
        </div>
        </div>
      )
    } 
     else if (item.type === 'data structure'){
      return (
        <div>
        <h2>Data Structure Questions</h2>
        <div>
          {item.question}
        </div>
        </div>
      )
    } else if (item.type === 'behavioral'){
      return (
        <div>
        <h2>Behavioral Questions</h2>
        <div>
          {item.question}
        </div>
        </div>
      )
    } else {
      return (
      <div></div>
    )}
  }
    );
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('inshouldComponentupdate')
    console.log('nextPropsCompanyprofile', nextProps.companyProfile)
    console.log('thispropscompanyprofile', this.props.companyProfile)
    if (this.props.companyProfile.selectedQuestion) {
      console.log('in shold UPDATE after if statement')
      if (this.props.companyProfile.selectedQuestion.length < nextProps.companyProfile.selectedQuestion.length) {
        return true;
      }
    }
    return false;
  }
  render() {
    if (this.props.companyProfile.selectedQuestion) {
      return (
        <div><h2>Selected Algorithm questions</h2>
        <div>{this.renderAll()}</div>
        </div>
      )
    } return <div></div>
  }
}



function mapStateToProps(state) {
  return {
    companyProfile: state.companyProfile
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(InterviewForm);