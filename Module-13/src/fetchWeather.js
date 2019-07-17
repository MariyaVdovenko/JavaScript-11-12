'use strict';

export default function fetchWeather(query) {
  const myKey = '057005d75e6c48b4a0610353191707';
  const base = 'http://api.apixu.com/v1';
  const resource = '/current.json';
  const request = `?key=${myKey}&q=${query}`;
  return new Promise((resolve, reject) => {
    const currentWeather = fetch(base + resource + request)
      .then(response => response.json())
      .then(weather => {
        console.log(weather);
      });
  });
}
