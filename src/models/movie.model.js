const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema(
    {
        name: { type : 'string' , required : true},
        actors : { type : 'string' , required : true},
        languages : { type : 'string' , required : true},
        directors : { type : 'string' , required : true},
        poster_url : { type : 'string' , required : true},
   },
    {
        versionKey : false,
        timestamps : true
    }
);

module.exports = mongoose.model ('movies' , movieSchema);
