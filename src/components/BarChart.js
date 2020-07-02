import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {Bar} from "react-chartjs-2";

function BarChart(props){
    const [state, setState] = useState({
        chartData:
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
                  "#6a7086",
                  "#a8a8ad",
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
                      "#6a7086",
                      "#a8a8ad",

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
        <Bar
            data={state.chartData}
            options={{
              maintainAspectRatio: false,
              responsive: true,
              title: {
                display: true,
                text: "Plants per Room",
                fontSize: 28,
                position: "top",
                fontFamily: 'arvo',
                marginBottom: 10,
                color: 'black',
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
                        display: true,
                        },
                    gridLines: {
                        display: false,
                        }
                    }],
                xAxes: [{
                    ticks: {
                        display:true,
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
export default connect(mapStateToProps)(BarChart);