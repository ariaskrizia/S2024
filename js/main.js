document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form');
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#correo');
    const messageInput = document.querySelector('#message');

    form.addEventListener('submit', function(event) {
        // Prevent the form from submitting
        event.preventDefault();

        // Clear previous error messages
        clearErrors();

        // Validate the form fields
        let valid = true;
        if (!nameInput.value.trim()) {
            showError(nameInput, 'Por favor ingresa tu nombre y apellido.');
            valid = false;
        }
        if (!validateEmail(emailInput.value.trim())) {
            showError(emailInput, 'Por favor ingresa un correo electrónico válido.');
            valid = false;
        }
        if (!messageInput.value.trim()) {
            showError(messageInput, 'Por favor ingresa un mensaje.');
            valid = false;
        }

        // If the form is valid, allow it to submit
        if (valid) {
            form.submit();
        }
    });

    function showError(input, message) {
        const error = document.createElement('div');
        error.classList.add('error');
        error.textContent = message;
        input.parentNode.appendChild(error);
    }

    function clearErrors() {
        const errors = document.querySelectorAll('.error');
        errors.forEach(function(error) {
            error.remove();
        });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});


