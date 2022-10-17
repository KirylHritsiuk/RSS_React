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
      url: 'https://rickandmortyapi.com/api/character/',
      query: '',
    };
  }

  updateQuery = (query: string) => {
    this.setState((prevState) => ({ ...prevState, query }));
  };

  render() {
    const { url, query } = this.state;
    return (
      <div className={styles.home} data-testid="home-page">
        <SearchBar updateQuery={this.updateQuery} />
        <CardList url={url} query={query} />
      </div>
    );
  }
}

export default Home;
