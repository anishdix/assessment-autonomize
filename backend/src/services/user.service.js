const User = require('../models/User.model');
const { getUserFromGitHub, getFollowersFromGitHub, getFollowingFromGitHub } = require('../utils/github');
const ApiError = require('../utils/ApiError');
const httpStatus = require('http-status');

const createUser = async (username) => {
  let user = await User.findOne({ username });

  if (!user) {
    const githubUser = await getUserFromGitHub(username);

    user = new User({
      username: githubUser.login,
      location: githubUser.location,
      blog: githubUser.blog,
      bio: githubUser.bio,
      public_repos: githubUser.public_repos,
      public_gists: githubUser.public_gists,
      followers: githubUser.followers,
      following: githubUser.following,
      created_at: githubUser.created_at,
      updated_at: githubUser.updated_at,
    });

    await user.save();
  }

  return user;
};

const getUserByUsername = async (username) => {
  return await User.findOne({ username });
};

const updateUser = async (username, updates) => {
  const user = await User.findOneAndUpdate({ username }, updates, { new: true });
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  return user;
};

const deleteUser = async (username) => {
  const user = await User.findOneAndUpdate({ username }, { isDeleted: true }, { new: true });
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  return user;
};

const searchUsers = async (filter) => {
  filter.isDeleted = false;
  return await User.find(filter);
};

const getUsersSorted = async (sortBy) => {
  const sortCriteria = {};
  if (sortBy) {
    sortCriteria[sortBy] = 1;
  }
  return await User.find({ isDeleted: false }).sort(sortCriteria);
};

const getMutualFriends = async (username) => {
  const user = await getUserByUsername(username);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  const followers = await getFollowersFromGitHub(username);
  const following = await getFollowingFromGitHub(username);

  const followerUsernames = followers.map(f => f.login);
  const followingUsernames = following.map(f => f.login);

  const mutualFriends = followerUsernames.filter(f => followingUsernames.includes(f));

  const mutualFriendUsers = await User.find({ username: { $in: mutualFriends } });

  user.friends = mutualFriendUsers.map(u => u._id);
  await user.save();

  return user;
};

module.exports = {
  createUser,
  getUserByUsername,
  updateUser,
  deleteUser,
  searchUsers,
  getUsersSorted,
  getMutualFriends,
};
