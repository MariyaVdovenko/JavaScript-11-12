'use strict';

function task1() {
  const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

  const isLoginValid = function(login) {
    if (login.length >= 4 && login.length <= 16) {
      return true;
    } else {
      return false;
    }
  };
  const isLoginUnique = function(AllLogins, login) {
    if (AllLogins.includes(login)) {
      return false;
    } else {
      return true;
    }
  };

  const addLogin = function(allLogins, login) {
    if (isLoginValid(login) !== true) {
      return console.log('Ошибка! Логин должен быть от 4 до 16 символов');
    } else if (isLoginUnique(allLogins, login) !== true) {
      return console.log('Такой логин уже используется!');
    } else {
      allLogins.push(login);
      console.log(`Логин ${login} успешно добавлен!`);
    }
  };

  // Вызовы функции для проверки
  addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
  addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
  addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
  addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'

  console.log(logins);
}
