import $ from 'jquery'
import reverse from 'lodash/reverse'

const renderSearch = (result, type) => {
  const propName = type === 'characters' ? `${type}` : `${type}s`
  if (result === undefined) {
    result = []
    $(`${type}-list`).prop(propName, result)
  } else {
    $(`${type}-list`).prop(propName, result)
  }
}

const renderTop = (result, type) => {
  if (type === 'characters') {
    $(`top-${type}-list`).prop(`${type}`, result)
  } else {
    $(`top-${type}-list`).prop(`${type}s`, result)
  }
}

const renderHistory = () => {
  const KEY = 'history'
  const animesArray = JSON.parse(sessionStorage.getItem(KEY)) || []
  const animes = reverse(animesArray)

  $('search-history').prop(`${KEY}s`, animes)
}

export { renderSearch, renderTop, renderHistory }
