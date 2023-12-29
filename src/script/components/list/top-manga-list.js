import "../item/top-manga-item.js";

class TopMangaList extends HTMLElement {
  set mangas(mangas) {
    this._mangas = mangas;
    this.render();
  }

  render() {
    this.innerHTML = `
      <h1>top manga</h1>
      <div class="container top"></div>`;

    const container = this.querySelector("div");

    this._mangas.forEach((manga) => {
      const topMangaItemElement = document.createElement(`top-manga-item`);
      topMangaItemElement.manga = manga;

      container.appendChild(topMangaItemElement);
    });
  }
}

customElements.define(`top-manga-list`, TopMangaList);
