const landing = document.querySelector('#landing');
const questionPanel = document.querySelector('#question-panel');
const startButton = document.querySelector('#start-button');
const backButton = document.querySelector('#back-button');

function showQuestion() {
  landing.hidden = true;
  questionPanel.hidden = false;
  document.title = 'First question · Three Circles';
  questionPanel.querySelector('h1').focus();
}

function showLanding() {
  questionPanel.hidden = true;
  landing.hidden = false;
  document.title = 'Three Circles';
  startButton.focus();
}

startButton.addEventListener('click', showQuestion);
backButton.addEventListener('click', showLanding);
