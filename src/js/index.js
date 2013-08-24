var hyperquest = require('hyperquest');

hyperquest.get('http://localhost:8080/posts/', function (err, res) {
  res.on('data', function (data) {
    console.log('data', data);
  })
});
