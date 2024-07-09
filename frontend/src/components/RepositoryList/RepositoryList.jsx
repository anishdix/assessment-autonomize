//components to dislay all repos in a list

import React from 'react';
import styles from './RepositoryList.module.css';

const RepositoryList = ({ repositories, onRepoClick }) => {
  return (
    <ul className={styles.list}>
      {repositories.map(repo => (
          <li key={repo.id} className={styles.item} >
            <div className={styles.wrapper} onClick={() => onRepoClick(repo)}>
            <div className={styles.imgContainer}>
            <img src={repo.owner.avatar_url} alt="userimg" className={styles.image}/>
            </div>
            <div className={styles.textContainer}>

          <h3 className={styles.title}>{repo.name}</h3>
          <p className={styles.description}>{repo.description}</p>
          {/* <span className={styles.stars}>{repo.stargazers_count} Stars</span> */}
            </div>
        </div>
        </li>
      ))}
    </ul>
  );
};

export default RepositoryList;