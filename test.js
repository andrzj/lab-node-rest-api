var express = require('express'); // call express
var app = express(); // define our app using express
var request = require('request');

var port = 8888; // set our port
var router = express.Router(); // get an instance of the express Router

router.get('/', function(req, res) {
  const options = {
    url: '',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': '*/*'
    },
    auth: {
      'user': '',
      'pass': ''
    }
  };

  request(options, function(err, resp, body) {
    console.log('error:', err); // Print the error if one occurred
    console.log('statusCode:', resp && resp.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.

    if (res && (res.statusCode === 200 || res.statusCode === 201)) {
      res.json({ 'ok': body })
    } else {
      res.json({ 'err': err });
    }
  })
});
app.use(router);
app.listen(port);
console.log('Magic happens on port ' + port);