import React from 'react';
import styles from './Input.module.css';
import cn from 'classnames';
import { InputProps } from './Input.props';
import { Htag } from 'components/Htag/Htag';

export class Input extends React.Component<InputProps> {
  render() {
    const { name, className, errorMessage, error, isDirty, reference, onChange, label, ...props } =
      this.props;
    return (
      <div className={cn(styles.inputWrapper, className)}>
        <label htmlFor={name}>
          {label && <Htag tag="h3">{label}</Htag>}
          <input
            className={cn(styles.input, {
              [styles.error]: !error && isDirty,
            })}
            {...props}
            name={name}
            id={name}
            ref={reference}
            onChange={onChange}
          />
        </label>
        {!error && isDirty && <span className={styles.errorMessage}>{errorMessage}</span>}
      </div>
    );
  }
}
