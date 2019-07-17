'use strict';

const refs = {
  weatherSec: document.getElementById('weather'),
  icon: document.querySelector('.icon'),
  location: document.querySelector('span[data-field="location"]'),
  temp: document.querySelector('span[data-field="temp"]'),
  humidity: document.querySelector('span[data-field="humidity"]'),
  wind: document.querySelector('span[data-field="wind"]'),
  conditions: document.querySelector('span[data-field="conditions"]'),
};

export default function weatherMarkup(data) {
  refs.icon.src = 'https:' + data.current.condition.icon;
  refs.location.textContent = data.location.name;
  refs.temp.textContent = data.current.temp_c;
  refs.humidity.textContent = data.current.humidity;
  refs.wind.textContent = data.current.wind.dir + data.current.wind_kph;
  refs.conditions.textContent = data.current.condition.text;

  refs.weatherSec.classList.remove('is-hidden');
}
