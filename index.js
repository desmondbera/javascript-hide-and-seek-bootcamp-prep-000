function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(target) {
  return document.getElementById('main').querySelectorAll('div.nested').getElementById();
}