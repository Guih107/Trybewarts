
const form = document.getElementsByClassName('trybewarts-login');
const clickButton = document.getElementById('button');

clickButton.addEventListener('click', loginValidation);
function loginValidation (email, senha){
  const loginEmail = 'tryber@teste.com';
  const loginSenha = 123456

  if (email === loginEmail && senha === loginSenha){
    window.alert('Olá, Tryber!');
  }else {
    window.alert('Email ou senha inválidos');
  }
}
loginValidation();

