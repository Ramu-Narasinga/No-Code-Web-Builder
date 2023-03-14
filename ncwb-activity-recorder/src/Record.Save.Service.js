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

var visitorActivityId = null;
function _setVisitorActivityId(id) {
  console.log("setting id", id);
  visitorActivityId = id;
}

function _fetch(payload, url, method) {
  return fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
}

function _getSavePayload(rating) {
  const payload = {
    activityType: 'FEEDBACK',
    userId: _getUserId(),
    websiteId: _getWebsiteId(),
    activityEvents: getEvents(),
    rating: rating+1,
    comment: ''
  };

  if (visitorActivityId) {
    payload.visitorActivityId = visitorActivityId;
  }

  return payload;
}

export function save(rating) {
    return new Promise((resolve, reject) => {
      _fetch(_getSavePayload(rating), process.env.REACT_APP_SERVER_FEEDBACK_URL, 'POST')
      .then(res => res.json())
      .then((res=> {
        console.log("res in save", res);
        flushEvents();
        _setVisitorActivityId(res.id);
        resolve(true)
      }))
      .catch(err => {
        console.error("Error in saving rating", err);
        reject(err)
      });
    });
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
  _fetch(_getErrorSavePayload(), process.env.REACT_APP_SERVER_ERROR_URL, 'POST')
  .then(res => res.json())
  .then((res=> {
    console.log("res in errorsave", res);
    flushEvents();
    _setVisitorActivityId(res.id);
  }))
  .catch(err => {
    console.error("Err:", err);
  });
}

export function listenToErrorsAndSave() {
  console.log("registered error listener")
  window.onerror = () => {
    console.log("about to trigger save API");
    _errorSave();
  }
}

function _getSaveCommentPayload(comment) {
  return {
    id: visitorActivityId,
    comment
  }
}


export function saveComment(comment) {
  console.log("_getSaveCommentPayload(comment):", _getSaveCommentPayload(comment));
  _fetch(_getSaveCommentPayload(comment), process.env.REACT_APP_SERVER_FEEDBACK_URL, 'PUT')
  .then(res => res.json())
  .then((res=> {
    flushEvents();
    _setVisitorActivityId(res.id);
  }))
  .catch(err => {
    console.error("err", err);
  });
}