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

function updateGTMOnFocus() {
  // Get all input fields
  var inputFields = document.querySelectorAll("input");

  // Attach the focus event listener to each input field
  inputFields.forEach(function(input) {
    input.addEventListener("focus", function() {
      var elementWithId = this; // Store the element that received focus

      // Get the current value of the 'gtm' attribute
      var gtmValue = elementWithId.getAttribute('gtm');

      // If 'gtm' attribute exists, increase 'count' by 1 and update 'gtm' attribute
      if (gtmValue !== null) {
        var count = parseInt(elementWithId.getAttribute('count')) || 0;
        count++;
        elementWithId.setAttribute('count', count);
      } else {
        // If 'gtm' attribute doesn't exist, create it and set 'count' to 1
        elementWithId.setAttribute('gtm', 'example');
        elementWithId.setAttribute('count', 1);
      }
    });
  });
}



// Call the function to set up the event listeners after the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
 //removeGTMOnFocus();
 updateGTMOnFocus();
});
