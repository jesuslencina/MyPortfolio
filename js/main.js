/**================================================================================================
 *                                         SELECTORS
 *================================================================================================**/

const burger = document.querySelector(".burger-menu");
const navList = document.querySelector(".navbar_icons");
const navFacebook = document.querySelector(".navbar .fa-facebook");
const navLinkedin = document.querySelector(".navbar .fa-linkedin");
const navGithub = document.querySelector(".navbar .fa-github");
const navMail = document.querySelector(".navbar button");

/**================================================================================================
 *                                         VARIABLES
 *================================================================================================**/
var burgerOpen = false;
/**================================================================================================
 *                                         LISTENERS
 *================================================================================================**/
////BURGER MENU
burger.addEventListener("click", () => {
  if (burgerOpen == false) {
    burger.classList.add("open");
    burger.classList.remove("closed");
    navList.classList.add("open");
    navList.classList.remove("closed");
    burgerOpen = true;
  } else {
    burger.classList.add("closed");
    burger.classList.remove("open");
    navList.classList.add("closed");
    navList.classList.remove("open");
    burgerOpen = false;
  }
});

////NAV LINKS
navFacebook.addEventListener("click", () => {
  window.open("https://www.facebook.com/jesuslencina55/");
});

navLinkedin.addEventListener("click", () => {
  window.open("https://www.linkedin.com/in/jesuslencina/");
});

navGithub.addEventListener("click", () => {
  window.open("https://github.com/jesuslencina");
});

navMail.addEventListener("click", () => {
  window.open("mailto:jesusignaciolencina@gmail.com");
});
