'use strict';
import './styles.css';
import getGeoPosition from './getGeoPosition';
import fetchWeather from './fetchWeather';
import weatherMarkup from './weatherMarkup';

const refs = {
  searchForm: document.querySelector('#search-form'),
  weatherSec: document.getElementById('weather'),
};

refs.searchForm.addEventListener('submit', searchFormSubmitHandler);

function searchFormSubmitHandler(e) {
  e.preventDefault();
  const input = e.currentTarget.elements.city.value;
  fetchWeather(input)
    .then(weather => weatherMarkup(weather))
    .catch(error => console.log(error));
}

getGeoPosition()
  .then(location => `${location.coords.latitude}+ ${location.coords.longitude}`)
  .then(weather => fetchWeather(weather))
  .then(weather => weatherMarkup(weather))
  .catch(error => console.log(error));

function getWeather(query, errorMsg) {
  spinner.show();

  fetchWeather(query)
    .then(weather => {
      renderWeather(weather);
      spinner.hide();
    })
    .catch(error => {
      console.log(error);
      PNotify.error(errorMsg);
      spinner.hide();
    });
}
