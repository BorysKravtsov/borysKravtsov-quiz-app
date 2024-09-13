export function showAnswer() {
  const answer = document.querySelector(".card__answer");
  const buttonShowAnswer = document.querySelector(".card__btn");

  buttonShowAnswer.addEventListener("click", () => {
    const currentOpacity = getComputedStyle(answer)
      .getPropertyValue("--answerOpacity")
      .trim();

    if (currentOpacity === "1") {
      answer.style.setProperty("--answerOpacity", "0");
    } else answer.style.setProperty("--answerOpacity", "1");
  });
}
