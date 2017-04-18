import React from 'react';
import { Grid, Row, Col, Image, Button, FormGroup, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createInterview, getQuestions, getPositions, getSubmissions, deleteJob } from '../../actions/company';

class PositionsLevel extends React.Component {
  componentDidMount() {
    //this.props.getQuestions();
    this.props.getPositions();
  }
  renderJobs() {
    //console.log('props in positionslevel', this.props.companyProfile.jobs);
    return (
      <div>
        {this.props.companyProfile.jobs.map((item, idx) => {
          if (this.props.companyProfile.level === item.level && this.props.companyProfile.companyReload[0].id === item.company_id) {
            /*const cDate = new Date(item.created_at);
            const cDateString = `${cDate.getMonth()}/${cDate.getDay()}/${cDate.getFullYear()}`;

            const uDate = new Date(item.updated_at);
            const uDateString = `${uDate.getMonth()}/${uDate.getDay()}/${uDate.getFullYear()}`;*/

            return (
                <Table id={item.id} responsive>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Description</th>
                      <th>Created at</th>                 
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{item.id}</td><td>{item.description}</td><td>{item.created_at}</td>
                      <tb><Button onClick={() => { this.props.getSubmissions(item.id); document.getElementById('tabs-with-dropdown-tab-second').click(); }}>See Submissions</Button></tb>
                      <tb><Button onClick={() => { this.props.deleteJob(item.id); document.getElementById(item.id).remove(); }}>Delete</Button></tb>
                    </tr>
                  </tbody>
                </Table>
   
             )
          }
        })}
        <FormGroup>
          <Col smOffset={3} sm={8}>
            <Button onClick={() => this.props.createInterview()} type="submit" value="Submit">
              New Position and Interview
            </Button>
          </Col>
        </FormGroup>
      </div>
    );
  }
  render() {
    if (this.props.companyProfile.jobs !== undefined) {
      return (
        <div className="positionsHeading">
          <div className="spaceQ"></div>
          {this.props.companyProfile.level === 0?
          <h2 className="panel panel-default panel-heading">Junior Positions</h2>:
          this.props.companyProfile.level === 1?
          <h2 className="panel panel-default panel-heading">Mid-level Positions</h2>:
          <h2 className="panel panel-default panel-heading">Senior Positions</h2>}
          <div>{this.renderJobs()}</div>
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
  return bindActionCreators({ createInterview, getQuestions, getPositions, getSubmissions, deleteJob }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PositionsLevel);

/*
this.props.getPositions(this.props.companyProfile.companyReload[0].id)


renderJobs(){
    console.log('props in positionslevel', this.props)
    return (
      <div>
       {this.props.companyProfile.jobs.data.jobposts.map((item, idx) => {
        if (this.props.companyProfile.level === item.level){
          return (
            <div>{item.title}</div>
          )}
      })}  
      <div>
          <FormGroup>
          <Col smOffset={3} sm={8}>
            <Button onClick={() => this.props.createInterview()} type="submit" value="Submit">
              Create new Interview
            </Button>
          </Col>
        </FormGroup>
      </div>
      </div>
    );
  }*/