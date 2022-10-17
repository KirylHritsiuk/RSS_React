import React from 'react';
import styles from './Filter.module.css';
import { FilterProps } from './Filter.props';
import cn from 'classnames';

export class Filter extends React.Component<FilterProps> {
  render() {
    return (
      <div className={cn(styles.filter, this.props.className)}>
        {this.props.names.map((name) => (
          <label className={styles.item} htmlFor={name} key={name}>
            <input
              type="radio"
              defaultChecked={name === this.props.checked ? true : false}
              name="filter"
              value={name}
              id={name}
              data-testid={name}
            />
            {name}
          </label>
        ))}
      </div>
    );
  }
}
