import React, { useContext } from 'react';
import styles from './Nav.module.css';
import cn from 'classnames';
import { NavLink, useParams } from 'react-router-dom';
import { HomeContext } from 'context/home/HomeContext';

export const Nav = () => {
  const use = useParams();
  const state = useContext(HomeContext);
  console.log(use);
  const setActive = ({ isActive }: { isActive: boolean }) => {
    return isActive ? cn(styles.link, styles.activeLink) : styles.link;
  };

  return (
    <nav>
      <ul className={styles.menu}>
        {use.id && (
          <li>
            <NavLink className={setActive} to={`/${state.category}/${use.id}`}>
              {use.id}
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
          <NavLink className={setActive} end to="/" onClick={() => state.setCategory(null)}>
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
