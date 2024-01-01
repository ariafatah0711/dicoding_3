import axios from "axios";

const searchRequest = (keyword, type) => {
  const queryParams = {
    q: keyword,
    sfw: true,
  };

  return axios
    .get(`https://api.jikan.moe/v4/${type}`, { params: queryParams })
    .then((response) => {
      if (response.data.data) {
        return Promise.resolve(response.data.data);
      } else {
        return Promise.reject(
          new Error(`top ${type} is not found (too many requests!)`)
        );
      }
    })
    .catch((error) => {
      console.warn(error);
    });
};

const topRequest = (type) => {
  return axios
    .get(`https://api.jikan.moe/v4/top/${type}`)
    .then((response) => {
      if (response.data.data) {
        return Promise.resolve(response.data.data);
      } else {
        return Promise.reject(
          new Error(`top ${type} is not found (too many requests!)`)
        );
      }
    })
    .catch((error) => {
      console.warn(error);
    });
};

export { searchRequest, topRequest };
