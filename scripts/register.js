// Wait for the page to load before adding event listeners
window.addEventListener('load', function() {
    // Get a reference to the registration form
    let registrationForm = document.getElementById('registration-form');

    // Get references to the form fields
    let registerEmail = document.getElementById('registerEmail');
    let registerName = document.getElementById('registerName');
    let registerPassword = document.getElementById('registerPassword');
    let registerRepeatPassword = document.getElementById('registerRepeatPassword');

    // Load the form values from localStorage
    registerEmail.value = localStorage.getItem('registerEmail');
    registerName.value = localStorage.getItem('registerName');
    registerPassword.value = localStorage.getItem('registerPassword');
    registerRepeatPassword.value = localStorage.getItem('registerRepeatPassword');

    // Add a submit event listener to the registration form
    registrationForm.addEventListener('submit', function(event) {
        // Prevent the form from submitting by default
        event.preventDefault();

        // Check that all fields are filled out
        if (registerEmail.value === '' || registerName.value === '' || registerPassword.value === '' || registerRepeatPassword.value === '') {
            alert('Please fill out all fields before submitting the form.');
            return;
        }

        // Check if the password and repeat password fields match
        if (registerPassword.value !== registerRepeatPassword.value) {
            alert('Passwords do not match. Please try again.');
            return;
        }

        if (registerPassword.value.length < 6) {
            registerPassword.style.border = '2px solid red';
            registerRepeatPassword.style.border = '2px solid red';
            return;
        }

        // Save the form values to localStorage
        localStorage.setItem('registerEmail', registerEmail.value);
        localStorage.setItem('registerName', registerName.value);
        localStorage.setItem('registerPassword', registerPassword.value);
        localStorage.setItem('registerRepeatPassword', registerRepeatPassword.value);

        // Create a JSON object with the form values
        let user = {
            email: registerEmail.value,
            name: registerName.value,
            password: registerPassword.value
        };

        // Convert the JSON object to a string
        let data = JSON.stringify(user);

        // Save the JSON string in localStorage
        localStorage.setItem("userData", data);

        console.log(data)

        // Submit the form
        registrationForm.submit();
    });
});