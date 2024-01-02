import $ from 'jquery'
import swal from 'sweetalert'

class headerNavbar extends HTMLElement {
  constructor () {
    super()
    this.render()
    this.toggleMenu()
    this.logClick()
  }

  toggleMenu () {
    $('#nav-btn').click(() => {
      $('.menu').toggleClass('hidden-menu')
    })
  }

  logClick () {
    $('.log').click(() => {
      swal('Comming Soon', 'feature not found', 'info')
    })
  }

  render () {
    this.innerHTML = `
      <style>
        header-navbar {
            padding: 0 15px;
            height: 50px; max-height: 50px;
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: var(--bg-color);
        }
        .navbar {
          display: flex;
          gap: 20px;
          padding-right: 25px;
        }
        .navbar .log {
          background: var(--clr);
          border-radius: 8px;
          padding: 2px 10px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          z-index: 5;
        }
        .navbar a {
          font-size: 1rem;
          color: var(--text);
          min-height 25px; max-height: 25px;
        }

        .navbar .menu {
            display: flex;
            gap: 25px;
            z-index: 5
        }

        .menu a, a::after {position: relative;}
        .menu a::after{
            content: ""; position: absolute;
            bottom: -3px; left: 0;
            width: 0; height: 0.2rem;
            background: var(--main-color);
            transition: width 0.3s ease;
        }
        .menu a:hover::after{
          width: 100%;
        }
        .menu a {
          cursor: pointer;
          z-index: 5
        }

        .navbar-list {display: none;}
        #nav-btn {
          display: none;
          z-index: 10;
          padding-right: 15px;
          transform: scale(1.5);
          color: var(--text);
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
              background: var(--bg-color) !important;
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

      <nav class="navbar">
        <div class="menu hidden-menu">
          <a class="nav-link" data-section="home">home</a>
          <a class="nav-link" data-section="anime">anime</a>
          <a class="nav-link" data-section="manga">manga</a>
          <a class="nav-link" data-section="characters">characters</a>
        </div>
        <i id="nav-btn" class="fa fa-list navbar-list">#</i>
      </nav>

      <nav class="navbar">
        <a class="log" style="--clr:#FFBC00">login</a>
        <a class="log" style="--clr:#25A449">sign up</a>
      </nav>
      `
  }
}

customElements.define('header-navbar', headerNavbar)
