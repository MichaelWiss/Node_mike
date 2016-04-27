var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

var sendJSONresponse = function(res, status, content) {
	res.status(status);
	res.json(content);
};

var theEarth = (function(){
	var earthRadius = 3959; //km is 6371
	var getDistanceFromRads = function(rads) {
		return parseFloat(rads * earthRadius);
	};

	var getRadsFromDistance = function(distance) {
		return parseFloat(distance /earthRadius);
	};

	return {
		getDistanceFromRads : getDistanceFromRads,
		getRadsFromDistance : getRadsFromDistance
	};
}) ();

module.exports.locationsCreate = function (req, res) {
  sendJSONresponse(res, 200, {"status" : "success"});
};

module.exports.locationsReadOne = function (req, res) {
 if (req.params && req.params.locationid) {
  Loc
     .findById(req.params.locationid)
     .select('name reviews')
     .exec(
       function(err, location) {
       	var response, review;
       if (!location) {
     	sendJSONresponse(res, 404, {
     		"message": "locationid not found"
     	});
     	return;
     } else if (err) {
     	sendJSONresponse(res, 404, location);
     	return;
     }
     if (location.reviews && location.reviews.length > 0) {
     	review = location.reviews.id(req.params.reviewid);
     	if (!review) {
     	  sendJSONresponse(res, 404, {
     	  	"message": "reviewid not found"
     	  });
     	} else {
     	  response = {
     	  	location : {
     	  		name: location.name,
     	  		id : req.params.locationid
     	  	   },
     	  	   review : review
     	    };
     	    sendJSONresponse(res, 200, response);
     	}
     } else {
     sendJSONresponse(res, 404, {
     	"message": "No reviews found"
     });
    }
   }
  );
} else {
	sendJSONresponse(res, 404, {
		"message": "Not found, locationid and reviewid are both required"
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
  var lng = parseFloat(req.query.lng);
  var lat = parseFloat(req.query.lat);

  var geoOptions = {
  	spherical: true,
  	maxDistance: theEarth.getRadsFromDistance(20),
  	num: 10
  };
  var point = {
  	type: "Point",
  	coordinates: [lng, lat]
  };
  if (!lng || !lat) {
  	sendJSONresponse(res, 404, {
  		"message": "lng and lat query parameters are required"
  	});
  	return;
  }
  Loc.geoNear(point, geoOptions, function (err, results, stats){
    var locations = [];
    if (err) {
    	sendJSONresponse(res, 404, err);
    } else {
    results.forEach(function(doc) {
    	locations.push({
          distance: theEarth.getDistanceFromRads(doc.dis),
          name: doc.obj.name,
          address: doc.obj.name,
          rating: doc.obj.rating,
          facilities: doc.obj.facilities,
          _id: doc.obj._id
      });
    });
    sendJSONresponse(res,200, locations);
   }
 });
};

