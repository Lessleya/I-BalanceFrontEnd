import {DataService} from './dataservice.js'

document.querySelector('.login-form').addEventListener('submit', processLogin);
async function processLogin(e) {
  e.preventDefault();
  const data = {
    email: document.getElementById('emaillogin').value,
    password: document.getElementById('passwordlogin').value,
  };
  const test = await DataService.post(data, 'login');
  console.log(test);
  window.location.replace('../view/dailytask.html');
}

document.querySelector('.js-register').addEventListener('click', showRegister);
async function showRegister(e) {
  e.preventDefault();
  document.querySelector('.register-form').classList.remove('hidden-error');
  document.querySelector('.login-form').classList.add('hidden-error');
}
document.querySelector('.js-signin').addEventListener('click', showLogin);
async function showLogin(e) {
  e.preventDefault();
  document.querySelector('.register-form').classList.add('hidden-error');
  document.querySelector('.login-form').classList.remove('hidden-error');
}

document
  .querySelector('.register-form')
  .addEventListener('submit', processRegister);
async function processRegister(e) {
  e.preventDefault();
<<<<<<< HEAD
  fpassword = document.getElementById('password').value;
  spassword = document.getElementById('verifyPassword').value;
  if (fpassword != spassword) {
    let error = document.querySelector('.hidden-error');
    error.textContent = "Password don't match";
    error.classList.remove('hidden-error');
=======
  const _csrf = await DataService.getCsrfToken();
  fpassword = document.getElementById('password').value
  spassword = document.getElementById('verifyPassword').value
  if (fpassword != spassword){
   let error = document.querySelector('.hidden-error')
   error.textContent = "Password don't match"
   error.classList.remove('hidden-error')
>>>>>>> parent of 11ef73e (Merge branch 'main' of https://github.com/Lessleya/I-BalanceFrontEnd)
  }
  const data = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    password: fpassword,
    confirmPassword: spassword,
    _csrf: _csrf,
  };
  await DataService.post(data, 'signup');
  window.location.replace('../view/dailytask.html');
}
document.querySelector('.js-forgot').addEventListener('click', showReset);
async function showReset(e) {
  e.preventDefault();
  document.querySelector('.login-form').classList.add('hidden-error');
  document.querySelector('.reset-form').classList.remove('hidden-error');
}

document.querySelector('.reset-form').addEventListener('submit', processReset);
async function processReset(e) {
  e.preventDefault();
  const data = {
    email: document.getElementById('emailReset').value,
  };
  DataService.post(data, 'reset');
  document.querySelector('.reset-form').classList.add('hidden-error');
  document.querySelector('.resetLogin-form').classList.remove('hidden-error');
}
document
  .querySelector('.resetLogin-form')
  .addEventListener('submit', processResetLogin);
async function processResetLogin(e) {
  e.preventDefault();
  const data = {
    token: document.getElementById('token').value,
    email: document.getElementById('resetEmail').value,
    password: document.getElementById('ResetPassword').value,
    confirmPassword: document.getElementById('verifyResetPassword').value,
  };
  //DataService.postLogout(data, '')
  document.querySelector('.resetLogin-form').classList.add('hidden-error');
  document.querySelector('.login-form').classList.remove('hidden-error');
}
if (document.querySelector('.logout')) {
  document.querySelector('.logout').addEventListener('click', processLogout);
}
<<<<<<< HEAD
async function processLogout(e) {
  e.preventDefault();
  DataService.post({}, 'logout').then(sucess => {
    console.log(success);
  });
}
=======
document.querySelector('.logout').addEventListener('submit', processLogout);
async function processLogout(e){
  e.preventDefault();
  const _csrf = await DataService.getCsrfToken();
  DataService.postLogout({_csrf}, 'logout')
}
>>>>>>> parent of 11ef73e (Merge branch 'main' of https://github.com/Lessleya/I-BalanceFrontEnd)
