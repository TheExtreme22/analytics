var currentStep = 1;

function nextStep(step) {
    document.getElementById(`step-${step}`).classList.remove('active');
    document.getElementById(`step-${step + 1}`).classList.add('active');
    currentStep = step + 1;
    updateProgressBar(currentStep);
    //TRACKING
    var event_properties = {
        'Feature': 'registration',
        'Id': 'register',
        'Category': 'Step ' + currentStep,
        'Display Type': 'impression',
    };
    amplitude.track('display', event_properties);
}

function prevStep(step) {
    document.getElementById(`step-${step}`).classList.remove('active');
    document.getElementById(`step-${step - 1}`).classList.add('active');
    currentStep = step - 1;
    updateProgressBar(currentStep);
    //TRACKING
    var event_properties = {
        'Feature': 'registration',
        'Id': 'register',
        'Category': 'Step ' + currentStep,
        'Display Type': 'impression',
    };
    amplitude.track('display', event_properties);
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



    // Construct event properties object
    var event_properties = {
        Feature: 'registration',
        Name: 'outcome',

    };

    // Generate a random number between 0 and 99
    var randomNumber = Math.floor(Math.random() * 100);

    // Assuming a 20% failure rate
    if (randomNumber < 20) {
        // Track failure
        event_properties.Outcome = 'failure';
        event_properties.Error = 'Duplicate_Account';
        alert('Registration Failure');
    } else {
        // Track success
        event_properties.Outcome = 'success';
        event_properties.Status = 'verified';
        alert('Registration Success');
    }
    amplitude.track('outcome', event_properties);

    // Redirect to the confirmation page after submission.
    // var queryString = window.location.search;
    //var destinationPageURL = "confirmation.html" + queryString;
    //window.location.href = destinationPageURL;
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


// FIELD TRACKING
// Function to track when a form field receives focus
function trackOnFieldFocus(event) {
    console.log('Field focused');
    var target = event.target;
    // Check if the focused element has a data-track attribute
    if (target.hasAttribute('data-track-name')) {
        // Extract attributes prefixed with "data-track-name"
        var trackName = target.getAttribute('data-track-name');
        var trackContainer = target.getAttribute('data-track-container') || '';
        var trackObject = target.getAttribute('data-track-object') || '';
        var trackCategory = target.getAttribute('data-track-category') || '';

        // Construct event properties object
        var event_properties = {
            Feature: 'registration',
            Name: trackName,
            Container: trackContainer,
            Object: trackObject,
            Category: trackCategory,
            Value: 'firstfocusin',
        };

        // Fire amplitude tracking with 'focus' event type
        amplitude.track('click', event_properties);
        console.log('Tracking event fired:', event_properties);
    }
}

// Attach focus event listener to all form fields with data-track attribute
document.addEventListener('focusin', function(event) {
    var target = event.target;
    if (target.tagName === 'INPUT' && target.hasAttribute('data-track-name')) {
        trackOnFieldFocus(event);
    }
});


// FUNCTION TO TRACK LINK CLICKS
function trackLinkClick(event) {
    var target = event.target;
    if (target.tagName === 'A' && target.hasAttribute('data-track-name')) {
        var trackName = target.getAttribute('data-track-name');
        var trackContainer = target.getAttribute('data-track-container') || '';
        var trackObject = target.getAttribute('data-track-object') || '';
        var trackCategory = target.getAttribute('data-track-category') || '';

        // Construct event properties object
        var event_properties = {
            Feature: 'registration',
            Name: trackName,
            Container: trackContainer,
            Object: trackObject,
            Category: trackCategory
        };

        // Fire amplitude tracking with 'click' event type
        amplitude.track('click', event_properties);
        console.log('Link click event fired:', event_properties);
    }
}

// Attach click event listener to all links with data-track-name attribute
var links = document.querySelectorAll('a[data-track-name]');
links.forEach(function(link) {
    link.addEventListener('click', trackLinkClick);
});


// FUNCTION TO TRACK BUTTON CLICKS
function trackButtonClick(event) {
    var target = event.target;
    if (target.tagName === 'BUTTON' && target.hasAttribute('data-track-name')) {
        var trackName = target.getAttribute('data-track-name');
        var trackContainer = target.getAttribute('data-track-container') || '';
        var trackObject = target.getAttribute('data-track-object') || '';
        var trackCategory = target.getAttribute('data-track-category') || '';

        // Construct event properties object
        var event_properties = {
            Feature: 'registration',
            Name: trackName,
            Container: trackContainer,
            Object: trackObject,
            Category: trackCategory
        };

        // Fire amplitude tracking with 'click' event type
        amplitude.track('click', event_properties);
        console.log('Button click event fired:', event_properties);
    }
}

// Attach click event listener to all buttons with data-track-name attribute
var buttons = document.querySelectorAll('button[data-track-name]');
buttons.forEach(function(button) {
    button.addEventListener('click', trackButtonClick);
});
