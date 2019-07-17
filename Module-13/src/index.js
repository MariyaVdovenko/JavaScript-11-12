'use strict';
import './styles.css';
import getGeoPosition from './getGeoPosition';
import fetchWeather from './fetchWeather';
import weatherMarkup from './weatherMarkup';

// const refs = { subbmitBtn: document.querySelector('#search-form') };

getGeoPosition()
  .then(location => `${location.coords.latitude}+ ${location.coords.longitude}`)
  .then(weather => fetchWeather(weather))
  .then(data => weatherMarkup(data));
// .catch(error => console.log(error));
