import React from 'react';
import styles from './Footer.module.css';
import { FooterProps } from './Footer.props';

class Footer extends React.Component<FooterProps> {
  render(): React.ReactNode {
    return <footer className={styles.footer}>2022</footer>;
  }
}

export default Footer;
