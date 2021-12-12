import { loadHeaderFooter } from './utils.js';
import { isLoggedIn } from './check-login.js';
import { getParam } from './utils.js';
import 'https://cdn.socket.io/4.4.0/socket.io.min.js';

export const socket = io('https://cse341-ibalance-api.herokuapp.com/', {
  transports: ['websocket'],
});

loadHeaderFooter();

isLoggedIn().then(email => {
  if (email) {
    socket.emit('name', email);
    socket.email = email;
  }
});

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
if (menu) {
  menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
  });
}

window.onscroll = function () {
  myFunction();
};

// Get the header
const header = document.getElementById('main-header');

// Get the offset position of the navbar
const sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}
