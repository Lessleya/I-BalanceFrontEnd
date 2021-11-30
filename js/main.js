


function categories(category){

  var title_element = document.getElementById("categoryTitle");
  var backgroundColor_spiritual="#e3c9dd"; 
  var backgroundColor_intelecctual = "#dfffd6";
  var backgroundColor_social = "#c4d3d4";
  var backgroundColor_physical ="#f3a87c ";

  // var logo = document.getElementsById("category-logo").;

    switch(category) {
        case 'spiritual':

          title_element.innerHTML="Spiritual";
          document.getElementById("category-logo").src="../images/spiritual-logo.png";
          document.getElementById("hero-today").style.backgroundColor=backgroundColor_spiritual;

          break;
        case 'intelectual':
          title_element.innerHTML="Intelectual";
          document.getElementById("category-logo").src="../images/intelectual-logo.png";
          document.getElementById("hero-today").style.backgroundColor=backgroundColor_intelecctual;

          break;

        case 'social':
          title_element.innerHTML="Social";
          document.getElementById("category-logo").src="../images/social-logo.png";
          document.getElementById("hero-today").style.backgroundColor=backgroundColor_social;

        break;

        case'physical':
        title_element.innerHTML="Physical";
        document.getElementById("category-logo").src="../images/physical-logo.png";
        document.getElementById("hero-today").style.backgroundColor=backgroundColor_physical;

        break;

        default:
      }
}

function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(param);
}

 var category = getParam("category")

categories(category)