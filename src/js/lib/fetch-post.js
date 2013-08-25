var hyperquest = require('hyperquest');
var stream2buffer = require('stream-to-buffer');

var baseUrl = '/posts/';

exports =
module.exports =
function fetchPost (post, callback) {
  if (localStorage[post.title]) {
    var storedPost = JSON.parse(localStorage[post.title]);
    return callback(null, storedPost.body);
  }

  hyperquest.get(baseUrl+post.file, gotPost);

  function gotPost(err, res) {
    if (err)
      return callback(err);
    stream2buffer(res, callback);
  }
}
