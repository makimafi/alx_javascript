// 1-email-validation.js

// Retrieve the form element
const emailForm = document.getElementById('emailForm');

// Retrieve the error message element
const errorElement = document.getElementById('error');

// Function to validate the email format
function validateEmail(email) {
    // Regular expression for basic email validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Event listener for form submission
emailForm.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Retrieve the value entered in the email input field
    const emailInput = document.getElementById('email').value;

    // Validate the email format
    if (validateEmail(emailInput)) {
        // If email format is valid, allow form submission
        emailForm.submit();
    } else {
        // If email format is invalid, display error message
        errorElement.textContent = "Please enter a valid email address.";
    }
});
