import React from 'react';
import { Grid, Row, Col, Image, Button, FormGroup, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createInterview, getQuestions, getPositions, getSubmissions, deleteJob } from '../../actions/company';

class PositionsLevel extends React.Component {
  componentDidMount() {
    this.props.getPositions();
  }
  renderJobs() {
    return (
      <div>
        {this.props.companyProfile.companyProfile.jobs.map((item, idx) => {
          if (this.props.companyProfile.companyProfile.level === item.level && this.props.companyProfile.companyAuth.company_backend_profile[0].id === item.company_id) {
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
                    <tb><span className="glyphicon glyphicon-remove" onClick={() => { this.props.deleteJob(item.id); document.getElementById(item.id).remove(); }} /></tb>
                  </tr>
                </tbody>
              </Table>
            );
          }
        })}
      </div>
    );
  }
  render() {
    if (this.props.companyProfile.companyProfile.jobs !== undefined) {
      return (
        <div className="positionsHeading">
          {this.props.companyProfile.companyProfile.level === 0 ?
            <h2 className="panel panel-default panel-heading">Junior Positions <Button className="btn btn-primary" onClick={() => this.props.createInterview()} type="submit" value="Submit">Create New</Button></h2> :
            this.props.companyProfile.companyProfile.level === 1 ?
              <h2 className="panel panel-default panel-heading">Mid-level Positions <Button className="btn btn-primary" onClick={() => this.props.createInterview()} type="submit" value="Submit">Create New</Button></h2> :
              <h2 className="panel panel-default panel-heading">Senior Positions <Button className="btn btn-primary" onClick={() => this.props.createInterview()} type="submit" value="Submit">Create New</Button></h2>}
          <div>{this.renderJobs()}</div>
        </div>
      );
    }
    return (<div>{}</div>);
  }
}

function mapStateToProps(state) {
  return {
    companyProfile: state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createInterview, getQuestions, getPositions, getSubmissions, deleteJob }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PositionsLevel);
