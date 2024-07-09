import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import HomePage from './pages/HomePage/HomePage';
import styles from './App.module.css';

const App = () => {
  return (
    //wrapping provider for global store
    <Provider store={store}>
      <div className={styles.app}>
        <HomePage />
      </div>
    </Provider>
  );
};

export default App;