import React from 'react';
import { Grid, Row, Col, Image, Button, FormGroup, Form, ControlLabel, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ScrollArea from 'react-scrollbar';
import ScrollbarWrapper from 'react-scrollbar';
import ReactDOM from 'react-dom';
import { submitTitle } from '../../actions/company';

class InterviewFormMid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobTitle: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      jobTitle: value,
    });
  }

  handleSubmit(event) {
    this.props.submitTitle(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <div>
      <div>MID-Level</div>
      <Form horizontal onSubmit={this.handleSubmit}>
        <br />
        <FormGroup>
          <Col componentClass={ControlLabel} sm={1}>
            JobTitle
        </Col>
          <Col sm={5}>
            <FormControl name="name" type="text" value={this.state.jobTitel} onChange={this.handleChange} />
          </Col>
        </FormGroup>
        </Form>
      <div className="spaceQ"></div>
      <div className="scroll">
        <div className="questions">Here are questions to select from - algorithms</div>
        <div className="questions">Here are questions to select from - algorithms</div>        
        <div className="questions">Here are questions to select from - algorithms</div>       
        <div className="questions">Here are questions to select from - algorithms</div>
        <div className="questions">Here are questions to select from - algorithms</div>
      </div>
      <div className="spaceQ"></div>
      <div className="scroll">
        <div className="questions">Here are questions to select from - system designs</div>
        <div className="questions">Here are questions to select from - system designs</div>        
        <div className="questions">Here are questions to select from - system designs</div>        
        <div className="questions">Here are questions to select from - system designs</div>
        <div className="questions">Here are questions to select from - system designs</div>
      </div>
      <div className="spaceQ"></div>      
      <div className="scroll">
        <div className="questions">Here are questions to select from - behavioral</div>
        <div className="questions">Here are questions to select from - behavioral</div>
        <div className="questions">Here are questions to select from - behavioral</div>
        <div className="questions">Here are questions to select from - behavioral</div>
        <div className="questions">Here are questions to select from - behavioral</div>
      </div>
      </div>
      /*</ScrollArea>*/
    )
  }
}

function mapStateToProps(state) {
  return {
    companyProfile: state.companyProfile
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ submitTitle }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(InterviewFormMid);