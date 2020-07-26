var mongoose = require('mongoose');

var DevisSchema = mongoose.Schema({
 name: String,
 email: String,
 type: String,
 phone: String,
 adress: String,
 typeOfTheme: String,
 date: Date,
 number: Number,
 additionnalFirst: String,
 additionnalSecond: String,
 additionnalThird: String,
 additionnalFourth: String,
 additionnalLast: String,
 traitor: String,
 sugarPieces: String,
 sugerSalt: String,
 dadBear: String,
 chocolate: String,
 popCorn: String,
 crepe: String,
 hotDog: String,
 iceCream: String,
 granita: String,
 photobooth: String,
 resine: String,
 moreInfo: String,
});

var devisModel = mongoose.model('devisService', DevisSchema);

module.exports = devisModel;