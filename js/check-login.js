import { DataService } from './dataservice.js';

export async function isLoggedIn() {
  const data = await DataService.get('is-logged-in');
  if (data.loggedIn) {
    const logout = document.querySelector('.logout');
    logout.classList.remove('hidden-error');
    logout.addEventListener('click', onLogout);
    document.querySelector('.login').classList.add('hidden-error');
  } else if (window.location.pathname !== "/view/login.html") {    
    window.location.replace('../view/login.html');
  }
  return data.email;
}

function onLogout() {
  DataService.post({}, 'logout').then(data => {
    if (data.success) {
      window.location.replace('../view/login.html');
    } else {
      alert("ERROR: Could not log out. Are you logged in?")
    }
});
}