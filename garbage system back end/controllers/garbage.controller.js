const GarbageService = require('../services/garbage.service');


exports.register = async (req, res,next)=>{
    try{
        const {email,password} = req.body;

        const successRes = await GarbageService.registerUser(email,password);

        res.json({status:true,success:"User registered successfully"});
    }catch(error){
        throw error;
    }
}

exports.login = async (req, res,next)=>{
    try{
        const {email,password} = req.body;

       const garbage =  await GarbageService.checkuser(email);

       if(!garbage){
        throw Error('user dont exist');
       }
       
       const isMatch = await garbage.comparePassword(password);

       if(isMatch === false){
        throw Error('passowrd InValid');
       }

       let tokenData = {_id:garbage._id, email:garbage.email};

       const token = await GarbageService.generateToken(tokenData,'secretKey','8h')
       res.status(200).json({status:true,token:token});
       
    }catch(error){
        throw error;
    }
}