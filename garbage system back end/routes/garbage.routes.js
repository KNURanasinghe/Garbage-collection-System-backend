const router = require('express').Router();
const GarbageController =require('../controllers/garbage.controller');

router.post('/registration',GarbageController.register);
router.post('/login',GarbageController.login);

module.exports = router;



