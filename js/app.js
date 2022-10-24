(function () {
  "use strict";
  const body = document.querySelector(".js-body");
  const menuButton = document.querySelector(".js-menu-button");
  const closeMenuButton = document.querySelector(".js-close-menu-button");
  const headerLinks = document.querySelectorAll(".js-header-link");
  const main = document.querySelector(".js-main");
  const footer = document.querySelector(".js-footer");
  const onLargeScreen = window.matchMedia("(min-width: 40em)");
  const interactiveElementsOutsideMenu = [
    ...headerLinks,
    main,
    footer,
    menuButton
  ];
  const readQuoteButtons = document.querySelectorAll(".js-read-quote-button");

  const trapFocusOnNav = () => {
    interactiveElementsOutsideMenu.forEach((element) =>
      element.setAttribute("inert", "")
    );
  };

  const removeInertAttributes = () => {
    interactiveElementsOutsideMenu.forEach((element) =>
      element.removeAttribute("inert")
    );
  };

  const openMenu = () => {
    menuButton.setAttribute("aria-expanded", "true");
    body.classList.add("is-menu-open");
    trapFocusOnNav();
  };

  const closeMenu = () => {
    menuButton.setAttribute("aria-expanded", "false");
    body.classList.remove("is-menu-open");
    removeInertAttributes();
  };

  const toggleMenu = () => {
    const isMenuOpen = menuButton.getAttribute("aria-expanded") === "true";
    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const toggleQuote = (event) => {
    const button = event.currentTarget;
    const isQuoteOpened = button.getAttribute("aria-expanded") === "true";
    if (isQuoteOpened) {
      button.setAttribute("aria-expanded", "false");
    } else {
      button.setAttribute("aria-expanded", "true");
    }
  };

  menuButton.addEventListener("click", toggleMenu);
  closeMenuButton.addEventListener("click", closeMenu);
  onLargeScreen.addEventListener("change", closeMenu);
  readQuoteButtons?.forEach((button) => {
    button.addEventListener("click", toggleQuote);
  });
})();
