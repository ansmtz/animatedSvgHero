const appState = {
  isMenuOpened: false,
};

const toggleContainer = document.querySelector(".toggle-menu-container"),
  toggleBtn = document.querySelector(".toggle-menu"),
  navigation = document.querySelector(".header__navigation"),
  login = document.querySelector(".header__login");

const addClasses = (elements, className) => {
  elements.forEach((element) => {
    element.classList.add(className);
  });
};
const removeClasses = (elements, className) => {
  elements.forEach((element) => {
    element.classList.remove(className);
  });
};
const toggleState = (newProp) => {
  appState[newProp] = !appState[newProp];
};
const toggleMenu = (isMenuOpened) => (elements, className) => {
  isMenuOpened
    ? addClasses(elements, className)
    : removeClasses(elements, className);
};
const toggleHandler = (e) => {
  if (
    e.target.closest(".toggle-menu") ||
    e.target.classList.contains("toggle-menu")
  ) {
    toggleState("isMenuOpened");
    toggleMenu(appState.isMenuOpened)([navigation, login], "expanded");
  }
};

toggleContainer.addEventListener("click", toggleHandler);
