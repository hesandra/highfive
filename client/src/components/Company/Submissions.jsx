import React from 'react';
import { } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, Image, Icon, Rating, List, Popup, Button, Label } from 'semantic-ui-react';
import { Form, Col, FormGroup, ControlLabel, FormControl, DropdownButton, MenuItem, Modal } from 'react-bootstrap';
import { showVideos } from '../../actions/company';
import ApplicationModal from './ApplicationModal';


class PositionsLevel extends React.Component {
  renderSubmissions() {
    console.log('PROPS IN SUBMISSIONS', this.props);
    return (
      <div>
        {this.props.companyProfile.submissions.map((item, idx) => {
          return (
            <div>
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
                   <Button color="purple" fluid onClick={() => this.props.showVideos({ videolink: item.video[0].href, submissionId: item.id })}>Watch application</Button>
                   <div><a href={item.video[0].href}>Download application here</a></div>
                </Card.Content>
                <Card.Content extra>
                <input className="notes" placeholder="take notes here"></input>
                <div className="spaceQ"></div>
                  <FormGroup controlId="formControlsSelect">
                    <FormControl componentClass="select" placeholder="select" onChange={this.handleChange}>
                      <option value="select">new</option>
                      <option >passed</option>
                      <option >failed</option>
                      <option >second chance</option>
                    </FormControl>
                  </FormGroup>
                  <Rating icon="star" defaultRating={3} maxRating={5} />
                </Card.Content>
              </Card>
            </Card.Group>
     </div>
      )}
    )}
</div>
)};
       
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
  return bindActionCreators({ showVideos }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PositionsLevel);



