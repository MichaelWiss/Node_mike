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

 var doAddReview = function(req, res, location) {
 	if(!location) {
 		sendJSONresponse(res, 404, {
 			"message": "locationid not found"
 		});
 	} else {
 		location.reviews.push({
 			author: req.body.author,
 			rating: req.body.rating,
 			reviewText: req.body.reviewText
 		});
 		location.save(function(err, location) {
           var thisReview;
           if (err) {
           	sendJSONresponse(res, 400, err);
          } else {
          	updateAverageRating(location._id);
          	thisReview = location.reviews[location.reviews.length - 1];
          	sendJSONresponse(res, 201, thisReview);
          }
 		});
 	}
 };

 var updateAverageRating = function(locationid) {
 	Loc
 	   .findById(locationId)
 	   .select('rating reviews')
 	   .exec(
 	   	function(err, location) {
 	   	  if (!err) {
 	   	  	doSetAverageRating(location);
 	   	  }
 	   	});
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
