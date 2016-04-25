var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

var sendJSONresponse = function(res, status, content) {
	res.status(status);
	res.json(content);
};

module.exports.locationsCreate = function (req, res) {
  sendJSONresponse(res, 200, {"status" : "success"});
};

module.exports.locationsReadOne = function (req, res) {
 if (req.params && req.params.locationid) {
  Loc
     .findById(req.params.locationid)
     .select('name reviews')
     .exec(function(err, location) {
       if (!location) {
     	sendJSONresponse(res, 404, {
     		"message": "locationid not found"
     	});
     	return;
     } else if (err) {
     	sendJSONresponse(res, 404, location);
     	return;
     }
     sendJSONresponse(res, 200, location);
    });
} else {
	sendJSONresponse(res, 404, {
		"message": "No kocationid in request"
	});
  }
};

module.exports.locationsUpdateOne = function (req, res) {
  sendJSONresponse(res, 200, {"status" : "success"});
};

module.exports.locationsDeleteOne = function (req, res) {
  sendJSONresponse(res, 200, {"status" : "success"});
};

module.exports.locationsListByDistance = function (req, res) {
  sendJSONresponse(res, 200, {"status" : "success"});
};

