import $ from "jquery";

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

export { renderSearch, renderTop };
