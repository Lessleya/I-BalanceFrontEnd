import { getParam } from './utils.js';

const category = getParam('category');

categories(category);

function categories(category) {
  const titleElement = document.getElementById('categoryTitle');
  const categoryLogo = document.getElementById('category-logo');
  const categoryImage = document.getElementById('category-image');
  const heroToday = document.getElementById('hero-today');
  const backgroundColor_spiritual = '#FFDA92';
  const backgroundColor_intellectual = '#9EE0D8';
  const backgroundColor_social = '#BBE09E';
  const backgroundColor_physical = '#A1E7FD';

  // var logo = document.getElementsById("category-logo").;

  switch (category) {
    case 'spiritual':
      titleElement.innerHTML = 'Spiritual';
      categoryLogo.src = '../images/spiritual-logo.png';
      categoryImage.src = '../images/spiritual-image.png';
      heroToday.style.backgroundColor = backgroundColor_spiritual;

      break;

    case 'intellectual':
      titleElement.innerHTML = 'Intellectual';
      categoryLogo.src = '../images/intellectual-logo.png';
      categoryImage.src = '../images/intellectual-image.png';
      heroToday.style.backgroundColor = backgroundColor_intellectual;

      break;

    case 'social':
      titleElement.innerHTML = 'Social';
      categoryLogo.src = '../images/social-logo.png';
      categoryImage.src = '../images/social-image.png';
      heroToday.style.backgroundColor = backgroundColor_social;

      break;

    case 'physical':
      titleElement.innerHTML = 'Physical';
      categoryLogo.src = '../images/physical-logo.png';
      categoryImage.src = '../images/physical-image.png';
      heroToday.style.backgroundColor = backgroundColor_physical;

      break;

    default:
    // code block
  }
}
