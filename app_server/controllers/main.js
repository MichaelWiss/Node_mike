/* GET home page */
module.exports.index = function(req, res) {
	res.render('foundation', { title: 'Express' });
};


(function() {
  var foursquare, params;
  var CLIENTIDKEY = process.env.CLIENTIDKEY;
  var CLIENTSECRETKEY = process.env.CLIENTSECRETKEY;

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
     console.log(venues);
  });


}).call(this);