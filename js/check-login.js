import { DataService } from './dataservice.js';

export async function isLoggedIn() {
  let loggedin = await DataService.get('is-logged-in');
  if (loggedin.loggedIn) {
    let logout = document.querySelector('.logout');
    logout.classList.remove('hidden-error');
    logout.addEventListener('click', async () => {
        DataService.post({}, 'logout').then(success => {
          console.log(success)
      });
    });
    document.querySelector('.login').classList.add('hidden-error');
  } else if (window.location.pathname !== "/view/login.html") {
    //document.querySelector('.login').classList.add('hidden-error')
    //document.querySelector('.logout').classList.remove('hidden-error')
    
    
    window.location.replace('../view/login.html');
  }
  return loggedin.email;
}
