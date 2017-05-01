import React from 'react';
import { Bar } from 'react-chartjs-2';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import { BASE_URL } from '../../utils/constants';

class Dashboard extends React.Component {
  constructor(props) {
    super();

    this.state = {
      users: 30,
      jobs: 150,
      subs: 50
    };

    this.chartConfig = this.chartConfig.bind(this);
    this.chartOptions = this.chartOptions.bind(this);
    this.getStats = this.getStats.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.company.companyAuth.company_backend_profile;
    this.getStats(id);
  }

  getStats(id) {
    axios.get(`${BASE_URL}/api/companies/${id}/stats`)
      .then((res) => {
        const { jobpost, submission, user } = res.data.stats;
        this.setState({
          users: user[0]['count(`id`)'],
          jobs: jobpost[0]['count(`id`)'],
          subs: submission[0]['count(`id`)']
        });
      })
      .catch((e) => { console.log(e); });
  }

  chartOptions() {
    return {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    };
  }

  chartConfig() {
    const { users, jobs, subs } = this.state;

    return {
      labels: ['Total number of potential applicants', 'Job Posts by Company', 'Submissions by Company'],
      datasets: [
        {
          label: 'Company Stats',
          fill: false,
          data: [users, jobs, subs],
          backgroundColor: ['#30415d', '#cf6766', '#8eaebd']
        }
      ]
    };
  }

  render() {
    return (
      <div className="stats-chart">
        <Bar data={this.chartConfig()} options={this.chartOptions()} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    company: state
  };
}

export default connect(mapStateToProps)(Dashboard);
