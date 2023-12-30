class FooterSection extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    this.addEventListeners();
  }

  addEventListeners() {
    const h5Element = this.shadowDOM.querySelector("h5");
    h5Element.addEventListener("click", this.reset);
    h5Element.addEventListener("mouseover", () => this.changeText(h5Element));
    h5Element.addEventListener("mouseout", () => this.resetText(h5Element));
  }

  reset() {
    sessionStorage.clear();
    location.reload();
  }

  changeText(element) {
    element.innerText = "reset data";
  }

  resetText(element) {
    element.innerHTML = "by &copy;ariafatah0711";
  }

  render() {
    this.shadowDOM.innerHTML = `
    <div class="footer">
        <style>
            .footer {
                width: 100%; height: 50px;
                padding: 10px;
                display: flex;
                justify-content: center;
                align-items: end;
                flex-grow: 1;
                cursor: pointer;
            }
            
            .footer h5 {
                width: 100%;
                background: var(--main-color);
                text-align: center;
            }
            .footer h5:hover {
                background-color: #fc5f9b;
            }
        </style>

        <h5 onclick="reset()">
            by &copy;ariafatah0711
        </h5>
    </div>
    `;
  }
}

customElements.define(`footer-section`, FooterSection);
