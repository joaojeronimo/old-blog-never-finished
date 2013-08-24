var hyperquest = require('hyperquest');

hyperquest.get('/posts/blog.json', function (err, res) {
  res.on('data', function (data) {
    console.log('data', data);
  })
});
