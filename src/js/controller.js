import { API_URL } from "./config.js";

const url = `${API_URL}amount=10&category=9&difficulty=medium&type=boolean`;

const AJAX = async function () {
  const res = await fetch(url);
  const data = await res.json();

  //console.log(res);
  return data;
};

const state = {
  results: {},
};

const getData = async function () {
  try {
    const data = await AJAX();
    state.results = data.results;
    console.log(state.results);
  } catch (err) {
    console.log(err);
  }
};

getData();

const btnTrue = document.querySelector(".flashcard__btn-true");
const btnFalse = document.querySelector(".flashcard__btn-false");
const progressMeter = document.querySelector(".progress__meter");
const modalBtn = document.querySelector(".modal__next");

btnTrue.addEventListener("click", () => {
  progressMeter.value = 74;
});

btnFalse.addEventListener("click", () => {});

modalBtn.addEventListener("click", () => {
  console.log("next question");
});
