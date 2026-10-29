import "./styles.css";
import { loadHomepage } from "./homepage.js";
import { loadMenuPage } from "./menupage.js";
import { loadAboutPage } from "./aboutpage.js";
loadHomepage();

const homeButton = document.getElementById("home-button");
const menuButton = document.getElementById("menu-button");
const aboutButton = document.getElementById("about-button");


homeButton.addEventListener("click", (e) => {
    loadHomepage();
})

menuButton.addEventListener("click", (e) => {
    loadMenuPage();
})

aboutButton.addEventListener("click", (e) => {
    loadAboutPage();
})


