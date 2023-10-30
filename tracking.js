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

 
function dlPage(elementId, ref, event, action) {
  pageLoadTime = new Date().getTime();
  // This event will trigger on page load
  window.addEventListener('load', function() {
    pageReadyTime = new Date().getTime();
     resetDataLayer();
     dataLayer.push({
     'elementId': elementId,
     'ref': ref,
     'event': event,
     'action': action,
     'process_start_time': pageLoadTime,
    'duration': (pageReadyTime-pageLoadTime)/1000
    });
  });
}


 var jsonData = 
    {
	"register": [
		
		{"reg-display":
			{
				"event":"register",
				"category":"page",
				"object":"form",
				"name":"registration",
				"action":"displayed",
				"affiliate_id":"{qs.affiliate_id}",
				"item_id":"{qs.promo}"
			}
		},

		// STEP 1
		{"reg-step-1":
			{
				"event":"register",
				"category":"step 1",
				"object":"section",
				"name":"step 1",
				"action":"displayed",
				"affiliate_id":"{qs.affiliate_id}",
				"item_id":"{qs.promo}"
			}
		},
		{"reg-email":
			{
				"event":"register",
				"category":"step 1",
				"object":"field",
				"name":"email",
				"action":"focus",
				"affiliate_id":"{qs.affiliate_id}",
				"item_id":"{qs.promo}"
			}
		},
		{"reg-password":
			{
				"event":"register",
				"category":"step 1",
				"object":"field",
				"name":"password",
				"action":"focus",
				"affiliate_id":"{qs.affiliate_id}",
				"item_id":"{qs.promo}"
			}
		},

		// STEP 2
		{"reg-step-2":
			{
				"event":"register",
				"category":"step 2",
				"object":"section",
				"name":"step 2",
				"action":"displayed",
				"affiliate_id":"{qs.affiliate_id}",
				"item_id":"{qs.promo}"
			}
		},
		{"reg-first-name":
			{
				"event":"register",
				"category":"step 2",
				"object":"field",
				"name":"first_name",
				"action":"focus",
				"affiliate_id":"{qs.affiliate_id}",
				"item_id":"{qs.promo}"
			}
		},
		{"reg-last-name":
			{
				"event":"register",
				"category":"step 2",
				"object":"field",
				"name":"last_name",
				"action":"focus",
				"affiliate_id":"{qs.affiliate_id}",
				"item_id":"{qs.promo}"
			}
		},
		{"reg-dob":
			{
				"event":"register",
				"category":"step 2",
				"object":"field",
				"name":"dob",
				"action":"focus",
				"affiliate_id":"{qs.affiliate_id}",
				"item_id":"{qs.promo}"
			}
		},

        // STEP 3
		{"reg-step-3":
			{
				"event":"register",
				"category":"step 3",
				"object":"section",
				"name":"step 3",
				"action":"displayed",
				"affiliate_id":"{qs.affiliate_id}",
				"item_id":"{qs.promo}"
			}
		},
		{"reg-last-name":
			{
				"event":"register",
				"category":"step 3",
				"object":"field",
				"name":"address",
				"action":"focus",
				"affiliate_id":"{qs.affiliate_id}",
				"item_id":"{qs.promo}"
			}
		},
		{"reg-submit":
			{
				"event":"register",
				"category":"page",
				"object":"button",
				"name":"submit",
				"action":"clicked",
				"affiliate_id":"{qs.affiliate_id}",
				"item_id":"{qs.promo}"
			}
		},

		// CONFIRMATION
		{"reg-conf-displayed":
			{
				"event":"register",
				"category":"confirmation",
				"object":"page",
				"name":"confirmation",
				"action":"displayed",
				"affiliate_id":"{qs.affiliate_id}",
				"item_id":"{qs.promo}"
			}
		},
		{"reg-conf-site":
			{
				"event":"register",
				"category":"confirmation",
				"object":"button",
				"name":"site",
				"action":"clicked",
				"affiliate_id":"{qs.affiliate_id}",
				"item_id":"{qs.promo}"
			}
		},
		{"reg-conf-deposit":
			{
				"event":"register",
				"category":"confirmation",
				"object":"button",
				"name":"deposit",
				"action":"clicked",
				"affiliate_id":"{qs.affiliate_id}",
				"item_id":"{qs.promo}"
			}
		},
	],

	// LANDING PAGES
	"landing": [
		{"land-1-displayed": 
			{
				"event":"landing",
				"category":"landing_1",
				"object":"page",
				"name":"landing",
				"action":"displayed",
				"affiliate_id":"{qs.affiliate_id}",
				"item_id":"{qs.promo}"
		    }
		},
		{"land-2-displayed": 
			{
				"event":"landing",
				"category":"landing_2",
				"object":"page",
				"name":"landing",
				"action":"displayed",
				"affiliate_id":"{qs.affiliate_id}",
				"item_id":"{qs.promo}"
		    }
		},
		{"land-1-register": 
			{
				"event":"landing",
				"category":"landing_1",
				"object":"button",
				"name":"register",
				"action":"clicked",
				"affiliate_id":"{qs.affiliate_id}",
				"item_id":"{qs.promo}"
		    }
		},
		{"land-2-register": 
			{
				"event":"landing",
				"category":"landing_2",
				"object":"button",
				"name":"register",
				"action":"clicked",
				"affiliate_id":"{qs.affiliate_id}",
				"item_id":"{qs.promo}"
		    }
		}

	]
} ;
