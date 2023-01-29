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

export const getWebsite = () => {
  return fetch(`${process.env.REACT_APP_WEBSITE_ENDPOINT}/${_getWebsiteId()}`)
}