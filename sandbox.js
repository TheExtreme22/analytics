 function removeGTMOnFocus() {
  // Get all input fields
  var inputFields = document.querySelectorAll("input");

  // Attach the focus event listener to each input field
  inputFields.forEach(function(input) {
    input.addEventListener("focus", function() {
      var elementWithId = this; // Store the element that received focus

      // Add a delay of 1 second (you can adjust the delay as needed)
      setTimeout(function() {
        elementWithId.removeAttribute("gtm");
      }, 500); // 1000 milliseconds = 1 second
    });
  });
}

// Call the function to set up the event listeners after the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
  removeGTMOnFocus();
});
