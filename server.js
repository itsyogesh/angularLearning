//Get the packages
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var Email = require('./models/email');

//Connecting to MongoDb
mongoose.connect('mongodb://localhost:27017/beerlocker');

//Start the application
var app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(path.join(__dirname, 'public')));

//Use the environment defined port or 3000
var port = process.env.PORT || 3000;

//create our express router
var router = express.Router();

var emailRoute = router.route('/api/mail');

//Create endpoint /api/email for POSTS
emailRoute.post(function(req, res){
  var email = new Email();

  email.from = req.body.from;
  email.to = req.body.to;
  email.subject = req.body.subject;
  email.body = req.body.body;

  email.save(function(err){
    if(err)
      res.send(err);

    res.json({ message: "Email successfully sent"});
  });
});

emailRoute.get(function(req, res){
  Email.find(function(err, emails){
    if(err)
      res.send(err);
    console.log(emails);
    res.json({all : emails});
  });
});

app.use('/', router);

app.listen(port);
console.log('Server started on port '+ port);
