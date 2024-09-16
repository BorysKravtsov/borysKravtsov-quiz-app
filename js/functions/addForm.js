const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const questionData = new FormData(event.target);
  const dataObject = Object.fromEntries(questionData);

  const card = document.createElement("div");
  card.setAttribute("class", "card__container");
  document.body.append(card);

  card.innerHTML = `<a href="#" class="card__bookmark"
                  ><img
                    src="./images/card-bookmark.png"
                    alt="card-bookmark"
                    class="card__bookmarkImg"
                /></a>

                <h2 class="card__question">
${dataObject.question}                </h2>
                <div class="card__answerContainer">
                  <p class="card__answer">${dataObject.answer} </p>
                </div>

                <div class="card__btnContainer">
                  <button class="card__btn">Show answer</button>
                </div>

                <ul class="card__hashtags">
                  <li class="card__tag">${dataObject.tag} </li>
                  
                </ul>`;
});
