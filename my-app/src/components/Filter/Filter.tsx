import React from 'react';
import styles from './Filter.module.css';
import { FilterProps } from './Filter.props';
import cn from 'classnames';

export class Filter extends React.Component<FilterProps> {
  render() {
    return (
      <div className={cn(styles.filter, this.props.className)} data-testId="filter">
        {this.props.names.map((name) => (
          <div className={styles.item} key={name}>
            <input type="checkbox" name={name} id={name} data-testId={name} />
            <label htmlFor={name}>{name}</label>
          </div>
        ))}
      </div>
    );
  }
}
