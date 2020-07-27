var mongoose = require('mongoose');

var appointmentSchema = mongoose.Schema({
 lastName: String,
 email: String,
 decoration: String,
 phone: Number,
 date: Date,
 time: String,
 message: String
});

var appointmentModel = mongoose.model('appointment', appointmentSchema);

module.exports = appointmentModel;