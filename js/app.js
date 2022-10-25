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
  const form = document.querySelector(".js-form");
  const requiredInputs = document.querySelectorAll(
    ".js-required-input[required]"
  );
  const alerts = document.querySelectorAll(".js-alert");

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

  const showAlertMessage = ({ input, alert, message }) => {
    alert.textContent = message;
    input.classList.add("is-invalid");
  };

  const handleAlert = (input, message) => {
    alerts.forEach((alert) => {
      const inputID = input.dataset.id;
      const alertID = alert.dataset.id;
      if (inputID === alertID) {
        showAlertMessage({ input, alert, message });
      }
    });
  };

  const validateEmail = (input, email) => {
    const emailValidation =
      /^(?:[a-z0-9.]){2,30}@{1}(?:[a-z0-9-]){2,30}\.{1}(?:[a-z0-9]){2,3}(?:\.(?:[a-z0-9]){2,3})?$/;
    const isValid = emailValidation.test(email);
    if (!isValid) {
      handleAlert(input, "Please use a valid email address");
    }
    return isValid;
  };

  const isInputFilled = (input, value) => {
    const isFilled = !!value;
    if (!isFilled) {
      handleAlert(input, `This ${input.dataset.id} field is required`);
    }
    return isFilled;
  };

  const checkAllRequiredInputs = () => {
    let isNameFilled = false;
    let isEmailValid = false;
    let isMessageFilled = false;
    requiredInputs.forEach((input) => {
      const id = input.dataset.id;
      const value = input.value;
      switch (id) {
        case "name":
          isNameFilled = isInputFilled(input, value);
          break;
        case "email":
          {
            const isEmailFilled = isInputFilled(input, value);
            if (isEmailFilled) {
              isEmailValid = validateEmail(input, value);
            }
          }
          break;
        case "message":
          isMessageFilled = isInputFilled(input, value);
          break;
        default:
          console.error(`This ${id} input field doesn't exist`);
      }
    });
    const areAllInputsValid = isNameFilled && isEmailValid && isMessageFilled;
    return areAllInputsValid;
  };

  const clearAllAlerts = () => {
    alerts.forEach((alert) => (alert.textContent = ""));
    requiredInputs.forEach((input) => input.classList.remove("is-invalid"));
  };

  const validateForm = (event) => {
    clearAllAlerts();
    const isFormInvalid = checkAllRequiredInputs() === false;
    if (isFormInvalid) {
      event.preventDefault();
    }
  };

  const useCustomFormValidation = () => {
    form?.setAttribute("novalidate", "");
  };

  menuButton.addEventListener("click", toggleMenu);
  closeMenuButton.addEventListener("click", closeMenu);
  onLargeScreen.addEventListener("change", closeMenu);
  readQuoteButtons?.forEach((button) => {
    button.addEventListener("click", toggleQuote);
  });
  form?.addEventListener("submit", validateForm);
  document.addEventListener("DOMContentLoaded", useCustomFormValidation);
})();
