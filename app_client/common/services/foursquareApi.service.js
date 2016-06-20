(function () {


angular
   .module('loc8rApp')
   .service('foursquareApi', foursquareApi);
function foursquare () {
 var foursquare = require('node-foursquare-venues')('clientId', 'secretId');




}
   })();