import React, { Component } from 'react';
import './WeatherField.css';

class WeatherField extends Component {
  render() {
    return (
      <>
      <div className='main'>
        <h1 className='cityName'>Accra</h1>
        <p className='date'></p>
        <p className='discription'>Sunny</p>
        <img className='Icon' src='' />
        <h3 className='Icon' >25 deg</h3>
        <h5 className='Icon' >A cool Day</h5>
      </div>
      </>
    );
  }
}

export default WeatherField;