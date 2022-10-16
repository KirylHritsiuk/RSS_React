import { CardList } from 'components';
import { SearchBar } from 'components';
import React from 'react';
import styles from './Home.module.css';

class Home extends React.Component {
  render() {
    return (
      <div className={styles.home} data-testid="home-page">
        <SearchBar />
        <CardList />
      </div>
    );
  }
}

export default Home;
