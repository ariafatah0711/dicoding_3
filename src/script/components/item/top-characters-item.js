class topCharactersItem extends HTMLElement {
  get character () {
    return this._character
  }

  set character (character) {
    this._character = character
    this.render()
  }

  render () {
    this.innerHTML = `
              <a href="${this._character.url}" class="card" draggable="false">
                  <img src="${this._character.images.webp.image_url}" alt="img" draggable="false">
                  <span>
                      <h1>${this._character.name}</h1>
                      <p>${this._character.favorites} fav</p>
                  </span>
              </a>
          `
  }
}

customElements.define('top-characters-item', topCharactersItem)
