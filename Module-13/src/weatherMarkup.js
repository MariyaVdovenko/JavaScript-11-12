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

export default function weatherMarkup(weather) {
  refs.icon.src = 'https:' + weather.current.condition.icon;
  refs.location.textContent = weather.location.name;
  refs.temp.textContent = weather.current.temp_c;
  refs.humidity.textContent = weather.current.humidity + '%';
  refs.wind.textContent =
    weather.current.wind_dir + ' - ' + weather.current.wind_kph + 'kph';
  refs.conditions.textContent = weather.current.condition.text;

  refs.weatherSec.classList.remove('is-hidden');
}
