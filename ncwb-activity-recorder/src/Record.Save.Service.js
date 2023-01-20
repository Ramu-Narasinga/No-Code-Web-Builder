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
    fetch(process.env.REACT_APP_SERVER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(_getSavePayload(rating, comment)),
    }).then((res=> {
      flushEvents();
    }));
}