var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
require('./app_api/models/db');

var routes = require('./app_server/routes/index');
var routesApi = require('./app_api/routes/index');
var users = require('./app_server/routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'app_client')));

app.use('/', routes);
app.use('/api', routesApi);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
// if (app.get('env') === 'development') {
//   app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//       message: err.message,
//       error: err
//     });
//   });
// }


//foursquare

var foursquareConfig = {
  'secrets' : {
    'clientId' : 'APP_CLIENT_ID',
    'clientSecret' : 'APP_CLIENT_SECRET',
    'redirectUrl' : 'REDIRECT_URL'
  }
};
function foursquareApi (geolocation) {
 var foursquare = require('node-foursquare-venues')(foursquareConfig);

 

  var params = {
    "ll": "40.7,-74"
  };
 
  foursquare.getVenues(params, function(error, venues) {
    if (!error) {
      console.log(venues);
    }
  });
 
  foursquare.exploreVenues(params, function(error, venues) {
    if (!error) {
        console.log(venues);
    }
  });



}

app.get('/', function (req, res) {

  foursquare.Venues.explore(location.lat, location.lng, attributes, foursquareAccessToken, function (err, venues){

      // Extract the list of venues from all the data Foursquare returns.
      var venueList = venues.groups[0].items;
      console.log(venues);

      // Since we're going to be voting on these, I need to give them some nice visual identifiers, I chose letters A-Z.
      for (var i = 0; i < venueList.length; i++) {
        venueList[i].visualId = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[i];
      }

      // Prepare the information for rendering.
      var templateInformation = {
        'venues' : venueList
      };

      // Render!
      res.render('index', templateInformation);
    });
  });



//end




// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
