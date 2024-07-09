const axios = require('axios');

const GITHUB_API_URL = 'https://api.github.com/users';

const getUserFromGitHub = async (username) => {
  const response = await axios.get(`${GITHUB_API_URL}/${username}`);
  return response.data;
};

const getFollowersFromGitHub = async (username) => {
  const response = await axios.get(`${GITHUB_API_URL}/${username}/followers`);
  return response.data;
};

const getFollowingFromGitHub = async (username) => {
  const response = await axios.get(`${GITHUB_API_URL}/${username}/following`);
  return response.data;
};

module.exports = {
  getUserFromGitHub,
  getFollowersFromGitHub,
  getFollowingFromGitHub,
};
