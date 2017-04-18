import React from 'react';
import { Bar } from 'react-chartjs-2';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Dashboard extends React.Component {
  constructor(props) {
    super();

    this.state = {
      stats: []
    };

    this.chartConfig = this.chartConfig.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { companyStats } = this.props;

    this.setState({

    });
  }

  chartConfig() {
    return {
      labels: ['Users', 'Jobs Posted', 'Submissions'],
      datasets: [
        {
          label: 'Company Stats',
          data: [30, 149, 50],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
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
    companyStats: state.companyProfile
  };
}

export default connect(mapStateToProps)(Dashboard);