// about page

export function loadAboutPage() {
    const myContent = document.querySelector("#content");
    myContent.replaceChildren();
    const myHeading = document.createElement("h1");

    const item1 = document.createElement("h4");
    const item2 = document.createElement("h4");

    myHeading.textContent = "CONTACT INFO";
    item1.textContent = "EMAIL: yo@gmail.com";
    item2.textContent = "PHONE NUMBER: (123) 456-789";

    myContent.append(myHeading, item1, item2);
}