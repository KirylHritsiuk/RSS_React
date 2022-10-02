import React from 'react';
import styles from './Htag.module.css';
import { HtagProps } from './Htag.props';
import cn from 'classnames';

export class Htag extends React.Component<HtagProps> {
  render() {
    switch (this.props.tag) {
      case 'h1':
        return <h1 className={cn(styles.h1, this.props.className)}>{this.props.children}</h1>;
      case 'h2':
        return <h2 className={cn(styles.h2, this.props.className)}>{this.props.children}</h2>;
      case 'h3':
        return <h3 className={cn(styles.h3, this.props.className)}>{this.props.children}</h3>;
      default:
        return <></>;
    }
  }
}
