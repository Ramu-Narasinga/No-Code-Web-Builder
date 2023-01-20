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

function _getSavePayload() {
  const payload = {
    activityType: 'FEEDBACK',
    userId: _getUserId(),
    websiteId: _getWebsiteId(),
    activityEvents: events,
    rating,
    comment
  };

  return payload;
}

export function save(rating, comment, events) {
    fetch(process.env.REACT_APP_SERVER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(_getSavePayload(rating, comment, events)),
    });
}