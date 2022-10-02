import { CardList } from 'components';
import { SearchBar } from 'components';
import { CATALOG } from 'dataBase/catalog';
import React from 'react';
import styles from './Home.module.css';

class Home extends React.Component {
  render() {
    return (
      <div className={styles.home} data-testId="home-page">
        <SearchBar />
        <CardList catalog={CATALOG} />
      </div>
    );
  }
}

export default Home;
