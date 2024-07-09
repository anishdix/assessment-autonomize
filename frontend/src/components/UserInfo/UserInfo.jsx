//componet to display user info

import React from 'react';
import styles from './UserInfo.module.css';

const UserInfo = ({ user, onFollowersClick }) => {
  return (
    <div className={styles.userInfo}>
      <img className={styles.avatar} src={user.avatar_url} alt={user.login} />
      <h2 className={styles.name}>{user.name || user.login}</h2>
      <p className={styles.bio}>{user.bio}</p>
      <div className={styles.stats}>
        <span>Repositories: {user.public_repos}</span>
        <span>Followers: {user.followers}</span>
        <span>Following: {user.following}</span>
      </div>
      <button className={styles.followersButton} onClick={onFollowersClick}>
        View Followers
      </button>
    </div>
  );
};

export default UserInfo;