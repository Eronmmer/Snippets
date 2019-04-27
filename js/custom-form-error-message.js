// Snippet for creating custom error message for form validation in an email input

const email = document.getElementById("email"); // Get input for email for validation

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I expect an e-mail, darling!"); // If email is entered wrongly, this error message will be displayed
  } else {
    email.setCustomValidity(""); // No error message would be displayed if email is entered correctly
  }
});
