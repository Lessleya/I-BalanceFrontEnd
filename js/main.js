import { loadHeaderFooter } from "./utils.js";
import { isLoggedIn } from "./check-login.js";
import "https://cdn.socket.io/4.4.0/socket.io.min.js";

export const socket = io("https://cse341-ibalance-api.herokuapp.com/", {
    transports: ["websocket"],
});

loadHeaderFooter();

isLoggedIn().then((email) => {
    console.log(email);
    socket.emit("name", email);
    socket.email = email;
});

function categories(category) {
    var title_element = document.getElementById("categoryTitle");
    var backgroundColor_spiritual = "#FFDA92";
    var backgroundColor_intellectual = "#9EE0D8";
    var backgroundColor_social = "#BBE09E";
    var backgroundColor_physical = "#A1E7FD";

    // var logo = document.getElementsById("category-logo").;

    switch (category) {
        case "spiritual":
            if (titleElement) {
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

window.onscroll = function() {
    myFunction();
};

// Get the header
var header = document.getElementById("main-header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}