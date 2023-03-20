// Wait for the page to load before adding event listeners
window.addEventListener('load', function() {
    // Get a reference to the registration form
    let loginForm = document.getElementById('login-form');

    // Get references to the form fields
    let loginEmail = document.getElementById('loginEmail');
    let loginPassword = document.getElementById('loginPassword');

    // Load the form values from localStorage
    loginEmail.value = localStorage.getItem('loginEmail');
    loginPassword.value = localStorage.getItem('loginPassword');

    // Add a submit event listener to the registration form
    loginForm.addEventListener('submit', function(event) {
        // Prevent the form from submitting by default
        event.preventDefault();

        // Check that all fields are filled out
        if (loginEmail.value === '' || loginPassword.value === '') {
            alert('Please fill out all fields before submitting the form.');
            return;
        }

        // Save the form values to localStorage
        localStorage.setItem('loginEmail', loginEmail.value);
        localStorage.setItem('loginPassword', loginPassword.value);

        // Submit the form
        loginForm.submit();
    });
});