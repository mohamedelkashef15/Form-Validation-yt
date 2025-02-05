/*
  - show success message
  - show error message

  - Form Sumbit
    - name validation 
    - email validation 
    - phone validation 
    - message validation 
  
  try to submit with one value 
  - add isValid to preventDefault in case of is Valid is false
*/

const form = document.getElementById("contactForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

function showError(input, message) {
  // username.parentElement
  const formControl = input.parentElement;
  formControl.className = "form-control error";

  const span = formControl.querySelector("span");
  span.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control";
}

form.addEventListener("submit", function (e) {
  let isValid = true;

  // Username validation
  if (username.value.trim() === "") {
    showError(username, "Username is required");
    isValid = false;
  } else {
    showSuccess(username);
  }

  // email validation
  if (email.value.trim() === "") {
    showError(email, "Email is required");
    isValid = false;
  } else {
    showSuccess(email);
  }

  // phone validation
  if (phone.value.trim() === "") {
    showError(phone, "Phone is required");
    isValid = false;
  } else if (phone.value.length !== 11) {
    showError(phone, "Enter a valid phone number with 11 numbers");
    isValid = false;
  } else {
    showSuccess(phone);
  }

  // Message validation
  if (message.value.trim() === "") {
    showError(message, "Message is required");
    isValid = false;
  } else {
    showSuccess(message);
  }

  if (!isValid) {
    e.preventDefault();
  }
});
