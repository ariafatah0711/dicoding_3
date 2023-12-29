import "../item/top-anime-item.js";

class TopAnimeList extends HTMLElement {
  set animes(animes) {
    this._animes = animes;
    this.render();
  }

  render() {
    this.innerHTML = `
      <h1>top anime</h1>
      <div class="container top"></div>`;

    const container = this.querySelector("div");

    this._animes.forEach((anime) => {
      const topAnimeItemElement = document.createElement(`top-anime-item`);
      topAnimeItemElement.anime = anime;

      container.appendChild(topAnimeItemElement);
    });
  }
}

customElements.define(`top-anime-list`, TopAnimeList);
