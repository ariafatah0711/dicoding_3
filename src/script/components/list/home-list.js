class HomeList extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <style>
          .home-list .container
          {
              overflow-x: scroll; overflow-y: hidden;
          
              padding: 25px 0;
              position: relative;
              display: flex;
              flex-direction: row;
              gap: 25px;
          }
        </style>

        <anime-list class="home-list"></anime-list>
        <manga-list class="home-list"></manga-list>
        <characters-list class="home-list"></characters-list>
    `;
  }
}

customElements.define(`home-list`, HomeList);
