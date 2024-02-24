// 0-password-strength.js

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("passwordForm");
    const errorElement = document.getElementById("error");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        const passwordInput = document.getElementById("password");
        const password = passwordInput.value;

        if (validatePassword(password)) {
            // If password meets criteria, submit the form
            form.submit();
        } else {
            // If password does not meet criteria, display error message
            errorElement.innerText = "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one numeric digit, and one special character.";
        }
    });
});

function validatePassword(password) {
    // Define regex patterns for each criteria
    const lengthPattern = /.{8,}/;
    const uppercasePattern = /[A-Z]/;
    const lowercasePattern = /[a-z]/;
    const digitPattern = /\d/;
    const specialCharPattern = /[!@#$%^&*]/;

    // Check if password meets all criteria
    return (
        lengthPattern.test(password) &&
        uppercasePattern.test(password) &&
        lowercasePattern.test(password) &&
        digitPattern.test(password) &&
        specialCharPattern.test(password)
    );
}
