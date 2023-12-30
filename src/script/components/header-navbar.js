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
      header {
          height: 50px; max-height: 50px;
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid black;
      }
      header h1.tittle {
          font-size: 1.35rem;
      }
      .navbar .menu {
          display: flex;
          gap: 25px;
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
      }

      .navbar-list {display: none;}
      #nav-btn {display: none;}

      @media (max-width:600px) {
        .hidden-menu {display: none !important;}
        #nav-btn {display: flex;}
        .navbar .menu {
            width: 100%;
            padding: 10px 0;
            margin-top: 25px;
            position: absolute;
            left: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            background-color: #efefef;
            z-index: 5;

            /* border: var(--brd); */
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

    <header>
      <h1 class="tittle">x-anime</h1>
        <nav class="navbar">
            <div class="menu hidden-menu">
                <a class="nav-link" data-section="home">home</a>
                <a class="nav-link" data-section="anime">anime</a>
                <a class="nav-link" data-section="manga">manga</a>
                <a class="nav-link" data-section="characters">characters</a>
            </div>
            <i id="nav-btn" class="fa fa-list navbar-list"></i>
        </nav>
      </header>
    `;
  }
}

customElements.define(`header-navbar`, headerNavbar);

// import $ from "jquery";

// class HeaderNavbar extends HTMLElement {
//   constructor() {
//     super();
//     this.shadowDOM = this.attachShadow({ mode: "open" });
//   }

//   connectedCallback() {
//     this.render();
//     this.toggleMenu();
//   }

//   set clickEvent(event) {
//     this._clickEvent = event;
//     this.render();
//   }

//   get value() {
//     return this.shadowDOM.querySelector("#searchElement").value;
//   }

//   toggleMenu() {
//     const navBtn = this.shadowDOM.querySelector("#nav-btn");
//     const menu = this.shadowDOM.querySelector(".menu");

//     if (navBtn && menu) {
//       $(navBtn).click(() => {
//         $(menu).toggleClass("hidden-menu");
//       });
//     }
//   }

//   render() {
//     this.shadowDOM.innerHTML = `
//       <style>
//         /* (style tetap tidak berubah) */
//       </style>

//       <header>
//         <h1 class="tittle">x-anime</h1>
//         <nav class="navbar">
//           <div class="menu hidden-menu">
//             <a class="nav-link" data-section="home">home</a>
//             <a class="nav-link" data-section="anime">anime</a>
//             <a class="nav-link" data-section="manga">manga</a>
//             <a class="nav-link" data-section="characters">characters</a>
//           </div>
//           <i id="nav-btn" class="fa fa-list navbar-list"></i>
//         </nav>
//       </header>
//     `;
//   }
// }

// customElements.define(`header-navbar`, HeaderNavbar);
