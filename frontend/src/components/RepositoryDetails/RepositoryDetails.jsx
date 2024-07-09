//component to display the repo details

import React from 'react';
import styles from './RepositoryDetails.module.css';

const RepositoryDetails = ({ repo, onBack }) => {
  return (
    <div className={styles.details}>
      {/* <h2 className={styles.title}>{repo.name}</h2>
      <p className={styles.description}>{repo.description}</p> */}
      <div className={styles.wrapper}>
        <div className={styles.left}>

    <div className={styles.imgContainer}>
    <img src={repo.owner.avatar_url} alt="img" className={styles.image}/>
    </div>
        <div className={styles.left}>
            <h4>Verified by GitHub</h4>
           <p> Github confirms that this app meets the<span className={styles.blue}> requirements for verification</span></p>
        </div>
        <span>Categories</span>
        <div className={styles.categories}>
            {
                repo.topics.map((topic, index) => (
                    <span key={index} className={styles.topic}>{topic}</span>
                ))
            }

        </div>
        </div>
    <div className={styles.right}>
            <div>
                <p>Application</p>
                <h2>{repo.name}</h2>
                <button className={styles.greenButton}> Set up a plan</button>
                <p>{repo.description}</p>
            </div>
      <p className={styles.info}>Stars: {repo.stargazers_count}</p>
      <p className={styles.info}>Forks: {repo.forks_count}</p>
      <p className={styles.info}>Language: {repo.language}</p>
    </div>
      </div>
      <button className={styles.backButton} onClick={onBack}>Back to Repository List</button>
    </div>
  );
};

export default RepositoryDetails;