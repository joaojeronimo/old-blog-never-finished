var hyperquest = require('hyperquest');
var stream2buffer = require('stream-to-buffer');

var baseUrl = '/posts/';

exports =
module.exports =
function fetchPost (post, callback) {
  hyperquest.get(baseUrl+post.file, gotPost);

  function gotPost(err, res) {
    if (err)
      return callback(err);
    stream2buffer(res, callback);
  }
}
