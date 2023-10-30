let currentStep = 1;

function nextStep(step) {
    document.getElementById(`step-${step}`).classList.remove('active');
    document.getElementById(`step-${step + 1}`).classList.add('active');
    currentStep = step + 1;
    updateProgressBar(currentStep);
}

function prevStep(step) {
    document.getElementById(`step-${step}`).classList.remove('active');
    document.getElementById(`step-${step - 1}`).classList.add('active');
    currentStep = step - 1;
    updateProgressBar(currentStep);
}

function updateProgressBar(step) {
    const progressBarInner = document.querySelector('.progress-bar-inner');
    const fillPercentage = Math.min((step - 1) / 3 * 100, 100);
    progressBarInner.style.width = `${fillPercentage}%`;
}

function submitForm() {
    // You can add form submission logic here.
    // This is just a placeholder.
    // Simulate a successful form submission for demonstration purposes.
    // alert('Form submitted successfully!');

    // Redirect to the confirmation page after submission.
    window.location.href = 'confirmation.html';
}

function redirectToRegistration() {
    // JavaScript function to redirect to the registration page
    window.location.href = "register.html";
}
