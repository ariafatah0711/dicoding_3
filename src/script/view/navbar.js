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
  }

  hideAllSections() {
    this.sections.forEach((section) => $(`#${section}`).hide());
  }

  showSection(sectionId) {
    this.hideAllSections();
    $(`#${sectionId}`).show();
  }

  setupEventHandlers() {
    $(".nav-link, .nav-top").click((event) => {
      const sectionToShow = $(event.target).data("section");
      this.showSection(sectionToShow);

      const url = `#${sectionToShow}`;
      history.pushState({}, "", url);
    });
  }
}

export default Navbar;
