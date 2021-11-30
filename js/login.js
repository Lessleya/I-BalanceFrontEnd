document.querySelector('.login-form').addEventListener('submit', processLogin);
async function processLogin(e) {
  e.preventDefault();
  const _csrf = await DataService.getCsrfToken();
  const data = {
    email: document.getElementById('emaillogin').value,
    password: document.getElementById('passwordlogin').value,
    _csrf: _csrf,
  };
  await DataService.post(data, 'login');
  await DataService.get('daily-tasks').then(async res =>
    console.log(await res)
  );
}

document.querySelector('.js-register').addEventListener('click', showRegister);
async function showRegister(e){
  e.preventDefault();
  document.querySelector('.register-form').classList.remove('hidden-error')
  document.querySelector('.login-form').classList.add('hidden-error')
}
document.querySelector('.js-signin').addEventListener('click', showLogin);
async function showLogin(e){
  e.preventDefault();
  document.querySelector('.register-form').classList.add('hidden-error')
  document.querySelector('.login-form').classList.remove('hidden-error')
}

document.querySelector('.register-form').addEventListener('submit', processRegister);
async function processRegister(e) {
  e.preventDefault();
  const _csrf = await DataService.getCsrfToken();
  fpassword = document.getElementById('password').value
  spassword = document.getElementById('verifyPassword').value
  if (fpassword != spassword){
   let error = document.querySelector('.hidden-error')
   error.textContent = "Password don't match"
   error.classList.remove('hidden-error')
  }
  const data = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    password: fpassword,
    confirmPassword: spassword,
    _csrf: _csrf,
  };
  await DataService.post(data, 'signup');
  await DataService.get('daily-tasks').then(async res =>
    console.log(await res)
  );
}
