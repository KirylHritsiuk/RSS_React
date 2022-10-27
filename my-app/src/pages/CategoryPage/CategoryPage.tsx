import { CardList, SearchBar } from 'components';
import { GlobalState } from 'context';
import { HomeContext } from 'context/home/HomeContext';
import { HomeState } from 'pages/Home/Home.state';
import { Category } from 'context/home/HomeContext';
import { useContext, useEffect, useState } from 'react';
import { NavLink, Outlet, useLoaderData, useParams } from 'react-router-dom';
import styles from './CategoryPage.module.css';

const CategoryPage = () => {
  const category = useContext(HomeContext);
  const br = useParams();
  console.log('render');

  useEffect(() => {
    category.setCategory(br.category as Category);
    console.log('useEffect');
  }, []);

  const [data, setData] = useState<HomeState>({
    url: 'https://rickandmortyapi.com/api/',
    query: '/' + (localStorage.getItem('search') || ''),
  });

  const updateQuery = (query: string) => {
    setData((prevState) => ({ ...prevState, query: '/' + query.trim() }));
  };

  const updateFilter = (category: string) => {
    setData((prevState) => ({ ...prevState, category }));
  };

  return (
    <div className={styles.main}>
      <SearchBar
        updateQuery={updateQuery}
        updateFilter={updateFilter}
        filter={['character', 'location', 'episode']}
        checked={br.category as Category}
      />
      <CardList url={data.url + br.category + data.query} />
    </div>
  );
};

export default CategoryPage;
