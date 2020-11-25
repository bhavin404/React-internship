const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dataSchema = new Schema({
    userId   :{ type:String, required : true },
    firstName:{ type:String, required : true},
    lastName :{ type:String, required : true},
    email    :{ type:String, required : true},
    dob      :{ type:Date, required : true},
    shortBio :{ type:String, required : true},

}, {
        timestamps:true
    }
);

const Data = mongoose.model('Data',dataSchema)

module.exports = Data;