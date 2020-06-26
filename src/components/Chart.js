import React, { Component } from "react";
import {connect} from 'react-redux';
import { Pie } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
        chartData: 
        //this.props.chartData
        {
            labels: ['Living Room', 'Kitchen', 'Bathroom', 'Den', 'Dining Room'],
                datasets: [
                    {
                        label: 'Plants',
                        data: [
                            4,
                            2,
                            2,
                            5,
                            this.props.count
                        ],
                        backgroundColor: [
                            '#617872',
                            '#9eb29a',
                            '#b3cfcc',
                            '#a0cfa5',
                            '#e2d1c3'
                        ],
                    }
                ]
            },
      count:0
    };
  }


  render() {
    return (
      <div className="chart">
        <Pie
          data={this.state.chartData}
          options={{maintainAspectRatio: false}}
        />
      </div>
    );
  }
}

const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps)(Chart);