import { Htag } from 'components';
import { category } from 'interfaces/API';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { HomeProps } from './Home.props';

const links: { link: category; card: string }[] = [
  { link: 'character', card: 'characters' },
  { link: 'location', card: 'locations' },
  { link: 'episode', card: 'episodes' },
];

export const Home = ({}: HomeProps): JSX.Element => {
  return (
    <nav className={styles.home}>
      <ul className={styles.menu}>
        {links.map((data) => (
          <li key={data.link}>
            <Link to={`/${data.link}`} className={styles.link}>
              <div>
                <img src={`./img/${data.card}.jpg`} alt={`${data.card}`} />
                <Htag tag="h2">{data.card}</Htag>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Home;
