var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');

/* Locations */
router.get('/', ctrlLocations.homelist);
// router.get('/location', ctrlLocations.locationInfo);
// router.get('/location/review/new', ctrlLocations.addReview);

/* Other pages */
router.get('/about', ctrlOthers.about);


/*var ctrlMain = require('../controllers/main');

var homepageController = function (req, res) {
	res.render('index', {title: 'Express' });
}; */

/* GET home page. 
router.get('/', ctrlMain.index); 
*/

module.exports = router;
