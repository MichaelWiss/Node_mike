(function () {


angular
   .module('loc8rApp')
   .service('foursquareApi', foursquareApi);

var foursquareConfig = {
	'secrets' : {
		'clientId' : 'APP_CLIENT_ID',
		'clientSecret' : 'APP_CLIENT_SECRET',
		'redirectUrl' : 'REDIRECT_URL'
	}
};
function foursquare (geolocation) {
 var foursquare = require('node-foursquare-venues')(foursquareConfig);

 app.get('/', function (req, res) {





});




}
   })();