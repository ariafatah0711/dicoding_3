class ResultList extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <style>
            .list .container {
                padding: 25px 0;
                display: grid;
                grid-template-columns: repeat(5, 180px);
                grid-template-rows: auto;
                justify-content: space-evenly;
                gap: 25px 10px;
            }

            @media (max-width:1100px) {
            .list .container {grid-template-columns: repeat(4, 180px);}
            }
            @media (max-width:900px) {
            .list .container {grid-template-columns: repeat(3, 180px);}
            }
            @media (max-width:600px) {
            .list .container {grid-template-columns: repeat(2, 180px);}
            }
            @media (max-width:400px) {
            .list .container {grid-template-columns: repeat(1, 180px);}
            }

            .card {
                height: 320px; width: 180px;
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: stretch;
                gap: 0 0;
                overflow: hidden;
            }
            .card:hover {
                background: #efefef;
            }
            
            img {
                min-height: 250px; max-height: 250px;
                width: 180px; min-width: 180px; max-width: 180px;
                object-fit: contain;
                display: flex;
                flex-grow: 1;
            }
            .card span {
                max-height: 50px; min-height: 50px;
                padding: 7.5px;
                display: grid;
                grid-template-columns: repeat(2, 80% auto);
                flex-direction: row;
                justify-content: space-between;
            }
            .card span h1 {
                min-width: 80%; max-width: 80%;
                display: flex;
                font-size: 0.75rem;
                text-align: left;
                white-space: wrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .card span p {
                display: flex;
                justify-content: center;
                font-size: 0.75rem;
                font-weight: bold;
                text-align: center;
            }

            .list .container.top .card span {
                grid-template-columns: repeat(2, 25% auto);
                flex-direction: column;
              }
              .list .container.top .card span h1 {
                font-size: 1.5rem;
                text-align: left;
              }
              .list .container.top .card span p {
                display: flex;
                font-size: 0.75rem;
                white-space: wrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }
        </style>

        <home-list id="home" class="home"></home-list>
        <anime-list id="anime" class="list"></anime-list>
        <manga-list id="manga" class="list"></manga-list>
        <characters-list id="characters" class="list"></characters-list>
        <top-anime-list id="top-anime" class="list"></top-anime-list>
        <top-manga-list id="top-manga" class="list"></top-manga-list>
        <top-characters-list id="top-characters" class="list"></top-characters-list>
    `;
  }
}

customElements.define(`result-list`, ResultList);
