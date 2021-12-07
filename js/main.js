import { loadHeaderFooter } from "./utils.js";

loadHeaderFooter();

function categories(category) {
    var title_element = document.getElementById("categoryTitle");
    var BackgroundColor = "#f3a87c";
    // var logo = document.getElementsById("category-logo").;

    switch (category) {
        case "spiritual":
            title_element.innerHTML = "Spiritual";
            document.getElementById("category-logo").src =
                "../images/spiritual-logo.png";
            document.getElementById("hero-today").style.backgroundColor =
                BackgroundColor;

            break;
        case "intelectual":
            title_element.innerHTML = "Intelectual";
            document.getElementById("category-logo").src =
                "../images/intelectual-logo.png";

            break;

        case "social":
            title_element.innerHTML = "Social";
            document.getElementById("category-logo").src =
                "../images/social-logo.png";
        
          break;
        case 'intellectual':
          title_element.innerHTML="Intellectual";
          document.getElementById("category-logo").src="../images/intellectual-logo.png";

        case "physical":
            title_element.innerHTML = "Physical";
            document.getElementById("category-logo").src =
                "../images/physical-logo.png";

            break;

        default:
            // code block
    }
}

function getParam(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(param);
}

var category = getParam("category");

categories(category);

const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function() {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
});