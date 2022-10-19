import { CardList } from 'components';
import { SearchBar } from 'components';
import React, { useState } from 'react';
import styles from './Home.module.css';
import { HomeProps } from './Home.props';
import { HomeState } from './Home.state';

export const Home = ({}: HomeProps): JSX.Element => {
  const [data, setData] = useState<HomeState>({
    url: 'https://rickandmortyapi.com/api/',
    query: '/' + (localStorage.getItem('search') || ''),
    category: 'character',
  });
  const updateQuery = (query: string) => {
    setData((prevState) => ({ ...prevState, query: '/' + query.trim() }));
  };

  const updateFilter = (category: string) => {
    setData((prevState) => ({ ...prevState, category }));
  };

  return (
    <div className={styles.home} data-testid="home-page">
      <SearchBar
        updateQuery={updateQuery}
        updateFilter={updateFilter}
        filter={['character', 'location', 'episode']}
        checked={'character'}
      />
      <CardList url={data.url + data.category + data.query} />
    </div>
  );
};
