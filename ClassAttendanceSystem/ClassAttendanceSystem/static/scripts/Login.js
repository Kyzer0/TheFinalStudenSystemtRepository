function validateForm() {
    const teacherId = document.querySelector('#teacherId');
    const password = document.querySelector('#password');
    let isValid = true;

    // Reset previous errors
    document.querySelectorAll('.error').forEach(error => error.remove());

    // Validate Teacher ID
    const teacherIdValue = teacherId.value.trim();
    if (teacherIdValue === "") {
        showError(teacherId, "Teacher ID is required");
        isValid = false;
    } else if (!/^\d+$/.test(teacherIdValue)) {
        showError(teacherId, "Teacher ID must contain only numbers");
        isValid = false;
    } else if (teacherIdValue.length !== 11) {
        showError(teacherId, "Teacher ID must be exactly 11 digits");
        isValid = false;
    }

    // Validate Password
    if (password.value.trim() === "") {
        showError(password, "Password is required");
        isValid = false;
    }

    return isValid;
}

// Function to display error messages
function showError(inputElement, message) {
    const errorMessage = document.createElement('div');
    errorMessage.textContent = message;
    errorMessage.classList.add('error');
    errorMessage.style.color = 'red';
    inputElement.parentElement.appendChild(errorMessage);
}

// Add event listener to form submission
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission if validation fails
    if (validateForm()) {
        alert('Form submitted successfully!');
    }
});