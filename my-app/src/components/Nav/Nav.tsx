import React from 'react';
import styles from './Nav.module.css';
import { NavProps } from './Nav.props';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

export class Nav extends React.Component<NavProps> {
  setActive({ isActive }: { isActive: boolean }) {
    return isActive ? cn(styles.link, styles.activeLink) : styles.link;
  }

  render() {
    return (
      <nav className={styles.menu}>
        <NavLink className={this.setActive} end to="/" data-testId="home-link">
          Home
        </NavLink>
        <NavLink className={this.setActive} to="/about" data-testId="about-link">
          About
        </NavLink>
        <NavLink className={this.setActive} to="/404" data-testId="404-link">
          404
        </NavLink>
      </nav>
    );
  }
}
