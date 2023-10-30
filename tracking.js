// Common function to reset the dataLayer
function resetDataLayer() {
  // var gtm = window.google_tag_manager['GTM-M2RNBSN8'];
  // gtm.dataLayer.reset();
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.length = 0;
}

function dlButton(elementId, ref, event, action) {
  const element = document.getElementById(elementId);
  if (element) {
    element.addEventListener('click', function() {
      eventTime = new Date().getTime();
      resetDataLayer();
      dataLayer.push({
     'elementId': elementId,
     'ref': ref,
     'event': event,
     'action': action,
     'process_start_time': pageLoadTime, 
     'duration': (eventTime-pageLoadTime)/1000
      });
    });
  }
}

function dlField(elementId, ref, event, category, object, action) {
  const element = document.getElementById(elementId);
  if (element) {
    element.addEventListener('focus', function() {
      const eventTime = new Date().getTime();
      resetDataLayer();
      dataLayer.push({
        'elementId': elementId,
        'ref': ref,
        'event': event,
        'category':category,
        'object': object,
        'action': action,
        'process_start_time': pageLoadTime, 
        'duration': (eventTime - pageLoadTime) / 1000
      });
    });
  }
}

 
function dlPagePayload(payload) {
  pageLoadTime = new Date().getTime();
  window.addEventListener('load', function() {
    pageReadyTime = new Date().getTime();
     resetDataLayer();
     dataLayer.push(payload);
  });
}
