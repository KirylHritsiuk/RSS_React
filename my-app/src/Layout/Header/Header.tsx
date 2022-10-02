import React from 'react';
import { Htag, Nav } from '../../components';
import { HeaderProps } from './Header.props';
import styles from './Header.module.css';

export class Header extends React.Component<HeaderProps> {
  render(): React.ReactNode {
    return (
      <header className={styles.header} data-testId="header">
        <Htag tag="h1" data-testId="title">
          Task#1: React.Components
        </Htag>
        <Nav />
      </header>
    );
  }
}
