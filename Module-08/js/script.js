'use strict';
import quizData from './quiz-data.js';

const testQuestionForm = document.querySelector('.js-test-question-form');
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
const correctAnswers = {};
quizData.questions.forEach(function(question, questionNum) {
  correctAnswers[`question${questionNum}`] = question.answer;
});

console.log(correctAnswers);

const result = {};

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  formData.forEach((value, name) => {
    result[name] = Number(value);
  });
  console.log(result);
}
