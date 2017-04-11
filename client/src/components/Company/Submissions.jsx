import React from 'react';
import { } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, Image, Icon, Rating, List, Popup, Button, Label } from 'semantic-ui-react';
import { Form, Col, FormGroup, ControlLabel, FormControl, DropdownButton, MenuItem, Modal } from 'react-bootstrap';
//import { getSubmissions } from '../../actions/company';

const ApplicationModal = React.createClass({
  render() {
    return (
      <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">Andrew Yi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Application Video</h4>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
});


class PositionsLevel extends React.Component {
  getIntialState(){
    return { lgShow: false };
  }
  renderSubmissions() {
    console.log('PROPS IN SUBMISSIONS', this.props);
    const lgClose = () => this.setState({ lgShow: false });
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
                   <Button color="purple" fluid onClick={()=> this.setState({lgShow:true})}>Watch application</Button>
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
          )
        })}
      </div>);
  }
  render() {
    if (this.props.companyProfile.submissions !== undefined) {
      return (
        <div>{this.renderSubmissions()}
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
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PositionsLevel);



