// import "../src/script/components/item/anime-item.js";
// import "./manga/manga-item.js";
// import "./characters/characters-item.js";

class BaseList extends HTMLElement {
  constructor() {
    super();
    this._listType = "";
    this._items = [];
  }

  set listType(type) {
    this._listType = type;
    this.render();
  }

  set items(items) {
    this._items = items;
    this.render();
  }

  render() {
    this.innerHTML = `<h1>${this._listType}</h1><div class="container"></div>`;
    const container = this.querySelector("div");

    this._items.forEach((item) => {
      const itemElement = document.createElement(`${this._listType}-item`);
      itemElement.item = item;

      container.appendChild(itemElement);
    });
  }
}

class AnimeList extends BaseList {
  constructor() {
    super();
    this.listType = "anime";
  }
}

class MangaList extends BaseList {
  constructor() {
    super();
    this.listType = "manga";
  }
}

class CharactersList extends BaseList {
  constructor() {
    super();
    this.listType = "characters";
  }
}

customElements.define("anime-list", AnimeList);
customElements.define("manga-list", MangaList);
customElements.define("characters-list", CharactersList);
