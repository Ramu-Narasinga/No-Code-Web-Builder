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

function _getSavePayload(rating, userInfo) {
  const payload = {
    activityType: 'FEEDBACK',
    userId: _getUserId(),
    websiteId: _getWebsiteId(),
    activityEvents: getEvents(),
    rating: rating+1,
    comment: '',
    ...userInfo
  };

  if (visitorActivityId) {
    payload.visitorActivityId = visitorActivityId;
  }

  return payload;
}

export function save(rating) {
    return new Promise(async (resolve, reject) => {
      const request = await fetch(`${process.env.REACT_APP_IP_INFO_URL}/${process.env.REACT_APP_IP_INFO_BASE}`);
      const jsonResponse = await request.json();

      let userInfo = {};
      userInfo['ip'] = jsonResponse.ip;
      userInfo['city'] = jsonResponse.city;
      userInfo['region'] = jsonResponse.region;
      userInfo['country'] = jsonResponse.country;

      _fetch(_getSavePayload(rating, userInfo), process.env.REACT_APP_SERVER_FEEDBACK_URL, 'POST')
      .then(res => res.json())
      .then((res=> {
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
    flushEvents();
    _setVisitorActivityId(res.id);
  }))
  .catch(err => {
    console.error("Err:", err);
  });
}

export function listenToErrorsAndSave() {
  window.onerror = () => {
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