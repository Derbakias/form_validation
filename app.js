// main variables
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');
let form = document.querySelector('#form');

// main event listener
form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs([username, email, password, password2]);
  checkEmail(email);
  checkPasswords(password, password2);
})

// check if the input has the required length
function checkInputs(inputs) {
  inputs.forEach(input => {
    if(input.id === 'password' || input.id === 'password2') {
      checkLength(input, 8);
    } 
    else {
      checkLength(input, 4);
    }
  })
}

// check the length of the input
function checkLength(input, min) {
  if(input.value.length >= min) {
    input.className = 'success';
    input.nextElementSibling.style.visibility = 'hidden';
  }
  else {
    input.className = 'error';
    let error = `The minimum number of characters is ${min}`;
    showError(input, error);
  }
}
// display the error message under the input fields
function showError(input, message) {
  input.nextElementSibling.innerHTML = message;
  input.nextElementSibling.style.visibility = 'visible';
}
// check if the email is with the correct format
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const result = re.test(String(input.value).toLowerCase());

  if(result) {
    input.className = 'success';
    input.nextElementSibling.style.visibility = 'hidden';
  }
  else {
    let error = `Please enter a valid email`;
    showError(input, error);
  }
}
// check if passwords are correct
function checkPasswords(input1, input2) {
  if(input1.value === input2.value) {
    input2.className = 'success';
    input2.nextElementSibling.style.visibility = 'hidden';
    console.log('correct');
  }
  if(input1.value !== input2.value) {
    let error = `The passwords doesn't match!!`;
    showError(input2, error);
  }
}