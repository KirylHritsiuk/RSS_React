import React, { ChangeEvent } from 'react';
import { SearchBarProps } from './SearchBar.props';
import { ReactComponent as SearchIcon } from './search.svg';
import { Button, Filter } from 'components';
import styles from './SearchBar.module.css';

export class SearchBar extends React.Component<SearchBarProps> {
  state = {
    inputValue: localStorage.getItem('search') || '',
    filter: '',
  };

  componentDidMount(): void {
    const inputValue = this.state.inputValue;
    this.setState((prevState) => ({ ...prevState, inputValue }));
    this.props.updateQuery(this.state.inputValue);
  }

  componentWillUnmount(): void {
    localStorage.setItem('search', this.state.inputValue);
  }

  onInputChange(e: ChangeEvent<HTMLInputElement>) {
    this.setState((prevState) => ({ ...prevState, inputValue: e.target.value }));
    localStorage.setItem('search', e.target.value);
  }

  search = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      this.props.updateQuery(this.state.inputValue);
      e.currentTarget.blur();
    }
  };

  render(): React.ReactNode {
    const { inputValue } = this.state;
    const { updateQuery, updateFilter, filter, checked } = this.props;
    return (
      <div className={styles.searchBar}>
        <div className={styles.search}>
          <SearchIcon />
          <input
            data-testid="input"
            placeholder="Search..."
            className={styles.searchInput}
            onChange={(e) => this.onInputChange(e)}
            value={inputValue}
            onKeyDown={(e) => this.search(e)}
          />
          <Button
            appearance="primary"
            className={styles.searchButton}
            onClick={() => updateQuery(inputValue)}
          >
            Search
          </Button>
        </div>
        <Filter
          className={styles.filter}
          names={filter}
          checked={checked}
          updateFilter={updateFilter}
        />
      </div>
    );
  }
}
