var mongoose = require('mongoose');

var options = {
    connectTimeoutMS: 5000,
    useNewUrlParser: true,
   
        useUnifiedTopology : true
   }
   mongoose.connect('mongodb+srv://NicolasIvorra:XhtpaVnAw6bCfTiz@cluster0-vy9dx.mongodb.net/Cluster0?retryWrites=true&w=majority',
   options,    
    function(err) {
     console.log(err);
    }
   );

module.exports = mongoose