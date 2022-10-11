import React from 'react';
import styles from './Select.module.css';
import cn from 'classnames';
import { SelectProps, SelectState } from './Select.props';

export class Select extends React.Component<SelectProps, SelectState> {
  constructor(props: SelectProps) {
    super(props);
    this.state = {
      error: false,
    };
  }
  render() {
    const { name, className, errorMessage, reference, onChange, options, ...props } = this.props;
    return (
      <div
        className={cn(styles.inputWrapper, {
          [styles.error]: this.state.error,
        })}
      >
        <select
          className={cn(styles.select, className)}
          name={name}
          defaultValue={0}
          ref={reference}
          onChange={onChange}
          {...props}
        >
          {options.map((item, index) => {
            if (index === this.props.defaultValue) {
              return (
                <option key={item} value={index} disabled>
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
        {this.state.error && <span className={styles.errorMessage}>{errorMessage}</span>}
      </div>
    );
  }
}
