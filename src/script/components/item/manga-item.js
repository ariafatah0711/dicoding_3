class MangaItem extends HTMLElement {
  get manga () {
    return this._manga
  }

  set manga (manga) {
    this._manga = manga
    this._manga.chapters = this._manga.chapters ?? '1'
    this.render()
  }

  render () {
    this.innerHTML = `
        <a href="${this._manga.url}" class="card" draggable="false">
            <img src="${this._manga.images.webp.image_url}" alt="img" draggable="false">
            <span>
                <h1>${this._manga.title}</h1>
                <p>${this._manga.chapters} ch</p>
            </span>
        </a>
    `
  }
}

customElements.define('manga-item', MangaItem)
