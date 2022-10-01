import React, { ChangeEvent } from 'react';
import { SearchBarProps } from './SearchBar.props';
import styles from './SearchBar.module.css';
import SearchIcon from './SearchIcon/SearchIcon';
import Button from 'components/Button/Button';
import Filter from 'components/Filter/Filter';

class SearchBar extends React.Component<SearchBarProps> {
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
        {/* <div className={styles.filter}>
          <input type="checkbox" name="gaming" id="gaming" />
          <label htmlFor="gaming">gaming</label>
          <input type="checkbox" name="professional" id="pro" />
          <label htmlFor="pro">professional</label>
        </div> */}
      </div>
    );
  }
}

export default SearchBar;
