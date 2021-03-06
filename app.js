require('dotenv').config();
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var uglifyJs = require("uglify-js");
var fs = require('fs');
var CLIENTIDKEY = process.env.CLIENTIDKEY;
var CLIENTSECRETKEY = process.env.CLIENTSECRETKEY;
var MAP_API = process.env.MAP_API







require('./app_api/models/db');


var routes = require('./app_server/routes/index');
var routesApi = require('./app_api/routes/index');
var users = require('./app_server/routes/users');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'pug');
var appClientFiles = [
  'app_client/app.js',
  'app_client/home/home.controller.js',
  'app_client/about/about.controller.js',
  'app_client/locationDetail/locationDetail.controller.js',
  'app_client/lib/angular-sanitize.min.js',
  'app_client/common/services/geolocation.service.js',
  'app_client/common/services/loc8rData.service.js',
  'app_client/common/filters/formatDistance.filter.js',
  'app_client/common/directives/ratingStars/ratingStars.directive.js',
  'app_client/common/filters/addHtmlLineBreaks.filter.js',
  'app_client/common/directives/navigation/navigation.directive.js',
  'app_client/common/directives/pageHeader/pageHeader.directive.js',
  'app_client/common/directives/footerGeneric/footerGeneric.directive.js'
];
var uglified = uglifyJs.minify(appClientFiles, { compress : false });

fs.writeFile('public/angular/loc8r.min.js', uglified.code, function(err){
  if(err) {
    console.log(err);
  } else {
    console.log('Script generated and saved: loc8r.min.js');
  }
});

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
//app.use('/users', users);

app.use(function(req, res) {
  res.sendfile(path.join(_dirname, 'app_client', 'index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});




// function geolocation () {
//   var getPosition = function (cbSuccess, cbError, cbNoGeo) {
//   if (navigator.geolocation) {
//      navigator.geolocation.getCurrentPosition(cbSuccess, cbError);
//   }
//   else {
//      cbNoGeo();
//   }
//   };
//   return {
//      getPosition : getPosition
//   };
// }
// var getPostion = getPostion;
// console.log(getPostion);

(function() {
  var foursquare, params;
  

  foursquare = (require('foursquarevenues'))(CLIENTIDKEY, CLIENTSECRETKEY);

  params = {
    "query": "chinese food",
    "ll": "40.7,-74",
    'limit' : 5
  };


  foursquare.getVenues(params, function(error, venues) {
 if (!error) {
        console.log(venues);
        console.log(JSON.stringify(venues, undefined, 2));

        }
});
  // var jsonUniquePlaces;
  //     jsonUniquePlaces = [];

  // foursquare.exploreVenues(params, function(error, venues) {
  //   var i, objUniquePlace, range, uniquePlaces, venueName;
  
  // jsonUniquePlaces = JSON.stringify(jsonUniquePlaces);

  //         return jsonUniquePlaces;
  
  // }); 



  var venues = foursquare.exploreVenues(params, function(error, venues) {
if (!error) {
// var reply = JSON.parse(venues);
// console.log(venues.name);
        console.log(venues.key);

  // var newContent = '';
  // for (var i = 0, i <responseObject.events.length; i++){

  // }
  global.venues = venues;

  if(venues.status === 200) {
    response = JSON.parse(venues.responseText);
    var newContent = '';
    for (var i = 0; i < responseObject.venues.length; i++) {
      newContent += '<div class="event">';
      newContent += '<img class="' + responseObject.venues[i].map + ' " ';
      newContent += 'alt="' + responseObject.venues[i].address + '" />';
      newContent += '<p><b>' + responseObject.venues[i].address + '</b><br>';
      newContent += responseObject.venues[i].menu + '</p>';
      newContent += '</div';
    }

  }

}
     



});



}).call(this);


// error handlers

//development error handler
//will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

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
