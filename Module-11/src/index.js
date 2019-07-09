import menuItems from './menu.json';
import menuItemTemplates from './templates/menu-item.hbs';

import './styles.css';

const refs = {
  menu: document.querySelector('.menu'),
};

buildMenu(menuItems);

function buildMenu(menuItems) {
  const markup = menuItems
    .map(menuItem => menuItemTemplates(menuItem))
    .join('');

  refs.menu.insertAdjacentHTML('beforeend', markup);
}

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const swithControl = document.getElementById('theme-switch-control');

swithControl.addEventListener('change', changeTheme);

const body = document.body;
body.classList.add(Theme.LIGHT);
if (localStorage.getItem('Theme') === Theme.DARK) {
  body.classList.replace(Theme.LIGHT, Theme.DARK);
  swithControl.checked = true;
}

function changeTheme() {
  if (localStorage.getItem('Theme') === Theme.LIGHT) {
    body.classList.replace(Theme.LIGHT, Theme.DARK);
    swithControl.checked = true;
    localStorage.setItem('Theme', Theme.DARK);
  } else {
    body.classList.replace(Theme.DARK, Theme.LIGHT);
    swithControl.checked = false;
    localStorage.setItem('Theme', Theme.LIGHT);
  }
}
