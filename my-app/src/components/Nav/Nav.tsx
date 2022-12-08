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
        <NavLink className={this.setActive} end to="/" data-testid="home-link">
          Home
        </NavLink>
        <NavLink className={this.setActive} to="/about" data-testid="about-link">
          About Us
        </NavLink>
      </nav>
    );
  }
}
