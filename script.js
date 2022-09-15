const clickButton = document.getElementById('button');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const agreementCheck = document.getElementById('agreement');
const submitButton = document.getElementById('submit-btn');

function loginValidation() {
  const loginEmail = 'tryber@teste.com';
  const loginPassword = '123456';

  if (loginEmail === inputEmail.value && loginPassword === inputPassword.value) {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}

clickButton.addEventListener('click', loginValidation);

function agreement() {
  if (agreementCheck.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

agreementCheck.addEventListener('click', agreement);
