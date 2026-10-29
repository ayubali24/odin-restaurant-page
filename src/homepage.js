// homepage
import sambusaImage from "../images/LentilSambusas.jpg"

export function loadHomepage() {
    const myContent = document.querySelector("#content");
    const myHeading = document.createElement("h1");
    const myDescription = document.createElement("p");
    const image = document.createElement("img");

    

    myHeading.textContent = "Welcome to Yubie Time";
    myDescription.textContent = "Enjoy Breakfast for Dinner, Dinner for Breakfast, whatever your heart desires";
    image.src = sambusaImage;

    myContent.append(myHeading);
    myContent.append(myDescription);
    myContent.append(image);
}