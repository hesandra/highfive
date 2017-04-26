import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, Image, Icon, Rating, List, Popup, Label, Segment, TextArea } from 'semantic-ui-react';
import { Form, Col, FormGroup, ControlLabel, FormControl, DropdownButton, MenuItem, Modal, Button } from 'react-bootstrap';
import { showVideos, updateSubmission } from '../../actions/company';
import ApplicationModal from './ApplicationModal';
import SaveModal from './SaveModal';

const style = {
  borderRadius: 0,
  opacity: 0.7,
  padding: '2em',
};

class PositionsLevel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: '',
      notes: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.clearNotes = this.clearNotes.bind(this);
  }

  clearNotes(idx) {
    document.getElementById(`notes${idx}`).value = '';
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  renderSubmissions() {
    return (
      <div className="ui stackable twelve column grid">
        {this.props.companyProfile.submissions.map((item, idx) => {
          return (
            <div className="cardStyle">
              <Card.Group >
                <Card key={item.id} >
                  <Image
                    height={200}
                    src={item.user.profile_img}
                  />
                  <Card.Content className="cardSize">
                    <Card.Header />
                    <Card.Meta>
                      <span className="date posted_on">
                        applied on : {item.created_at}
                      </span>
                    </Card.Meta>
                    <Card.Description>
                      <List>
                        <List.Item icon="user" className="appl-name" content={item.user.name} />
                        <a href={item.user.github_url}>
                          <i className="fa fa-github" aria-hidden="true" />
                        </a>
                        <a href={item.user.linkedin_url}>
                          {' '} | {' '}
                          <i className="fa fa-linkedin" aria-hidden="true" />
                        </a>
                      </List>
                    </Card.Description>
                    {this.props.companyProfile.renderStatus && this.props.companyProfile.status.subId === item.id ?
                      <div className="status status-font">status: {this.props.companyProfile.status.status}</div> :
                      <div className="status status-font">status: {item.status}</div>}
                    {this.props.companyProfile.renderStatus && this.props.companyProfile.status.subId === item.id ?
                      <div className="feedback status-font">feedback:{this.props.companyProfile.status.notes}</div> :
                      <div className="feedback status-font">feedback: {item.notes}</div>}
                    <Button bsStyle="success" fluid onClick={() => this.props.showVideos({ videolink: item.video[0].href, submissionId: item.id })}>Watch application</Button>
                  </Card.Content>
                  <Card.Content extra>
                    <Form>
                      <TextArea className="form-control notesField" placeholder="Give your feedback to the applicant" id={`notes${idx}`} name="notes" onChange={this.handleChange} autoHeight />
                    </Form>
                    <FormGroup controlId="formControlsSelect">
                      <FormControl componentClass="select" placeholder="select" name="status" onChange={this.handleChange} >
                        <option value="select">select status</option>
                        <option >viewed</option>
                        <option >undecided</option>
                        <option >passed</option>
                        <option >failed</option>
                      </FormControl>
                    </FormGroup>
                    <Popup
                      trigger={
                        <Button className="btn btn-primary" onClick={() => { this.props.updateSubmission({ subId: item.id, status: this.state.status, notes: this.state.notes, jobPostId: item.jobpost_id }); { () => { this.state.notes = ''; }; } this.clearNotes(idx); }}>Save</Button>}
                      content="Clicking here will inform the applicant"
                      style={style}
                      inverted
                    />
                  </Card.Content>
                </Card>
              </Card.Group>
            </div>
          );
        }
        )}
      </div>
    );
  }

  render() {
    if (this.props.companyProfile.submissions && this.props.companyProfile.submissions.length === 0) {
      return (<h2 style={{ 'margin-top': 20 }} className="text-center">No submissions yet</h2>);
    } else if (this.props.companyProfile.submissions !== undefined) {
      return (
        <div>
          <div>{this.renderSubmissions()}
            <ApplicationModal />
            <SaveModal />
          </div>
        </div>);
    } else if (this.props.companyProfile.submissions === undefined) {
      return (<h2 style={{ 'margin-top': 20 }} className="text-center">Find submissions through a jobpost</h2>);
    }
  }
}

function mapStateToProps(state) {
  return {
    companyProfile: state.companyProfile
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ showVideos, updateSubmission }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PositionsLevel);

