import React, { Component } from 'react';
import axios from 'axios';

export default class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            plants: []
        }
    }

    async componentDidMount() {
        const {common_name} = await axios.get('api/plants')
        this.setState({ plants: common_name })
    }

    render() {
        return (
            <>
            <div> this is the Dashboard Component</div>
            {
                this.state.plants.map( p => {
                    return (
                        <div key={p.plantId}>
                        <p>{p.plantId}</p>
                        </div>
                    )
                })
            }
            <p>This is a p tag</p>
            </>
        )
    }
}
