import React from 'react';
import styles from './Filter.module.css';
import { FilterProps } from './Filter.props';
import cn from 'classnames';

class Filter extends React.Component<FilterProps> {
  render() {
    return (
      <div className={cn(styles.filter, this.props.className)}>
        {this.props.names.map((name) => (
          <div className={styles.item} key={name}>
            <input type="checkbox" name={name} id={name} />
            <label htmlFor={name}>{name}</label>
          </div>
        ))}
      </div>
    );
  }
}

export default Filter;
