import { API_URL } from "./config.js";
import { getJSON } from "./helpers.js";

const url = `${API_URL}amount=10&category=9&difficulty=medium&type=boolean`;

export const state = {
  results: {},
};

export const loadQuestions = async function () {
  try {
    const data = await getJSON(url);
    // console.log(data);

    state.results = data.results;
    state.results.forEach((question, i) => {
      question.id = i;
    });
  } catch (err) {
    console.log(err);
  }
};
