const mongoose = require('mongoose');
// connecting to mongoose
// add your mongodb
mongoose.connect('mongodb+srv://gevic:gevic@cluster0.stuqa.mongodb.net/Habit?retryWrites=true&w=majority');
// mongoose database connection
const db = mongoose.connection;
db.on('error',console.error.bind(console,"Error connecting to MongoDb"));

db.once('open',function(){
    console.log('Connected to Database :: MondoDB');
});

module.exports=db;
