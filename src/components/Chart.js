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
                        boarderWidth: 1,
                        borderColor: '#777',
                        hoverBorderWidth:3,
                        hoverBorderColor: '#000'
                    }
                ]
            },
      count:0
    };
  }


  componentDidMount(){
      console.log(this.props)
      console.log(this.props.plantReducer.plants)
      const array = this.props.plantReducer.plants
      const newArray = array.reduce((acc, e) => {
            if(acc[0].includes(e.room)){
              acc[1][acc[0].indexOf(e.room)]++
            }else{
              acc[0].push(e.room)
              acc[1].push(1)
            }
            return acc
          },[[], []])
        console.log(newArray)
      this.setState({

      })
  } 
//   set state to this 

// pull aray off of props then reduce it, then set all of this state to be the same label as reduced array at 0
//   static defaultProps = {
//     displayTitle: true,
//     displayLegend: true,
//     legendPosition: 'right'
//   }
//   const array = [{name: '1', room: "r1"},{name: '2', room: "r1"},{name: '3', room: "r3"},{name: '4', room: "r1"}]

  render() {
    return (
      <div className="chart">
        <Pie
          data={this.state.chartData}
          options={{
              maintainAspectRatio: false,
              title:{
                  display:this.props.displayTitle,
                  text: 'Plants per Room',
                  fontSize:28,
                  position:'top'
            },
              legend:{
                  display:this.props.displayLegend,
                  position:this.props.legendPosition
              }
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps)(Chart);