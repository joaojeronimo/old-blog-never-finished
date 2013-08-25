var getPosts = require('./lib/get-posts');
var fetchPost = require('./lib/fetch-post');
var renderPost = require('./lib/render-post');
var onScroll = require('./lib/on-scroll');

var sortedPosts;
var lastPost;

bootstrap();

function bootstrap () {
  getPosts(loadLatestPost);
}

function loadLatestPost(err, posts) {
  if (err)
    throw new Error(err);
  sortedPosts = posts.sort(comparePostAge);
  lastPost = sortedPosts.pop();
  fetchPost(lastPost, gotBody); 
}

function comparePostAge (a, b) {
  return a.ctime - b.ctime;
}

function gotBody (err, body) {
  if (err)
    throw new Error(err);

  lastPost.body = body;
  localStorage[lastPost.title] = JSON.stringify(lastPost);
  renderPost(lastPost);
  loadMore();
}

function loadMore () {
  window.onscroll = onScroll(onEndOfPage);
}

function onEndOfPage () {
  lastPost = sortedPosts.pop();                                                                                                        
  fetchPost(lastPost, gotBody);
}
