var markdown = require("markdown").markdown;
var $ = require('./el-selector');
var Case = require('case');

exports =
module.exports =
function renderPost (post) {
  var html = markdown.toHTML(post.body);
  var h1 = '<h1 class="postTitle"><a href="#posts/'+
           Case.squish(post.title)+
           '">'+post.title+'</a></h1>';
  html = h1 + html;
  var el = document.createElement('section');
  el.innerHTML = html;
  document.body.insertBefore(el, $('footer'));
};
