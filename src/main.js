import { inherits } from "util";
import * as model from "./components/model.js";
import sidebarView from "./components/Views/sidebarView.js";

const controlSidebar = async function () {
  try {
    // 1. Load Quizzes
    await model.loadQuestions();

    console.log(model.state.results);

    // 2. Render Sidebar
    sidebarView.render(model.state.results);

    // 3. Render the selected item

    sidebarView.activeQuestion();
  } catch (err) {}
};

const init = () => {
  sidebarView.addHandlerRender(controlSidebar);
};
init();
