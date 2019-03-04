import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherDetails from './components/WeatherDetails';
import './App.css'
import './components/style.css'

class App extends Component {
  state ={
    temperature: '',
    city: '',
    country: '',
    humidity: '',
    description: '',
    error: ''
  }
  
  seeWeather = async (e) => {
  e.preventDefault();
  
  const country = e.target.elements.country.value;
  const city = e.target.elements.city.value;
  const url= `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${'109419a4f4d97945368f000838432551'}&units=imperial`;
  
  
  axios
  .get(url)
  .then(res =>{
    return res.data;
  })
  .then(data => {
  if(city && country){
      this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ""
    })
  }
  else{
     this.setState({
     error: "Please enter the values..."
  })
}
  })
}  

  render() {
    return (
      <div>
        <h1>Weather app</h1>
        <SearchBar seeWeather={this.seeWeather} />
        <WeatherDetails
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error} />
            </div>
    );
  }
}

export default App;
