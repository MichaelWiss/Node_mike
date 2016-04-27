var mongoose = require('mongoose');
var Loc = mongoose.model('Location');


var sendJSONresponse = function(res, status, content) {
	res.status(status);
	res.json(content);
};

module.exports.reviewsCreate = function (req, res) {
    var locationid = req.params.locationid;
    if(locationid) {
    	Loc
    	   .findById(locationid)
    	   .select('review')
    	   .exec(
    	   	function(err, location) {
    	   		if (err, location) {
    	   			sendJSONresponse(res, 400, err);
    	   		} else {
    	   			doAddReview(req, res, location);
    	   		}
    	   	}
    );
   } else {
   	sendJSONresponse(res, 404, {
   		"message": "Not found, locationid required"
   	});
   }
 };

 module.exports.reviewsReadOne = function (req, res) {
    sendJSONresponse(res, 200, {"status" : "success"});
 };

 module.exports.reviewsUpdateOne = function (req, res) {
    sendJSONresponse(res, 200, {"status" : "success"});
 };

 module.exports.reviewsDeleteOne = function (req, res) {
    sendJSONresponse(res, 200, {"status" : "success"});
 };
