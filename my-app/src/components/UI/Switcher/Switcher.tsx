import React, { ForwardedRef, forwardRef } from 'react';
import { Htag } from 'components';
import styles from './Switcher.module.css';
import { SwitcherProps } from './Switcher.props';

export const Switcher = forwardRef(
  ({ name, onChange, tabIndex, ...props }: SwitcherProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <div className={styles.switcher}>
        <Htag tag="h3">Male</Htag>
        <input
          className={styles.checkbox}
          id={`switcher`}
          type="checkbox"
          name={name}
          ref={ref}
          onChange={onChange}
          {...props}
        />
        <label tabIndex={tabIndex} className={styles.label} htmlFor={`switcher`}>
          <span className={styles.button} />
        </label>
        <Htag tag="h3">Female</Htag>
      </div>
    );
  }
);
