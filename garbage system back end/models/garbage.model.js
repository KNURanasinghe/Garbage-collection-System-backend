const mongoose = require('mongoose');
const db = require('../config/db');
const bcrypt = require('bcrypt');


const { Schema } = mongoose;


const garbageSchema = new Schema({
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

garbageSchema.pre('save',async function(){
    try {
        var garbage = this;
        const salt = await (bcrypt.genSalt(10));
        const hashpass = await bcrypt.hash(garbage.password,salt);
        garbage.password = hashpass;

    } catch (error) {
        throw error;
    }
});

garbageSchema.methods.comparePassword = async function(garbagepassword){
    try {
        const isMatch = await bcrypt.compare(garbagepassword, this.password);
        return isMatch;
    } catch (error) {
        throw error;
    }
}
const GarbageModel = db.model('garbage',garbageSchema);

module.exports =GarbageModel;