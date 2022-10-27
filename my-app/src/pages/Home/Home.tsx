import { Htag } from 'components';
import { HomeContext } from 'context/home/HomeContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { HomeProps } from './Home.props';

export const Home = ({}: HomeProps): JSX.Element => {
  const state = useContext(HomeContext);

  return (
    <nav className={styles.home}>
      <ul className={styles.menu}>
        <li>
          <Link
            to="/character"
            onClick={() => state.setCategory('character')}
            className={styles.link}
          >
            <div>
              <img
                src="https://pyxis.nymag.com/v1/imgs/024/fd8/68bb21bc76b37b97909ac349b9fc84d307-28-rick-and-morty-pilot.rsquare.w330.jpg"
                alt="character"
              />
              <Htag tag="h2">Characters</Htag>
            </div>
          </Link>
        </li>
        <li>
          <Link
            to="/location"
            onClick={() => state.setCategory('location')}
            className={styles.link}
          >
            <div>
              <img
                src="https://eagleeye.news/wp-content/uploads/2017/10/rick-and-morty-e1507831459637.jpg"
                alt="character"
              />
              <Htag tag="h2">Locations</Htag>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/episode" onClick={() => state.setCategory('episode')} className={styles.link}>
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTufycE13J1_pWIcvIJtf-AAJIbXllCaWpaCQ&usqp=CAU"
                alt="character"
              />
              <Htag tag="h2">Episodes</Htag>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Home;
