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
      <nav>
        <ul className={styles.menu}>
          <li>
            <NavLink className={this.setActive} end to="/" data-testid="home-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={this.setActive} to="/Form" data-testid="form-link">
              Form
            </NavLink>
          </li>
          <li>
            <NavLink className={this.setActive} to="/about" data-testid="about-link">
              About Us
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
