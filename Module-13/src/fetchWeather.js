'use strict';

export default function fetchWeather(query) {
  const myKey = '057005d75e6c48b4a0610353191707';
  const base = 'https://api.apixu.com/v1';
  const resource = '/current.json';
  const request = `?key=${myKey}&q=${query}`;
  return fetch(base + resource + request)
    .then(response => {
      if (response.ok) return response.json();

      throw new Error('Something went wrong!!!');
    })
    .catch(error => {
      throw error;
    });
}
