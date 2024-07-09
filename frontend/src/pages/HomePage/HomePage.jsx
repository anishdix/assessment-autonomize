//main home page just toggleing components accordingly

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../../redux/actions/userActions';
import { fetchRepos, setSelectedRepo } from '../../redux/actions/repoActions';
import { fetchFollowers, setFollowers } from '../../redux/actions/followerActions';
import SearchForm from '../../components/SearchForm/SearchForm';
import UserInfo from '../../components/UserInfo/UserInfo';
import RepositoryList from '../../components/RepositoryList/RepositoryList';
import RepositoryDetails from '../../components/RepositoryDetails/RepositoryDetails';
import FollowersList from '../../components/FollowersList/FollowersList';
import styles from './HomePage.module.css';

const HomePage = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.data);
  const repos = useSelector(state => state.repos.list);
  const selectedRepo = useSelector(state => state.repos.selectedRepo);
  const followers = useSelector(state => state.followers.list);
  const [showFollowers, setShowFollowers] = useState(false);

  
  const handleSearch = (username) => {
    dispatch(fetchUser(username));
    dispatch(fetchRepos(username));
    // Reset followers when new user is searched
    dispatch(setFollowers([]));
    setShowFollowers(false);
  };

  const handleRepoClick = (repo) => {
    dispatch(setSelectedRepo(repo));
  };

  const handleFollowersClick = () => {
    if (user) {
      dispatch(fetchFollowers(user.login));
      setShowFollowers(true);
    }
  };

  const handleFollowerClick = (follower) => {
    handleSearch(follower.login);
  };

  const handleBack = () => {
    dispatch(setSelectedRepo(null));
    setShowFollowers(false);
  };

  return (
    <div className={styles.homePage}>
      <SearchForm onSubmit={handleSearch} />
      {user && !selectedRepo && !showFollowers && (
        <>
          <UserInfo user={user} onFollowersClick={handleFollowersClick} />
          <RepositoryList repositories={repos} onRepoClick={handleRepoClick} />
        </>
      )}
      {selectedRepo && (
        <RepositoryDetails repo={selectedRepo} onBack={handleBack} />
      )}
      {showFollowers && (
        <div className={styles.followersSection}>
          <h2>Followers of {user.login}</h2>
          <FollowersList followers={followers} onFollowerClick={handleFollowerClick} />
          <button className={styles.backButton} onClick={handleBack}>Back to Repository List</button>
        </div>
      )}
    </div>
  );
};

export default HomePage;