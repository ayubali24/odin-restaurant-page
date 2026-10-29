import "./styles.css";
import { loadHomepage } from "./homepage.js";
loadHomepage();
const myButton = document.querySelectorAll("button");
myButton.forEach((button) => {
    button.addEventListener("click", (e) => {
        alert("i have been clicked");
    })
});
