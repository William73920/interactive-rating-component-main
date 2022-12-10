const thankyou = document.getElementById("thankyou");
const submit = document.getElementById("btn");
const main = document.getElementById("main");
const rating = document.querySelectorAll(".feedback__btn");
const rate = document.getElementById("rating");

submit.addEventListener("click", () => {
  thankyou.classList.remove("hidden");
  main.classList.add("hidden");
});

rating.forEach((rate1) => {
  rate1.addEventListener("click", () => {
    rate.innerHTML = rate1.innerHTML;
  });
});
