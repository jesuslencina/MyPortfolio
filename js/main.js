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
const switchLangESP = document.querySelector(".navbar .esp");
const switchLangENG = document.querySelector(".navbar .eng");
const switchLangFRA = document.querySelector(".navbar .fra");

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
var language = "ES";
/**================================================================================================
 *                                         LISTENERS
 *================================================================================================**/
////BURGER MENU
burger.addEventListener("click", () => {
  if (burgerOpen == false) {
    openBurger();
  } else {
    closeBurger();
  }
});

function openBurger() {
  burger.classList.add("open");
  burger.classList.remove("closed");
  navList.classList.add("open");
  navList.classList.remove("closed");
  burgerOpen = true;
}

function closeBurger() {
  burger.classList.add("closed");
  burger.classList.remove("open");
  navList.classList.add("closed");
  navList.classList.remove("open");
  burgerOpen = false;
}

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
switchLangESP.addEventListener("click", () => {
  language = "ES";
  switchLanguage();
  closeBurger();
});

switchLangENG.addEventListener("click", () => {
  language = "EN";
  switchLanguage();
  closeBurger();
});

switchLangFRA.addEventListener("click", () => {
  language = "FR";
  switchLanguage();
  closeBurger();
});

////VIEW CV
viewCV.addEventListener("click", () => {
  switch (language) {
    case "ES":
      window.open(
        "https://www.canva.com/design/DAEKHfa9vKs/Pnj_jUHfGu_eSV3RfPH9tg/view?utm_content=DAEKHfa9vKs&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"
      );
      break;
    case "EN":
      window.open(
        "https://www.canva.com/design/DAEKIa0IjJk/WiyWsFUffwGBSlxN5PdJbw/view?utm_content=DAEKIa0IjJk&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"
      );
      break;
    case "FR":
      window.open(
        "https://www.canva.com/design/DAEKcibQA5I/1RwiSZTicch780kFdWfFpQ/view?utm_content=DAEKcibQA5I&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"
      );
      break;
    default:
      window.open(
        "https://www.canva.com/design/DAEKHfa9vKs/Pnj_jUHfGu_eSV3RfPH9tg/view?utm_content=DAEKHfa9vKs&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"
      );
      break;
  }
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
  window.open("https://gifos-jesus.netlify.app/");
});

/**================================================================================================
 *                                         FUNCTIONS
 *================================================================================================**/

function switchLanguage() {
  switch (language) {
    case "EN":
      //*SWITCH TO ENGLISH
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
        "I'm 19 years old, and I live in Córdoba, Argentina. I'm passionate about web design, as well as learning languages and taking photographs. I also like taking care of my pets.";
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
      contactH2.innerHTML = "WANNA LEAVE A MESSAGE?";
      contactButton.innerHTML = "SEND ME AN E-MAIL";
      break;

    case "FR":
      //*SWITCH TO FRENCH
      //CHANGE TEXTS
      //!NAV
      navTitle.innerHTML = "Jésus Lencina";
      navMail.innerHTML = "ENVOYER UN E-MAIL";
      //!HERO
      heroH1.innerHTML = "Jésus Lencina";
      heroH2.innerHTML = "Développeur Web Front-End";
      //!ABOUT
      aboutH2.innerHTML = "À PROPOS DE MOI";
      aboutP.innerHTML =
        "J'ai 19 ans, et j'habite à Córdoba, Argentina. J'adore le développement web, et j'aime apprendre de nouvelles langues. Je fais de la photographie, aussi. Prendre soin de mes animaux c'est bon pour moi.";
      //!KNOWLEDGE
      knowledgeH2.innerHTML = "OUTILS";
      knowledgeH3a.innerHTML = "Du secteur:";
      knowledgeH3b.innerHTML = "Langues:";
      knowledgeES.querySelector("h4").innerHTML = "Espagnol";
      knowledgeES.querySelector("h5").innerHTML = "(Langue maternelle)";
      knowledgeEN.querySelector("h4").innerHTML = "Anglais";
      knowledgeEN.querySelector("h5").innerHTML = "(Avancée - C2)";
      knowledgeFR.querySelector("h4").innerHTML = "Français";
      knowledgeFR.querySelector("h5").innerHTML = "(Intermédiaire)";
      //!ACADEMIC
      academicH2.innerHTML = "ÉDUCATION";
      acamica.querySelector("p").innerHTML =
        "Développement Web Front-End - 2020";
      unc.querySelector("h3").innerHTML = "UNIVERSITÉ NATIONALE DE CORDOBA";
      unc.querySelector("p").innerHTML = "Traductorat d'Anglais - 2019";
      viewCV.innerHTML = "VOIR PLUS DANS MON CV";
      //!PROJECTS
      projectsH2.innerHTML = "PROJECTS";
      //!CONTACT
      contactH2.innerHTML = "M'ENVOYER UN MESSAGE?";
      contactButton.innerHTML = "ENVOYER UN E-MAIL";
      break;

    default:
      //*SWITCH TO SPANISH
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
    la fotografía. Además, me dedico a cuidar a mis mascotas.`;
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
      contactH2.innerHTML = "¿ME ENVÍAS UN MENSAJE?";
      contactButton.innerHTML = "ENVIAME UN MAIL";

      break;
  }
}
