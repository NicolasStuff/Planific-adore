var express = require('express');
var router = express.Router();
var appointmentModel = require('../model/appointmentHome');
const devisModel = require('../model/DevisService');
var nodemailer = require('nodemailer');

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

router.post('/devisService', async function (req, res, next) {

  var newDevis = new devisModel({
    name: req.body.nameFromFront,
    email: req.body.emailFromFront,
    type: req.body.typeFromFront,
    phone: req.body.phoneFromFront,
    adress: req.body.adressFromFront,
    typeOfTheme: req.body.typeOfThemeFromFront,
    date: req.body.dateFromFront,
    number: req.body.numberFromFront,
    additionnalFirst: req.body.additionnalFirstFromFront,
    additionnalSecond: req.body.additionnalSecondFromFront,
    additionnalThird: req.body.additionnalThirdFromFront,
    additionnalFourth: req.body.additionnalFourthFromFront,
    additionnalLast: req.body.additionnalLastFromFront,
    traitor: req.body.traitorFromFront,
    sugarPieces: req.body.sugarPiecesFromFront,
    sugerSalt: req.body.sugerSaltFromFront,
    dadBear: req.body.dadBearFromFront,
    chocolate: req.body.chocolateFromFront,
    popCorn: req.body.popCornFromFront,
    crepe: req.body.crepeFromFront,
    hotDog: req.body.hotDogFromFront,
    iceCream: req.body.iceCreamFromFront,
    granita: req.body.granitaFromFront,
    photobooth: req.body.photoboothFromFront,
    resine: req.body.resineFromFront,
    moreInfo: req.body.moreInfoFromFront,
  })
  console.log(newDevis)

  var DevisSaved = await newDevis.save()

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'nicolas.ivorra.ni@gmail.com',
      pass: '6Klkpour8...'
    }
  });
  
  var mailOptions = {
    from: 'nicolas.ivorra.ni@gmail.com',
    to: 'leila.samantha95@gmail.com',
    subject: `Nouveau devis de ${newDevis.name}`,
    html: `<h1>Nouveau devis de ${newDevis.name}</h1><h2> Informations du client</h2><p>Nom : ${newDevis.name} </p><p>Email : ${newDevis.email} </p><p>Téléphone : ${newDevis.phone} </p><p>Adresse : ${newDevis.adress} </p><p>Date de l'évènement : ${newDevis.date} </p><p>Nombre de personnes : ${newDevis.number} </p><h2> Informations de l'évènement </h2><p>Type : ${newDevis.type} </p><p>Type d'évènement : ${newDevis.typeOfTheme} </p><h2>Nombre de personnes : </h2><p>15 personnes : ${newDevis.additionnalFirst}</p><p>20 personnes : ${newDevis.additionnalSecond}</p> <p>30 personnes : ${newDevis.additionnalThird}</p> <p>50 personnes : ${newDevis.additionnalFourth}</p> <p>Plus de 50 personnes : ${newDevis.additionnalLast}</p> <h2> Suppléments Sucrée<h2/> <p>Traiteur : ${newDevis.traitor}</p> <p>Pièces Sucrée ${newDevis.sugarPieces}</p> <p>Pièces salée : ${newDevis.sugerSalt}</p> <p>Machine à barbe à Papa: ${newDevis.dadBear}</p> <p>Fontaine de chxocolat: ${newDevis.chocolate}</p> <p>Machine à Pop Corn : ${newDevis.popCorn}</p><p>Machine à crêpes : ${newDevis.crepe}</p> <p>HotDog : ${newDevis.hotDog}</p> <p>Glaces à l'Italienne : ${newDevis.iceCream}</p><p>Machine à Granita : ${newDevis.granita}</p> <p>Machine à Photobooth : ${newDevis.photobooth}</p> <p>Animaux en Résine : ${newDevis.resine}</p><h2> Message du Client :</h2><p> ${newDevis.moreInfo}</p>`
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  res.json({DevisSaved})
})

module.exports = router;
