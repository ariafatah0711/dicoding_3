import "../item/characters-item.js";

class CharacterList extends HTMLElement {
  set characters(characters) {
    this._characters = characters;
    this.render();
    // console.log("set character list");
  }

  render() {
    this.innerHTML = `<h1>characters</h1><div class="container"></div>`;
    const container = this.querySelector("div");

    this._characters.forEach((character) => {
      const charactersItemElement = document.createElement(`characters-item`);
      charactersItemElement.character = character;

      container.appendChild(charactersItemElement);
    });
  }
}

customElements.define(`characters-list`, CharacterList);
