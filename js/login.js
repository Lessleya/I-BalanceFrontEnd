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
document.querySelector('.register-form').addEventListener('submit', processRegister);
async function processRegister(e) {
  e.preventDefault();
  const _csrf = await DataService.getCsrfToken();
  fpassword = document.getElementById('password').value
  spassword = document.getElementById('verifyPassword').value
  if (fpassword != spassword){
   let error = document.getElementsByClassName('hidden-error')[0]
   error.value = "Password don't match"
   error.style.display
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
