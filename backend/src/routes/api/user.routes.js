//user routes layer 

const express = require('express');
const userController = require('../../controllers/user.controller');
const validate = require('../../middlewares/validate');
const userValidation = require('../../validation/user.validation');

const router = express.Router();

// Route to create a user
router.post('/', validate(userValidation.createUser), userController.createUser);

// Route to get mutual friends of a user
router.get('/:username/mutual-friends', userController.getMutualFriends);

// Route to search users
router.get('/search', userController.searchUsers);

// Route to soft delete a user
router.delete('/:username', userController.softDeleteUser);

// Route to update user data
router.put('/:username', validate(userValidation.updateUser), userController.updateUser);

// Route to get users sorted by a specific field
router.get('/', userController.getUsers);

module.exports = router;
