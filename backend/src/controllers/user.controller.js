const userService = require('../services/user.service');
const ApiError = require('../utils/ApiError');
const httpStatus = require('http-status');

// 1. Accept any GitHub username and save details from the GitHub API into the database.
const createUser = async (req, res, next) => {
    console.log("inside create")
  try {
    const { username } = req.body;
    const user = await userService.createUser(username);
    res.status(httpStatus.CREATED).send(user);
  } catch (error) {
    next(error);
  }
};

// 2. Find mutual followers and save them as friends.
const getMutualFriends = async (req, res, next) => {
  try {
    const { username } = req.params;
    const user = await userService.getMutualFriends(username);
    res.status(httpStatus.OK).send(user);
  } catch (error) {
    next(error);
  }
};

// 3. Search the saved data from the database based on username, location etc.
const searchUsers = async (req, res, next) => {
  try {
    const { username, location } = req.query;
    const filter = {};

    if (username) filter.username = new RegExp(username, 'i');
    if (location) filter.location = new RegExp(location, 'i');

    const users = await userService.searchUsers(filter);
    res.status(httpStatus.OK).send(users);
  } catch (error) {
    next(error);
  }
};

// 4. Soft delete a record based on a given username from the database.
const softDeleteUser = async (req, res, next) => {
  try {
    const { username } = req.params;
    const user = await userService.deleteUser(username);
    res.status(httpStatus.OK).send(user);
  } catch (error) {
    next(error);
  }
};

// 5. Update fields like “location”, “blog”, “bio” etc for a given user in the database.
const updateUser = async (req, res, next) => {
  try {
    const { username } = req.params;
    const updates = req.body;
    const user = await userService.updateUser(username, updates);
    res.status(httpStatus.OK).send(user);
  } catch (error) {
    next(error);
  }
};

// 6. Return list of all users from the database sorted by given fields like “public_repos”, “public_gists”, “followers”, “following”, “created_at” etc.
const getUsers = async (req, res, next) => {
    console.log("in get all useres")
  try {
    const { sortBy } = req.query;
    const users = await userService.getUsersSorted(sortBy);

    // console.log(users)
    res.status(httpStatus.OK).send(users);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
  getMutualFriends,
  searchUsers,
  softDeleteUser,
  updateUser,
  getUsers,
};
