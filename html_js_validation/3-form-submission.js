// File: 3-form-submission.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('submitForm');

    function handleFormSubmit(event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Retrieve form field values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();

        // Validate form fields
        if (name === '' || email === '') {
            // Display error message if any required field is empty
            alert('Please fill in all required fields');
        } else {
            // Display success message if all validations pass
            alert('Form submitted successfully!');
            // You can also submit the form using AJAX or other methods here
        }
    }

    // Add event listener to the form for form submission handling
    form.addEventListener('submit', handleFormSubmit);
});
