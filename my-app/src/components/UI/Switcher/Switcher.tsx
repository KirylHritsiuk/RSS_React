import React from 'react';
import { Htag } from 'components';
import styles from './Switcher.module.css';
import { SwitcherProps } from './Switcher.props';

export class Switcher extends React.Component<SwitcherProps> {
  render() {
    const { name, reference, onChange, tabIndex } = this.props;
    return (
      <div className={styles.switcher}>
        <Htag tag="h3">Male</Htag>
        <input
          className={styles.checkbox}
          id={`switcher`}
          type="checkbox"
          name={name}
          ref={reference}
          onChange={onChange}
          {...this.props}
        />
        <label tabIndex={tabIndex} className={styles.label} htmlFor={`switcher`}>
          <span className={styles.button} />
        </label>
        <Htag tag="h3">Female</Htag>
      </div>
    );
  }
}
