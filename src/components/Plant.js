import React from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import '../style/stylePlant.css';


function Plant({plant, history, setPlant}){
    const deleteItem = () => {
        axios.delete(`/api/plants/${plant.plant_id}`).then((res) => {
            setPlant()
        })
    }
    return (
        <div className="Plant">
            <img 
            className="plant_img" 
            src={plant.plant_img} 
            alt='plant'/>
            <div className="text-button-container">
                <div className="plant-title">
                    {plant.common_name}
                    </div>
                <div className="plant-title">
                    {plant.scientific_name}
                    </div>
                <div className="plant-note">
                    {plant.note}
                    </div>
                {/* <div className="plant_note">{plant.countdown}</div> */}
                <div className="buttons">
                    <button className="plant-button"
                            onClick ={() => history.push(`/edit/${plant.plant_id}`)}>
                                More
                                </button>
                    <button className="plant-button" 
                    onClick={deleteItem}>
                            Delete
                            </button>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Plant)