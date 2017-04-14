import React from 'react';
import { } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, Image, Icon, Rating, List, Popup, Button, Label, Segment, TextArea } from 'semantic-ui-react';
import { Form, Col, FormGroup, ControlLabel, FormControl, DropdownButton, MenuItem, Modal } from 'react-bootstrap';
import { showVideos, updateSubmission } from '../../actions/company';
import ApplicationModal from './ApplicationModal';


class PositionsLevel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: '', 
      notes: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
      //industry: value,
      //location: value,
    });
}    

  renderSubmissions() {
    console.log('PROPS IN SUBMISSIONS', this.props);
    console.log('state in submissions', this.state);
    return (
      <div>
        {this.props.companyProfile.submissions.map((item, idx) => {
          return (  
              <Card.Group doubling itemsPerRow={'four'}>
                <Card key={item.id}>
                  <Image
                    height={200}
                    //label={{ color: 'blue', icon: 'globe', ribbon: true }}
                    src={item.user.profile_img}
                  />
                  <Card.Content>
                    <Card.Header>
                    </Card.Header>
                    <Card.Meta>
                      <span className="date posted_on">
                        applied on : 04/10/2017
                      </span>
                    </Card.Meta>
                    <Card.Description>
                      <List>
                        <List.Item icon="user" content={item.user.name} />
                        <a href={item.user.github_url}>
                          <i className="fa fa-github" aria-hidden="true" />
                        </a>
                        <a href={item.user.linkedin_url}>
                          {' '} | {' '}
                          <i className="fa fa-linkedin" aria-hidden="true" />
                        </a>
                      </List>
                    </Card.Description>
                    <div className="spaceQ"></div>
                    <Button inverted color='violet' fluid onClick={() => this.props.showVideos({ videolink: item.video[0].href, submissionId: item.id })}>Watch application</Button>
                  </Card.Content>
                  <Card.Content extra>
                   <Form>
                   <TextArea className="form-control notesField" placeholder={item.notes} name="notes" onChange={this.handleChange} autoHeight />
                   </Form>
                    <div className="spaceQ"></div>
                    <FormGroup controlId="formControlsSelect">
                      <FormControl componentClass="select" placeholder="select" name="status" value={item.status} onChange={this.handleChange} >
                        <option value="select">{item.status}</option>
                        <option >viewed</option>
                        <option >pass</option>
                        <option >fail</option>
                        <option >undecided</option>
                      </FormControl>
                    </FormGroup>
                    <Button color="purple" size="mini" onClick={() => this.props.updateSubmission({ subId: item.id, status: this.state.status, notes:this.state.notes  })}>Save</Button>
                  </Card.Content>
                </Card>
              </Card.Group> 
          )
        }
        )}
      </div>
    )
  };

  render() {
    if (this.props.companyProfile.submissions !== undefined) {
      return (
        <div>{this.renderSubmissions()}
          <ApplicationModal />
        </div>
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
  return bindActionCreators({ showVideos, updateSubmission }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PositionsLevel);



