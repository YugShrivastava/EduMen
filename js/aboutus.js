

// Form validation
const form = document.getElementById('contactForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (form.checkValidity()) {
        // If form is valid, you can add your submission logic here
        alert('Your message has been sent!');
        form.reset();
    } else {
        // If form is invalid, you can display error messages or handle accordingly
        alert('Please fill in all fields correctly.');
    }
});
