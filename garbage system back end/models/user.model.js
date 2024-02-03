const mongoose = require('mongoose');
const db = require('../config/db');
const bcrypt = require('bcrypt');


const { Schema } = mongoose;


const userSchema = new Schema({
    email:{
        type:String,
        lowercase:true,
        require: true,
        unique:true
    },
    password:{
        type:String,
        require: true,
    }
});

userSchema.pre('save',async function(){
    try {
        var user = this;
        const salt = await (bcrypt.genSalt(10));
        const hashpass = await bcrypt.hash(user.password,salt);
        user.password = hashpass;

    } catch (error) {
        throw error;
    }
});

userSchema.methods.comparePassword = async function(userpassword){
    try {
        const isMatch = await bcrypt.compare(userpassword, this.password);
        return isMatch;
    } catch (error) {
        throw error;
    }
}
const UserModel = db.model('user',userSchema);

module.exports =UserModel;