const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const questionData = new FormData(event.target);
  const dataObject = Object.fromEntries(questionData);

  const card = document.createElement("div");
  card.setAttribute("class", "card__container");
  const section = document.querySelector("section");
  section.append(card);

  card.innerHTML = `<a href=" "class="card__bookmark"
                  ><img
                    src="./images/card-bookmark.png"
                    alt="card-bookmark"
                    class="card__bookmarkImg"
                /></a>

                <h2 class="card__question">${dataObject.question}</h2>
                <div class="card__answerContainer">
                  <p class="card__answer">${dataObject.answer}</p>
                </div>

                <div class="card__btnContainer">
                  <button class="card__btn">Show answer</button>
                </div>

                <ul class="card__hashtags">
                  <li class="card__tag">#${dataObject.tag}</li>
                  
                </ul>`;

  const bookMark = document.querySelector(".card__bookmarkImg");
  bookMark.classList.remove("card__bookmarkImgS");

  bookMark.addEventListener("click", () => {
    bookMark.classList.toggle("card__bookmarkImgS");
  });
  const answer = document.querySelector(".card__answer");
  const buttonShowAnswer = document.querySelector(".card__btn");

  buttonShowAnswer.addEventListener("click", () => {
    const currentOpacity = getComputedStyle(answer)
      .getPropertyValue("--answerOpacity")
      .trim();

    if (currentOpacity === "1") {
      answer.style.setProperty("--answerOpacity", "0");
      buttonShowAnswer.innerText = "Hide answer";
    } else {
      answer.style.setProperty("--answerOpacity", "1");
      buttonShowAnswer.innerText = "Show answer";
    }
  });
});
