var getPosts = require('./lib/get-posts');

var sortedPosts;

getPosts(gotPosts);

function gotPosts(posts) {
  loadLatestPost(posts);
}

function loadLatestPost(posts) {
  sortedPosts = posts.sort(comparePostAge);
  console.log(sortedPosts);
}

function comparePostAge (a, b) {
  return a.ctime - b.ctime;
}
