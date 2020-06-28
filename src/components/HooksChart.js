import React, { useState, useEffect } from "react";
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

function HooksChart(props){
    const [state, setState] = useState({
        chartData:
          //props.chartData
          {
            labels: ["Living Room", "Kitchen", "Bathroom", "Den", "Dining Room"],
            datasets: [
              {
                label: "Plants",
                data: [4, 2, 2, 5, props.count],
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
      }) 
      useEffect(() => {
        const array = props.plantReducer.plants
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
          )
          setState({
            chartData:
              //props.chartData
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
          })
      },[props.plantReducer.plants]) // this [] is the dependency array that makes this not only componentDidMount but componentWillMount. Re-runs the use effect yayy!


    return(
        <div className="chart-container">
        <div className="chart" 
        style={{
            height:'350px', 
            width:'350px',
            padding: '10px',
            position: 'center',

        }}
        >
          <Pie
            data={state.chartData}
            options={{
              maintainAspectRatio: false,
              responsive: true,
              title: {
                display: true,
                text: "Plants per Room",
                fontSize: 28,
                position: "top",
              },
              legend: {
                display: true,
                position: 'bottom',
              },
              scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        maxTicksLimit: 5,
                        autoSkip: true,
                        display: false,
                        },
                    gridLines: {
                        display: false,
                        }
                    }],
                xAxes: [{
                    ticks: {
                        display:false,
                    },
                    gridLines: {
                        display: false,
                    }
                }],
                }
            }}
          />
        </div>
        
      </div>
    )
}

const mapStateToProps = (reduxState) => reduxState;
export default connect(mapStateToProps)(HooksChart);