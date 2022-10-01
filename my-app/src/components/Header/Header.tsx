import Htag from 'components/Htag/Htag';
import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderProps } from './Header.props';
import styles from './Header.module.css';

class Header extends React.Component<HeaderProps> {
  render(): React.ReactNode {
    return (
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <Htag tag="h1">Task#1: React.Components</Htag>
          <div className={styles.menu}>
            <Link className={styles.link} to="/">
              Home
            </Link>
            <Link className={styles.link} to="about">
              About
            </Link>
            <Link className={styles.link} to="404">
              404
            </Link>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
