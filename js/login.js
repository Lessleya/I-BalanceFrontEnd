import { DataService } from './dataservice.js';

const forms = ['register', 'login', 'resetMsg', 'resetToken'];

function hideOthers(formName) {
  forms.forEach(form => {
    const formEle = document.querySelector(`.${form}-form`);
    if (form === formName) {
      formEle.classList.remove('hidden-error');
      formEle.reset();
    } else {
      formEle.classList.add('hidden-error');
    }
  });
}

document.querySelectorAll('.js-register').forEach(node => {
  node.addEventListener('click', () => hideOthers('register'));
});
document.querySelectorAll('.js-login').forEach(node => {
  node.addEventListener('click', () => hideOthers('login'));
});
document.querySelectorAll('.js-forgot').forEach(node => {
  node.addEventListener('click', () => hideOthers('resetMsg'));
});
document.querySelectorAll('.js-token').forEach(node => {
  node.addEventListener('click', () => hideOthers('resetToken'));
});

document.querySelector('.login-form').addEventListener('submit', processLogin);
document
  .querySelector('.register-form')
  .addEventListener('submit', processRegister);
document
  .querySelector('.resetMsg-form')
  .addEventListener('submit', processResetMsg);
document
  .querySelector('.resetToken-form')
  .addEventListener('submit', processResetToken);

function processLogin(e) {
  e.preventDefault();
  const data = {
    email: document.getElementById('emaillogin').value,
    password: document.getElementById('passwordlogin').value,
    timeZoneOffset: new Date().getTimezoneOffset() * 60000,
  };

  DataService.post(data, 'login').then(data => {
    if (data.success) {
      window.location.replace('../view/dailytask.html');
    } else {
      alert('Username or Password is incorrect');
    }
  });
}

function processRegister(e) {
  e.preventDefault();
  const fpassword = document.getElementById('password').value;
  const spassword = document.getElementById('verifyPassword').value;
  if (fpassword != spassword) {
    alert("Passwords don't match");
    return;
  }
  const data = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    password: fpassword,
    confirmPassword: spassword,
  };
  DataService.post(data, 'signup').then(data => {
    if (data.success) {
      hideOthers('login');
    } else {
      alert('There was a problem with your registration, please try again.');
    }
  });
}

function processResetMsg(e) {
  e.preventDefault();
  const data = {
    email: document.getElementById('emailReset').value,
  };
  DataService.post(data, 'reset-email');
  hideOthers('login');
}

async function processResetToken(e) {
  e.preventDefault();
  const data = {
    token: document.getElementById('token').value,
    password: document.getElementById('resetPassword').value,
    confirmPassword: document.getElementById('verifyResetPassword').value,
  };
  DataService.post(data, 'new-password').then(data => {
    if (data.success) {
      hideOthers('login');
    } else {
      alert('Something went wrong. Please request a new token and try again.');
    }
  });
}
