const UserModel = require('../models/user.model')
const jwt = require('jsonwebtoken');
const VehicalModel = require('../models/vehica.model');

class VehicalService{
    static async add(vehicalId,lat,lan,timeStamp){
        try{
            const createVehical = new VehicalModel({vehicalId,lat,lan,timeStamp});
            return await createVehical.save();
        }catch(err){
            throw err;
        }
    }
    
    static async get() {
        try {
          const latestTimestamps = await VehicalModel.aggregate([
            {
              $sort: {
                vehicalId: 1,
                timeStamp: -1,
              },
            },
            {
              $group: {
                _id: '$vehicalId',
                latestTimestamp: { $first: '$timeStamp' },
                lat: { $first: '$lat' },
                lan: { $first: '$lan' },
              },
            },
            {
              $project: {
                _id: 0,
                vehicalId: '$_id',
                lat: 1,
                lan: 1,
                latestTimestamp: 1,
              },
            },
          ]);
      
          return latestTimestamps;
        } catch (err) {
          throw err;
        }
      }
      
  
}

module.exports = VehicalService;
