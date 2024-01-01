class TopAnimeItem extends HTMLElement {
  get anime () {
    return this._anime
  }

  set anime (anime) {
    this._anime = anime
    this.render()
  }

  render () {
    this.innerHTML = `
          <a href="${this._anime.url}" class="card" draggable="false">
              <img src="${this._anime.images.webp.image_url}" alt="img" draggable="false">
              <span>
                  <h1>${this._anime.rank}</h1>
                  <p>${this._anime.title}</p>
              </span>
          </a>
      `
  }
}

customElements.define('top-anime-item', TopAnimeItem)
