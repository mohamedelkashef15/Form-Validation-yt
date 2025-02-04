const contactForm = document.getElementById("contactForm");

document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("aPxhON1l-fQQaBOQa"); // Replace with your EmailJS public key

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    let valid = validateForm();
    if (valid) {
      sendEmail();
    }
  });
});

function validateForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let message = document.getElementById("message").value.trim();

  let nameError = document.getElementById("nameError");
  let emailError = document.getElementById("emailError");
  let phoneError = document.getElementById("phoneError");
  let messageError = document.getElementById("messageError");

  // Clear previous errors
  nameError.textContent = "";
  emailError.textContent = "";
  phoneError.textContent = "";

  messageError.textContent = "";

  let isValid = true;

  // Name validation
  if (name === "") {
    nameError.textContent = "Name is required";
    isValid = false;
  }

  // Email validation
  if (email === "") {
    emailError.textContent = "Email is required";
    isValid = false;
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    emailError.textContent = "Invalid email format";
    isValid = false;
  }

  if (phone.length < 11 || phone.length > 11) {
    phoneError.textContent = "Invalid phone number. ";
  }

  // Message validation
  if (message === "") {
    messageError.textContent = "Message is required";
    isValid = false;
  }

  return isValid;
}

function sendEmail() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value; // Not recommended for real apps!
  let message = document.getElementById("message").value;

  emailjs.send("service_l6ofpdi", "template_panv6xw", { name, email, password, message }).then(
    function (response) {
      console.log("Email sent successfully!", response);
      document.getElementById("contactForm").reset();
    },
    function (error) {
      console.error("Email failed to send!", error);
    }
  );
}
