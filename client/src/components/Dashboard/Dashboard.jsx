import React from 'react';
import { Bar } from 'react-chartjs-2';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';

class Dashboard extends React.Component {
  constructor(props) {
    super();

    this.state = {
      users: 30,
      jobs: 150,
      subs: 50
    };

    this.chartConfig = this.chartConfig.bind(this);
    this.getStats = this.getStats.bind(this);
  }

  componentDidMount() {
    const { companyId } = this.props.company.companyAuth.company_backend_profile;
    this.getStats(companyId);
  }

  getStats(id) {
    axios.get(`http://localhost:3000/api/companies/${id}/stats`)
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

  chartConfig() {
    const { users, jobs, subs } = this.state;

    return {
      labels: ['Users', 'Jobs Posted', 'Submissions'],
      datasets: [
        {
          label: 'Company Stats',
          data: [users, jobs, subs],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
        }
      ]
    };
  }

  render() {
    return (
      <div className="stats-chart">
        <Bar data={this.chartConfig()} />
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