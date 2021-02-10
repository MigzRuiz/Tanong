import { clear } from "console";
import { mark } from "regenerator-runtime";
import { Z_STREAM_END } from "zlib";

class SidebarView {
  _data;
  _parentElement = document.querySelector(".sidebar__items");
  _sidebarItem = document.querySelector(".sidebar__item");

  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }

  addHandlerRender(handler) {
    ["hashchange", "load"].forEach((event) =>
      window.addEventListener(event, handler)
    );
  }

  activeQuestion() {
    this._sidebarItem.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(this._sidebarItem.closest("sidebar__item"));
    });
  }

  _generateMarkup() {
    //return `"></li>`;

    let markup = "";
    this._data.forEach((element, i) => {
      markup += `
        <li class="sidebar__item sidebar__item--${i}"><a href="${i}"></a></li>
        `;
    });
    return markup;
  }
}

export default new SidebarView();
