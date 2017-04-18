import React from 'react';
import { Polar } from 'react-chartjs-2';

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
      labels: [
        'Jobs Posted',
        'User Submissions',
        'Users',
        'Questions',
        'Industries',
        'Locations'
      ],
      datasets: [{
        data: [
          149,
          30,
          50,
          45,
          12,
          12
        ],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#33cc33',
          '#8c1aff',
          '#800000'
        ],
      }]
    };
  }

  render() {
    return (
      <div className="stats-chart">
        <Polar data={this.chartConfig()} />
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