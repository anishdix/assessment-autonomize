// component to map and list all folllowers

import React from 'react';
import styles from './FollowersList.module.css';

const FollowersList = ({ followers, onFollowerClick }) => {
  return (
    <ul className={styles.list}>
      {followers.map(follower => (
        <li key={follower.id} className={styles.item} onClick={() => onFollowerClick(follower)}>
          <img className={styles.avatar} src={follower.avatar_url} alt={follower.login} />
          <span className={styles.login}>{follower.login}</span>
        </li>
      ))}
    </ul>
  );
};

export default FollowersList;