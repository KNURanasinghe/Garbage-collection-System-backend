const router = require('express').Router();
const VehicalController =require('../controllers/location.controller');


router.post('/add',VehicalController.add);
router.post('/get',VehicalController.get);

module.exports = router;
