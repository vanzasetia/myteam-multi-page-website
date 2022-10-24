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
    const isMenuOpen = menuButton.getAttribute("aria-expanded");
    if (isMenuOpen === "false") {
      openMenu();
    } else {
      closeMenu();
    }
  };

  menuButton.addEventListener("click", toggleMenu);
  closeMenuButton?.addEventListener("click", closeMenu);
  onLargeScreen.addEventListener("change", closeMenu);
})();
