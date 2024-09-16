const questionChars = document.querySelector("questionChars");
const answerChars = document.querySelector("answerChars");

const questionArea = document.querySelector('[data-js="question"]');
const answerArea = document.querySelector('[data-js="answer"]');

const maxValueQuestion = questionArea.getAttribute("maxlength");
const maxValueAnswer = answerArea.getAttribute("maxlength");

console.log(maxValueQuestion);

function charCounterAnswer(currentChar, element) {
  const charLeft = Number.parseInt(maxValueAnswer) - currentChar;
  element.textContent = charLeft;
}

answerArea.addEventListener("input", (event) => {
  charCounterAnswer(event.target.value.length, answerChars);
  console.log(maxValueQuestion);
});
