var getPosts = require('./lib/get-posts');
var Case = require('case');
var renderPost = require('./lib/render-post');
var fetchPost = require('./lib/fetch-post');

var post;

exports =
module.exports =
function displayPost(postSquish) {
  var title = Case.title(postSquish);
  if (localStorage[title])
    return renderPost(JSON.parse(localStorage[title]));

  getPosts(onPosts);
  
  function onPosts (err, posts) {
    if (err)
      throw new Error(err);

    post = posts.filter(getTheOne);
    fetchPost(post, gotBody);
  }

  function getTheOne (candidate) {
    return title === candidate.title;
  }
}

function gotBody (err, body) {
  if (err)
    throw new Error(err);

  post.body = body;
  localStorage[lastPost.title] = JSON.stringify(lastPost);                                                                             
  renderPost(lastPost);
}
