import React, { ChangeEvent } from 'react';
import { SearchBarProps } from './SearchBar.props';
import { ReactComponent as SearchIcon } from './search.svg';
import { Button } from 'components';
import { Filter } from 'components';
import styles from './SearchBar.module.css';

export class SearchBar extends React.Component<SearchBarProps> {
  state = {
    inputValue: '',
  };

  componentDidMount(): void {
    const inputValue = localStorage.getItem('search') || '';
    this.setState({ inputValue });
  }

  componentWillUnmount(): void {
    localStorage.setItem('search', this.state.inputValue);
    console.log('willUnmount');
  }

  onInputChange(e: ChangeEvent<HTMLInputElement>) {
    this.setState({ inputValue: e.target.value });
  }

  render(): React.ReactNode {
    const { inputValue } = this.state;
    return (
      <div className={styles.searchBar}>
        <div className={styles.search}>
          <SearchIcon />
          <input
            data-testId="input"
            placeholder="Search..."
            className={styles.searchInput}
            onChange={(e) => this.onInputChange(e)}
            value={inputValue}
          />
          <Button appearance="primary" className={styles.searchButton}>
            Search
          </Button>
        </div>
        <Filter className={styles.filter} names={['gaming', 'professional']} />
      </div>
    );
  }
}
