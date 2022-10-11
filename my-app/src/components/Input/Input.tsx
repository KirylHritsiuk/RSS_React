import React from 'react';
import styles from './Input.module.css';
import cn from 'classnames';
import { InputProps, InputState } from './Input.props';
import { Htag } from 'components/Htag/Htag';

export class Input extends React.Component<InputProps, InputState> {
  constructor(props: InputProps) {
    super(props);
    this.state = {
      error: false,
    };
  }
  render() {
    const { name, className, errorMessage, reference, onChange, label, ...props } = this.props;
    return (
      <div className={cn(styles.inputWrapper, className)}>
        <label htmlFor={name}>
          {label && <Htag tag="h3">{label}</Htag>}
          <input
            className={cn(styles.input, {
              [styles.error]: this.state.error,
            })}
            {...props}
            name={name}
            id={name}
            ref={reference}
            onChange={onChange}
          />
        </label>
        {this.state.error && <span className={styles.errorMessage}>{errorMessage}</span>}
      </div>
    );
  }
}
