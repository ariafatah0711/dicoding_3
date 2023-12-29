class AnimeItem extends HTMLElement {
  set anime(anime) {
    this._anime = anime;
    this.render();
  }

  render() {
    this.innerHTML = `
        <a href="${this._anime.url}" class="card" draggable="false">
            <img src="${this._anime.images.webp.image_url}" alt="img" draggable="false">
            <span>
                <h1>${this._anime.title}</h1>
                <p>${this._anime.episodes} eps</p>
            </span>
        </a>
    `;
  }
}

customElements.define(`anime-item`, AnimeItem);
