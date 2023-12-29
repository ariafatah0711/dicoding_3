import "../item/top-characters-item.js";

class TopCharactersList extends HTMLElement {
  set characters(characters) {
    this._characters = characters;
    this.render();
  }

  render() {
    this.innerHTML = `
      <h1>top characters</h1>
      <div class="container"></div>`;

    const container = this.querySelector("div");

    this._characters.forEach((character) => {
      const topCharactersItemElement =
        document.createElement(`top-characters-item`);
      topCharactersItemElement.character = character;

      container.appendChild(topCharactersItemElement);
    });
  }
}

customElements.define(`top-characters-list`, TopCharactersList);
