import '../item/anime-item.js'

class AnimeList extends HTMLElement {
  get animes () {
    return this._animes
  }

  set animes (animes) {
    this._animes = animes
    this.render()
  }

  render () {
    this.innerHTML = '<h1>anime</h1><div class="container"></div>'
    const container = this.querySelector('div')

    this._animes.forEach((anime) => {
      const animeItemElement = document.createElement('anime-item')
      animeItemElement.anime = anime

      container.appendChild(animeItemElement)
    })
  }
}

customElements.define('anime-list', AnimeList)
