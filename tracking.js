// Common function to reset the dataLayer
function resetDataLayer() {
  // var gtm = window.google_tag_manager['GTM-M2RNBSN8'];
  // gtm.dataLayer.reset();
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.length = 0;
}


// Function to get the value of a cookie by name
function getCookie(name) {
  var cookies = document.cookie.split('; ');
  for (var i = 0; i < cookies.length; i++) {
    var cookieParts = cookies[i].split('=');
    if (cookieParts[0] === name) {
      return decodeURIComponent(cookieParts[1]);
    }
  }
  return null;
}

// Function to set a cookie with a given name, value, and expiration days
function setCookie(name, value, days) {
  var expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + days * 24 * 60 * 60 * 1000);
  var expires = "expires=" + expirationDate.toUTCString();
  document.cookie = name + "=" + encodeURIComponent(value) + "; " + expires + "; path=/";
}

// Function to check if a cookie exists, if not set it from the query string
function checkCookie(cookieName) {
  var cookieValue = getCookie(cookieName);

  // If the cookie exists, return its value
  if (cookieValue !== null) {
    return cookieValue;
  }

  // If the cookie is in the query string, set the cookie and return its value
  var urlParams = new URLSearchParams(window.location.search);
  var queryStringValue = urlParams.get(cookieName);
  if (queryStringValue !== null) {
    setCookie(cookieName, queryStringValue, 30); // Set cookie for 30 days
    return queryStringValue;
  }

  // If the cookie is not in the query string and cookie doesn't exist, return blank
  return '';
}
