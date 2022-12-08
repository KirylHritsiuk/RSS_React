import React, { ChangeEvent, useEffect, useState } from 'react';
import { SearchBarProps } from './SearchBar.props';
import { ReactComponent as SearchIcon } from './search.svg';
import { Button, Filter } from 'components';
import styles from './SearchBar.module.css';

export const SearchBar = ({
  updateQuery,
  updateFilter,
  filter,
  checked,
}: SearchBarProps): JSX.Element => {
  const localKey = 'search';
  const [inputValue, setInputValue] = useState<string>(localStorage.getItem(localKey) || '');

  useEffect(() => {
    return () => {
      localStorage.setItem(localKey, inputValue);
    };
  }, [inputValue]);

  const search = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      updateQuery(inputValue);
      e.currentTarget.blur();
    }
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    localStorage.setItem(localKey, e.target.value);
  };

  return (
    <div className={styles.searchBar}>
      <div className={styles.search}>
        <SearchIcon />
        <input
          data-testid="input"
          placeholder="Search..."
          className={styles.searchInput}
          onChange={onInputChange}
          value={inputValue}
          onKeyDown={search}
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
};
