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

/* GET list of locations */

module.exports.locationsListByDistance = function (req, res) {
  var lng = parseFloat(req.query.lng);
  var lat = parseFloat(req.query.lat);

  var point = {
  	type: "Point",
  	coordinates: [lng, lat]
  };
  var geoOptions = {
  	spherical: true,
  	maxDistance: theEarth.getRadsFromDistance(20),
  	num: 10
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

var buildLocationList = function(req, res, results, stats) {
  var locations = [];
  results.forEach(function(doc) {
    locations.push({
      distance: theEarth.getDistanceFromRads(doc.dis),
      name: doc.obj.name,
      address: doc.obj.address,
      rating: doc.obj.rating,
      facilities: doc.obj.facilities,
      _id: doc.obj._id
    });
  });
  return locations;
};


module.exports.locationsCreate = function (req, res) {
  Loc.create({
  		name: req.body.name,
  		address: req.body.address,
  		facilities: req.body.facilities.split(","),
  		coords: [parseFloat(req.body.lng), parseFloat(req.body.lat)],
  		openingTimes: [{
  			days: req.body.days1,
  			opening: req.bodyopening1,
  			closing: req.body.closing1,
  			closed: req.bosy.closed1,
  		}, {
  			days: req.body.days2,
  			opening: req.body.opening2,
  			closing: req.body.closing2,
  			closed: req.body.closed2,
  		}]
      }, function(err, location) {
      	if (err) {
      		sendJSONresponse(res, 400, err);
      	} else {
      	    sendJSONresponse(res, 201, location);
      	}
  });
};

module.exports.locationsReadOne = function (req, res) {
 console.log('Finding location details', req.params);
 if (req.params && req.params.locationid && req.params.reviewid) {
  Loc
     .findById(req.params.locationid)
     .select('name reviews')
     .exec(
       function(err, location) {
       	var response, review;
       	/* bug? */
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

module.exports.locationsUpdateOne = function(req, res) {
  if (!req.params.locationid) {
  	sendJSONresponse(res, 404, {
  		"message": "Not found, locationid is required"
  	});
  	return;
  }
  Loc
    .findById(req.params.locationid)
    .select('-reviews -rating')
    .exec(
    	function(err, location) {
    		if (!location) {
    			sendJSONresponse(res, 400, err);
    			return;
    		} else if (err) {
    			sendJSONresponse(res, 400, err);
    			return;
    		}
    		location.name = req.body.name;
    		location.address = req.body.address;
    		location.facilities.split(",");
    		location.coords = [parseFloat(req.body.lng), parseFloat(req.body.lat)];
    		location.openingTimes = [{
    			days: req.body.days1,
    			opening: req.body.opening1,
    			closing: req.body.closing1,
    			closed: req.body.closed1,
    		}, {
    			days: req.body.days2,
    			opening: req.body.opening2,
    			closing: req.body.closing2,
    			closed: req.body.closed2,
    		}];
    		location.save(function(err, location) {
    			if (err) {
    				sendJSONresponse(res, 404, err);
    			} else {
    				sendJSONresponse(res, 200, location);
    			}
    		});
    	  }
    	);
};

module.exports.locationsDeleteOne = function (req, res) {
  var locationid = req.params.locationid;
  if (locationid) {
  	Loc
  	  .findByIdAndRemove(locationid)
  	  .exec(
  	  	function(err, location) {
  	  		if(err) {
  	  			sendJSONresponse(res, 404, err);
  	  			return;
  	  		}
  	  		sendJSONresponse(res, 204, null);
  	  	}
  	  );
  } else {
  	sendJSONresponse(res, 404, {
  		"message": "No locationid"
  	});
  }
};

