import { SearchBarProps } from './SearchBar.props';
import { ReactComponent as SearchIcon } from './search.svg';
import { Button, Filter } from 'components';
import styles from './SearchBar.module.css';
import { useSearch } from 'Hook/useSearch';

export const SearchBar = ({
  updateQuery,
  updateFilter,
  filter,
  checked,
}: SearchBarProps): JSX.Element => {
  const { search, onInputChange, onSearch } = useSearch(updateQuery);
  console.log('search render');
  return (
    <div className={styles.searchBar}>
      <div className={styles.search}>
        <SearchIcon />
        <input
          type="search"
          data-testid="input"
          placeholder="Search..."
          className={styles.searchInput}
          onChange={onInputChange}
          value={search}
          onKeyDown={onSearch}
        />
        <Button
          appearance="primary"
          className={styles.searchButton}
          onClick={() => updateQuery(search)}
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
