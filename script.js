const submitButton = document.querySelector(".submit");
const ratingCard = document.querySelector(".rating-card");
const thankYouCard = document.querySelector(".thank-you-card");
const ratings = document.querySelector(".ratings");
const displayRating = document.querySelector(".display-rating");

let currentSelected = document.querySelector(".selected-rating");

submitButton.addEventListener("click", () => {
  if (!currentSelected) {
    alert("Please Choose a rating");
  } else {
    ratingCard.style.display = "none";
    thankYouCard.classList.remove("thank-you-card-inactive");
    thankYouCard.classList.add("thank-you-card-active");

    const classes = currentSelected.classList;

    if (classes.contains("rating-1")) {
      displayRating.innerHTML = "You selected 1 out of 5";
    }

    if (classes.contains("rating-2")) {
      displayRating.innerHTML = "You selected 2 out of 5";
    }

    if (classes.contains("rating-3")) {
      displayRating.innerHTML = "You selected 3 out of 5";
    }

    if (classes.contains("rating-4")) {
      displayRating.innerHTML = "You selected 4 out of 5";
    }

    if (classes.contains("rating-5")) {
      displayRating.innerHTML = "You selected 5 out of 5";
    }
  }
});

ratings.addEventListener("click", (e) => {
  const classes = e.target.classList;
  if (classes.contains("rating-circle")) {
    if (currentSelected) {
      currentSelected.classList.remove("selected-rating");
    }
    classes.add("selected-rating");
    currentSelected = e.target;
  }
});
