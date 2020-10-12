/**================================================================================================
 *                                         SELECTORS
 *================================================================================================**/

//! NAVBAR
const nav = document.querySelector(".navbar");
const burger = document.querySelector(".burger-menu");
const navList = document.querySelector(".navbar_icons");
const navTitle = document.querySelector(".navbar .title");
const navFacebook = document.querySelector(".navbar .fa-facebook");
const navLinkedin = document.querySelector(".navbar .fa-linkedin");
const navGithub = document.querySelector(".navbar .fa-github");
const navMail = document.querySelector(".navbar button");
const switchLang = document.getElementById("switch-language");

//!HERO
const heroH1 = document.querySelector(".hero h1");
const heroH2 = document.querySelector(".hero h2");

//!ABOUT
const aboutH2 = document.querySelector(".about h2");
const aboutP = document.querySelector(".about p");

//!KNOWLEDGE
const knowledgeH2 = document.querySelector(".knowledge h2");
const knowledgeH3a = document.querySelector(".knowledge #a");
const knowledgeH3b = document.querySelector(".knowledge #b");
const knowledgeES = document.querySelector(".knowledge .es");
const knowledgeEN = document.querySelector(".knowledge .en");
const knowledgeFR = document.querySelector(".knowledge .fr");

//!ACADEMIC
const viewCV = document.querySelector(".academic button");
const academicH2 = document.querySelector(".academic h2");
const acamica = document.getElementById("acamica");
const unc = document.getElementById("unc");

//!PROJECTS
const podcast = document.getElementById("podcast-channel");
const gifos = document.getElementById("gifos");
const projectsH2 = document.querySelector(".projects h2");

//!CONTACT
const Facebook = document.querySelector(".contact .fa-facebook");
const Linkedin = document.querySelector(".contact .fa-linkedin");
const Github = document.querySelector(".contact .fa-github");
const Mail = document.querySelector(".contact button");
const contactH2 = document.querySelector(".contact h2");
const contactButton = document.querySelector(".contact button");

/**================================================================================================
 *                                         VARIABLES
 *================================================================================================**/
var burgerOpen = false;
var inEnglish = false;
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

////CONTACT LINKS
Facebook.addEventListener("click", () => {
  window.open("https://www.facebook.com/jesuslencina55/");
});

Linkedin.addEventListener("click", () => {
  window.open("https://www.linkedin.com/in/jesuslencina/");
});

Github.addEventListener("click", () => {
  window.open("https://github.com/jesuslencina");
});

Mail.addEventListener("click", () => {
  window.open("mailto:jesusignaciolencina@gmail.com");
});

////SWITCH LANGUAGE
switchLang.addEventListener("click", switchLanguage);

////VIEW CV
viewCV.addEventListener("click", () => {
  window.open(
    "https://www.canva.com/design/DAEKHfa9vKs/Pnj_jUHfGu_eSV3RfPH9tg/view?utm_content=DAEKHfa9vKs&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"
  );
});

////SCROLL EFFECT
window.onscroll = function scroll() {
  if (document.documentElement.scrollTop > 200) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
};

////VIEW PROJECTS
podcast.addEventListener("click", () => {
  window.open("https://podcast-channel-jesus.netlify.app/");
});

gifos.addEventListener("click", () => {
  window.open("https://github.com/jesuslencina/GIFOS-2/");
});

/**================================================================================================
 *                                         FUNCTIONS
 *================================================================================================**/

function switchLanguage() {
  //IF
  if (inEnglish == false) {
    switchLang.src = "assets/argentina.png";
    inEnglish = true;
    //CHANGE TEXTS
    //!NAV
    navTitle.innerHTML = "Jesus Lencina";
    navMail.innerHTML = "SEND ME AN E-MAIL";
    //!HERO
    heroH1.innerHTML = "Jesus Lencina";
    heroH2.innerHTML = "Front-End Web Developer";
    //!ABOUT
    aboutH2.innerHTML = "ABOUT ME";
    aboutP.innerHTML =
      "I'm 19 years old, and I live in Córdoba, Argentina. I'm passionate about web design, as well as learning languages and taking photographs. I also like taking care of my over 10 pets.";
    //!KNOWLEDGE
    knowledgeH2.innerHTML = "KNOWLEDGE";
    knowledgeH3a.innerHTML = "Coding:";
    knowledgeH3b.innerHTML = "Languages:";
    knowledgeES.querySelector("h4").innerHTML = "Spanish";
    knowledgeES.querySelector("h5").innerHTML = "(Native)";
    knowledgeEN.querySelector("h4").innerHTML = "English";
    knowledgeEN.querySelector("h5").innerHTML = "(Advanced - C2)";
    knowledgeFR.querySelector("h4").innerHTML = "French";
    knowledgeFR.querySelector("h5").innerHTML = "(Intermediate)";
    //!ACADEMIC
    academicH2.innerHTML = "ACADEMIC HISTORY";
    acamica.querySelector("p").innerHTML = "Front-End Web Development - 2020";
    unc.querySelector("h3").innerHTML = "NATIONAL UNIVERSITY OF CORDOBA";
    unc.querySelector("p").innerHTML = "English Translation Degree - 2019";
    viewCV.innerHTML = "VIEW MORE IN MY CV";
    //!PROJECTS
    projectsH2.innerHTML = "PROJECTS";
    //!CONTACT
    contactH2.innerHTML = "WANNA SEND A MESSAGE?";
    contactButton.innerHTML = "SEND ME AN E-MAIL";
  } else {
    switchLang.src = "assets/usa.png";
    inEnglish = false;
    //CHANGE TEXTS
    //!NAV
    navTitle.innerHTML = "Jesús Lencina";
    navMail.innerHTML = "MANDAME UN MAIL";
    //!HERO
    heroH1.innerHTML = "Jesús Lencina";
    heroH2.innerHTML = "Desarrollador Web Front-End";
    //!ABOUT
    aboutH2.innerHTML = "SOBRE MÍ";
    aboutP.innerHTML = `Vivo en Córdoba Capital, Argentina, tengo 19 años y me apasiona el diseño web, como también los idiomas y
    la fotografía. También me dedico a cuidar a mis más de 10 mascotas.`;
    //!KNOWLEDGE
    knowledgeH2.innerHTML = "CONOCIMIENTOS";
    knowledgeH3a.innerHTML = "Del sector:";
    knowledgeH3b.innerHTML = "Idiomas:";
    knowledgeES.querySelector("h4").innerHTML = "Español";
    knowledgeES.querySelector("h5").innerHTML = "(Nativo)";
    knowledgeEN.querySelector("h4").innerHTML = "Inglés";
    knowledgeEN.querySelector("h5").innerHTML = "(Avanzado - C2)";
    knowledgeFR.querySelector("h4").innerHTML = "Francés";
    knowledgeFR.querySelector("h5").innerHTML = "(Intermedio)";
    //!ACADEMIC
    academicH2.innerHTML = "HISTORIA ACADÉMICA";
    acamica.querySelector("p").innerHTML = "Desarrollo Web Front-End - 2020";
    unc.querySelector("h3").innerHTML = "UNIVERSIDAD NACIONAL DE CÓRDOBA";
    unc.querySelector("p").innerHTML =
      "Traductorado Público Nacional de Inglés - 2019";
    viewCV.innerHTML = "VER MÁS EN MI CV";
    //!PROJECTS
    projectsH2.innerHTML = "PROYECTOS";
    //!CONTACT
    contactH2.innerHTML = "¿ME ENVIAS UN MENSAJE?";
    contactButton.innerHTML = "ENVIAME UN MAIL";
  }
}
