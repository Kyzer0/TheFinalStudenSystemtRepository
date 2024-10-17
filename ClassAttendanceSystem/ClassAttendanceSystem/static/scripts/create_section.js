function validateForm() {
    const sectionName = document.querySelector('#Section_Name');
    const studentCount = document.querySelector('#stu_count');
    let isValid = true;

    // Reset previous errors
    document.querySelectorAll('.error').forEach(error => error.remove());

    // Validate Section Name
    const sectionNameValue = sectionName.value.trim();
    if (sectionNameValue === "") {
        showError(sectionName, "Section Name is required");
        isValid = false;
    } else if (sectionNameValue.length < 3 || sectionNameValue.length > 50) {
        showError(sectionName, "Section Name must be between 3 and 50 characters");
        isValid = false;
    }

    // Validate Student Count
    const studentCountValue = parseInt(studentCount.value.trim());
    if (isNaN(studentCountValue)) {
        showError(studentCount, "Student Count must be a valid number");
        isValid = false;
    } else if (studentCountValue <= 0) {
        showError(studentCount, "Student Count must be greater than zero");
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