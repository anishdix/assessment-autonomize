const express = require('express');
const userRoutes = require('./user.routes'); 
const router = express.Router();
//redirect apis to it necessary routes,/users for user routes 
router.use("/users", userRoutes); 


module.exports = router;