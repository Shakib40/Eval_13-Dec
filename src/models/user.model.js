const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
    name : { type : 'string' , required : true},
    email : { type : 'string' , required : true},
    password: { type : 'string' , required : true},
    profile_photo_url: { type : 'string' , required : true},
    roles: { type : 'string' , required : true}
   },
    {
        versionKey : false,
        timestamps : true
    }
)

module.exports = mongoose.model ('users' , userSchema);
