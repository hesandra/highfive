import React from 'react';
import { Grid, Row, Col, Image, Button, FormGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const algorithm = [];
const system = [];
const behavioral = [];

class InterviewForm extends React.Component {
  renderAll() {
    return this.props.companyProfile.selectedQuestion.map((item) => {
      //console.log('in render all map', algorithm, 'selected questions', this.props.companyProfile.selectedQuestion, 'item', item)
      if (item.type === 'algorithm' && (algorithm.findIndex((el) => el.id === item.id)) === -1) {
        algorithm.push(item)
      }
      if (item.type === 'data structure' && (system.findIndex((el) => el.id === item.id)) === -1) {
        system.push(item)
      }
      if (item.type === 'behavioral' && (behavioral.findIndex((el) => el.id === item.id)) === -1) {
        behavioral.push(item)
      }
    })
  }

  /*  shouldComponentUpdate(nextProps, nextState) {
      console.log('nextPropsCompanyprofile', nextProps.companyProfile)
      console.log('thispropscompanyprofile', this.props.companyProfile)
      if (this.props.companyProfile.selectedQuestion) {
        console.log('in shold UPDATE after if statement')
        if (this.props.companyProfile.selectedQuestion.length < nextProps.companyProfile.selectedQuestion.length) {
          return true;
        }
      }
      return false;
    }*/
  render() {
    console.log('this.props.companyProfile in Interview Form', this.props.companyProfile);
    if (this.props.companyProfile.selectedQuestion) {
      this.renderAll()
      return (
        <div>
          <div><h3 className="selectedQ">Selected algorithm questions</h3>
            <div>{algorithm.map((item) => {
              return (
                <div>{item.question}</div>)
            })}
            </div>
            <h3 className="selectedQ">Selected system design questions</h3>
            <div>{system.map((item) => {
              return (
                <div>{item.question}</div>)
            })}
            </div>
            <h3 className="selectedQ">Selected behavioral questions</h3>
            <div>{behavioral.map((item) => {
              return (
                <div>{item.question}</div>)
            })}
              <div className="space"></div>
              <Button>Save</Button>
              <div className="space"></div>
            </div>
          </div>
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