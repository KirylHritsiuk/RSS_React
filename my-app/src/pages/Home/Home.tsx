import CardList from 'components/CardList/CardList';
import SearchBar from 'components/SearchBar/SearchBar';
import { CATALOG } from 'dataBase/catalog';
import React from 'react';
import styles from './Home.module.css';

class Home extends React.Component {
  render() {
    return (
      <div className={styles.home}>
        <SearchBar />
        <CardList catalog={CATALOG} />
      </div>
    );
  }
}

export default Home;
