import $ from "jquery";
import { keys } from "regenerator-runtime";

const renderSearch = (result, type) => {
  if (type == "characters") {
    $(`${type}-list`).prop(`${type}`, result);
  } else {
    $(`${type}-list`).prop(`${type}s`, result);
  }
};

const renderTop = (result, type) => {
  if (type == "characters") {
    $(`top-${type}-list`).prop(`${type}`, result);
  } else {
    $(`top-${type}-list`).prop(`${type}s`, result);
  }
};

const renderHistory = () => {
  const KEY = "history";
  const animes = JSON.parse(sessionStorage.getItem(KEY));
  animes.reverse();

  $("search-history").prop(`${KEY}s`, animes);
};

export { renderSearch, renderTop, renderHistory };
