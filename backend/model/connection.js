var mongoose = require('mongoose');

var options = {
    connectTimeoutMS: 5000,
    useNewUrlParser: true,
   
        useUnifiedTopology : true
   }
   mongoose.connect('mongodb+srv://NicolasIvorra:82vYBdEmv7KIM9bp@cluster0-vy9dx.mongodb.net/Planific-adore?retryWrites=true&w=majority',
    options,    
    function(err) {
     console.log(err);
    }
   );

module.exports = mongoose