import $ from "jquery";
import Navbar from "./navbar";
import { DataSearch, DataTop } from "../data/session-storage.js";
import { renderSearch, renderTop } from "./render.js";
import "../components/home-list.js";

const main = async () => {
  const queries = ["anime", "manga", "characters"];
  const navbar = new Navbar();

  // button
  const btnSearch = async (keyword, type) => {
    keyword = !keyword ? $(`#search-input`)[0].value : keyword;
    try {
      const result = await DataSearch.request(keyword, type);
      renderSearch(result, type);
    } catch (message) {
      alert(message);
    }
  };

  const btnTop = async (type) => {
    try {
      const result = await DataTop.request(type);
      renderTop(result, type);
    } catch (message) {
      alert(message);
    }
  };

  /* form */
  $(`form[name="anime-search-form"]`)[0].onsubmit = (e) => {
    queries.map((query) => btnSearch($(`#search-input`).value, query));
    e.preventDefault();
  };

  /* setUp */
  const setUp = async () => {
    if (Object.keys(sessionStorage).length < 6) {
      for (let i = 0; i < queries.length; i++) {
        const query = queries[i];

        setTimeout(async () => {
          btnTop(query);
          await new Promise((resolve) => setTimeout(resolve, 1000));

          if (i === queries.length - 1) {
            queries.map((query) => btnSearch("naruto", query));
            await setUp();
          }
        }, i * 1000);
      }
    } else {
      queries.forEach((query) => btnTop(query));
      queries.map((query) => btnSearch("naruto", query));
    }
  };

  setUp();
};

export default main;
