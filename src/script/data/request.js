const searchRequest = (keyword, type) => {
  const queryParams = new URLSearchParams({
    q: keyword,
    sfw: true
  })
  return fetch(`https://api.jikan.moe/v4/${type}?${queryParams}`)
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.data) {
        return Promise.resolve(responseJson.data)
      } else {
        return Promise.reject(
          new Error(`top ${type} is not found(to many request!)`)
        )
      }
    })
    .catch((error) => console.warn(error))
}

const topRequest = (type) => {
  return fetch(`https://api.jikan.moe/v4/top/${type}`)
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.data) {
        return Promise.resolve(responseJson.data)
      } else {
        return Promise.reject(
          new Error(`top ${type} is not found(to many request!)`)
        )
      }
    })
    .catch((error) => console.warn(error))
}

export { searchRequest, topRequest }
