var Router = require('route').Router;
var cleanSections = require('./lib/clean-sections');

var displayHome = require('./home');
var displayPost = require('./post');

var router = new Router();  

router.add({
  '': goHome,
  '#posts/:post': showPost
});

document.addEventListener('DOMContentLoaded', go);
window.onhashchange = go;

function go () {
  router.run(document.location.hash);
}

function goHome () {
  cleanSections();
  displayHome();
}

function showPost (loc) {
  window.onscroll = function () {};
  cleanSections();
  window.scrollTo(0, 0);
  displayPost(loc.post);
}
