import $ from "jquery";
import { searchRequest, topRequest } from "./request.js";

class DataSearch {
  static async request(keyword, type) {
    const KEY = `${keyword}-${type}`;
    let result = sessionStorage.getItem(KEY);

    if (result === null || result === "undefined") {
      console.info(`${KEY} not found::request to server...`);
      result = await searchRequest(keyword, type);
      sessionStorage.setItem(KEY, JSON.stringify(result));
    } else {
      // console.log(`${KEY} found`);
      result = JSON.parse(result);
    }

    return Promise.resolve(result);
  }
}

class DataTop {
  static async request(type) {
    const KEY = `top-${type}`;
    let result = sessionStorage.getItem(KEY);

    if (result === null || result === "undefined") {
      console.info(`${KEY} not found::request to server...`);
      result = await topRequest(type);
      sessionStorage.setItem(KEY, JSON.stringify(result));
    } else {
      // console.info(`${KEY} found`);
      result = JSON.parse(result);
    }

    return Promise.resolve(result);
  }
}

export { DataSearch, DataTop };
