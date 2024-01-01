class topMangaItem extends HTMLElement {
  get manga () {
    return this._manga
  }

  set manga (manga) {
    this._manga = manga
    this.render()
  }

  render () {
    this.innerHTML = `
            <a href="${this._manga.url}" class="card" draggable="false">
                <img src="${this._manga.images.webp.image_url}" alt="img" draggable="false">
                <span>
                    <h1>${this._manga.rank}</h1>
                    <p>${this._manga.title}</p>
                </span>
            </a>
        `
  }
}

customElements.define('top-manga-item', topMangaItem)
