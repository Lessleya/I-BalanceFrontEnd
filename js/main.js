import { loadHeaderFooter } from "./utils.js";

loadHeaderFooter();

function categories(category) {
    var title_element = document.getElementById("categoryTitle");
    var backgroundColor_spiritual = "#FFDA92";
    var backgroundColor_intellectual = "#9EE0D8";
    var backgroundColor_social = "#BBE09E";
    var backgroundColor_physical = "#A1E7FD";

    // var logo = document.getElementsById("category-logo").;

    switch (category) {
        case "spiritual":
            if (titleElement){
                title_element.innerHTML = "Spiritual";
            }
            document.getElementById("category-logo").src =
                "../images/spiritual-logo.png";
            document.getElementById("category-image").src =
                "../images/spiritual-image.png";
            document.getElementById("hero-today").style.backgroundColor =
                backgroundColor_spiritual;

            break;

        case "intellectual":
            title_element.innerHTML = "Intellectual";
            document.getElementById("category-logo").src =
                "../images/intellectual-logo.png";
            document.getElementById("category-image").src =
                "../images/intellectual-image.png";
            document.getElementById("hero-today").style.backgroundColor =
                backgroundColor_intellectual;

            break;

        case "social":
            title_element.innerHTML = "Social";
            document.getElementById("category-logo").src =
                "../images/social-logo.png";
            document.getElementById("category-image").src =
                "../images/social-image.png";
            document.getElementById("hero-today").style.backgroundColor =
                backgroundColor_social;

            break;

        case "physical":
            title_element.innerHTML = "Physical";
            document.getElementById("category-logo").src =
                "../images/physical-logo.png";
            document.getElementById("category-image").src =
                "../images/physical-image.png";
            document.getElementById("hero-today").style.backgroundColor =
                backgroundColor_physical;

            break;

        default:
            // code block
    }
}

export function getParam(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(param);
}

var category = getParam("category");

categories(category);

const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
if (menu) {
    menu.addEventListener("click", function() {
        menu.classList.toggle("is-active");
        menuLinks.classList.toggle("active");
    });
    
}
