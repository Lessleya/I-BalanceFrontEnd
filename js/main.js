


function categories(category){

  var title_element = document.getElementById("categoryTitle");
  // var logo = document.getElementsById("category-logo").;

    switch(category) {
        case 'spiritual':
          title_element.innerHTML="Spiritual";
          document.getElementById("category-logo").src="../images/spiritual-logo.png";

          break;
        case 'intelectual':
          title_element.innerHTML="Intelectual";
          document.getElementById("category-logo").src="../images/intelectual-logo.png";


          break;

        case 'social':
          title_element.innerHTML="Social";
          document.getElementById("category-logo").src="../images/social-logo.png";

        break;

        case'physical':
        title_element.innerHTML="physical";
        document.getElementById("category-logo").src="../images/physical-logo.png";

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

 var category = getParam("category")

categories(category)