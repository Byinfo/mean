/**
 * Created by Pavel on 6/12/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
    username: String,
    password: String,
    firstname: String,
    lastname:String
});

User.plugin(passportLocalMongoose);
module.exports = mongoose.model('users', User);