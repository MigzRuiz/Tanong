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
