const bookMark = document.querySelector(".card__bookmarkImg");
bookMark.classList.remove("card__bookmarkImgS");

bookMark.addEventListener("click", () => {
  bookMark.classList.toggle("card__bookmarkImgS");
});
