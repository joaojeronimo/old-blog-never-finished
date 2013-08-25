exports =
module.exports =
function onScroll(trigger) {
  return function () {
    var scrolledtonum = window.pageYOffset + window.innerHeight - 16;
    var heightofbody = document.body.offsetHeight;
    if (scrolledtonum === heightofbody) {
      trigger();
    }
  }
}
