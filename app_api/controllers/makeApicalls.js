var mongoose = require('mongoose');
var Loc = mongoose.model('Location');



module.exports = {
  makeApicall: function() {
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
        response.json([{ name: 'Beverages' }, { name: 'Condiments' }]);


        }
});


   }
};