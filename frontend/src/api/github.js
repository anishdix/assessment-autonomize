import axios from 'axios';

const API_BASE_URL = 'https://api.github.com';

const githubApi = axios.create({
  baseURL: API_BASE_URL,
});

//api to fetch user data
export const fetchUserData = async (username) => {
  try {
    const response = await githubApi.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error('User not found');
  }
};

//api to fetch repos
export const fetchUserRepositories = async (username) => {
  try {
    const response = await githubApi.get(`/users/${username}/repos`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch repositories');
  }
};


//api to fetch user follwers
export const fetchUserFollowers = async (username) => {
  try {
    const response = await githubApi.get(`/users/${username}/followers`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch followers');
  }
};