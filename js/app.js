(function () {
  "use strict";
  const body = document.querySelector(".js-body");
  const menuButton = document.querySelector(".js-menu-button");
  const menuList = document.querySelector(".js-menu-list");
  const closeMenuButton = document.querySelector(".js-close-menu-button");

  const openMenu = () => {
    menuButton.setAttribute("aria-expanded", "true");
    menuList.classList.add("is-open");
    body.classList.add("is-menu-open");
  };

  const closeMenu = () => {
    menuButton.setAttribute("aria-expanded", "false");
    menuList.classList.remove("is-open");
    body.classList.remove("is-menu-open");
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
})();
