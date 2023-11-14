 

function updateGTMOnFocus() {
  // Get all input fields
  var inputFields = document.querySelectorAll("input");

  // Attach the focus event listener to each input field
  inputFields.forEach(function(input) {
    input.addEventListener("focus", function() {
      var elementWithId = this; // Store the element that received focus

      // Check if 'count' attribute exists
      var countValue = elementWithId.getAttribute('count');
      
      // If 'count' attribute exists, increase its value by 1
      if (countValue !== null) {
        var count = parseInt(countValue) + 1;
        elementWithId.setAttribute('count', count);
      } else {
        // If 'count' attribute doesn't exist, create it and set its value to 1
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
