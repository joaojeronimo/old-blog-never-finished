var markdown = require("markdown").markdown;
var $ = require('./el-selector');
var Case = require('case');

exports =
module.exports =
function renderPost (post, options) {
  var body = post.body;
  var html;
  var postUrl = '#posts/'+Case.squish(post.title);
 
  if (options &&
      options.truncate &&
      options.truncate < body.length) {

    var readMore = '<p><a href="'+postUrl+
                   '" class="readMore">'+
                   'read more'+
                   '</a></p>'; 
    body = body.substring(0, options.truncate)+'...';
    html = markdown.toHTML(body) + readMore;
  } else
    html = markdown.toHTML(body);

    var postInfo = '<span class="postInfo">'+
                 'Published on '+new Date(post.ctime).toUTCString()+
                 '</span>';
  var h1 = '<h1 class="postTitle"><a href="'+postUrl+
           '">'+post.title+'</a></h1>';
  html = postInfo + h1 + html;



  var el = document.createElement('section');
  el.innerHTML = html;
  document.body.insertBefore(el, $('footer'));
};
