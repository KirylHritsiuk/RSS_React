import React, { ForwardedRef, forwardRef } from 'react';
import styles from './Input.module.css';
import cn from 'classnames';
import { InputProps } from './Input.props';
import { Htag } from 'components/UI/Htag/Htag';

export const Input = forwardRef(
  (
    { className, error, onChange, name, label, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className={cn(styles.inputWrapper, className)}>
        <label htmlFor={name}>
          {label && <Htag tag="h3">{label}</Htag>}
          <input
            className={cn(styles.input, {
              [styles.error]: error,
            })}
            {...props}
            name={name}
            id={name}
            ref={ref}
            onChange={onChange}
          />
        </label>
        {error && (
          <span className={styles.errorMessage} data-testid="errorMessage">
            {error.message}
          </span>
        )}
      </div>
    );
  }
);
