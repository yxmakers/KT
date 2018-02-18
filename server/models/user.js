var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    email: String,
    name: String,
    passwordHash: String
});
module.exports = mongoose.model('User', UserSchema);
