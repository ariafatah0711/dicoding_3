import $ from 'jquery'
import Navbar from './navbar'
import { DataSearch, DataTop, History } from '../data/data-source.js'
import { renderSearch, renderTop, renderHistory } from './render.js'
import '../components/loader.js'

const main = async () => {
  const queries = ['anime', 'manga', 'characters']
  const navbar = new Navbar()
  navbar.showSection('home')

  // button
  const btnSearch = async (keyword, type) => {
    keyword = !keyword ? $('#search-input')[0].value : keyword
    try {
      const result = await DataSearch.request(keyword, type)
      renderSearch(result, type)
    } catch (message) {
      alert(message)
    }
  }

  const btnTop = async (type) => {
    try {
      const result = await DataTop.request(type)
      renderTop(result, type)
    } catch (message) {
      alert(message)
    }
  }

  /* form */
  $('form[name="anime-search-form"]')[0].onsubmit = (e) => {
    const searchInput = $('#search-input').val()
    queries.forEach((query) => btnSearch(searchInput, query))
    History.push(searchInput, 6)
    renderHistory()

    // nav-top
    if (window.location.hash.startsWith('#top')) {
      setTimeout(() => $(".nav-link[data-section='home']").click(), 500)
    }

    e.preventDefault()
  }

  /* setUp */
  const setUp = async () => {
    if (Object.keys(sessionStorage).length < 6) {
      for (let i = 0; i < queries.length; i++) {
        const query = queries[i]
        setTimeout(async () => {
          await btnTop(query)
          await new Promise((resolve) => setTimeout(resolve, 1000))

          if (i === queries.length - 1) {
            queries.forEach((query) => btnSearch('naruto', query))
            await setUp()
          }
        }, i * 1000)
      }
    } else {
      queries.forEach((query) => btnTop(query))
      queries.forEach((query) => btnSearch('naruto', query))
    }
  }

  setUp()
  renderHistory()
}

export default main
