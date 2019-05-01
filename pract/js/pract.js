'use strict';
//------ Практическое 1 ----------//
// /*
//   Напиши функцию-конструктор Account, которая добавляет будущему
//   объекту поля login, email.

//   В prototype функции-конструктора добавь метод getInfo(),
//   который выводит в консоль значения полей login и email.

//   Обрати внимание, метод всего один, в поле prototype функции-конструктора,
//   а использовать его смогут все экземпляры, по ссылке.

//   Создать несколько экземпляров с разными значениями свойств, вывесди их в консоль.
// */
// const Account = function(login, email) {
//   this.login = login;
//   this.email = email;
// };
// Account.prototype.getInfo = function() {
//   return console.log(`Login: ${this.login}, Email: ${this.email}`);
// };
// const account = new Account('Mangozedog', 'mango@dog.woof');
// console.log(account);

// console.log(Account.prototype.getInfo); // function
// account.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

//------ Практическое 2 -----//

/*
  Напиши ES6 класс StringBuilder.
  
  На вход (в конструкторе) он получает один параметр string - строку,
  которую записывает в свойство _value.
  
  Добавь классу следующие методы:
  
    - геттер value - возвращает текущее значение поля _value
  
    - append(str) - получает парметр str (строку) и добавляет ее в конец _value
    
    - prepend(str) - получает парметр str (строку) и добавляет ее в начало value
  
    - pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value
*/
class StringBuilder {
  constructor(string) {
    this._value = string;
  }
  get value() {
    return this._value;
  }
  append = function append(str) {
    this._value + str;
    return this._value;
  };
}

const builder = new StringBuilder('.');
console.log(builder.value);

builder.append('^');
console.log(builder.value); // '.^'
console.log(str);

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='
