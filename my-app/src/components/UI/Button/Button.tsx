import React from 'react';
import { ButtonProps } from './Button.props';
import cn from 'classnames';
import styles from './Button.module.css';

export class Button extends React.Component<ButtonProps> {
  render() {
    const { className, appearance, children, ...props } = this.props;
    return (
      <button
        className={cn(styles.button, className, {
          [styles.primary]: appearance === 'primary',
          [styles.ghost]: appearance === 'ghost',
        })}
        {...props}
      >
        {children}
      </button>
    );
  }
}
