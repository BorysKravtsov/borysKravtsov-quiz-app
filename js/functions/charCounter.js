const questionChars = document.querySelector('[data-js="questionChars"]');
const answerChars = document.querySelector('[data-js="answerChars"]');

const questionArea = document.querySelector('[data-js="question"]');
const answerArea = document.querySelector('[data-js="answer"]');

const maxValueQuestion = questionArea.getAttribute("maxlength");
const maxValueAnswer = answerArea.getAttribute("maxlength");

answerArea.addEventListener("input", (event) => {
  answerChars.textContent =
    maxValueAnswer - Number.parseInt(event.target.value.length);
  console.log(answerArea.textContent);
});
questionArea.addEventListener("input", (event) => {
  questionChars.textContent =
    maxValueQuestion - Number.parseInt(event.target.value.length);
});
