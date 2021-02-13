import React, {Component} from 'react';
//import axios from 'axios';

export default class GetWeather extends Component {
    constructor(props) {
        super(props);

        this.updateLocation = this.updateLocation.bind(this);
        this.getWeather = this.getWeather.bind(this);

        this.state = {
            location:''
        }
    }

// Function to set the location input given
updateLocation(input) {
    this.setState({
        location : input.target.value 
        });
}

// Function to make the API call to get th weather details.
getWeather(input) {
    console.log("This method is to be implemented:{}", input);
}

    render() {
        return (
            <div className="container">
                <h3>Enter the city</h3>
                <form onSubmit = {this.getWeather}>
                    <div className = "form-group">
                        <label>City:</label>
                        <input type="text" 
                        className="form-control"
                        value={this.state.location}
                        onChange={this.updateLocation}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Go!" className="btn btn-success"/>
                    </div>
                </form>
            </div>
        )
    }
}