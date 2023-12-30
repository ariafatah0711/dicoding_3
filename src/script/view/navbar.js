import $ from "jquery";

class Navbar {
  constructor() {
    this.sections = [
      "home",
      "anime",
      "manga",
      "characters",
      "top-anime",
      "top-manga",
      "top-characters",
    ];
    this.hideAllSections();
    this.setupEventHandlers();

    window.addEventListener("resize", () => {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 768) {
        this.toggleMenuOff();
      }
    });
  }

  hideAllSections() {
    this.sections.forEach((section) => $(`#${section}`).hide());
  }

  showSection(sectionId) {
    this.hideAllSections();
    $(`#${sectionId}`).show();
  }

  toggleMenuOff() {
    $(".menu").addClass("hidden-menu");
  }

  setupEventHandlers() {
    $(".nav-link, .nav-top").click((event) => {
      const sectionToShow = $(event.target).data("section");
      this.showSection(sectionToShow);

      const url = `#${sectionToShow}`;
      history.pushState({}, "", url);

      this.toggleMenuOff();
      // $(".menu").addClass("hidden-menu");
    });
  }
}

export default Navbar;
