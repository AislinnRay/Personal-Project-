import React, { Component } from 'react';
import axios from 'axios';
import Plant from './Plant'
import '../style/styleDash.css'
import {connect} from 'react-redux';

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            plants: [],
        }
    }

    // async componentDidMount() {
    //     const {common_name} = await axios.get('api/plants')
    //     this.setState({ plants: common_name })
    // }

    componentDidMount() {
        console.log(this.props.reduxState)
        console.log(this.props)
        if (this.props.user 
            && this.props.user.user_id)
            {this.setPlant()}
    }

    setPlant = () => {
        axios
        .get('/api/plants')
        .then((res) => { 
            console.log(res.data)
            this.setState({plants: res.data })})
        .catch((err) => console.log(err))
    }

    render() {
        return (
            <div className="dash-container" id="Dash">
                {this.state.plants.map((plant) => {
                    return <Plant key={plant.plant_id}
                    setPlant={this.setPlant}
                    plant={plant} />
                })}
            <div>this is the Dashboard Component</div>
            <p>This is a p tag</p>
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps)(Dashboard);
