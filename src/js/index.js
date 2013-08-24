var hyperquest = require('hyperquest');
var stream2Buffer = require('stream-to-buffer');

hyperquest.get('/posts/blog.json', function (err, res) {
  stream2Buffer(res, function (err, buffer) {
     
  });
});

hyperquest.get('/posts/blog.json', gotPosts);

function gotPosts (err, res) {
  stream2Buffer(res, gotPostsBuffer);
}

function gotPostsBuffer (err, buffer) {
  var posts = JSON.parse(buffer);
  console.log(posts);
}
