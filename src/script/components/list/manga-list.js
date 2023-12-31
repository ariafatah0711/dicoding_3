import '../item/manga-item.js'

class MangaList extends HTMLElement {
  get mangas () {
    return this._mangas
  }

  set mangas (mangas) {
    this._mangas = mangas
    this.render()
  }

  render () {
    this.innerHTML = '<h1>manga</h1><div class="container"></div>'
    const container = this.querySelector('div')

    this._mangas.forEach((manga) => {
      const mangaItemElement = document.createElement('manga-item')
      mangaItemElement.manga = manga

      container.appendChild(mangaItemElement)
    })
  }
}

customElements.define('manga-list', MangaList)
