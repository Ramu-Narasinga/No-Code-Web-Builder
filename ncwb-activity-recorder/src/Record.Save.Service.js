import { flushEvents, getEvents } from "./Record.RRweb-Record.Service";

function _getNcwbEl() {
  let ncwbScript = document.querySelector('script[data-ncwb-id="ncwb"]');
  return ncwbScript;
}

function _getUserId() {
  return _getNcwbEl().getAttribute('data-user-id');
}

function _getWebsiteId() {
  return _getNcwbEl().getAttribute('data-website-id');
}

function _postFetch(payload, url) {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then((res=> {
    flushEvents();
  }));
}

function _getSavePayload(rating, comment) {
  const payload = {
    activityType: 'FEEDBACK',
    userId: _getUserId(),
    websiteId: _getWebsiteId(),
    activityEvents: getEvents(),
    rating: rating+1,
    comment
  };

  return payload;
}

export function save(rating, comment) {
    _postFetch(_getSavePayload(rating, comment), process.env.REACT_APP_SERVER_FEEDBACK_URL);
}

function _getErrorSavePayload() {
  const payload = {
    activityType: 'ERROR',
    userId: _getUserId(),
    websiteId: _getWebsiteId(),
    activityEvents: getEvents(),
    endpoint: window.location.href
  };

  return payload;
}

function _errorSave() {
  _postFetch(_getErrorSavePayload(), process.env.REACT_APP_SERVER_ERROR_URL);
}

export function listenToErrorsAndSave() {
  console.log("registered error listener")
  window.onerror = () => {
    console.log("about to trigger save API");
    _errorSave();
  }
}

export function saveComment() {

}