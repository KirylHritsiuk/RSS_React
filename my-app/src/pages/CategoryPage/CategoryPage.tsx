import { CardList, SearchBar } from 'components';
import styles from './CategoryPage.module.css';

const CategoryPage = () => {
  return (
    <div className={styles.main}>
      <SearchBar />
      <CardList />
    </div>
  );
};

export default CategoryPage;
