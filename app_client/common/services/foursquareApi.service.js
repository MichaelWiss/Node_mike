var CLIENTIDKEY = process.env.CLIENTIDKEY;
var CLIENTSECRETKEY = process.env.CLIENTSECRETKEY;




(function() {
  var foursquare, params;
  

  foursquare = (require('foursquarevenues'))(CLIENTIDKEY, CLIENTSECRETKEY);

  params = {
    "query": "chinese food",
    "ll": "40.7,-74",
    'limit' : 5
  };


  foursquare.getVenues(params, function(error, venues) {
    return console.log(!error ? venues : error);
  });

  foursquare.exploreVenues(params, function(error, venues) {
    return console.log(!error ? venues : error);
  });

  foursquare.getVenues(params, function(error, venues) {
     var results = venues;
     console.log(results);        
  });


}).call(this);

module.exports = new foursquareApiService();