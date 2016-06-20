(function () {


angular
   .module('loc8rApp')
   .service('foursquareApi', foursquareApi);
function foursquare (geolocation) {
 var foursquare = require('node-foursquare-venues')('clientId', 'secretId');




}
   })();