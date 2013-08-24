var hyperquest = require('hyperquest');
var stream2Buffer = require('stream-to-buffer');

exports =
module.exports =
function getPosts(callback) {
  hyperquest.get('/posts/blog.json', gotPosts);

  function gotPosts (err, res) {
    if (err)
      return callback(err);

    stream2Buffer(res, gotPostsBuffer);
  }

  function gotPostsBuffer (err, buffer) {
    if (err)
      return callback(err);

    var posts = JSON.parse(buffer);
    callback(null, posts);
  }
}
