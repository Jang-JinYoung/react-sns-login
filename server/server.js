var express = require('express');
var app = express();
var client_id = 'h9rA5YtXEZYFtXZ1pKKe';
var client_secret = 'l0ajWRPLGk';
// var state = "RAMDOM_STATE";
var redirectURI = encodeURI("http://localhost:3000/callback");
var api_url = "";
app.get('/naverlogin', function (req, res) {
  api_url = 'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=' + client_id + '&redirect_uri=' + redirectURI + '&state=' + state;
  res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
  res.end("<a href='" + api_url + "'><img height='50' src='http://static.nid.naver.com/oauth/small_g_in.PNG'/></a>");
});
app.get('/callback', function (req, res) {
  code = req.query.code;
  state = req.query.state;
  api_url = 'https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id='
    + client_id + '&client_secret=' + client_secret + '&redirect_uri=' + redirectURI + '&code=' + code;
  var request = require('request');
  var options = {
    url: api_url,
    headers: { 'X-Naver-Client-Id': client_id, 'X-Naver-Client-Secret': client_secret }
  };
  request.get(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.writeHead(200, { 'Content-Type': 'text/json;charset=utf-8' });
      res.end(body);
    } else {
      res.status(response.statusCode).end();
      console.log('error = ' + response.statusCode);
    }
  });
});

var token = "AAAAPUGzMHxRUrBqm0tQrJrdoXmTTHqaINyJo82bkFZmC8qY9v1X0ZIhIAJ196ivc8Aw4U_HQgbYQKma3GI9rQcuRkk";
var header = "Bearer " + token; // Bearer 다음에 공백 추가
app.get('/member', function (req, res) {
  var api_url = 'https://openapi.naver.com/v1/nid/me';
  var request = require('request');
  var options = {
    url: api_url,
    headers: { 'Authorization': header }
  };
  request.get(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.writeHead(200, { 'Content-Type': 'text/json;charset=utf-8' });
      res.end(body);
    } else {
      console.log('error');
      if (response != null) {
        res.status(response.statusCode).end();
        console.log('error = ' + response.statusCode);
      }
    }
  });
});


app.listen(3001, function () {
  console.log('http://127.0.0.1:3001/naverlogin app listening on port 3001!');
});