import ga               from 'ut/ga';

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request['action'] == 'ga') {
    var data = request['data'];
    ga.apply(null, data);
  }
});
