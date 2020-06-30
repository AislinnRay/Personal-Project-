import React, { Component } from 'react';
import axios from 'axios';
import Plant from './Plant'
import '../style/styleDash.css'
import {connect} from 'react-redux'; // connects you to the redux state and then saves this reduxState on the props. It also connects the actions to the props. 
import {getUser} from '../redux/reducers/authReducer'
import {setPlants} from '../redux/reducers/plantReducer'
//import ClassChart from './ClassChart';
import HooksChart from './HooksChart';

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            plants: [],
        }
    }

    componentDidMount() {
        console.log(this.props)
        //this.props.getUser()
        if (this.props.user
            && this.props.user.user_id)
            {this.setPlant()}
        else 
            {this.props.history.push('/')}
    } 

    setPlant = () => {
        console.log(this.props.user.user_id)
        axios
        .get('/api/plants')
        .then((res) => { 
            console.log(res.data) //gives plant data!! an array
            this.props.setPlants(res.data)})
        .catch((err) => console.log(err))
    }

    render() {
        return (
            <div className="Dash">
                <div className="grid">
                    {this.props.plants.map((plant)=> {
                    return <Plant 
                            className="map-plant"
                            key={plant.plant_id}
                            setPlant={this.setPlant}
                            plant={plant} 
                            />
                    })}
                </div>
                {/* <div className="charts-container">
                {this.props.plants.length > 0 && <ClassChart className="charts"/>}
                </div> */}
                <div className="charts-container">
                {this.props.plants.length > 0 && <HooksChart className="charts"/>}
                </div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    user: reduxState.authReducer.user,
    plants: reduxState.plantReducer.plants
});
const mapDispatchToProps = { getUser, setPlants }
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
