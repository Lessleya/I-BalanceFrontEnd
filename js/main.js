


function categories(category){

  var title_element = document.getElementById("categoryTitle");
  var backgroundColor_spiritual="#FFDA92"; 
  var backgroundColor_intelecctual = "#9EE0D8";
  var backgroundColor_social = "#BBE09E";
  var backgroundColor_physical ="#A1E7FD";

  // var logo = document.getElementsById("category-logo").;

    switch(category) {
        case 'spiritual':

          title_element.innerHTML="Spiritual";
          document.getElementById("category-logo").src="../images/spiritual-logo.png";
          document.getElementById("category-image").src="../images/spiritual-image.png";
          document.getElementById("hero-today").style.backgroundColor=backgroundColor_spiritual;

          break;
        case 'intelectual':
          title_element.innerHTML="Intelectual";
          document.getElementById("category-logo").src="../images/intelectual-logo.png";
          document.getElementById("category-image").src="../images/intelectual-image.png";
          document.getElementById("hero-today").style.backgroundColor=backgroundColor_intelecctual;

          break;

        case 'social':
          title_element.innerHTML="Social";
          document.getElementById("category-logo").src="../images/social-logo.png";
          document.getElementById("category-image").src="../images/social-image.png";
          document.getElementById("hero-today").style.backgroundColor=backgroundColor_social;

        break;

        case'physical':
        title_element.innerHTML="Physical";
        document.getElementById("category-logo").src="../images/physical-logo.png";
        document.getElementById("category-image").src="../images/physical-image.png";
        document.getElementById("hero-today").style.backgroundColor=backgroundColor_physical;

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