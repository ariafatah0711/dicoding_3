import $ from "jquery";

class headerNavbar extends HTMLElement {
  constructor() {
    super();
    this.render();
    this.toggleMenu();
  }

  toggleMenu() {
    $("#nav-btn").click(() => {
      $(".menu").toggleClass("hidden-menu");
    });
  }

  render() {
    this.innerHTML = `
      <style>
        header-navbar {
            height: 50px; max-height: 50px;
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 0.5px solid var(--text);
        }
        header-navbar h1.tittle {
            font-size: 1.35rem;
            z-index: 5
        }
        .navbar .menu {
            display: flex;
            gap: 25px;
            z-index: 5
        }

        .navbar a, a::after {position: relative;}
        .navbar a::after{
            content: ""; position: absolute;
            bottom: -3px; left: 0;
            width: 0; height: 0.2rem;
            background: var(--main-color);
            transition: width 0.3s ease;
        }
        .navbar a:hover::after{
          width: 100%;
        }
        .navbar a {
          cursor: pointer;
          z-index: 5
        }

        .navbar-list {display: none;}
        #nav-btn {
          display: none;
          z-index: 10;
          padding-right: 15px;
          transform: scale(1.5);
        }

        @media (max-width:600px) {
          .hidden-menu {display: none !important;}
          #nav-btn {display: flex;}
          .navbar .menu {
              width: 100%;
              padding: 10px 0;
              margin-top: 35px;
              position: absolute;
              left: 0;
              display: flex;
              flex-direction: column;
              justify-content: center;
              background-color: #efefef;
              z-index: 5;
              background: var(--col-2) !important;
          }
          .navbar .menu a {
              text-align: center;
          }
          .navbar a::after{display: none;}
          .navbar-list {
              display: flex;
          }
        }
      </style>

      <h1 class="tittle">AnimeLab</h1>
      <nav class="navbar">
        <div class="menu hidden-menu">
            <a class="nav-link" data-section="home">home</a>
            <a class="nav-link" data-section="anime">anime</a>
            <a class="nav-link" data-section="manga">manga</a>
            <a class="nav-link" data-section="characters">characters</a>
        </div>
        <i id="nav-btn" class="fa fa-list navbar-list">#</i>
        </nav>
        `;
    // <script src="https://kit.fontawesome.com/c90c144b50.js" crossorigin="anonymous"></script>
    // <i id="nav-btn" class="fa fa-list navbar-list"></i>
  }
}

customElements.define("header-navbar", headerNavbar);
