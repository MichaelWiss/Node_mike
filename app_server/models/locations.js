var mongoose = require( 'mongoose' );
var locationSchema = mongoose.Schema({ 
  name: {type: String, required: true}
  address: '125 High Street, Reading, RG6 1PS',
  rating: {type: Number, "default": 0}
  facilities: ['Hot drinks', 'Food', 'Premium wifi'],
  distance: '100m'
});