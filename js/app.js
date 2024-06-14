const iconHamburger = document.querySelector(".icon-menu__hamburguer");
const iconClose = document.querySelector(".icon-menu__close");
const links = document.querySelector(".links");

const showMenu = () => {
  iconHamburger.style.display = "none";
  iconClose.style.display = "block";
  links.style.transform = "scale(1)";
};

const hiddenMenu = () => {
  iconHamburger.style.display = "block";
  iconClose.style.display = "none";
  links.style.transform = "scale(0)";

  
};

iconHamburger.addEventListener("click", () => {
  showMenu();
});
iconClose.addEventListener("click", () => {
  hiddenMenu();
});
