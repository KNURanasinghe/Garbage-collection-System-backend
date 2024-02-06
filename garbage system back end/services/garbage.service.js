const GarbageModel = require('../models/garbage.model')
const jwt = require('jsonwebtoken')

class GarbageService{
    static async registerUser(email, password){
        try{
            const createUser = new GarbageModel({email, password});
            return await createUser.save();
        }catch(err){
            throw err;
        }
    }
    static async checkuser(email){
        try {
            return await GarbageModel.findOne({email});
        } catch (error) {
            throw error;
        }
    }

    //create jwt token
    static async generateToken(tokenData,secretKey,jwt_expire){
        return jwt.sign(tokenData,secretKey,{expiresIn:jwt_expire});
    }
}

module.exports = GarbageService;