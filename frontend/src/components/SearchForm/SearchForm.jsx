//starting input form 

import React, { useState } from 'react';
import styles from './SearchForm.module.css';

const SearchForm = ({ onSubmit }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(username);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
      />
      <button className={styles.button} type="submit">Search</button>
    </form>
  );
};

export default SearchForm;