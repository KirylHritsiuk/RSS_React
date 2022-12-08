import { SearchBarProps } from './SearchBar.props';
import { ReactComponent as SearchIcon } from './search.svg';
import { Button, Filter } from 'components';
import styles from './SearchBar.module.css';
import { useSearch } from 'Hook/useSearch';
import { useUpdateFilter } from 'Hook/useUpdateFilter';

export const SearchBar = ({}: SearchBarProps): JSX.Element => {
  const { search, onInputChange, onSearch, updateQuery } = useSearch();
  const { state, updateFilter, category } = useUpdateFilter();

  return (
    <div className={styles.searchBar}>
      <div className={styles.search}>
        <SearchIcon />
        <input
          type="search"
          placeholder="Search..."
          className={styles.searchInput}
          onChange={onInputChange}
          value={search}
          onKeyDown={onSearch}
        />
        <Button appearance="primary" className={styles.searchButton} onClick={updateQuery}>
          Search
        </Button>
      </div>
      {category === 'character' && (
        <div className={styles.filter}>
          <Filter
            className={styles.gender}
            label="gender"
            names={['All', 'Male', 'Female', 'Genderless', 'unknown']}
            type={'radio'}
            checked={state.filter.gender}
            updateFilter={(e) => updateFilter(e, 'gender')}
          />
          <Filter
            className={styles.status}
            label="status"
            names={['All', 'Dead', 'Alive', 'unknown']}
            type={'radio'}
            checked={state.filter.status}
            updateFilter={(e) => updateFilter(e, 'status')}
          />
        </div>
      )}
    </div>
  );
};
