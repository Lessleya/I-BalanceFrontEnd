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
