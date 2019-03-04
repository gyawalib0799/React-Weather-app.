import React, { Component } from 'react'
import './style.css'
export class WeatherDetails extends Component {
  render() {
    return (
        <div className="weather-info">
        {
            this.props.city&& <p>Location: {this.props.city},{this.props.country}</p> 
        }
        
        {
            this.props.temperature &&<p>Temperature: {this.props.temperature}</p>
        }

        {
            this.props.humidity &&<p>Humidity: {this.props.humidity}</p>
        }

        {
            this.props.description && <p>Description: {this.props.description}</p>
        }
        
        {
            this.props.error && <p>{this.props.error}</p>
        }

    </div>
    )
  }
}

export default WeatherDetails
