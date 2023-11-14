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
     var queryString = window.location.search;
    var destinationPageURL = "confirmation.html" + queryString;
    window.location.href = destinationPageURL;
}

function redirectToRegistration() {
    var queryString = window.location.search;
    var registrationPageURL = "register.html" + queryString;
    window.location.href = registrationPageURL;
}

function redirectToSite() {
    var queryString = window.location.search;
    var destinationPageURL = "site.html" + queryString;
    window.location.href = destinationPageURL;
}

function redirectToCashier() {
    var queryString = window.location.search;
    var destinationPageURL = "cashier.html" + queryString;
    window.location.href = destinationPageURL;
}
   
function removeIdOnFocus() {
  // Get all input fields
  var inputFields = document.querySelectorAll("input");

  // Attach the focus event listener to each input field
  inputFields.forEach(function(input) {
    input.addEventListener("focus", function() {
      var elementWithId = this; // Store the element that received focus

      // Add a delay of 1 second (you can adjust the delay as needed)
      setTimeout(function() {
        elementWithId.removeAttribute("id");
      }, 500); // 1000 milliseconds = 1 second
    });
  });
}

// Call the function to set up the event listeners after the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
  removeGTMOnFocus();
});
