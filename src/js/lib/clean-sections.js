exports =
module.exports =
function cleanSections () {
  var body = document.body;
  var section;
  while (section = document.querySelector('section')) {
    body.removeChild(section);
  }
}
