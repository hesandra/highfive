import React from 'react';
import { Polar } from 'react-chartjs-2';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getJobs, getPositions, getSubmissions, junPos, senPos, midPos, getJunQuestions } from '../../actions/company';
import axios from 'axios';

class Dashboard extends React.Component {
  constructor(props) {
    super();

    this.chartConfig = this.chartConfig.bind(this);
    this.getStats = this.getStats.bind(this);
  }

  getStats() {
    axios.get('http://localhost:3000/api/dashboard')
      .then((result) => {

      })
      .catch((e) => {
        console.log(e);
      });
  }

  chartConfig() {
    return {
      labels: [
        'Jobs Posted',
        'User Submissions',
        'Users',
        'Questions',
        'Industries',
        'Locations'
      ],
      datasets: [
        {
          data: [
            90,
            30,
            50,
            30,
            10,
            10
          ],
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#33cc33',
            '#8c1aff',
            '#800000'
          ]
        }
      ]
    };
  }

  render() {
    return (
      <Polar data={this.chartConfig()} />
    );
  }
}

function mapStateToProps(state) {
  return {
    jobs: state.companyProfile.jobs
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getJobs, getPositions, getSubmissions, junPos, senPos, midPos, getJunQuestions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);