exports =
module.exports =
function onScroll(trigger) {
  return function () {
    var scrolledtonum = window.pageYOffset + window.innerHeight + 200;
    if (scrolledtonum > document.height) {
      trigger();
    }
  }
}
