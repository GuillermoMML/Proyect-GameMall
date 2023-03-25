// Wait for the page to load before adding event listeners
window.addEventListener('load', function() {
    // Get a reference to the registration form
    let contactForm = document.getElementById('contact-form');

    // Get references to the form fields
    let contactName = document.getElementById('contactName');
    let contactLastName = document.getElementById('contactLastName');
    let contactEmail = document.getElementById('contactEmail');
    let contactPhoneNumber = document.getElementById('contactPhoneNumber');
    let contactMessage = document.getElementById('contactMessage');

    // Load the form values from localStorage
    contactName.value = localStorage.getItem('contactName');
    contactLastName.value = localStorage.getItem('contactLastName');
    contactEmail.value = localStorage.getItem('contactEmail');
    contactPhoneNumber.value = localStorage.getItem('contactPhoneNumber');
    contactMessage.value = localStorage.getItem('contactMessage');

    // Add a submit event listener to the registration form
    contactForm.addEventListener('submit', function(event) {
        // Prevent the form from submitting by default
        event.preventDefault();

        if (!/^[0-9]{10}$/.test(contactPhoneNumber.value)) {
            alert('Please enter a valid Phone Number');
            contactPhoneNumber.style.border = '2px solid red';
            return;
        }

        if (contactMessage.length > 15) {
            alert('Provide some more information in your message please');
            contactMessage.style.border = '2px solid red';
            return;
        }


        // Save the form values to localStorage
        localStorage.setItem('contactName', contactName.value);
        localStorage.setItem('contactLastName', contactLastName.value);
        localStorage.setItem('contactEmail', contactEmail.value);
        localStorage.setItem('contactPhoneNumber', contactPhoneNumber.value);
        localStorage.setItem('contactMessage', contactMessage.value);


        // Submit the form
        contactForm.submit();
    });
});