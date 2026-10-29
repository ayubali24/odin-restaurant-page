// menupage

export function loadMenuPage() {
    const myContent = document.querySelector("#content");
    myContent.replaceChildren();
    const myHeading = document.createElement("h1");
    const dishesHeading = document.createElement("h1");
    const drinksHeading = document.createElement("h1");

    const item1 = document.createElement("h4");
    const item2 = document.createElement("h4");
    const item3 = document.createElement("h4");
    const item4 = document.createElement("h4");
    const item5 = document.createElement("h4");
    
    myHeading.textContent = "YUBIE TIME'S MENU";
    dishesHeading.textContent = "APPETIZERS";
    item1.textContent = "FLUFFY EGG FRIES | $9";
    item2.textContent = "SOUR PATCH KIDS | $5";
    item3.textContent = "SOUR PATCH KIDS WATERMELON | $5.50";
    item4.textContent = "THREE SAMBUSAS | $7";
    drinksHeading.textContent = "DRINKS";
    item5.textContent = "WATER | $1.34";


    myContent.append(myHeading, dishesHeading, item1, item2, item3, item4, drinksHeading, item5);
}