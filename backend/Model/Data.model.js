const mongoose = require('mongoose');

const nikeSchema = new mongoose.Schema({
    IPR:        {
        type: String,
        require: true
                },
    Designation:{
        type: String,
        require: true
            },
    Status: {
        type: String,
        require: true
            },
    Number: {
        type: Number,
        require: true
            },
    Office:  {
        type: String,
        require: true
            },
    Owner:  {
        type: String,
        require: true
            },
   
});

const Nike = mongoose.model('Nike', nikeSchema);
