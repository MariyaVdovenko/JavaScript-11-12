'use strict';
import quizData from './quiz-data.js';

const testQuestionForm = document.querySelector('.js-test-question-form');
console.log(testQuestionForm);
const buttonCheck = document.querySelector('.let-check');

const test = createTestForm(quizData);
testQuestionForm.insertBefore(test, buttonCheck);

function createTestForm({ title, questions }) {
  const titleTestingForm = document.createElement('h1');
  titleTestingForm.classList.add('test-form-title');
  titleTestingForm.textContent = title;

  const container = document.createElement('section');
  container.classList.add('testForm');
  container.appendChild(titleTestingForm);

  questions.forEach(function(question, questionNum) {
    const testQuestionList = document.createElement('section');
    testQuestionList.classList.add('test-question');

    const testQuestionTitle = document.createElement('h3');
    testQuestionTitle.classList.add('questions-title');
    testQuestionTitle.textContent = `${questionNum + 1}. ${question.question}`;

    const testPossibleAnswerList = document.createElement('ol');
    testPossibleAnswerList.classList.add('possible-answer-list');

    container.append(testQuestionTitle, testQuestionList);
    testQuestionList.appendChild(testQuestionTitle);
    testQuestionList.appendChild(testPossibleAnswerList);

    question.choices.forEach(function(choice, choiceNum) {
      const testPossibleAnswer = document.createElement('li');
      const testPossibleAnswerLabel = document.createElement('label');
      const testPossibleAnswerInput = document.createElement('input');
      testPossibleAnswerInput.setAttribute('type', 'radio');
      testPossibleAnswerInput.setAttribute('value', choiceNum);
      testPossibleAnswerInput.setAttribute('name', `question${questionNum}`);

      testPossibleAnswerList.appendChild(testPossibleAnswer);
      testPossibleAnswer.appendChild(testPossibleAnswerLabel);
      testPossibleAnswerLabel.appendChild(testPossibleAnswerInput);
      testPossibleAnswerLabel.appendChild(new Text(choice));
    });
  });
  console.log(container);

  return container;
}

testQuestionForm.addEventListener('submit', handleSubmit);

const result = {};
let answerIsCorrect;
let answerIsInorrect;
let resultMessage;

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  formData.forEach((value, name) => {
    result[name] = value;
  });

  checkResult(result);
}

function checkResult(result) {
  const userAnswer = Object.values(result);
  answerIsCorrect = 0;
  answerIsInorrect = 0;
  userAnswer.forEach((answ, i) => {
    if (Number(answ) === quizData.questions[i].answer) {
      answerIsCorrect += 1;
    } else {
      answerIsInorrect += 1;
    }
  });

  const inPercentage = (answerIsCorrect / quizData.questions.length) * 100;

  if (inPercentage < 80) {
    resultMessage = `Вы ответили не правильно на ${answerIsInorrect} вопросов. Тест не пройден :(`;
  } else {
    resultMessage = `Вы ответили правильно на ${answerIsCorrect} вопросов. Поздравляем! Тест пройден!'`;
  }

  alert(resultMessage);
}
