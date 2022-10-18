import { CardList } from 'components';
import { SearchBar } from 'components';
import React from 'react';
import styles from './Home.module.css';
import { HomeProps } from './Home.props';
import { HomeState } from './Home.state';

class Home extends React.Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      url: 'https://rickandmortyapi.com/api/',
      query: '/' + (localStorage.getItem('search') || ''),
      category: 'character',
    };
  }

  updateQuery = (query: string) => {
    this.setState((prevState) => ({ ...prevState, query: '/' + query.trim() }));
  };

  updateFilter = (category: string) => {
    this.setState((prevState) => ({ ...prevState, category }));
  };

  render() {
    const { url, category, query } = this.state;
    return (
      <div className={styles.home} data-testid="home-page">
        <SearchBar
          updateQuery={this.updateQuery}
          updateFilter={this.updateFilter}
          filter={['character', 'location', 'episode']}
          checked={'character'}
        />
        <CardList url={url + category + query} />
      </div>
    );
  }
}

export default Home;
