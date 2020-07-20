var express = require('express');
var router = express.Router();
var appointmentModel = require('../model/appointmentHome')

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("coucou")
  res.render('index', { title: 'Express' });
});
router.post('/appointmentHome', async function(req, res, next) {
  
  var newAppointment = new appointmentModel({
    lastName: req.body.nameFromFront,
    email: req.body.emailFromFront,
    decoration: req.body.typeFromFront,
    phone: req.body.telFromFront,
    date: req.body.dateFromFront,
    time: req.body.timeFromFront,
    message: req.body.messageFromFront,
  })
  console.log(newAppointment)

var newAppointmentSave = await newAppointment.save();

res.json({newAppointmentSave, })
});

module.exports = router;
