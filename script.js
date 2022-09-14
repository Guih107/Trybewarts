
const form = document.getElementsByClassName('trybewarts-login')[0];
const clickButton = document.getElementById('button');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
function loginValidation (){
  const loginEmail = 'tryber@teste.com';
  const loginPassword = '123456'
  
  if (loginEmail === inputEmail.value && loginPassword === inputPassword.value){
    window.alert('Olá, Tryber!');
  }else {
    window.alert('Email ou senha inválidos');
  }
}
clickButton.addEventListener('click', loginValidation);

