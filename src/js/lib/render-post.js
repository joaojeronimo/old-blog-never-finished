var markdown = require("markdown").markdown;
var $ = require('./el-selector');

exports =
module.exports =
function renderPost (post) {
  var html = markdown.toHTML(post.body);
  var el = document.createElement('section');
  el.innerHTML = html;
  $('body').insertBefore(el, $('footer'));
}
