var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var userLogin = require('./../data/users.json');
var vehicles = require('./../data/vehicles.json');

var server_port = 4201;
var server_ip_address = '127.0.0.1';

var whitelist = [];

const corsOptions = {
  origin: function (origin, callback) {

    if (whitelist.length === 0) {
      callback(null, true);
      return;
    }

    console.log(`${new Date().toDateString()}  |  CALL RECEIVED FROM ORIGIN: ${origin}`)
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback('Not allowed by CORS')
    }
  }
}

app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  console.log(__dirname + '/index.html');
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/authentication/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = userLogin[0].users.find(x => x.username == username);
  if (user) {
    if (user.password == password) {
      user.token = "AuthenticatedToken";
      res.status(200);
      res.send(user);
    }
    else {
      res.status(401);
      res.send("Auth Failed")
    }
  } 
  // authenticate and generate token (used in all calls)
  // use data/users.json file as your source

  // return token:
  res.status(401);
  res.send()

});

app.get('/vehicles', (req, res) => {
  // validate if user is logged in

  // retrieve vehicles
  // use data/vehicles.json

  res.status(200);
  res.send(vehicles);

});

app.listen(server_port, server_ip_address, function () {
  console.log("Listening on " + server_ip_address + ", port " + server_port)
}); 
