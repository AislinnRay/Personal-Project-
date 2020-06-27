import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Pie,
  Bar,
  Line,
  Radar,
  Doughnut,
  Bubble,
  Scatter,
} from "react-chartjs-2";

class ClassChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData:
        //this.props.chartData
        {
          labels: ["Living Room", "Kitchen", "Bathroom", "Den", "Dining Room"],
          datasets: [
            {
              label: "Plants",
              data: [4, 2, 2, 5, this.props.count],
              backgroundColor: [
                "#617872",
                "#9eb29a",
                "#b3cfcc",
                "#a0cfa5",
                "#e2d1c3",
              ],
              boarderWidth: 1,
              borderColor: "#ffffff",
              hoverBorderWidth: 3,
              hoverBorderColor: "#000",
            },
          ],
        },
      count: 0,
    };
  }

  componentDidMount() {
    //console.log(this.props)
    //console.log(this.props.plantReducer.plants)
    const array = this.props.plantReducer.plants;
    const newArray = array.reduce(
      (acc, e) => {
        if (acc[0].includes(e.room)) {
          acc[1][acc[0].indexOf(e.room)]++;
        } else {
          acc[0].push(e.room);
          acc[1].push(1);
        }
        return acc;
      },
      [[], []]
    );
    console.log(newArray);
    this.setState({
      chartData:
        //this.props.chartData
        {
          labels: newArray[0],
          datasets: [
            {
              label: "Plants",
              data: newArray[1],
              backgroundColor: [
                "#617872",
                "#9eb29a",
                "#b3cfcc",
                "#a0cfa5",
                "#e2d1c3",
              ],
              boarderWidth: 1,
              borderColor: "#ffffff",
              hoverBorderWidth: 3,
              hoverBorderColor: "#000",
            },
          ],
        }
    });
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right",
  };

  render() {
    return (
      <div className="chart-container">
        <div className="chart">
          <Pie
            style="position: relative; height:40vh; width:80vw"
            data={this.state.chartData}
            options={{
              maintainAspectRatio: false,
              title: {
                display: this.props.displayTitle,
                text: "Plants per Room",
                fontSize: 28,
                position: "top",
              },
              legend: {
                display: this.props.displayLegend,
                position: this.props.legendPosition,
              },
              scales: {
                yAxes: [{ticks: {beginAtZero: true}}]
            }
            }}
          />
        </div>
        <div className="chart">
          <Bar
            style="position: relative; height:40vh; width:80vw"
            data={this.state.chartData}
            options={{
              maintainAspectRatio: false,
              title: {
                display: this.props.displayTitle,
                text: "Plants per Room",
                fontSize: 28,
                position: "top",
              },
              legend: {
                display: this.props.displayLegend,
                position: this.props.legendPosition,
              },
              scales: {
                  yAxes: [{ticks: {beginAtZero: true}}]
              }
            }}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => reduxState;
export default connect(mapStateToProps)(ClassChart);
