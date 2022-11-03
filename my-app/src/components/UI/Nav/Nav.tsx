import styles from './Nav.module.css';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import { useCategory } from 'Hook/useCategory';
import { getCardById } from 'pages/Details/helpers/getCardById';
import { reset } from 'store/slices/Home/HomeSlice';

export const Nav = () => {
  const { params, state, dispatch } = useCategory();
  const card = getCardById(params, state);
  const setActive = ({ isActive }: { isActive: boolean }) => {
    return isActive ? cn(styles.link, styles.activeLink) : styles.link;
  };

  return (
    <nav>
      <ul className={styles.menu}>
        {params.id && (
          <li>
            <NavLink className={setActive} to={`/${params.category}/${params.id}`}>
              {card?.name}
            </NavLink>
          </li>
        )}
        {state.category && (
          <li>
            <NavLink className={setActive} to={`/${state.category}`}>
              {state.category}
            </NavLink>
          </li>
        )}
        <li>
          <NavLink className={setActive} end to="/" onClick={() => dispatch(reset())}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={setActive} to="/form">
            Form
          </NavLink>
        </li>
        <li>
          <NavLink className={setActive} to="/about">
            About Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
