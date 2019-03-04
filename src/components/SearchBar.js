import React, { Component } from 'react';
import './style.css'


class SearchBar extends Component {
  render() {
    return (
      <div className="bar">
       <form onSubmit ={this.props.seeWeather}>
       <input type="text" name="country" placeholder="Country Name"></input><br />
       <input type="text" name="city" placeholder="City Name"></input>
      <br />
      <button>Submit</button>
      </form>
      </div>
    );
  }
}

export default SearchBar;
