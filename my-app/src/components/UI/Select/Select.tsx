import React, { ForwardedRef, forwardRef } from 'react';
import styles from './Select.module.css';
import cn from 'classnames';
import { SelectProps } from './Select.props';

export const Select = forwardRef(
  (
    { name, className, error, onChange, options, valueDisabled, ...props }: SelectProps,
    ref: ForwardedRef<HTMLSelectElement>
  ) => {
    return (
      <div
        className={cn(styles.inputWrapper, {
          [styles.error]: error,
        })}
      >
        <select
          className={cn(styles.select, className)}
          name={name}
          ref={ref}
          onChange={onChange}
          {...props}
        >
          {options.map((item, index) => {
            if (index === props.defaultValue && valueDisabled) {
              return (
                <option key={item} value={index} disabled>
                  {item}
                </option>
              );
            } else if (index === props.defaultValue) {
              return (
                <option key={item} value={index}>
                  {item}
                </option>
              );
            }
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </select>
        {error && <span className={styles.errorMessage}>{error.message}</span>}
      </div>
    );
  }
);
