const UserService = require('../services/user.services');
const VehicalService = require('../services/vehical.service');


exports.add = async (req, res,next)=>{
    try{
        const {vehicalId,lat,lan,timeStamp} = req.body;

        const successRes = await VehicalService.add(vehicalId,lat,lan,timeStamp);

        res.json({status:true,success:"User registered successfully"});
    }catch(error){
        throw error;
    }
}

exports.get = async (req, res,next)=>{
    try{
       const vehicles =  await VehicalService.get();

       if(!vehicles){
        throw Error('no data found!');
       }

       res.status(200).json({status:true, data:vehicles});
       
    }catch(error){
        console.log("db error occured!");
        throw error;
    }
}
