const form = document.getElementById('evaluation-form');
const clickButton = document.getElementById('button');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const firstName = document.getElementById('input-name');
const lastname = document.getElementById('input-lastname');
const email = document.getElementById('input-email');
const house = document.getElementById('house');
const textarea = document.getElementById('textarea');
const characters = document.getElementById('counter');
const agreementCheck = document.getElementById('agreement');
const submitButton = document.getElementById('submit-btn');
const nameInfo = document.getElementById('name-info');
const emailInfo = document.getElementById('email-info');
const houseInfo = document.getElementById('house-info');
const familyInfo = document.getElementById('family-info');
const subjectInfo = document.getElementById('subjects-info');
const rateInfo = document.getElementById('rate-info');
const textareaInfo = document.getElementById('textarea-info');
const formData = document.getElementById('form-data');

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

function charactersCount() {
  characters.innerHTML = 500 - textarea.value.length;
}

textarea.addEventListener('input', charactersCount);

function onSubmit(event) {
  event.preventDefault();
  form.style.display = 'none';
  formData.style.display = 'block';
  nameInfo.innerText = `${firstName.value} ${lastname.value}`;
  emailInfo.innerText = `${email.value}`;
  houseInfo.innerText = `${house.value}`;
  const family = document.querySelector('input[name="family"]:checked');
  familyInfo.innerText = `${family.value}`;
  const subjects = document.querySelectorAll('input[class="subject"]:checked');
  for (let index = 0; index < subjects.length; index += 1) {
    subjectInfo.innerText += `${subjects[index].name}`;
    if ((index + 1) !== subjects.length) {
      subjectInfo.innerText += ',\u00A0';
    }
  }
  const rate = document.querySelector('input[name="rate"]:checked');
  rateInfo.innerText = rate.value;
  textareaInfo.innerText = textarea.value;
}

submitButton.addEventListener('click', onSubmit);
