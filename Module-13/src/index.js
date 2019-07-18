'use strict';
import './styles.css';
import getGeoPosition from './getGeoPosition';
import fetchWeather from './fetchWeather';
import weatherMarkup from './weatherMarkup';

import PNotify from 'pnotify/dist/es/PNotify';
import PNotifyStyleMaterial from 'pnotify/dist/es/PNotifyStyleMaterial.js';
import '../node_modules/pnotify/dist/PNotifyBrightTheme.css';
import 'material-design-icons/iconfont/material-icons.css';

// Set default styling.
PNotify.defaults.styling = 'material';
// This icon setting requires the Material Icons font. (See below.)
PNotify.defaults.icons = 'material';
PNotify.defaults.delay = 3000;

const refs = {
  searchForm: document.querySelector('#search-form'),
  weatherSec: document.getElementById('weather'),
};

refs.searchForm.addEventListener('submit', searchFormSubmitHandler);

function searchFormSubmitHandler(e) {
  e.preventDefault();
  const input = e.currentTarget.elements.city.value;
  const errorMessage = 'City not foung =(';
  getWeather(input, errorMessage);
}

getGeoPosition()
  .then(location => `${location.coords.latitude}+ ${location.coords.longitude}`)
  .then(weather => searchWeaherByLocation(weather))
  .catch(error =>
    PNotify.notice(
      'Нет прав доступа к геопозиции, используйте поиск по имени города.',
    ),
  );

function searchWeaherByLocation(location) {
  const errorMessage = 'Геопозиция не найдена.';
  getWeather(location, errorMessage);
}

function getWeather(query, errorMessage) {
  fetchWeather(query)
    .then(weather => {
      weatherMarkup(weather);
    })
    .catch(error => {
      console.log(error);
      PNotify.error(errorMessage);
    });
}
