import $ from "jquery";

class Loader extends HTMLElement {
  constructor() {
    super();
    this.setUp();
    this.render();
  }

  setUp() {
    if (sessionStorage.getItem("firstVisit") === null) {
      this.showLoader();

      sessionStorage.setItem("firstVisit", "true");
      setTimeout(() => {
        this.hideLoader();
        $("x-loader").remove();
      }, 5500);
    } else {
      this.hideLoader();
      $("x-loader").remove();
    }
  }

  showLoader() {
    $("#loader-wrapper").css("display", "flex");
  }

  hideLoader() {
    $("#loader-wrapper").css("display", "none");
  }

  render() {
    this.innerHTML = `
        <style>
            #loader-wrapper {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(255, 255, 255, 0.7);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 9999;

                background-color: white;
            }

            #loader {
                border: 16px solid #f3f3f3;
                border-top: 16px solid #3498db;
                border-radius: 50%;
                width: 80px;
                height: 80px;
                animation: spin 1s linear infinite;
            }

            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        </style>

        <div id="loader-wrapper">
            <div id="loader"></div>
        </div>
    `;
  }
}

customElements.define(`x-loader`, Loader);
