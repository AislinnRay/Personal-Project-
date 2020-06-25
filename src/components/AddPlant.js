import React, { Component } from "react";
import axios from "axios";
import "../style/styleAddPlant.css";
import { connect } from "react-redux";
import Chart from './Chart'

class AddPlant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      common_name: "",
      scientific_name: "",
      note: "",
      plant_img: "",
      water_interval: 10,
      //last_watered: timestamp,
    };
  }

  // const timestamp = Date.now();

  componentDidMount() {
    console.log(this.props);
    const { plant_id } = this.props.match.params;
    if (plant_id) {
      axios.get(`/api/plants/${plant_id}`).then((results) => {
        console.log(results);
        this.setState({
          common_name: results.data.common_name,
          scientific_name: results.data.scientific_name,
          note: results.data.note,
          plant_img: results.data.plant_img,
          water_interval: results.data.water_interval,
          isEdit: true,
        });
      });
    }
  }

  componentDidUpdate(prevProps) {
    const { plant_id } = this.props.match.params;
    if (!plant_id && prevProps.match.params.plant_id) {
      // if there is no longer an id and there was previously one (need previous one so this does not fire over and over)
      this.setState({
        isEdit: false,
        common_name: "",
        scientific_name: "",
        note: "",
        plant_img: "",
        water_interval: "",
      });
    }
  }

  handleChange = ({ name, value }) => {
    this.setState({ [name]: value });
  };

  handleAdd = () => {
    const {
      common_name,
      scientific_name,
      note,
      plant_img,
      water_interval,
    } = this.state;
    axios
      .post("/api/plants", {
        common_name,
        scientific_name,
        note,
        plant_img,
        water_interval,
      })
      .then(() => {
        this.props.history.push("/dash");
      });
  };

  handleEdit = () => {
    const {
      common_name,
      scientific_name,
      note,
      plant_img,
      water_interval,
    } = this.state;
    axios
      .put(`/api/plants/${this.props.match.params.plant_id}`, {
        common_name,
        scientific_name,
        note,
        plant_img,
        water_interval,
      })
      .then(() => {
        this.props.history.push("/dash");
      });
  };

  resetState = () =>
    this.setState({
      common_name: "",
      scientific_name: "",
      note: "",
      plant_img: "",
      water_interval: 10,
    });

  render() {
    const {
      common_name,
      scientific_name,
      note,
      plant_img,
      water_interval,
      isEdit,
    } = this.state;
    return (
      <div className="AddPlant-Container">
        <div className="Form">
          <img
            className="form_img_preview"
            src={plant_img}
            //{`https://cdn.pixabay.com/photo/2019/02/08/21/53/plant-3984065_1280.jpg`}
          />
          <p>Image URL:</p>
          <input
            name="plant_img"
            value={plant_img}
            onChange={(e) => this.handleChange(e.target)}
          />
          <p>Common Name:</p>
          <input
            name="common_name"
            value={common_name}
            onChange={(e) => this.handleChange(e.target)}
          />
          <p>Scientific Name:</p>
          <input
            name="scientific_name"
            value={scientific_name}
            onChange={(e) => this.handleChange(e.target)}
          />
          <p>Note:</p>
          <input
            name="note"
            value={note}
            onChange={(e) => this.handleChange(e.target)}
          />
          <p>Water Interval (Days):</p>
          <input
            name="water_interval"
            value={water_interval}
            onChange={(e) => this.handleChange(e.target)}
          />
          {isEdit ? (
            <button className="form_button_box" onClick={this.handleEdit}>
              Edit
            </button>
          ) : (
            <div>
              <button className="form_button_box" onClick={this.handleAdd}>
                Add
              </button>
              <button className="form_button_box" onClick={this.resetState}>
                Cancel
              </button>
            </div>
          )}
        </div>
        <div className="chart-container">
            <Chart/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => reduxState;
export default connect(mapStateToProps)(AddPlant);
